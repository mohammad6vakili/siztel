import { Fragment, useEffect, useState } from "react";
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
import { setSlots } from "../../../../redux/actions_slice";
import useActions from "../../../../hooks/use_actions";
import CustomDatePicker from "../../../../components/datepicker/index";

const ActionsUpdate = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateActionController, loadings } = useActions();

  const [ExpiryTime, setExpiryTime] = useState(null);

  const [slotFormData, setSlotFormData] = useState({
    Identifier: "",
    BalanceId: "",
    BalanceType: "",
    Units: "",
    ExpiryTime: "",
    Filter: "",
    TimingTags: "",
    DestinationIds: "",
    RatingSubject: "",
    Categories: "",
    SharedGroups: "",
    BalanceWeight: "",
    ExtraParameters: "",
    BalanceBlocker: false,
    BalanceDisabled: false,
    Weight: 0,
  });

  const slots = useSelector((state) => state.actions.slots);
  const selectedAction = useSelector((state) => state.actions.selectedAction);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.Identifier.length === 0) {
      toast.error("Please enter Identifier.");
    } else if (slotFormData.BalanceId.length === 0) {
      toast.error("Please enter BalanceId.");
    } else if (slotFormData.BalanceType.length === 0) {
      toast.error("Please enter BalanceType.");
    } else if (slotFormData.Units.length === 0) {
      toast.error("Please enter Units.");
    } else if (slotFormData.ExpiryTime.length === 0) {
      toast.error("Please enter ExpiryTime.");
    } else if (slotFormData.Filter.length === 0) {
      toast.error("Please enter Filter.");
    } else if (slotFormData.TimingTags.length === 0) {
      toast.error("Please enter TimingTags.");
    } else if (slotFormData.DestinationIds.length === 0) {
      toast.error("Please enter DestinationIds.");
    } else if (slotFormData.RatingSubject.length === 0) {
      toast.error("Please enter RatingSubject.");
    } else if (slotFormData.Categories.length === 0) {
      toast.error("Please enter Categories.");
    } else if (slotFormData.SharedGroups.length === 0) {
      toast.error("Please enter SharedGroups.");
    } else if (slotFormData.BalanceWeight.length === 0) {
      toast.error("Please enter BalanceWeight.");
    } else if (slotFormData.ExtraParameters.length === 0) {
      toast.error("Please enter ExtraParameters.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        Identifier: "",
        BalanceId: "",
        BalanceType: "",
        Units: "",
        ExpiryTime: "",
        Filter: "",
        TimingTags: "",
        DestinationIds: "",
        RatingSubject: "",
        Categories: "",
        SharedGroups: "",
        BalanceWeight: "",
        ExtraParameters: "",
        BalanceBlocker: false,
        BalanceDisabled: false,
        Weight: 0,
      });
    }
  };

  useEffect(() => {
    if (!selectedAction) {
      navigate("/rules/actions");
    } else {
      updateActionController.setFieldValue("TPid", selectedAction?.TPid);
      updateActionController.setFieldValue("ID", selectedAction?.ID);
      dispatch(setSlots(selectedAction.Slots));
    }
  }, [selectedAction]);

  return (
    <Fragment>
      <Breadcrumbs title="Update Action" data={[{ title: "Update Action" }]} />
      <Form
        onSubmit={updateActionController.handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Action Form</CardTitle>
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
                  value={updateActionController.values.TPid}
                  onChange={updateActionController.handleChange}
                  invalid={
                    updateActionController.touched.TPid &&
                    updateActionController.errors.TPid
                  }
                />
                {updateActionController.touched.TPid &&
                updateActionController.errors.TPid ? (
                  <FormFeedback>
                    {updateActionController.errors.TPid}
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
                  value={updateActionController.values.ID}
                  onChange={updateActionController.handleChange}
                  invalid={
                    updateActionController.touched.ID &&
                    updateActionController.errors.ID
                  }
                />
                {updateActionController.touched.ID &&
                updateActionController.errors.ID ? (
                  <FormFeedback>
                    {updateActionController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* Actions */}
            <Row>
              <Col xs="12">
                <CardTitle>Actions</CardTitle>
              </Col>
              {/* Identifier */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Identifier">
                  Identifier
                </Label>
                <Input
                  value={slotFormData.Identifier}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Identifier: e.target.value,
                    })
                  }
                  id="Identifier"
                  name="Identifier"
                />
              </Col>
              {/* BalanceId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceId">
                  BalanceId
                </Label>
                <Input
                  id="BalanceId"
                  name="BalanceId"
                  value={slotFormData.BalanceId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceId: e.target.value,
                    })
                  }
                />
              </Col>
              {/* BalanceType */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceType">
                  BalanceType
                </Label>
                <Input
                  id="BalanceType"
                  name="BalanceType"
                  value={slotFormData.BalanceType}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceType: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Units */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Units">
                  Units
                </Label>
                <Input
                  id="Units"
                  name="Units"
                  value={slotFormData.Units}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Units: e.target.value,
                    })
                  }
                />
              </Col>
              {/* ExpiryTime */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ExpiryTime">
                  ExpiryTime
                </Label>
                <CustomDatePicker
                  inputPlaceholder="Click to open calendar"
                  value={ExpiryTime}
                  onChange={(value) => {
                    setExpiryTime(value);
                    setSlotFormData({
                      ...slotFormData,
                      ExpiryTime: `${value.year}-${value.month}-${value.day}T00:00:00Z`,
                    });
                  }}
                />
              </Col>
              {/* Filter */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Filter">
                  Filter
                </Label>
                <Input
                  id="Filter"
                  name="Filter"
                  value={slotFormData.Filter}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Filter: e.target.value,
                    })
                  }
                />
              </Col>
              {/* TimingTags */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="TimingTags">
                  TimingTags
                </Label>
                <Input
                  id="TimingTags"
                  name="TimingTags"
                  value={slotFormData.TimingTags}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      TimingTags: e.target.value,
                    })
                  }
                />
              </Col>
              {/* DestinationIds */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="DestinationIds">
                  DestinationIds
                </Label>
                <Input
                  id="DestinationIds"
                  name="DestinationIds"
                  value={slotFormData.DestinationIds}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      DestinationIds: e.target.value,
                    })
                  }
                />
              </Col>
              {/* RatingSubject */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="RatingSubject">
                  RatingSubject
                </Label>
                <Input
                  id="RatingSubject"
                  name="RatingSubject"
                  value={slotFormData.RatingSubject}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      RatingSubject: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Categories */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Categories">
                  Categories
                </Label>
                <Input
                  id="Categories"
                  name="Categories"
                  value={slotFormData.Categories}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Categories: e.target.value,
                    })
                  }
                />
              </Col>
              {/* SharedGroups */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="SharedGroups">
                  SharedGroups
                </Label>
                <Input
                  id="SharedGroups"
                  name="SharedGroups"
                  value={slotFormData.SharedGroups}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      SharedGroups: e.target.value,
                    })
                  }
                />
              </Col>
              {/* BalanceWeight */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceWeight">
                  BalanceWeight
                </Label>
                <Input
                  id="BalanceWeight"
                  name="BalanceWeight"
                  value={slotFormData.BalanceWeight}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceWeight: e.target.value,
                    })
                  }
                />
              </Col>
              {/* ExtraParameters */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ExtraParameters">
                  ExtraParameters
                </Label>
                <Input
                  id="ExtraParameters"
                  name="ExtraParameters"
                  value={slotFormData.ExtraParameters}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ExtraParameters: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Weight */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="Weight">
                  Weight
                </Label>
                <Input
                  type="number"
                  id="Weight"
                  name="Weight"
                  value={slotFormData.Weight}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Weight: e.target.value,
                    })
                  }
                />
              </Col>
              {/* BalanceBlocker */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceBlocker">
                  BalanceBlocker
                </Label>
                <div className="form-check">
                  <Input
                    id="BalanceBlocker"
                    name="BalanceBlocker"
                    type="checkbox"
                    checked={slotFormData.BalanceBlocker}
                    onChange={(e) =>
                      setSlotFormData({
                        ...slotFormData,
                        BalanceBlocker: e.target.checked,
                      })
                    }
                  />
                </div>
              </Col>
              {/* BalanceDisabled */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="BalanceDisabled">
                  BalanceDisabled
                </Label>
                <div className="form-check">
                  <Input
                    id="BalanceDisabled"
                    name="BalanceDisabled"
                    checked={slotFormData.BalanceDisabled}
                    type="checkbox"
                    onChange={(e) =>
                      setSlotFormData({
                        ...slotFormData,
                        BalanceDisabled: e.target.checked,
                      })
                    }
                  />
                </div>
              </Col>
              {/* action */}
              <Col
                xs="12"
                sm="6"
                md="3"
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
                    <div style={{ margin: "24px 0" }}>No Action Added Yet.</div>
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
              loading={loadings.updateAction}
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
export default ActionsUpdate;
