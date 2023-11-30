import { Fragment, useState } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate } from "react-router-dom";
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
import { setSlots } from "../../../../redux/action_triggers_slice";
import CustomDatePicker from "../../../../components/datepicker/index";
import useActionTriggers from "../../../../hooks/use_action_triggers";

const ActionTriggersNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createActionTriggerController, loadings } = useActionTriggers();

  const [slotFormData, setSlotFormData] = useState({
    ID: "",
    UniqueID: "",
    ThresholdType: "",
    ThresholdValue: 0,
    MinSleep: "",
    ExpirationDate: "",
    ActivationDate: "",
    BalanceId: "",
    BalanceType: "",
    BalanceDestinationIds: "",
    BalanceWeight: "",
    BalanceExpirationDate: "",
    BalanceTimingTags: "",
    BalanceRatingSubject: "",
    BalanceCategories: "",
    BalanceSharedGroups: "",
    BalanceBlocker: "",
    BalanceDisabled: "",
    Weight: 0,
    ActionsId: "",
    MinQueuedItems: "",
    Recurrent: false,
  });
  const [ExpirationDate, setExpirationDate] = useState(null);
  const [ActivationDate, setActivationDate] = useState(null);
  const [BalanceExpirationDate, setBalanceExpirationDate] = useState(null);

  const slots = useSelector((state) => state.actionTriggers.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.ID.length === 0) {
      toast.error("Please enter ID.");
    } else if (slotFormData.UniqueID.length === 0) {
      toast.error("Please enter UniqueID.");
    } else if (slotFormData.ThresholdType.length === 0) {
      toast.error("Please enter ThresholdType.");
    } else if (slotFormData.MinSleep.length === 0) {
      toast.error("Please enter MinSleep.");
    } else if (slotFormData.ExpirationDate.length === 0) {
      toast.error("Please enter ExpirationDate.");
    } else if (slotFormData.ActivationDate.length === 0) {
      toast.error("Please enter ActivationDate.");
    } else if (slotFormData.BalanceId.length === 0) {
      toast.error("Please enter BalanceId.");
    } else if (slotFormData.BalanceType.length === 0) {
      toast.error("Please enter BalanceType.");
    } else if (slotFormData.BalanceDestinationIds.length === 0) {
      toast.error("Please enter BalanceDestinationIds.");
    } else if (slotFormData.BalanceWeight.length === 0) {
      toast.error("Please enter BalanceWeight.");
    } else if (slotFormData.BalanceExpirationDate.length === 0) {
      toast.error("Please enter BalanceExpirationDate.");
    } else if (slotFormData.BalanceTimingTags.length === 0) {
      toast.error("Please enter BalanceTimingTags.");
    } else if (slotFormData.BalanceRatingSubject.length === 0) {
      toast.error("Please enter BalanceRatingSubject.");
    } else if (slotFormData.BalanceCategories.length === 0) {
      toast.error("Please enter BalanceCategories.");
    } else if (slotFormData.BalanceSharedGroups.length === 0) {
      toast.error("Please enter BalanceSharedGroups.");
    } else if (slotFormData.BalanceBlocker.length === 0) {
      toast.error("Please enter BalanceBlocker.");
    } else if (slotFormData.BalanceDisabled.length === 0) {
      toast.error("Please enter BalanceDisabled.");
    } else if (slotFormData.ActionsId.length === 0) {
      toast.error("Please enter ActionsId.");
    } else if (slotFormData.MinQueuedItems.length === 0) {
      toast.error("Please enter MinQueuedItems.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        ID: "",
        UniqueID: "",
        ThresholdType: "",
        ThresholdValue: 0,
        MinSleep: "",
        ExpirationDate: "",
        ActivationDate: "",
        BalanceId: "",
        BalanceType: "",
        BalanceDestinationIds: "",
        BalanceWeight: "",
        BalanceExpirationDate: "",
        BalanceTimingTags: "",
        BalanceRatingSubject: "",
        BalanceCategories: "",
        BalanceSharedGroups: "",
        BalanceBlocker: "",
        BalanceDisabled: "",
        Weight: 0,
        ActionsId: "",
        MinQueuedItems: "",
        Recurrent: false,
      });
      setExpirationDate(null);
      setActivationDate(null);
      setBalanceExpirationDate(null);
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="New Action Trigger"
        data={[{ title: "New Action Trigger" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createActionTriggerController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Action Trigger Form</CardTitle>
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
                  value={createActionTriggerController.values.TPid}
                  onChange={createActionTriggerController.handleChange}
                  invalid={
                    createActionTriggerController.touched.TPid &&
                    createActionTriggerController.errors.TPid
                  }
                />
                {createActionTriggerController.touched.TPid &&
                createActionTriggerController.errors.TPid ? (
                  <FormFeedback>
                    {createActionTriggerController.errors.TPid}
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
                  value={createActionTriggerController.values.ID}
                  onChange={createActionTriggerController.handleChange}
                  invalid={
                    createActionTriggerController.touched.ID &&
                    createActionTriggerController.errors.ID
                  }
                />
                {createActionTriggerController.touched.ID &&
                createActionTriggerController.errors.ID ? (
                  <FormFeedback>
                    {createActionTriggerController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* slots */}
            <Row>
              <Col xs="12">
                <CardTitle>Action Triggers</CardTitle>
              </Col>
              {/* ID */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ID">
                  ID
                </Label>
                <Input
                  value={slotFormData.ID}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ID: e.target.value,
                    })
                  }
                  id="ID"
                  name="ID"
                />
              </Col>
              {/* UniqueID */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="UniqueID">
                  UniqueID
                </Label>
                <Input
                  value={slotFormData.UniqueID}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      UniqueID: e.target.value,
                    })
                  }
                  id="UniqueID"
                  name="UniqueID"
                />
              </Col>
              {/* ThresholdType */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ThresholdType">
                  ThresholdType
                </Label>
                <Input
                  value={slotFormData.ThresholdType}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ThresholdType: e.target.value,
                    })
                  }
                  id="ThresholdType"
                  name="ThresholdType"
                />
              </Col>
              {/* ThresholdValue */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ThresholdValue">
                  ThresholdValue
                </Label>
                <Input
                  value={slotFormData.ThresholdValue}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ThresholdValue: e.target.value,
                    })
                  }
                  id="ThresholdValue"
                  name="ThresholdValue"
                  type="number"
                />
              </Col>
              {/* MinSleep */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="MinSleep">
                  MinSleep
                </Label>
                <Input
                  value={slotFormData.MinSleep}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      MinSleep: e.target.value,
                    })
                  }
                  id="MinSleep"
                  name="MinSleep"
                />
              </Col>
              {/* ExpirationDate */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ExpirationDate">
                  ExpirationDate
                </Label>
                <CustomDatePicker
                  inputPlaceholder="Click to open calendar"
                  value={ExpirationDate}
                  onChange={(value) => {
                    setExpirationDate(value);
                    setSlotFormData({
                      ...slotFormData,
                      ExpirationDate: `${value.year}-${value.month}-${value.day}T00:00:00Z`,
                    });
                  }}
                />
              </Col>
              {/* ActivationDate */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ActivationDate">
                  ActivationDate
                </Label>
                <CustomDatePicker
                  inputPlaceholder="Click to open calendar"
                  value={ActivationDate}
                  onChange={(value) => {
                    setActivationDate(value);
                    setSlotFormData({
                      ...slotFormData,
                      ActivationDate: `${value.year}-${value.month}-${value.day}T00:00:00Z`,
                    });
                  }}
                />
              </Col>
              {/* BalanceId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceId">
                  BalanceId
                </Label>
                <Input
                  value={slotFormData.BalanceId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceId: e.target.value,
                    })
                  }
                  id="BalanceId"
                  name="BalanceId"
                />
              </Col>
              {/* BalanceType */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceType">
                  BalanceType
                </Label>
                <Input
                  value={slotFormData.BalanceType}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceType: e.target.value,
                    })
                  }
                  id="BalanceType"
                  name="BalanceType"
                />
              </Col>
              {/* BalanceDestinationIds */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceDestinationIds">
                  BalanceDestinationIds
                </Label>
                <Input
                  value={slotFormData.BalanceDestinationIds}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceDestinationIds: e.target.value,
                    })
                  }
                  id="BalanceDestinationIds"
                  name="BalanceDestinationIds"
                />
              </Col>
              {/* BalanceWeight */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceWeight">
                  BalanceWeight
                </Label>
                <Input
                  value={slotFormData.BalanceWeight}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceWeight: e.target.value,
                    })
                  }
                  id="BalanceWeight"
                  name="BalanceWeight"
                />
              </Col>
              {/* BalanceExpirationDate */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceExpirationDate">
                  BalanceExpirationDate
                </Label>
                <CustomDatePicker
                  inputPlaceholder="Click to open calendar"
                  value={BalanceExpirationDate}
                  onChange={(value) => {
                    setBalanceExpirationDate(value);
                    setSlotFormData({
                      ...slotFormData,
                      BalanceExpirationDate: `${value.year}-${value.month}-${value.day}T00:00:00Z`,
                    });
                  }}
                />
              </Col>
              {/* BalanceTimingTags */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceTimingTags">
                  BalanceTimingTags
                </Label>
                <Input
                  value={slotFormData.BalanceTimingTags}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceTimingTags: e.target.value,
                    })
                  }
                  id="BalanceTimingTags"
                  name="BalanceTimingTags"
                />
              </Col>
              {/* BalanceRatingSubject */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceRatingSubject">
                  BalanceRatingSubject
                </Label>
                <Input
                  value={slotFormData.BalanceRatingSubject}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceRatingSubject: e.target.value,
                    })
                  }
                  id="BalanceRatingSubject"
                  name="BalanceRatingSubject"
                />
              </Col>
              {/* BalanceCategories */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceCategories">
                  BalanceCategories
                </Label>
                <Input
                  value={slotFormData.BalanceCategories}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceCategories: e.target.value,
                    })
                  }
                  id="BalanceCategories"
                  name="BalanceCategories"
                />
              </Col>
              {/* BalanceSharedGroups */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceSharedGroups">
                  BalanceSharedGroups
                </Label>
                <Input
                  value={slotFormData.BalanceSharedGroups}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceSharedGroups: e.target.value,
                    })
                  }
                  id="BalanceSharedGroups"
                  name="BalanceSharedGroups"
                />
              </Col>
              {/* BalanceBlocker */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceBlocker">
                  BalanceBlocker
                </Label>
                <Input
                  value={slotFormData.BalanceBlocker}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceBlocker: e.target.value,
                    })
                  }
                  id="BalanceBlocker"
                  name="BalanceBlocker"
                />
              </Col>
              {/* BalanceDisabled */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceDisabled">
                  BalanceDisabled
                </Label>
                <Input
                  value={slotFormData.BalanceDisabled}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceDisabled: e.target.value,
                    })
                  }
                  id="BalanceDisabled"
                  name="BalanceDisabled"
                />
              </Col>
              {/* Weight */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Weight">
                  Weight
                </Label>
                <Input
                  value={slotFormData.Weight}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Weight: e.target.value,
                    })
                  }
                  id="Weight"
                  name="Weight"
                  type="number"
                />
              </Col>
              {/* ActionsId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ActionsId">
                  ActionsId
                </Label>
                <Input
                  value={slotFormData.ActionsId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ActionsId: e.target.value,
                    })
                  }
                  id="ActionsId"
                  name="ActionsId"
                />
              </Col>
              {/* MinQueuedItems */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="MinQueuedItems">
                  MinQueuedItems
                </Label>
                <Input
                  value={slotFormData.MinQueuedItems}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      MinQueuedItems: e.target.value,
                    })
                  }
                  id="MinQueuedItems"
                  name="MinQueuedItems"
                />
              </Col>
              {/* Recurrent */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Recurrent">
                  Recurrent
                </Label>
                <div className="form-check">
                  <Input
                    id="Recurrent"
                    name="Recurrent"
                    checked={slotFormData.Recurrent}
                    type="checkbox"
                    onChange={(e) =>
                      setSlotFormData({
                        ...slotFormData,
                        Recurrent: e.target.checked,
                      })
                    }
                  />
                </div>
              </Col>
              {/* add button */}
              <Col
                xs="12"
                sm="6"
                md="2"
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
                      No Action Trigger Added Yet.
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
              loading={loadings.createActionTrigger}
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
export default ActionTriggersNew;
