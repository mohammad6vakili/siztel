import { Fragment, useState } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { columns } from "../root/datatable/cost_price_columns";
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
import { setSlots } from "../../../../redux/cdr_slice";

const CdrNew = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [slotFormData, setSlotFormData] = useState({
    Title: "",
    Cost: 0,
  });

  const slots = useSelector((state) => state.cdr.slots);

  const handleAddSlot = () => {
    let array = [...slots];
    if (slotFormData.Title.length === 0) {
      toast.error("Please enter Title.");
    } else {
      array.push({ ...slotFormData, id: Math.random() * 326782382 });
      dispatch(setSlots(array));
      setSlotFormData({
        Title: "",
        Cost: 0,
      });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs title="New CDR" data={[{ title: "New CDR" }]} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/admin/cdr");
          toast.success("Successfully Created!");
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New CDR Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row className="border-bottom mb-1">
              {/* CGRID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="CGRID">
                  CGRID
                </Label>
                <Input id="CGRID" name="CGRID" />
              </Col>
              {/* RunID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="RunID">
                  RunID
                </Label>
                <Input id="RunID" name="RunID" type="number" />
              </Col>
              {/* OriginID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="OriginID">
                  OriginID
                </Label>
                <Input id="OriginID" name="OriginID" />
              </Col>
              {/* ToR */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ToR">
                  ToR
                </Label>
                <Input id="ToR" name="ToR" />
              </Col>
              {/* RequestType */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="RequestType">
                  RequestType
                </Label>
                <Input id="RequestType" name="RequestType" />
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
              {/* SetupTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="SetupTime">
                  SetupTime
                </Label>
                <Input id="SetupTime" name="SetupTime" />
              </Col>
              {/* AnswerTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="AnswerTime">
                  AnswerTime
                </Label>
                <Input id="AnswerTime" name="AnswerTime" />
              </Col>
              {/* Usage */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Usage">
                  Usage
                </Label>
                <Input id="Usage" name="Usage" />
              </Col>
              {/* Cost */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Cost">
                  Cost
                </Label>
                <Input id="Cost" name="Cost" />
              </Col>
              {/* AuthApplicationId */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="AuthApplicationId">
                  AuthApplicationId
                </Label>
                <Input id="AuthApplicationId" name="AuthApplicationId" />
              </Col>
              {/* IMEI */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="IMEI">
                  IMEI
                </Label>
                <Input id="IMEI" name="IMEI" />
              </Col>
            </Row>
            {/* CostDetails */}
            <Row>
              <Col xs="12">
                <CardTitle>Cost Details</CardTitle>
              </Col>
              {/* Title */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Title">
                  Title
                </Label>
                <Input
                  value={slotFormData.Title}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Title: e.target.value,
                    })
                  }
                  id="Title"
                  name="Title"
                />
              </Col>
              {/* Cost */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Cost">
                  Cost
                </Label>
                <Input
                  value={slotFormData.Cost}
                  onChange={(e) =>
                    setSlotFormData({
                      ...slotFormData,
                      Cost: e.target.value,
                    })
                  }
                  id="Cost"
                  name="Cost"
                  type="number"
                />
              </Col>
              {/* action */}
              <Col
                xs="12"
                sm="6"
                md="4"
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
                      No Cost Detail Added Yet.
                    </div>
                  }
                  noHeader
                  columns={columns}
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
export default CdrNew;
