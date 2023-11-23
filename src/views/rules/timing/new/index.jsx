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
} from "reactstrap";
import CustomButton from "../../../../components/button";

const TimingNew = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Breadcrumbs title="New Timing" data={[{ title: "New Timing" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/rules/timing");
          toast.success("Successfully Created!");
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
              {/* TimingId */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  TimingId
                </Label>
                <Input id="TimingId" name="TimingId" />
              </Col>
              {/* Years */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Years
                </Label>
                <Input id="Years" name="Years" />
              </Col>
              {/* Months */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Months
                </Label>
                <Input id="Months" name="Months" />
              </Col>
              {/* MonthDays */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Month days
                </Label>
                <Input id="MonthDays" name="MonthDays" />
              </Col>
              {/* WeekDays */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Week days
                </Label>
                <Input id="WeekDays" name="WeekDays" />
              </Col>
              {/* Time */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Time
                </Label>
                <Input id="Time" name="Time" />
              </Col>
            </Row>
          </CardBody>
          {/* card footer */}
          <CardFooter className="border-top d-flex justify-content-center">
            {/* submit button */}
            <CustomButton
              // loading={loadings.submit}
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
