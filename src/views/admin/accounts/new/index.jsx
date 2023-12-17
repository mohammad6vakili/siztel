import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
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
import Select from "react-select";
import { selectThemeColors } from "@utils";
import { BALANCE_DATA } from "../../../../constant/balance_data";
import { useSelector } from "react-redux";

const AccountsNew = () => {
  const {
    getActionPlans,
    getActionTriggers,
    createAccountController,
    actionPlans,
    actionTriggers,
    loadings,
    getActionPlansLoading,
    getActionTriggersLoading,
  } = useAccounts();

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getActionPlans();
      getActionTriggers();
    }
  }, [selectedTpId]);
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
              {/* ActionPlanIDs */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  ActionPlanIDs
                </Label>
                <Select
                  placeholder="Select ActionPlanIDs"
                  isLoading={getActionPlansLoading}
                  isClearable={false}
                  options={actionPlans}
                  className={`react-select ${
                    createAccountController.touched.ActionPlanIDs &&
                    createAccountController.errors.ActionPlanIDs
                      ? "form_error"
                      : ""
                  }`}
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  value={createAccountController.values.ActionPlanIDs}
                  onChange={(value) => {
                    createAccountController.setFieldValue(
                      "ActionPlanIDs",
                      value
                    );
                  }}
                />
                {createAccountController.touched.ActionPlanIDs &&
                createAccountController.errors.ActionPlanIDs ? (
                  <FormFeedback style={{ display: "block" }}>
                    The ActionPlanIDs field is required.
                  </FormFeedback>
                ) : null}
              </Col>
              {/* ActionTriggerIDs */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  ActionTriggerIDs
                </Label>
                <Select
                  placeholder="Select ActionTriggerIDs"
                  isLoading={getActionTriggersLoading}
                  isClearable={false}
                  options={actionTriggers}
                  className={`react-select ${
                    createAccountController.touched.ActionTriggerIDs &&
                    createAccountController.errors.ActionTriggerIDs
                      ? "form_error"
                      : ""
                  }`}
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  value={createAccountController.values.ActionTriggerIDs}
                  onChange={(value) => {
                    createAccountController.setFieldValue(
                      "ActionTriggerIDs",
                      value
                    );
                  }}
                />
                {createAccountController.touched.ActionTriggerIDs &&
                createAccountController.errors.ActionTriggerIDs ? (
                  <FormFeedback style={{ display: "block" }}>
                    The ActionTriggerIDs field is required.
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Balances */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Balances
                </Label>
                <Select
                  placeholder="Select Balances"
                  isClearable={false}
                  options={BALANCE_DATA}
                  isMulti={true}
                  className={`react-select ${
                    createAccountController.touched.Balances &&
                    createAccountController.errors.Balances
                      ? "form_error"
                      : ""
                  }`}
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  value={createAccountController.values.Balances}
                  onChange={(value) => {
                    createAccountController.setFieldValue("Balances", value);
                  }}
                />
                {createAccountController.touched.Balances &&
                createAccountController.errors.Balances ? (
                  <FormFeedback style={{ display: "block" }}>
                    The Balances field is required.
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
          </CardBody>
          {/* card footer */}
          <CardFooter className="border-top d-flex justify-content-center">
            {/* submit button */}
            <CustomButton
              loading={loadings.createAccount || loadings.createBalance}
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
