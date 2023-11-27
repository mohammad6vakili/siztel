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

const AccountsNew = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Breadcrumbs title="New Account" data={[{ title: "New Account" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/admin/accounts");
          toast.success("Successfully Created!");
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Account Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row>
              {/* Account */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Account
                </Label>
                <Input id="Account" name="Account" />
              </Col>
              {/* Tenant */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Tenant
                </Label>
                <Input id="Tenant" name="Tenant" />
              </Col>
              {/* ActionPlansOverwrite */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ActionPlansOverwrite">
                  ActionPlansOverwrite
                </Label>
                <Input id="ActionPlansOverwrite" name="ActionPlansOverwrite" />
              </Col>
              {/* ActionTriggerOverwrite */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ActionTriggerOverwrite">
                  ActionTriggerOverwrite
                </Label>
                <Input
                  id="ActionTriggerOverwrite"
                  name="ActionTriggerOverwrite"
                />
              </Col>
              {/* ReloadScheduler */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ReloadScheduler">
                  ReloadScheduler
                </Label>
                <Input id="ReloadScheduler" name="ReloadScheduler" />
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
export default AccountsNew;
