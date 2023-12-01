import { Fragment, useState, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { slots_columns } from "../root/datatable/slots_columns";
import toast from "react-hot-toast";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Form,
  Label,
  CardHeader,
  CardTitle,
  CardFooter,
  FormFeedback,
} from "reactstrap";
import CustomButton from "../../../../components/button";
import { useSkin } from "@hooks/useSkin";
import { useDispatch, useSelector } from "react-redux";
import { setSlots } from "../../../../redux/rates_slice";
import { useNavigate, useSearchParams } from "react-router-dom";
import useRates from "../../../../hooks/use_rates";

const RatesUpdate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { skin } = useSkin();
  const dispatch = useDispatch();

  const { updateRateController, loadings } = useRates();

  const [slotFormData, setSlotFormData] = useState({
    ConnectFee: 0,
    RateUnit: "",
    RateIncrement: "",
    GroupIntervalStart: "",
    Rate: 0,
  });

  const slots = useSelector((state) => state.rates.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.RateUnit.length === 0) {
      toast.error("Please enter RateUnit.");
    } else if (slotFormData.RateIncrement.length === 0) {
      toast.error("Please enter RateIncrement.");
    } else if (slotFormData.GroupIntervalStart.length === 0) {
      toast.error("Please enter GroupIntervalStart.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        ConnectFee: 0,
        RateUnit: "",
        RateIncrement: "",
        GroupIntervalStart: "",
        Rate: 0,
      });
    }
  };
  useEffect(() => {
    let entity_id = searchParams.get("entity_id");
    if (entity_id) {
      toast.success(`You are in update mode for ${entity_id}`);
    } else {
      navigate("/rules/rates");
    }
  }, []);

  return (
    <Fragment>
      <Breadcrumbs title="Update Rate" data={[{ title: "Update Rate" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          updateRateController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Rate Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row className="border-bottom mb-1">
              {/* TPid */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="TPid">
                  TPid
                </Label>
                <Input
                  id="TPid"
                  name="TPid"
                  value={updateRateController.values.TPid}
                  onChange={updateRateController.handleChange}
                  invalid={
                    updateRateController.touched.TPid &&
                    updateRateController.errors.TPid
                  }
                />
                {updateRateController.touched.TPid &&
                updateRateController.errors.TPid ? (
                  <FormFeedback>
                    {updateRateController.errors.TPid}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* ID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ID">
                  ID
                </Label>
                <Input
                  id="ID"
                  name="ID"
                  value={updateRateController.values.ID}
                  onChange={updateRateController.handleChange}
                  invalid={
                    updateRateController.touched.ID &&
                    updateRateController.errors.ID
                  }
                />
                {updateRateController.touched.ID &&
                updateRateController.errors.ID ? (
                  <FormFeedback>{updateRateController.errors.ID}</FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* RateSlots */}
            <Row>
              <Col xs="12">
                <CardTitle>Rate Slots</CardTitle>
              </Col>
              {/* ConnectFee */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="ConnectFee">
                  Connect Fee
                </Label>
                <Input
                  value={slotFormData.ConnectFee}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ConnectFee: e.target.value,
                    })
                  }
                  type="number"
                  id="ConnectFee"
                  name="ConnectFee"
                />
              </Col>
              {/* RateUnit */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="RateUnit">
                  Rate Unit
                </Label>
                <Input
                  id="RateUnit"
                  name="RateUnit"
                  value={slotFormData.RateUnit}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      RateUnit: e.target.value,
                    })
                  }
                />
              </Col>
              {/* RateIncrement */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="RateIncrement">
                  Rate Increment
                </Label>
                <Input
                  id="RateIncrement"
                  name="RateIncrement"
                  value={slotFormData.RateIncrement}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      RateIncrement: e.target.value,
                    })
                  }
                />
              </Col>
              {/* GroupIntervalStart */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="GroupIntervalStart">
                  Group IntervalStart
                </Label>
                <Input
                  id="GroupIntervalStart"
                  name="GroupIntervalStart"
                  value={slotFormData.GroupIntervalStart}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      GroupIntervalStart: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Rate */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="Rate">
                  Rate
                </Label>
                <Input
                  type="number"
                  id="Rate"
                  name="Rate"
                  value={slotFormData.Rate}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Rate: e.target.value,
                    })
                  }
                />
              </Col>
              {/* add button */}
              <Col
                xs="12"
                sm="6"
                md="2"
                className="mb-1 d-flex align-items-end"
              >
                <CustomButton
                  onClick={handleAddSlot}
                  outline
                  color="primary"
                  type="button"
                >
                  Add
                </CustomButton>
              </Col>
              {/* datatable */}
              <Col xs="12">
                <DataTable
                  noDataComponent={
                    <div style={{ margin: "24px 0" }}>
                      No Rate Slot Added Yet.
                    </div>
                  }
                  noHeader
                  columns={slots_columns}
                  className="react-dataTable"
                  style={{ background: "red" }}
                  sortIcon={<ChevronDown size={10} />}
                  data={slots}
                  theme={skin === "dark" ? "darkTheme" : ""}
                />
              </Col>
            </Row>
          </CardBody>
          {/* card footer */}
          <CardFooter className="border-top d-flex justify-content-center">
            {/* submit button */}
            <CustomButton
              loading={loadings.updateRate}
              type="submit"
              color="primary"
              style={{ minWidth: 150 }}
            >
              Submit
            </CustomButton>
          </CardFooter>
        </Card>
      </Form>
    </Fragment>
  );
};
export default RatesUpdate;
