import { Fragment, useState, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import { setSlots } from "../../../../redux/action_plans_slice";
import useActionPlans from "../../../../hooks/use_action_plans";

const ActionPlansUpdate = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { updateActionPlanController, loadings } = useActionPlans();

  const [slotFormData, setSlotFormData] = useState({
    ActionsId: "",
    TimingId: "",
    Weight: 0,
  });

  const slots = useSelector((state) => state.actionPlans.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.ActionsId.length === 0) {
      toast.error("Please enter ActionsId.");
    } else if (slotFormData.TimingId.length === 0) {
      toast.error("Please enter TimingId.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        ActionsId: "",
        TimingId: "",
        Weight: 0,
      });
    }
  };

  useEffect(() => {
    let entity_id = searchParams.get("entity_id");
    if (entity_id) {
      toast.success(`You are in update mode for ${entity_id}`);
    } else {
      navigate("/rules/action_plans");
    }
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        title="Update Action Plan"
        data={[{ title: "Update Action Plan" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          updateActionPlanController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Action Plan Form</CardTitle>
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
                  value={updateActionPlanController.values.TPid}
                  onChange={updateActionPlanController.handleChange}
                  invalid={
                    updateActionPlanController.touched.TPid &&
                    updateActionPlanController.errors.TPid
                  }
                />
                {updateActionPlanController.touched.TPid &&
                updateActionPlanController.errors.TPid ? (
                  <FormFeedback>
                    {updateActionPlanController.errors.TPid}
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
                  value={updateActionPlanController.values.ID}
                  onChange={updateActionPlanController.handleChange}
                  invalid={
                    updateActionPlanController.touched.ID &&
                    updateActionPlanController.errors.ID
                  }
                />
                {updateActionPlanController.touched.ID &&
                updateActionPlanController.errors.ID ? (
                  <FormFeedback>
                    {updateActionPlanController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* slots */}
            <Row>
              <Col xs="12">
                <CardTitle>Actions</CardTitle>
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
              {/* TimingId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="TimingId">
                  TimingId
                </Label>
                <Input
                  id="TimingId"
                  name="TimingId"
                  value={slotFormData.TimingId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      TimingId: e.target.value,
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
              {/* add button */}
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
                    <div style={{ margin: "24px 0" }}>
                      No Action Plan Added Yet.
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
              loading={loadings.createActionPlan}
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
export default ActionPlansUpdate;
