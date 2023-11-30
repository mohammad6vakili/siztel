import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate } from "react-router-dom";
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

const TimingNew = () => {
  const navigate = useNavigate();
  const { createTimingController, loadings } = useTiming();

  return (
    <Fragment>
      <Breadcrumbs title="New Timing" data={[{ title: "New Timing" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createTimingController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Timing Form</CardTitle>
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
                  value={createTimingController.values.TPid}
                  onChange={createTimingController.handleChange}
                  invalid={
                    createTimingController.touched.TPid &&
                    createTimingController.errors.TPid
                  }
                />
                {createTimingController.touched.TPid &&
                createTimingController.errors.TPid ? (
                  <FormFeedback>
                    {createTimingController.errors.TPid}
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
                  value={createTimingController.values.ID}
                  onChange={createTimingController.handleChange}
                  invalid={
                    createTimingController.touched.ID &&
                    createTimingController.errors.ID
                  }
                />
                {createTimingController.touched.ID &&
                createTimingController.errors.ID ? (
                  <FormFeedback>
                    {createTimingController.errors.ID}
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
                  value={createTimingController.values.MonthDays}
                  onChange={createTimingController.handleChange}
                  invalid={
                    createTimingController.touched.MonthDays &&
                    createTimingController.errors.MonthDays
                  }
                />
                {createTimingController.touched.MonthDays &&
                createTimingController.errors.MonthDays ? (
                  <FormFeedback>
                    {createTimingController.errors.MonthDays}
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
                  value={createTimingController.values.Months}
                  onChange={createTimingController.handleChange}
                  invalid={
                    createTimingController.touched.Months &&
                    createTimingController.errors.Months
                  }
                />
                {createTimingController.touched.Months &&
                createTimingController.errors.Months ? (
                  <FormFeedback>
                    {createTimingController.errors.Months}
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
                  value={createTimingController.values.Time}
                  onChange={createTimingController.handleChange}
                  invalid={
                    createTimingController.touched.Time &&
                    createTimingController.errors.Time
                  }
                />
                {createTimingController.touched.Time &&
                createTimingController.errors.Time ? (
                  <FormFeedback>
                    {createTimingController.errors.Time}
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
                  value={createTimingController.values.WeekDays}
                  onChange={createTimingController.handleChange}
                  invalid={
                    createTimingController.touched.WeekDays &&
                    createTimingController.errors.WeekDays
                  }
                />
                {createTimingController.touched.WeekDays &&
                createTimingController.errors.WeekDays ? (
                  <FormFeedback>
                    {createTimingController.errors.WeekDays}
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
                  value={createTimingController.values.Years}
                  onChange={createTimingController.handleChange}
                  invalid={
                    createTimingController.touched.Years &&
                    createTimingController.errors.Years
                  }
                />
                {createTimingController.touched.Years &&
                createTimingController.errors.Years ? (
                  <FormFeedback>
                    {createTimingController.errors.Years}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
          </CardBody>
          {/* card footer */}
          <CardFooter className="border-top d-flex justify-content-center">
            {/* submit button */}
            <CustomButton
              loading={loadings.createTiming}
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
export default TimingNew;
