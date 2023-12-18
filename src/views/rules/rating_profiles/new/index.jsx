import { Fragment, useEffect, useState } from "react";
import Breadcrumbs from "@components/breadcrumbs";
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
import { setSlots } from "../../../../redux/rating_profiles_slice";
import useRatingProfiles from "../../../../hooks/use_rating_profiles";
import CustomDatePicker from "../../../../components/datepicker";

const RatingProfilesNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();

  const { createRatingProfileController, loadings } = useRatingProfiles();

  const [ActivationTime, setActivationTime] = useState(null);

  const [slotFormData, setSlotFormData] = useState({
    ActivationTime: "",
    RatingPlanId: "",
    FallbackKeys: "",
  });

  const slots = useSelector((state) => state.ratingProfiles.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.ActivationTime.length === 0) {
      toast.error("Please enter ActivationTime.");
    } else if (slotFormData.RatingPlanId.length === 0) {
      toast.error("Please enter RatingPlanId.");
    } else if (slotFormData.FallbackKeys.length === 0) {
      toast.error("Please enter FallbackKeys.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        ActivationTime: "",
        RatingPlanId: "",
        FallbackKeys: "",
      });
      setActivationTime(null);
    }
  };

  useEffect(() => {
    dispatch(setSlots([]));
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        title="New Rating Profile"
        data={[{ title: "New Rating Profile" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createRatingProfileController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Rating Profile Form</CardTitle>
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
                  value={createRatingProfileController.values.TPid}
                  onChange={createRatingProfileController.handleChange}
                  invalid={
                    createRatingProfileController.touched.TPid &&
                    createRatingProfileController.errors.TPid
                  }
                />
                {createRatingProfileController.touched.TPid &&
                createRatingProfileController.errors.TPid ? (
                  <FormFeedback>
                    {createRatingProfileController.errors.TPid}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* LoadId */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="LoadId">
                  LoadId
                </Label>
                <Input
                  id="LoadId"
                  name="LoadId"
                  value={createRatingProfileController.values.LoadId}
                  onChange={createRatingProfileController.handleChange}
                  invalid={
                    createRatingProfileController.touched.LoadId &&
                    createRatingProfileController.errors.LoadId
                  }
                />
                {createRatingProfileController.touched.LoadId &&
                createRatingProfileController.errors.LoadId ? (
                  <FormFeedback>
                    {createRatingProfileController.errors.LoadId}
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
                  value={createRatingProfileController.values.Tenant}
                  onChange={createRatingProfileController.handleChange}
                  invalid={
                    createRatingProfileController.touched.Tenant &&
                    createRatingProfileController.errors.Tenant
                  }
                />
                {createRatingProfileController.touched.Tenant &&
                createRatingProfileController.errors.Tenant ? (
                  <FormFeedback>
                    {createRatingProfileController.errors.Tenant}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Category */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Category">
                  Category
                </Label>
                <Input
                  id="Category"
                  name="Category"
                  value={createRatingProfileController.values.Category}
                  onChange={createRatingProfileController.handleChange}
                  invalid={
                    createRatingProfileController.touched.Category &&
                    createRatingProfileController.errors.Category
                  }
                />
                {createRatingProfileController.touched.Category &&
                createRatingProfileController.errors.Category ? (
                  <FormFeedback>
                    {createRatingProfileController.errors.Category}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Subject */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Subject">
                  Subject
                </Label>
                <Input
                  id="Subject"
                  name="Subject"
                  value={createRatingProfileController.values.Subject}
                  onChange={createRatingProfileController.handleChange}
                  invalid={
                    createRatingProfileController.touched.Subject &&
                    createRatingProfileController.errors.Subject
                  }
                />
                {createRatingProfileController.touched.Subject &&
                createRatingProfileController.errors.Subject ? (
                  <FormFeedback>
                    {createRatingProfileController.errors.Subject}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
            {/* RatingPlanActivations */}
            <Row>
              <Col xs="12">
                <CardTitle>Rating Plan Activations</CardTitle>
              </Col>
              {/* ActivationTime */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ActivationTime">
                  ActivationTime
                </Label>
                <CustomDatePicker
                  inputPlaceholder="Click to open calendar"
                  value={ActivationTime}
                  onChange={(value) => {
                    setActivationTime(value);
                    setSlotFormData({
                      ...slotFormData,
                      ActivationTime: `${value.year}-${value.month}-${value.day}T00:00:00Z`,
                    });
                  }}
                />
              </Col>
              {/* RatingPlanId */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="RatingPlanId">
                  RatingPlanId
                </Label>
                <Input
                  id="RatingPlanId"
                  name="RatingPlanId"
                  value={slotFormData.RatingPlanId}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      RatingPlanId: e.target.value,
                    })
                  }
                />
              </Col>
              {/* FallbackKeys */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="FallbackKeys">
                  FallbackKeys
                </Label>
                <Input
                  id="FallbackKeys"
                  name="FallbackKeys"
                  value={slotFormData.FallbackKeys}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      FallbackKeys: e.target.value,
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
                      No Rating Plan Activation Added Yet.
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
              loading={loadings.createRatingProfile}
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
export default RatingProfilesNew;
