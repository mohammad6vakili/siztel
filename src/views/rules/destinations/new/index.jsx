import { Fragment, useState } from "react";
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
  FormFeedback,
} from "reactstrap";
import CustomButton from "../../../../components/button";
import useDestinations from "../../../../hooks/use_destionations";
import { IoMdClose } from "react-icons/io";

const DestinationsNew = () => {
  const navigate = useNavigate();
  const { createDestinationController, loadings } = useDestinations();

  const [PrefixesValue, setPrefixesValue] = useState("");

  return (
    <Fragment>
      <Breadcrumbs
        title="New Destination"
        data={[{ title: "New Destination" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          createDestinationController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>New Destination Form</CardTitle>
          </CardHeader>
          {/* card body */}
          <CardBody className="pt-2">
            {/* form fields */}
            <Row>
              {/* TPid */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="TPid">
                  TPid
                </Label>
                <Input
                  id="TPid"
                  name="TPid"
                  disabled
                  value={createDestinationController.values.TPid}
                  onChange={createDestinationController.handleChange}
                  invalid={
                    createDestinationController.touched.TPid &&
                    createDestinationController.errors.TPid
                  }
                />
                {createDestinationController.touched.TPid &&
                createDestinationController.errors.TPid ? (
                  <FormFeedback>
                    {createDestinationController.errors.TPid}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* ID */}
              <Col xs="12" sm="6" md="4" className="mb-1">
                <Label className="form-label" for="ID">
                  ID
                </Label>
                <Input
                  id="ID"
                  name="ID"
                  value={createDestinationController.values.ID}
                  onChange={createDestinationController.handleChange}
                  invalid={
                    createDestinationController.touched.ID &&
                    createDestinationController.errors.ID
                  }
                />
                {createDestinationController.touched.ID &&
                createDestinationController.errors.ID ? (
                  <FormFeedback>
                    {createDestinationController.errors.ID}
                  </FormFeedback>
                ) : null}
              </Col>
              {/* Prefixes */}
              <Col xs="12" className="mb-1">
                <Label className="form-label" for="Prefixes">
                  Prefixes
                </Label>
                <div className="position-relative d-flex align-items-center">
                  <Input
                    id="Prefixes"
                    name="Prefixes"
                    value={PrefixesValue}
                    onChange={(e) => setPrefixesValue(e.target.value)}
                    invalid={
                      createDestinationController.touched.Prefixes &&
                      createDestinationController.errors.Prefixes
                    }
                  />
                  <button
                    type="button"
                    style={{
                      right: 35,
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                      width: 30,
                      height: 30,
                      border: "1px solid rgba(200,200,200,.5)",
                      fontSize: 18,
                      color: "#73bcf0",
                      cursor: "pointer",
                    }}
                    className="position-absolute"
                    onClick={() => {
                      if (PrefixesValue.length === 0) {
                        toast.error("Enter Filter ID value.");
                      } else {
                        let array = [
                          ...createDestinationController.values.Prefixes,
                        ];
                        array.push(PrefixesValue);
                        createDestinationController.setFieldValue(
                          "Prefixes",
                          array
                        );
                        setPrefixesValue("");
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                {createDestinationController.touched.Prefixes &&
                createDestinationController.errors.Prefixes ? (
                  <FormFeedback style={{ display: "block" }}>
                    {createDestinationController.errors.Prefixes}
                  </FormFeedback>
                ) : null}
              </Col>
              {createDestinationController.values.Prefixes.map(
                (item, index) => (
                  <Col xs="12" className="mb-1 d-flex align-items-center">
                    <span>{index + 1} -</span>
                    <span>{item}</span>
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "none",
                        marginLeft: "auto",
                      }}
                      onClick={() => {
                        let array = [
                          ...createDestinationController.values.Prefixes,
                        ];
                        array = array.filter((intem, i) => i !== index);
                        createDestinationController.setFieldValue(
                          "Prefixes",
                          array
                        );
                      }}
                    >
                      <IoMdClose style={{ fontSize: 14, color: "red" }} />
                    </button>
                  </Col>
                )
              )}
            </Row>
          </CardBody>
          {/* card footer */}
          <CardFooter className="border-top d-flex justify-content-center">
            {/* submit button */}
            <CustomButton
              loading={loadings.createDestination}
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
export default DestinationsNew;
