import { Fragment, useState, useEffect } from "react";
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
import ProgressLoading from "../../../../components/progress_loading";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomDatePicker from "../../../../components/datepicker/index";

const ChargersUpdate = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { getEntityById, updateChargerController, loadings } = useChargers();

  const [ActivationTime, setActivationTime] = useState(null);
  const [ExpiryTime, setExpiryTime] = useState(null);

  const [FilterIDsValue, setFilterIDsValue] = useState("");
  const [AttributeIDsValue, setAttributeIDsValue] = useState("");

  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    let entity_id = searchParams.get("entity_id");
    if (entity_id) {
      if (selectedTpId) {
        getEntityById(entity_id);
      }
    } else {
      navigate("/rules/chargers");
    }
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        title="Update Charger"
        data={[{ title: "Update Charger" }]}
      />
      {loadings.getEntityById ? <ProgressLoading /> : null}
      {!getAllTpIdsLoading && !loadings.getEntityById ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            window.scroll({ top: 0, behavior: "smooth" });
            updateChargerController.handleSubmit();
          }}
          className="d-flex flex-column align-items-center"
        >
          <Card className="w-100">
            {/* card header */}
            <CardHeader className="border-bottom">
              <CardTitle>Update Charger Form</CardTitle>
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
                    disabled
                    value={updateChargerController.values.TPid}
                    onChange={updateChargerController.handleChange}
                    invalid={
                      updateChargerController.touched.TPid &&
                      updateChargerController.errors.TPid
                    }
                  />
                  {updateChargerController.touched.TPid &&
                  updateChargerController.errors.TPid ? (
                    <FormFeedback>
                      {updateChargerController.errors.TPid}
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
                    value={updateChargerController.values.Tenant}
                    onChange={updateChargerController.handleChange}
                    invalid={
                      updateChargerController.touched.Tenant &&
                      updateChargerController.errors.Tenant
                    }
                  />
                  {updateChargerController.touched.Tenant &&
                  updateChargerController.errors.Tenant ? (
                    <FormFeedback>
                      {updateChargerController.errors.Tenant}
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
                    disabled
                    value={updateChargerController.values.ID}
                    onChange={updateChargerController.handleChange}
                    invalid={
                      updateChargerController.touched.ID &&
                      updateChargerController.errors.ID
                    }
                  />
                  {updateChargerController.touched.ID &&
                  updateChargerController.errors.ID ? (
                    <FormFeedback>
                      {updateChargerController.errors.ID}
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
                      updateChargerController.setFieldValue(
                        "ActivationTime",
                        `${value.year}-${value.month}-${value.day}T00:00:00Z`
                      );
                    }}
                    inputClassName={
                      updateChargerController.touched.ActivationTime &&
                      updateChargerController.errors.ActivationTime
                        ? "form_error"
                        : ""
                    }
                  />
                  {updateChargerController.touched.ActivationTime &&
                  updateChargerController.errors.ActivationTime ? (
                    <FormFeedback style={{ display: "block" }}>
                      {updateChargerController.errors.ActivationTime}
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
                      updateChargerController.setFieldValue(
                        "ExpiryTime",
                        `${value.year}-${value.month}-${value.day}T00:00:00Z`
                      );
                    }}
                    inputClassName={
                      updateChargerController.touched.ExpiryTime &&
                      updateChargerController.errors.ExpiryTime
                        ? "form_error"
                        : ""
                    }
                  />
                  {updateChargerController.touched.ExpiryTime &&
                  updateChargerController.errors.ExpiryTime ? (
                    <FormFeedback style={{ display: "block" }}>
                      {updateChargerController.errors.ExpiryTime}
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
                    value={updateChargerController.values.RunID}
                    onChange={updateChargerController.handleChange}
                    invalid={
                      updateChargerController.touched.RunID &&
                      updateChargerController.errors.RunID
                    }
                  />
                  {updateChargerController.touched.RunID &&
                  updateChargerController.errors.RunID ? (
                    <FormFeedback>
                      {updateChargerController.errors.RunID}
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
                    value={updateChargerController.values.Weight}
                    onChange={(e) =>
                      updateChargerController.setFieldValue(
                        "Weight",
                        parseFloat(e.target.value)
                      )
                    }
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
                        updateChargerController.touched.FilterIDs &&
                        updateChargerController.errors.FilterIDs
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
                            ...updateChargerController.values.FilterIDs,
                          ];
                          array.push(FilterIDsValue);
                          updateChargerController.setFieldValue(
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
                  {updateChargerController.touched.FilterIDs &&
                  updateChargerController.errors.FilterIDs ? (
                    <FormFeedback style={{ display: "block" }}>
                      {updateChargerController.errors.FilterIDs}
                    </FormFeedback>
                  ) : null}
                </Col>
                {updateChargerController.values.FilterIDs.map((item, index) => (
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
                          ...updateChargerController.values.FilterIDs,
                        ];
                        array = array.filter((intem, i) => i !== index);
                        updateChargerController.setFieldValue(
                          "FilterIDs",
                          array
                        );
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
                        updateChargerController.touched.AttributeIDs &&
                        updateChargerController.errors.AttributeIDs
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
                            ...updateChargerController.values.AttributeIDs,
                          ];
                          array.push(AttributeIDsValue);
                          updateChargerController.setFieldValue(
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
                  {updateChargerController.touched.AttributeIDs &&
                  updateChargerController.errors.AttributeIDs ? (
                    <FormFeedback style={{ display: "block" }}>
                      {updateChargerController.errors.AttributeIDs}
                    </FormFeedback>
                  ) : null}
                </Col>
                {updateChargerController.values.AttributeIDs.map(
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
                            ...updateChargerController.values.AttributeIDs,
                          ];
                          array = array.filter((intem, i) => i !== index);
                          updateChargerController.setFieldValue(
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
      ) : null}
    </Fragment>
  );
};
export default ChargersUpdate;
