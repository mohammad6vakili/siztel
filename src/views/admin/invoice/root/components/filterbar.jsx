import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Label,
  Input,
  Collapse,
} from "reactstrap";
import CustomButton from "../../../../../components/button/index";
import CustomDatePicker from "../../../../../components/datepicker";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filterbar = ({ filters, setFilters, getInvoices }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      {/* card title */}
      <CardHeader
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
        className="border-bottom"
      >
        <CardTitle>Search and Filter</CardTitle>
        <div
          style={
            open
              ? { transform: "rotate(-180deg)", transition: "all .2s" }
              : { transition: "all .2s" }
          }
        >
          <IoIosArrowDown />
        </div>
      </CardHeader>
      {/* card body */}
      <Collapse isOpen={open}>
        <CardBody>
          <Row>
            {/* imsi */}
            <Col className="mt-1" xs="12" sm="6" md="3">
              <Label for="user" className="form-label">
                imsi
              </Label>
              <Input
                name="imsi"
                id="imsi"
                value={filters.imsi}
                onChange={(e) =>
                  setFilters({ ...filters, imsi: e.target.value })
                }
              />
            </Col>
          </Row>
          {/* actions */}
          <Col sm="12" className="mt-2 d-flex justify-content-end">
            <CustomButton
              onClick={() => {
                setFilters({
                  imsi: "",
                  from_time: null,
                  to_time: null,
                });
                getInvoices(true);
              }}
              style={{ marginRight: 8 }}
              color="danger"
            >
              Clear Filters
            </CustomButton>
            <CustomButton onClick={() => getInvoices(false)} color="primary">
              Search and Filter
            </CustomButton>
          </Col>
        </CardBody>
      </Collapse>
    </Card>
  );
};
export default Filterbar;
