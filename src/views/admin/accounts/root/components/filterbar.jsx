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

const Filterbar = ({ filters, setFilters, getAccounts }) => {
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
            {/* Tenant */}
            <Col className="mt-1" xs="12" sm="6" md="3">
              <Label for="user" className="form-label">
                Tenant
              </Label>
              <Input
                name="Tenant"
                id="Tenant"
                value={filters.Tenant}
                onChange={(e) =>
                  setFilters({ ...filters, Tenant: e.target.value })
                }
              />
            </Col>
          </Row>
          {/* actions */}
          <Col sm="12" className="mt-2 d-flex justify-content-end">
            <CustomButton
              onClick={() => {
                setFilters({
                  Tenant: "",
                });
                getAccounts("without_filter");
              }}
              style={{ marginRight: 8 }}
              color="danger"
            >
              Clear Filters
            </CustomButton>
            <CustomButton onClick={getAccounts} color="primary">
              Search and Filter
            </CustomButton>
          </Col>
        </CardBody>
      </Collapse>
    </Card>
  );
};
export default Filterbar;
