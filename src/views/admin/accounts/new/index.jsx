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
import useAccounts from "../../../../hooks/use_accounts";

const AccountsNew = () => {
  const navigate = useNavigate();
  const { createAccountController, loadings } = useAccounts();

  return (
    <Fragment>
      <Breadcrumbs title="New Account" data={[{ title: "New Account" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createAccountController.handleSubmit();
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
                <Input
                  id="Account"
                  name="Account"
                  value={createAccountController.values.Account}
                  onChange={createAccountController.handleChange}
                  invalid={
                    createAccountController.touched.Account &&
                    createAccountController.errors.Account
                  }
                />
                {createAccountController.touched.Account &&
                createAccountController.errors.Account ? (
                  <FormFeedback>
                    {createAccountController.errors.Account}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Tenant */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Tenant
                </Label>
                <Input
                  id="Tenant"
                  name="Tenant"
                  value={createAccountController.values.Tenant}
                  onChange={createAccountController.handleChange}
                  invalid={
                    createAccountController.touched.Tenant &&
                    createAccountController.errors.Tenant
                  }
                />
                {createAccountController.touched.Tenant &&
                createAccountController.errors.Tenant ? (
                  <FormFeedback>
                    {createAccountController.errors.Tenant}
                  </FormFeedback>
                ) : null}
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
