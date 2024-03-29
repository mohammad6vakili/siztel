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
import { setSlots } from "../../../../redux/destination_rates_slice";
import useDestinationRates from "../../../../hooks/use_destination_rates";

const DestinationRatesNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();

  const { createDestinationRateController, loadings } = useDestinationRates();

  const [slotFormData, setSlotFormData] = useState({
    DestinationId: "",
    RateId: "",
    RoundingMethod: "",
    RoundingDecimals: 0,
    MaxCost: 0,
    MaxCostStrategy: "",
  });

  const slots = useSelector((state) => state.destinationRates.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.DestinationId.length === 0) {
      toast.error("Please enter DestinationId.");
    } else if (slotFormData.RateId.length === 0) {
      toast.error("Please enter RateId.");
    } else if (slotFormData.RoundingMethod.length === 0) {
      toast.error("Please enter RoundingMethod.");
    } else if (slotFormData.MaxCostStrategy.length === 0) {
      toast.error("Please enter MaxCostStrategy.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        DestinationId: "",
        RateId: "",
        RoundingMethod: "",
        RoundingDecimals: 0,
        MaxCost: 0,
        MaxCostStrategy: "",
      });
    }
  };

  useEffect(() => {
    dispatch(setSlots([]));
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        title="New Destination Rate"
        data={[{ title: "New Destination Rate" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createDestinationRateController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Destination Rate Form</CardTitle>
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
                  value={createDestinationRateController.values.TPid}
                  onChange={createDestinationRateController.handleChange}
                  invalid={
                    createDestinationRateController.touched.TPid &&
                    createDestinationRateController.errors.TPid
                  }
                />
                {createDestinationRateController.touched.TPid &&
                createDestinationRateController.errors.TPid ? (
                  <FormFeedback>
                    {createDestinationRateController.errors.TPid}
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
                  value={createDestinationRateController.values.ID}
                  onChange={createDestinationRateController.handleChange}
                  invalid={
                    createDestinationRateController.touched.ID &&
                    createDestinationRateController.errors.ID
                  }
                />
                {createDestinationRateController.touched.ID &&
                createDestinationRateController.errors.ID ? (
                  <FormFeedback>
                    {createDestinationRateController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* slots */}
            <Row>
              <Col xs="12">
                <CardTitle>Destination Rates</CardTitle>
              </Col>
              {/* DestinationId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="DestinationId">
                  DestinationId
                </Label>
                <Input
                  value={slotFormData.DestinationId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      DestinationId: e.target.value,
                    })
                  }
                  id="DestinationId"
                  name="DestinationId"
                />
              </Col>
              {/* RateId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="RateId">
                  RateId
                </Label>
                <Input
                  id="RateId"
                  name="RateId"
                  value={slotFormData.RateId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      RateId: e.target.value,
                    })
                  }
                />
              </Col>
              {/* RoundingMethod */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="RoundingMethod">
                  RoundingMethod
                </Label>
                <Input
                  id="RoundingMethod"
                  name="RoundingMethod"
                  value={slotFormData.RoundingMethod}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      RoundingMethod: e.target.value,
                    })
                  }
                />
              </Col>
              {/* RoundingDecimals */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="RoundingDecimals">
                  RoundingDecimals
                </Label>
                <Input
                  id="RoundingDecimals"
                  name="RoundingDecimals"
                  value={slotFormData.RoundingDecimals}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      RoundingDecimals: parseFloat(e.target.value),
                    })
                  }
                  type="number"
                />
              </Col>
              {/* MaxCost */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="MaxCost">
                  MaxCost
                </Label>
                <Input
                  type="number"
                  id="MaxCost"
                  name="MaxCost"
                  value={slotFormData.MaxCost}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      MaxCost: parseFloat(e.target.value),
                    })
                  }
                />
              </Col>
              {/* MaxCostStrategy */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="MaxCostStrategy">
                  MaxCostStrategy
                </Label>
                <Input
                  id="MaxCostStrategy"
                  name="MaxCostStrategy"
                  value={slotFormData.MaxCostStrategy}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      MaxCostStrategy: e.target.value,
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
                      No Destination Rate Added Yet.
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
              loading={loadings.createDestinationRate}
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
export default DestinationRatesNew;
