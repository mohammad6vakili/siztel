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
} from "reactstrap";
import CustomButton from "../../../../components/button";
import { useSkin } from "@hooks/useSkin";
import { useDispatch, useSelector } from "react-redux";
import { setSlots } from "../../../../redux/action_triggers_slice";

const ActionTriggersNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [slotFormData, setSlotFormData] = useState({
    BalanceId: "",
    BalanceType: "",
    BalanceRatingSubject: "",
    BalanceCategory: "",
    BalanceSharedGroup: "",
    BalanceWeight: 0,
    DestinationId: "",
    Direction: "",
    MinQueuedItems: 0,
    MinSleep: 0,
    ActionsId: "",
    ThresholdType: "",
    ThresholdValue: 0,
    Weight: 0,
  });

  const slots = useSelector((state) => state.actionTriggers.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.BalanceId.length === 0) {
      toast.error("Please enter BalanceId.");
    } else if (slotFormData.BalanceType.length === 0) {
      toast.error("Please enter BalanceType.");
    } else if (slotFormData.BalanceRatingSubject.length === 0) {
      toast.error("Please enter BalanceRatingSubject.");
    } else if (slotFormData.BalanceCategory.length === 0) {
      toast.error("Please enter BalanceCategory.");
    } else if (slotFormData.BalanceSharedGroup.length === 0) {
      toast.error("Please enter BalanceSharedGroup.");
    } else if (slotFormData.DestinationId.length === 0) {
      toast.error("Please enter DestinationId.");
    } else if (slotFormData.Direction.length === 0) {
      toast.error("Please enter Direction.");
    } else if (slotFormData.ActionsId.length === 0) {
      toast.error("Please enter ActionsId.");
    } else if (slotFormData.ThresholdType.length === 0) {
      toast.error("Please enter ThresholdType.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        BalanceId: "",
        BalanceType: "",
        BalanceRatingSubject: "",
        BalanceCategory: "",
        BalanceSharedGroup: "",
        BalanceWeight: 0,
        DestinationId: "",
        Direction: "",
        MinQueuedItems: 0,
        MinSleep: 0,
        ActionsId: "",
        ThresholdType: "",
        ThresholdValue: 0,
        Weight: 0,
      });
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
          navigate("/rules/action_triggers");
          toast.success("Successfully Created!");
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Action Trigger Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row className="border-bottom mb-1">
              {/* ActionTriggersId */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ActionTriggersId">
                  ActionTriggersId
                </Label>
                <Input id="ActionTriggersId" name="ActionTriggersId" />
              </Col>
            </Row>
            {/* slots */}
            <Row>
              <Col xs="12">
                <CardTitle>Actions</CardTitle>
              </Col>
              {/* BalanceId */}
              <Col xs="12" sm="6" md="2" className="mb-1">
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
              <Col xs="12" sm="6" md="2" className="mb-1">
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
              {/* BalanceRatingSubject */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="BalanceRatingSubject">
                  BalanceRatingSubject
                </Label>
                <Input
                  id="BalanceRatingSubject"
                  name="BalanceRatingSubject"
                  value={slotFormData.BalanceRatingSubject}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceRatingSubject: e.target.value,
                    })
                  }
                />
              </Col>
              {/* BalanceCategory */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="BalanceCategory">
                  BalanceCategory
                </Label>
                <Input
                  id="BalanceCategory"
                  name="BalanceCategory"
                  value={slotFormData.BalanceCategory}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceCategory: e.target.value,
                    })
                  }
                />
              </Col>
              {/* BalanceSharedGroup */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="BalanceSharedGroup">
                  BalanceSharedGroup
                </Label>
                <Input
                  id="BalanceSharedGroup"
                  name="BalanceSharedGroup"
                  value={slotFormData.BalanceSharedGroup}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      BalanceSharedGroup: e.target.value,
                    })
                  }
                />
              </Col>
              {/* BalanceWeight */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="BalanceWeight">
                  BalanceWeight
                </Label>
                <Input
                  type="number"
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
              {/* DestinationId */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="DestinationId">
                  DestinationId
                </Label>
                <Input
                  id="DestinationId"
                  name="DestinationId"
                  value={slotFormData.DestinationId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      DestinationId: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Direction */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="Direction">
                  Direction
                </Label>
                <Input
                  id="Direction"
                  name="Direction"
                  value={slotFormData.Direction}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Direction: e.target.value,
                    })
                  }
                />
              </Col>
              {/* MinQueuedItems */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="MinQueuedItems">
                  MinQueuedItems
                </Label>
                <Input
                  type="number"
                  id="MinQueuedItems"
                  name="MinQueuedItems"
                  value={slotFormData.MinQueuedItems}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      MinQueuedItems: e.target.value,
                    })
                  }
                />
              </Col>
              {/* MinSleep */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="MinSleep">
                  MinSleep
                </Label>
                <Input
                  type="number"
                  id="MinSleep"
                  name="MinSleep"
                  value={slotFormData.MinSleep}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      MinSleep: e.target.value,
                    })
                  }
                />
              </Col>
              {/* ActionsId */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="ActionsId">
                  ActionsId
                </Label>
                <Input
                  id="ActionsId"
                  name="ActionsId"
                  value={slotFormData.ActionsId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ActionsId: e.target.value,
                    })
                  }
                />
              </Col>
              {/* ThresholdType */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="ThresholdType">
                  ThresholdType
                </Label>
                <Input
                  id="ThresholdType"
                  name="ThresholdType"
                  value={slotFormData.ThresholdType}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ThresholdType: e.target.value,
                    })
                  }
                />
              </Col>
              {/* ThresholdValue */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="ThresholdValue">
                  ThresholdValue
                </Label>
                <Input
                  type="number"
                  id="ThresholdValue"
                  name="ThresholdValue"
                  value={slotFormData.ThresholdValue}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ThresholdValue: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Weight */}
              <Col xs="12" sm="6" md="2" className="mb-1">
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
export default ActionTriggersNew;
