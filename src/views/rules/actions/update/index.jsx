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
import { setSlots } from "../../../../redux/actions_slice";

const ActionsUpdate = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [slotFormData, setSlotFormData] = useState({
    Identifier: "",
    BalanceId: "",
    BalanceType: "",
    BalanceWeight: "",
    DestinationId: "",
    Direction: "",
    ExpiryTime: "",
    ExtraParameters: "",
    RatingSubject: "",
    Category: "",
    SharedGroup: "",
    Units: 0,
    Weight: 0,
  });

  const slots = useSelector((state) => state.actions.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.Identifier.length === 0) {
      toast.error("Please enter Identifier.");
    } else if (slotFormData.BalanceId.length === 0) {
      toast.error("Please enter BalanceId.");
    } else if (slotFormData.BalanceType.length === 0) {
      toast.error("Please enter BalanceType.");
    } else if (slotFormData.BalanceWeight.length === 0) {
      toast.error("Please enter BalanceWeight.");
    } else if (slotFormData.DestinationId.length === 0) {
      toast.error("Please enter DestinationId.");
    } else if (slotFormData.Direction.length === 0) {
      toast.error("Please enter Direction.");
    } else if (slotFormData.ExpiryTime.length === 0) {
      toast.error("Please enter ExpiryTime.");
    } else if (slotFormData.ExtraParameters.length === 0) {
      toast.error("Please enter ExtraParameters.");
    } else if (slotFormData.RatingSubject.length === 0) {
      toast.error("Please enter RatingSubject.");
    } else if (slotFormData.Category.length === 0) {
      toast.error("Please enter Category.");
    } else if (slotFormData.SharedGroup.length === 0) {
      toast.error("Please enter SharedGroup.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        Identifier: "",
        BalanceId: "",
        BalanceType: "",
        BalanceWeight: "",
        DestinationId: "",
        Direction: "",
        ExpiryTime: "",
        ExtraParameters: "",
        RatingSubject: "",
        Category: "",
        SharedGroup: "",
        Units: 0,
        Weight: 0,
      });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs title="Update Action" data={[{ title: "Update Action" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/rules/actions");
          toast.success("Successfully Updated!");
        }}
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
              {/* ActionsId */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ActionsId">
                  ActionsId
                </Label>
                <Input id="ActionsId" name="ActionsId" />
              </Col>
            </Row>
            {/* slots */}
            <Row>
              <Col xs="12">
                <CardTitle>Actions</CardTitle>
              </Col>
              {/* Identifier */}
              <Col xs="12" sm="6" md="2" className="mb-1">
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
              <Col xs="12" sm="6" md="2" className="mb-1">
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
              {/* BalanceWeight */}
              <Col xs="12" sm="6" md="2" className="mb-1">
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
              {/* ExpiryTime */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="ExpiryTime">
                  ExpiryTime
                </Label>
                <Input
                  id="ExpiryTime"
                  name="ExpiryTime"
                  value={slotFormData.ExpiryTime}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ExpiryTime: e.target.value,
                    })
                  }
                />
              </Col>
              {/* ExtraParameters */}
              <Col xs="12" sm="6" md="2" className="mb-1">
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
              {/* RatingSubject */}
              <Col xs="12" sm="6" md="2" className="mb-1">
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
              {/* Category */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="Category">
                  Category
                </Label>
                <Input
                  id="Category"
                  name="Category"
                  value={slotFormData.Category}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Category: e.target.value,
                    })
                  }
                />
              </Col>
              {/* SharedGroup */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="SharedGroup">
                  SharedGroup
                </Label>
                <Input
                  id="SharedGroup"
                  name="SharedGroup"
                  value={slotFormData.SharedGroup}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      SharedGroup: e.target.value,
                    })
                  }
                />
              </Col>
              {/* Units */}
              <Col xs="12" sm="6" md="2" className="mb-1">
                <Label className="form-label" for="Units">
                  Units
                </Label>
                <Input
                  type="number"
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
export default ActionsUpdate;
