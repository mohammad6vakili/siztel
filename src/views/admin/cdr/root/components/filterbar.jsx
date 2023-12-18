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
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filterbar = ({ filters, setFilters, getCdr }) => {
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
            {/* RunIDs */}
            <Col className="mt-1" xs="12" sm="6" md="3">
              <Label for="RunIDs" className="form-label">
                RunIDs
              </Label>
              <Input
                name="RunIDs"
                id="RunIDs"
                value={filters.RunIDs}
                onChange={(e) =>
                  setFilters({ ...filters, RunIDs: e.target.value })
                }
              />
            </Col>
            {/* Tenants */}
            <Col className="mt-1" xs="12" sm="6" md="3">
              <Label for="Tenants" className="form-label">
                Tenants
              </Label>
              <Input
                name="Tenants"
                id="Tenants"
                value={filters.Tenants}
                onChange={(e) =>
                  setFilters({ ...filters, Tenants: e.target.value })
                }
              />
            </Col>
            {/* Accounts */}
            <Col className="mt-1" xs="12" sm="6" md="3">
              <Label for="Accounts" className="form-label">
                Accounts
              </Label>
              <Input
                name="Accounts"
                id="Accounts"
                value={filters.Accounts}
                onChange={(e) =>
                  setFilters({ ...filters, Accounts: e.target.value })
                }
              />
            </Col>
            {/* Category */}
            <Col className="mt-1" xs="12" sm="6" md="3">
              <Label for="Category" className="form-label">
                Category
              </Label>
              <Input
                name="Category"
                id="Category"
                value={filters.Category}
                onChange={(e) =>
                  setFilters({ ...filters, Category: e.target.value })
                }
              />
            </Col>
          </Row>
          {/* actions */}
          <Col sm="12" className="mt-2 d-flex justify-content-end">
            <CustomButton
              onClick={() => {
                setFilters({
                  RunIDs: "",
                  Tenants: "",
                  Accounts: "",
                  Category: "",
                });
                getCdr("without_filter");
              }}
              style={{ marginRight: 8 }}
              color="danger"
            >
              Clear Filters
            </CustomButton>
            <CustomButton onClick={() => getCdr()} color="primary">
              Search and Filter
            </CustomButton>
          </Col>
        </CardBody>
      </Collapse>
    </Card>
  );
};
export default Filterbar;
