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
import { setSlots } from "../../../../redux/invoice_slice";
import CustomDatePicker from "../../../../components/datepicker";
const InvoiceUpdate = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [slotFormData, setSlotFormData] = useState({
    Title: "",
    Cost: 0,
  });

  const slots = useSelector((state) => state.invoice.slots);

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
      <Breadcrumbs
        title="Update Invoice"
        data={[{ title: "Update Invoice" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/admin/invoice");
          toast.success("Successfully Updated!");
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Invoice Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row className="border-bottom mb-1">
              {/* AccountImsi */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="AccountImsi">
                  AccountImsi
                </Label>
                <Input id="AccountImsi" name="AccountImsi" />
              </Col>
              {/* InvoicePrice */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="InvoicePrice">
                  InvoicePrice
                </Label>
                <Input id="InvoicePrice" name="InvoicePrice" type="number" />
              </Col>
              {/* Status */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="Status">
                  Status
                </Label>
                <Input id="Status" name="Status" />
              </Col>
              {/* CreatedAt */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="CreatedAt">
                  CreatedAt
                </Label>
                <CustomDatePicker
                  inputName="StartTime"
                  inputPlaceholder="Click to open calendar"
                />
              </Col>
              {/* UpdatedAt */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="UpdatedAt">
                  UpdatedAt
                </Label>{" "}
                <CustomDatePicker
                  inputName="StartTime"
                  inputPlaceholder="Click to open calendar"
                />
              </Col>
              {/* StartTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="StartTime">
                  StartTime
                </Label>
                <CustomDatePicker
                  inputName="StartTime"
                  inputPlaceholder="Click to open calendar"
                />
              </Col>
              {/* EndTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="EndTime">
                  EndTime
                </Label>
                <CustomDatePicker
                  inputName="StartTime"
                  inputPlaceholder="Click to open calendar"
                />
              </Col>
              {/* DeletedAt */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="DeletedAt">
                  DeletedAt
                </Label>{" "}
                <CustomDatePicker
                  inputName="StartTime"
                  inputPlaceholder="Click to open calendar"
                />
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
export default InvoiceUpdate;
