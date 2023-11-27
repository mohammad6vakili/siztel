import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate } from "react-router-dom";
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

const ChargersUpdate = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Breadcrumbs
        title="Update Charger"
        data={[{ title: "Update Charger" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/rules/chargers");
          toast.success("Successfully Updated!");
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Charger Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row>
              {/* TPid */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  TPid
                </Label>
                <Input id="TPid" name="TPid" />
              </Col>
              {/* Tenant */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Tenant
                </Label>
                <Input id="Tenant" name="Tenant" />
              </Col>
              {/* ID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  ID
                </Label>
                <Input id="ID" name="ID" />
              </Col>
              {/* ActivationTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  ActivationTime
                </Label>
                <Input id="ActivationTime" name="ActivationTime" />
              </Col>
              {/* ExpiryTime */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  ExpiryTime
                </Label>
                <Input id="ExpiryTime" name="ExpiryTime" />
              </Col>
              {/* RunID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  RunID
                </Label>
                <Input id="RunID" name="RunID" />
              </Col>
              {/* Weight */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Weight
                </Label>
                <Input type="number" id="Weight" name="Weight" />
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
export default ChargersUpdate;
