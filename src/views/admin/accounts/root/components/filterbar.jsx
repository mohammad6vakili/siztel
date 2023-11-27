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

const Filterbar = () => {
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
            {/* title 1 */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                Search by Title 1
              </Label>
              <Input />
            </Col>
            {/* title 2 */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                Search by Title 2
              </Label>
              <Input />
            </Col>
            {/* title 3 */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                Search by Title 3
              </Label>
              <Input />
            </Col>
            {/* title 4 */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                Search by Title 4
              </Label>
              <Input />
            </Col>
            {/* title 5 */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                Search by Title 5
              </Label>
              <CustomDatePicker inputPlaceholder="Click to open calendar" />
            </Col>
            {/* title 6 */}
            <Col className="mt-1" xs="12" sm="6" md="4">
              <Label for="user" className="form-label">
                Search by Title 6
              </Label>
              <CustomDatePicker inputPlaceholder="Click to open calendar" />
            </Col>
          </Row>
          {/* actions */}
          <Col sm="12" className="mt-2 d-flex justify-content-end">
            <CustomButton style={{ marginRight: 8 }} color="danger">
              Clear Filters
            </CustomButton>
            <CustomButton color="primary">Search and Filter</CustomButton>
          </Col>
        </CardBody>
      </Collapse>
    </Card>
  );
};
export default Filterbar;
