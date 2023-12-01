import { Fragment, useState, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import { useNavigate, useSearchParams } from "react-router-dom";
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

const DestinationsUpdate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { updateDestinationController, loadings } = useDestinations();

  const [PrefixesValue, setPrefixesValue] = useState("");

  useEffect(() => {
    let entity_id = searchParams.get("entity_id");
    if (entity_id) {
      toast.success(`You are in update mode for ${entity_id}`);
    } else {
      navigate("/rules/destinations");
    }
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        title="Update Destination"
        data={[{ title: "Update Destination" }]}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          window.scroll({ top: 0, behavior: "smooth" });
          updateDestinationController.handleSubmit();
        }}
        className="d-flex flex-column align-items-center"
      >
        <Card className="w-100">
          {/* card header */}
          <CardHeader className="border-bottom">
            <CardTitle>Update Destination Form</CardTitle>
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
                  value={updateDestinationController.values.TPid}
                  onChange={updateDestinationController.handleChange}
                  invalid={
                    updateDestinationController.touched.TPid &&
                    updateDestinationController.errors.TPid
                  }
                />
                {updateDestinationController.touched.TPid &&
                updateDestinationController.errors.TPid ? (
                  <FormFeedback>
                    {updateDestinationController.errors.TPid}
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
                  value={updateDestinationController.values.ID}
                  onChange={updateDestinationController.handleChange}
                  invalid={
                    updateDestinationController.touched.ID &&
                    updateDestinationController.errors.ID
                  }
                />
                {updateDestinationController.touched.ID &&
                updateDestinationController.errors.ID ? (
                  <FormFeedback>
                    {updateDestinationController.errors.ID}
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
                      updateDestinationController.touched.Prefixes &&
                      updateDestinationController.errors.Prefixes
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
                          ...updateDestinationController.values.Prefixes,
                        ];
                        array.push(PrefixesValue);
                        updateDestinationController.setFieldValue(
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
                {updateDestinationController.touched.Prefixes &&
                updateDestinationController.errors.Prefixes ? (
                  <FormFeedback style={{ display: "block" }}>
                    {updateDestinationController.errors.Prefixes}
                  </FormFeedback>
                ) : null}
              </Col>
              {updateDestinationController.values.Prefixes.map(
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
                          ...updateDestinationController.values.Prefixes,
                        ];
                        array = array.filter((intem, i) => i !== index);
                        updateDestinationController.setFieldValue(
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
              loading={loadings.updateDestination}
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
export default DestinationsUpdate;
