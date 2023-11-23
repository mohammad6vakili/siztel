import { useState, Fragment } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { columns } from "../datatable/columns";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Collapse,
} from "reactstrap";
import { useSkin } from "@hooks/useSkin";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const RateCard = ({ rate, loadings }) => {
  const { skin } = useSkin();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <CardHeader style={{ cursor: "pointer" }} onClick={toggle}>
        <CardTitle>RateId : {rate.RateId}</CardTitle>
        <div className="d-flex align-items-center">
          <Button
            onClick={() => navigate("/rules/rates/update")}
            style={{ marginRight: 8 }}
            color="primary"
          >
            Update
          </Button>
          {isOpen ? (
            <IoIosArrowUp fontSize={22} />
          ) : (
            <IoIosArrowDown fontSize={22} />
          )}
        </div>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody>
          <div className="react-dataTable mv_datatable_container">
            <Fragment>
              <DataTable
                noDataComponent={
                  loadings.getRates ? (
                    ""
                  ) : (
                    <div style={{ margin: "24px 0" }}>No Timing Founded!</div>
                  )
                }
                noHeader
                // pagination
                columns={columns}
                // paginationPerPage={10}
                className="react-dataTable"
                style={{ background: "red" }}
                sortIcon={<ChevronDown size={10} />}
                // paginationComponent={CustomPagination}
                data={rate.Slots}
                theme={skin === "dark" ? "darkTheme" : ""}
              />
            </Fragment>
          </div>
        </CardBody>
      </Collapse>
    </Card>
  );
};
export default RateCard;
