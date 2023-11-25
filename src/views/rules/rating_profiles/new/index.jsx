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
import { setSlots } from "../../../../redux/rating_profiles_slice";

const RatingProfilesNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [slotFormData, setSlotFormData] = useState({
    ActivationTime: "",
    RatingPlanId: "",
    FallbackSubjects: "",
  });

  const slots = useSelector((state) => state.ratingProfiles.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.ActivationTime.length === 0) {
      toast.error("Please enter ActivationTime.");
    } else if (slotFormData.RatingPlanId.length === 0) {
      toast.error("Please enter RatingPlanId.");
    } else if (slotFormData.FallbackSubjects.length === 0) {
      toast.error("Please enter FallbackSubjects.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        ActivationTime: "",
        RatingPlanId: "",
        FallbackSubjects: "",
      });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="New Rating Profile"
        data={[{ title: "New Rating Profile" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/rules/rating_profiles");
          toast.success("Successfully Created!");
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
              {/* Direction */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Direction">
                  Direction
                </Label>
                <Input id="Direction" name="Direction" />
              </Col>
              {/* Tenant */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Tenant">
                  Tenant
                </Label>
                <Input id="Tenant" name="Tenant" />
              </Col>
              {/* Category */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Category">
                  Category
                </Label>
                <Input id="Category" name="Category" />
              </Col>
              {/* Subject */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Subject">
                  Subject
                </Label>
                <Input id="Subject" name="Subject" />
              </Col>
            </Row>
            {/* slots */}
            <Row>
              <Col xs="12">
                <CardTitle>Slots</CardTitle>
              </Col>
              {/* ActivationTime */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="ActivationTime">
                  ActivationTime
                </Label>
                <Input
                  value={slotFormData.ActivationTime}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      ActivationTime: e.target.value,
                    })
                  }
                  id="ActivationTime"
                  name="ActivationTime"
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
              {/* FallbackSubjects */}
              <Col xs="12" sm="6" md="3" className="mb-1">
                <Label className="form-label" for="FallbackSubjects">
                  FallbackSubjects
                </Label>
                <Input
                  id="FallbackSubjects"
                  name="FallbackSubjects"
                  value={slotFormData.FallbackSubjects}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      FallbackSubjects: e.target.value,
                    })
                  }
                />
              </Col>
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
              <Col xs="12">
                <DataTable
                  noDataComponent={
                    <div style={{ margin: "24px 0" }}>
                      No Destination Rate Added Yet.
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
export default RatingProfilesNew;
