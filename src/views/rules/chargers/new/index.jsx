import { Fragment, useState } from "react";
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
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import CustomButton from "../../../../components/button";
import useChargers from "../../../../hooks/use_chargers";
import CustomDatePicker from "../../../../components/datepicker/index";

const ChargersNew = () => {
  const { createChargerController, loadings } = useChargers();

  const [ActivationTime, setActivationTime] = useState(null);
  const [ExpiryTime, setExpiryTime] = useState(null);

  const [FilterIDsValue, setFilterIDsValue] = useState("");
  const [AttributeIDsValue, setAttributeIDsValue] = useState("");

  return (
    <Fragment>
      <Breadcrumbs title="New Charger" data={[{ title: "New Charger" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createChargerController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Charger Form</CardTitle>
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
                  value={createChargerController.values.TPid}
                  onChange={createChargerController.handleChange}
                  invalid={
                    createChargerController.touched.TPid &&
                    createChargerController.errors.TPid
                  }
                />
                {createChargerController.touched.TPid &&
                createChargerController.errors.TPid ? (
                  <FormFeedback>
                    {createChargerController.errors.TPid}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Tenant */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Tenant">
                  Tenant
                </Label>
                <Input
                  id="Tenant"
                  name="Tenant"
                  value={createChargerController.values.Tenant}
                  onChange={createChargerController.handleChange}
                  invalid={
                    createChargerController.touched.Tenant &&
                    createChargerController.errors.Tenant
                  }
                />
                {createChargerController.touched.Tenant &&
                createChargerController.errors.Tenant ? (
                  <FormFeedback>
                    {createChargerController.errors.Tenant}
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
                  value={createChargerController.values.ID}
                  onChange={createChargerController.handleChange}
                  invalid={
                    createChargerController.touched.ID &&
                    createChargerController.errors.ID
                  }
                />
                {createChargerController.touched.ID &&
                createChargerController.errors.ID ? (
                  <FormFeedback>
                    {createChargerController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* ActivationTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ActivationTime">
                  ActivationTime
                </Label>
                <CustomDatePicker
                  inputPlaceholder="Click to open calendar"
                  value={ActivationTime}
                  onChange={(value) => {
                    setActivationTime(value);
                    createChargerController.setFieldValue(
                      "ActivationTime",
                      `${value.year}-${value.month}-${value.day}T00:00:00Z`
                    );
                  }}
                  inputClassName={
                    createChargerController.touched.ActivationTime &&
                    createChargerController.errors.ActivationTime
                      ? "form_error"
                      : ""
                  }
                />
                {createChargerController.touched.ActivationTime &&
                createChargerController.errors.ActivationTime ? (
                  <FormFeedback style={{ display: "block" }}>
                    {createChargerController.errors.ActivationTime}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* ExpiryTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ExpiryTime">
                  ExpiryTime
                </Label>
                <CustomDatePicker
                  inputPlaceholder="Click to open calendar"
                  value={ExpiryTime}
                  onChange={(value) => {
                    setExpiryTime(value);
                    createChargerController.setFieldValue(
                      "ExpiryTime",
                      `${value.year}-${value.month}-${value.day}T00:00:00Z`
                    );
                  }}
                  inputClassName={
                    createChargerController.touched.ExpiryTime &&
                    createChargerController.errors.ExpiryTime
                      ? "form_error"
                      : ""
                  }
                />
                {createChargerController.touched.ExpiryTime &&
                createChargerController.errors.ExpiryTime ? (
                  <FormFeedback style={{ display: "block" }}>
                    {createChargerController.errors.ExpiryTime}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* RunID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="RunID">
                  RunID
                </Label>
                <Input
                  id="RunID"
                  name="RunID"
                  value={createChargerController.values.RunID}
                  onChange={createChargerController.handleChange}
                  invalid={
                    createChargerController.touched.RunID &&
                    createChargerController.errors.RunID
                  }
                />
                {createChargerController.touched.RunID &&
                createChargerController.errors.RunID ? (
                  <FormFeedback>
                    {createChargerController.errors.RunID}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Weight */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Weight">
                  Weight
                </Label>
                <Input
                  type="number"
                  id="Weight"
                  name="Weight"
                  value={createChargerController.values.Weight}
                  onChange={createChargerController.handleChange}
                />
              </Col>
              {/* FilterIDs */}
              <Col xs="12" className="mb-1">
                <Label className="form-label" for="FilterIDs">
                  FilterIDs
                </Label>
                <div className="position-relative d-flex align-items-center">
                  <Input
                    id="FilterIDs"
                    name="FilterIDs"
                    value={FilterIDsValue}
                    onChange={(e) => setFilterIDsValue(e.target.value)}
                    invalid={
                      createChargerController.touched.FilterIDs &&
                      createChargerController.errors.FilterIDs
                    }
                  />
                  <button
                    type="button"
                    style={{
                      right: 35,
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                      width: 30,
                      height: 30,
                      border: "1px solid rgba(200,200,200,.5)",
                      color: "white",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                    className="position-absolute"
                    onClick={() => {
                      if (FilterIDsValue.length === 0) {
                        toast.error("Enter Filter ID value.");
                      } else {
                        let array = [
                          ...createChargerController.values.FilterIDs,
                        ];
                        array.push(FilterIDsValue);
                        createChargerController.setFieldValue(
                          "FilterIDs",
                          array
                        );
                        setFilterIDsValue("");
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                {createChargerController.touched.FilterIDs &&
                createChargerController.errors.FilterIDs ? (
                  <FormFeedback style={{ display: "block" }}>
                    {createChargerController.errors.FilterIDs}
                  </FormFeedback>
                ) : null}
              </Col>
              {createChargerController.values.FilterIDs.map((item, index) => (
                <Col xs="12" className="mb-1 d-flex align-items-center">
                  <span>{index + 1} -</span>
                  <span>{item}</span>
                  <button
                    type="button"
                    style={{
                      background: "transparent",
                      border: "none",
                      marginLeft: "auto",
                    }}
                    onClick={() => {
                      let array = [...createChargerController.values.FilterIDs];
                      array = array.filter((intem, i) => i !== index);
                      createChargerController.setFieldValue("FilterIDs", array);
                    }}
                  >
                    <IoMdClose style={{ fontSize: 14, color: "red" }} />
                  </button>
                </Col>
              ))}
              {/* AttributeIDs */}
              <Col xs="12" className="mb-1">
                <Label className="form-label" for="AttributeIDs">
                  AttributeIDs
                </Label>
                <div className="position-relative d-flex align-items-center">
                  <Input
                    id="AttributeIDs"
                    name="AttributeIDs"
                    value={AttributeIDsValue}
                    onChange={(e) => setAttributeIDsValue(e.target.value)}
                    invalid={
                      createChargerController.touched.AttributeIDs &&
                      createChargerController.errors.AttributeIDs
                    }
                  />
                  <button
                    type="button"
                    style={{
                      right: 35,
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                      width: 30,
                      height: 30,
                      border: "1px solid rgba(200,200,200,.5)",
                      color: "white",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                    className="position-absolute"
                    onClick={() => {
                      if (AttributeIDsValue.length === 0) {
                        toast.error("Enter Attribute Id value.");
                      } else {
                        let array = [
                          ...createChargerController.values.AttributeIDs,
                        ];
                        array.push(AttributeIDsValue);
                        createChargerController.setFieldValue(
                          "AttributeIDs",
                          array
                        );
                        setAttributeIDsValue("");
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                {createChargerController.touched.AttributeIDs &&
                createChargerController.errors.AttributeIDs ? (
                  <FormFeedback style={{ display: "block" }}>
                    {createChargerController.errors.AttributeIDs}
                  </FormFeedback>
                ) : null}
              </Col>
              {createChargerController.values.AttributeIDs.map(
                (item, index) => (
                  <Col xs="12" className="mb-1 d-flex align-items-center">
                    <span>{index + 1} -</span>
                    <span>{item}</span>
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "none",
                        marginLeft: "auto",
                      }}
                      onClick={() => {
                        let array = [
                          ...createChargerController.values.AttributeIDs,
                        ];
                        array = array.filter((intem, i) => i !== index);
                        createChargerController.setFieldValue(
                          "AttributeIDs",
                          array
                        );
                      }}
                    >
                      <IoMdClose style={{ fontSize: 14, color: "red" }} />
                    </button>
                  </Col>
                )
              )}
            </Row>
          </CardBody>
          {/* card footer */}
          <CardFooter className="border-top d-flex justify-content-center">
            {/* submit button */}
            <CustomButton
              loading={loadings.createCharger}
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
export default ChargersNew;
