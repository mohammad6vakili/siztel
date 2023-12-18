import { Fragment, useEffect, useState } from "react";
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
import useRates from "../../../../hooks/use_rates";

const RatesNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();

  const { createRateController, loadings } = useRates();

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
    dispatch(setSlots([]));
  }, []);

  return (
    <Fragment>
      <Breadcrumbs title="New Rate" data={[{ title: "New Rate" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createRateController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Rate Form</CardTitle>
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
                  disabled
                  value={createRateController.values.TPid}
                  onChange={createRateController.handleChange}
                  invalid={
                    createRateController.touched.TPid &&
                    createRateController.errors.TPid
                  }
                />
                {createRateController.touched.TPid &&
                createRateController.errors.TPid ? (
                  <FormFeedback>
                    {createRateController.errors.TPid}
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
                  value={createRateController.values.ID}
                  onChange={createRateController.handleChange}
                  invalid={
                    createRateController.touched.ID &&
                    createRateController.errors.ID
                  }
                />
                {createRateController.touched.ID &&
                createRateController.errors.ID ? (
                  <FormFeedback>{createRateController.errors.ID}</FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* RateSlots */}
            <Row>
              <Col xs="12">
                <CardTitle>Rate Slots</CardTitle>
              </Col>
              {/* ConnectFee */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ConnectFee">
                  Connect Fee
                </Label>
                <Input
                  value={slotFormData.ConnectFee}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ConnectFee: parseFloat(e.target.value),
                    })
                  }
                  type="number"
                  id="ConnectFee"
                  name="ConnectFee"
                />
              </Col>
              {/* RateUnit */}
              <Col xs="12" sm="6" md="3" className="mb-1">
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
              <Col xs="12" sm="6" md="3" className="mb-1">
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
              <Col xs="12" sm="6" md="3" className="mb-1">
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
              <Col xs="12" sm="6" md="3" className="mb-1">
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
                      Rate: parseFloat(e.target.value),
                    })
                  }
                />
              </Col>
              {/* add button */}
              <Col
                xs="12"
                sm="6"
                md="3"
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
              loading={loadings.createRate}
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
export default RatesNew;
