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
import { setSlots } from "../../../../redux/rating_plans_slice";
import useRatingPlans from "../../../../hooks/use_rating_plans";

const RatingPlansNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();

  const { createRatingPlanController, loadings } = useRatingPlans();

  const [slotFormData, setSlotFormData] = useState({
    DestinationRatesId: "",
    TimingId: "",
    Weight: 0,
  });

  const slots = useSelector((state) => state.ratingPlans.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.DestinationRatesId.length === 0) {
      toast.error("Please enter DestinationRatesId.");
    } else if (slotFormData.TimingId.length === 0) {
      toast.error("Please enter TimingId.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        DestinationRatesId: "",
        TimingId: "",
        Weight: 0,
      });
    }
  };

  useEffect(() => {
    dispatch(setSlots([]));
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        title="New Rating Plan"
        data={[{ title: "New Rating Plan" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createRatingPlanController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Rating Plan Form</CardTitle>
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
                  value={createRatingPlanController.values.TPid}
                  onChange={createRatingPlanController.handleChange}
                  invalid={
                    createRatingPlanController.touched.TPid &&
                    createRatingPlanController.errors.TPid
                  }
                />
                {createRatingPlanController.touched.TPid &&
                createRatingPlanController.errors.TPid ? (
                  <FormFeedback>
                    {createRatingPlanController.errors.TPid}
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
                  value={createRatingPlanController.values.ID}
                  onChange={createRatingPlanController.handleChange}
                  invalid={
                    createRatingPlanController.touched.ID &&
                    createRatingPlanController.errors.ID
                  }
                />
                {createRatingPlanController.touched.ID &&
                createRatingPlanController.errors.ID ? (
                  <FormFeedback>
                    {createRatingPlanController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* RatingPlanBindings */}
            <Row>
              <Col xs="12">
                <CardTitle>Rating Plan Bindings</CardTitle>
              </Col>
              {/* DestinationRatesId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="DestinationRatesId">
                  DestinationRatesId
                </Label>
                <Input
                  value={slotFormData.DestinationRatesId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      DestinationRatesId: e.target.value,
                    })
                  }
                  id="DestinationRatesId"
                  name="DestinationRatesId"
                />
              </Col>
              {/* TimingId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="TimingId">
                  TimingId
                </Label>
                <Input
                  id="TimingId"
                  name="TimingId"
                  value={slotFormData.TimingId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      TimingId: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Weight */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Weight">
                  Weight
                </Label>
                <Input
                  id="Weight"
                  name="Weight"
                  type="number"
                  value={slotFormData.Weight}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Weight: parseFloat(e.target.value),
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
                      No Rating Plan Bindings Added Yet.
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
              loading={loadings.createRatingPlan}
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
export default RatingPlansNew;
