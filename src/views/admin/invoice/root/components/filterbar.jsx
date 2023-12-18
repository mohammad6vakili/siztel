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
            <Col className="mt-1" xs="12" sm="6" md="4">
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
            {/* from_time */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                From Time
              </Label>
              <CustomDatePicker
                inputPlaceholder="Click to open calendar"
                value={filters.from_time}
                onChange={(value) => {
                  setFilters({
                    ...filters,
                    from_time: value,
                  });
                }}
              />
            </Col>
            {/* to_time */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                To Time
              </Label>
              <CustomDatePicker
                inputPlaceholder="Click to open calendar"
                value={filters.to_time}
                onChange={(value) => {
                  setFilters({
                    ...filters,
                    to_time: value,
                  });
                }}
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
