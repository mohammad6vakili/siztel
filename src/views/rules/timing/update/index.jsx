import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import useTiming from "../../../../hooks/use_timing";

const TimingUpdate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { updateTimingController, loadings } = useTiming();

  useEffect(() => {
    let entity_id = searchParams.get("entity_id");
    if (entity_id) {
      toast.success(`You are in update mode for ${entity_id}`);
    } else {
      navigate("/rules/timing");
    }
  }, []);

  return (
    <Fragment>
      <Breadcrumbs title="Update Timing" data={[{ title: "Update Timing" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          updateTimingController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Timing Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row>
              {/* TPid */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="TPid">
                  TPid
                </Label>
                <Input
                  id="TPid"
                  name="TPid"
                  value={updateTimingController.values.TPid}
                  onChange={updateTimingController.handleChange}
                  invalid={
                    updateTimingController.touched.TPid &&
                    updateTimingController.errors.TPid
                  }
                />
                {updateTimingController.touched.TPid &&
                updateTimingController.errors.TPid ? (
                  <FormFeedback>
                    {updateTimingController.errors.TPid}
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
                  value={updateTimingController.values.ID}
                  onChange={updateTimingController.handleChange}
                  invalid={
                    updateTimingController.touched.ID &&
                    updateTimingController.errors.ID
                  }
                />
                {updateTimingController.touched.ID &&
                updateTimingController.errors.ID ? (
                  <FormFeedback>
                    {updateTimingController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* MonthDays */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="MonthDays">
                  MonthDays
                </Label>
                <Input
                  id="MonthDays"
                  name="MonthDays"
                  value={updateTimingController.values.MonthDays}
                  onChange={updateTimingController.handleChange}
                  invalid={
                    updateTimingController.touched.MonthDays &&
                    updateTimingController.errors.MonthDays
                  }
                />
                {updateTimingController.touched.MonthDays &&
                updateTimingController.errors.MonthDays ? (
                  <FormFeedback>
                    {updateTimingController.errors.MonthDays}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Months */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Months">
                  Months
                </Label>
                <Input
                  id="Months"
                  name="Months"
                  value={updateTimingController.values.Months}
                  onChange={updateTimingController.handleChange}
                  invalid={
                    updateTimingController.touched.Months &&
                    updateTimingController.errors.Months
                  }
                />
                {updateTimingController.touched.Months &&
                updateTimingController.errors.Months ? (
                  <FormFeedback>
                    {updateTimingController.errors.Months}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Time */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Time">
                  Time
                </Label>
                <Input
                  id="Time"
                  name="Time"
                  value={updateTimingController.values.Time}
                  onChange={updateTimingController.handleChange}
                  invalid={
                    updateTimingController.touched.Time &&
                    updateTimingController.errors.Time
                  }
                />
                {updateTimingController.touched.Time &&
                updateTimingController.errors.Time ? (
                  <FormFeedback>
                    {updateTimingController.errors.Time}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* WeekDays */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="WeekDays">
                  WeekDays
                </Label>
                <Input
                  id="WeekDays"
                  name="WeekDays"
                  value={updateTimingController.values.WeekDays}
                  onChange={updateTimingController.handleChange}
                  invalid={
                    updateTimingController.touched.WeekDays &&
                    updateTimingController.errors.WeekDays
                  }
                />
                {updateTimingController.touched.WeekDays &&
                updateTimingController.errors.WeekDays ? (
                  <FormFeedback>
                    {updateTimingController.errors.WeekDays}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Years */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Years">
                  Years
                </Label>
                <Input
                  id="Years"
                  name="Years"
                  value={updateTimingController.values.Years}
                  onChange={updateTimingController.handleChange}
                  invalid={
                    updateTimingController.touched.Years &&
                    updateTimingController.errors.Years
                  }
                />
                {updateTimingController.touched.Years &&
                updateTimingController.errors.Years ? (
                  <FormFeedback>
                    {updateTimingController.errors.Years}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
          </CardBody>
          {/* card footer */}
          <CardFooter className="border-top d-flex justify-content-center">
            {/* submit button */}
            <CustomButton
              loading={loadings.updateTiming}
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
export default TimingUpdate;
