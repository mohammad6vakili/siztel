import { Fragment, useState, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { slots_columns } from "../root/datatable/slots_columns";
import ProgressLoading from "../../../../components/progress_loading";
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
import { setSlots } from "../../../../redux/shared_groups_slice";
import useSharedGroups from "../../../../hooks/use_shared_groups";

const SharedGroupsUpdate = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { getEntityById, updateSharedGroupController, loadings } =
    useSharedGroups();

  const [slotFormData, setSlotFormData] = useState({
    Account: "",
    Strategy: "",
    RatingSubject: "",
  });

  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);
  const slots = useSelector((state) => state.sharedGroups.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.Account.length === 0) {
      toast.error("Please enter Account.");
    } else if (slotFormData.Strategy.length === 0) {
      toast.error("Please enter Strategy.");
    } else if (slotFormData.RatingSubject.length === 0) {
      toast.error("Please enter RatingSubject.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        Account: "",
        Strategy: "",
        RatingSubject: "",
      });
    }
  };

  useEffect(() => {
    let entity_id = searchParams.get("entity_id");
    if (entity_id) {
      if (selectedTpId) {
        getEntityById(entity_id);
      }
    } else {
      navigate("/rules/shared_groups");
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Breadcrumbs
        title="Update Shared Group"
        data={[{ title: "Update Shared Group" }]}
      />
      {loadings.getEntityById ? <ProgressLoading /> : null}
      {!getAllTpIdsLoading && !loadings.getEntityById ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            window.scroll({ top: 0, behavior: "smooth" });
            updateSharedGroupController.handleSubmit();
          }}
          className="d-flex flex-column align-items-center"
        >
          <Card className="w-100">
            {/* card header */}
            <CardHeader className="border-bottom">
              <CardTitle>Update Shared Group Form</CardTitle>
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
                    disabled
                    value={updateSharedGroupController.values.TPid}
                    onChange={updateSharedGroupController.handleChange}
                    invalid={
                      updateSharedGroupController.touched.TPid &&
                      updateSharedGroupController.errors.TPid
                    }
                  />
                  {updateSharedGroupController.touched.TPid &&
                  updateSharedGroupController.errors.TPid ? (
                    <FormFeedback>
                      {updateSharedGroupController.errors.TPid}
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
                    value={updateSharedGroupController.values.ID}
                    onChange={updateSharedGroupController.handleChange}
                    invalid={
                      updateSharedGroupController.touched.ID &&
                      updateSharedGroupController.errors.ID
                    }
                  />
                  {updateSharedGroupController.touched.ID &&
                  updateSharedGroupController.errors.ID ? (
                    <FormFeedback>
                      {updateSharedGroupController.errors.ID}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              {/* SharedGroups */}
              <Row>
                <Col xs="12">
                  <CardTitle>Shared Groups</CardTitle>
                </Col>
                {/* Account */}
                <Col xs="12" sm="6" md="3" className="mb-1">
                  <Label className="form-label" for="Account">
                    Account
                  </Label>
                  <Input
                    value={slotFormData.Account}
                    onChange={(e) =>
                      setSlotFormData({
                        ...slotFormData,
                        Account: e.target.value,
                      })
                    }
                    id="Account"
                    name="Account"
                  />
                </Col>
                {/* Strategy */}
                <Col xs="12" sm="6" md="3" className="mb-1">
                  <Label className="form-label" for="Strategy">
                    Strategy
                  </Label>
                  <Input
                    id="Strategy"
                    name="Strategy"
                    value={slotFormData.Strategy}
                    onChange={(e) =>
                      setSlotFormData({
                        ...slotFormData,
                        Strategy: e.target.value,
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
                        No Shared Group Added Yet.
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
                loading={loadings.updateSharedGroup}
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
export default SharedGroupsUpdate;
