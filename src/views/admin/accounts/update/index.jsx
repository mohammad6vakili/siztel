import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import { useSelector } from "react-redux";
import useAccounts from "../../../../hooks/use_accounts";
import Select from "react-select";
import { selectThemeColors } from "@utils";
import { BALANCE_DATA } from "../../../../constant/balance_data";

const AccountsUpdate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    updateAccountController,
    getActionPlans,
    getActionPlansLoading,
    actionPlans,
    getActionTriggers,
    getActionTriggersLoading,
    actionTriggers,
    getAccountById,
    loadings,
  } = useAccounts();

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    let entity_id = searchParams.get("entity_id");
    if (entity_id) {
      if (selectedTpId) {
        let account_id = entity_id.split(":")[1];
        let tenant_id = entity_id.split(":")[0];
        getAccountById(account_id, tenant_id);
        getActionPlans();
        getActionTriggers();
      }
    } else {
      navigate("/rules/actions");
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Breadcrumbs
        title="Update Account"
        data={[{ title: "Update Account" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          updateAccountController.handleSubmit();
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
                  disabled
                  value={updateAccountController.values.Account}
                  onChange={updateAccountController.handleChange}
                  invalid={
                    updateAccountController.touched.Account &&
                    updateAccountController.errors.Account
                  }
                />
                {updateAccountController.touched.Account &&
                updateAccountController.errors.Account ? (
                  <FormFeedback>
                    {updateAccountController.errors.Account}
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
                  disabled
                  value={updateAccountController.values.Tenant}
                  onChange={updateAccountController.handleChange}
                  invalid={
                    updateAccountController.touched.Tenant &&
                    updateAccountController.errors.Tenant
                  }
                />
                {updateAccountController.touched.Tenant &&
                updateAccountController.errors.Tenant ? (
                  <FormFeedback>
                    {updateAccountController.errors.Tenant}
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
                    updateAccountController.touched.ActionTriggerIDs &&
                    updateAccountController.errors.ActionTriggerIDs
                      ? "form_error"
                      : ""
                  }`}
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  value={updateAccountController.values.ActionTriggerIDs}
                  onChange={(value) => {
                    updateAccountController.setFieldValue(
                      "ActionTriggerIDs",
                      value
                    );
                  }}
                />
                {updateAccountController.touched.ActionTriggerIDs &&
                updateAccountController.errors.ActionTriggerIDs ? (
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
                    updateAccountController.touched.Balances &&
                    updateAccountController.errors.Balances
                      ? "form_error"
                      : ""
                  }`}
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  value={updateAccountController.values.Balances}
                  onChange={(value) => {
                    updateAccountController.setFieldValue("Balances", value);
                  }}
                />
                {updateAccountController.touched.Balances &&
                updateAccountController.errors.Balances ? (
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
export default AccountsUpdate;
