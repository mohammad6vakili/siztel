import { useState, Fragment } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { columns } from "../datatable/columns";
import { Card, CardBody, Button, Collapse } from "reactstrap";
import { useSkin } from "@hooks/useSkin";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ActionPlanCard = ({ rate, loadings }) => {
  const { skin } = useSkin();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card
      className="border-bottom"
      style={{ borderRadius: 0, marginBottom: 0 }}
    >
      <div
        style={{ cursor: "pointer", padding: "0 12px", height: 48 }}
        onClick={toggle}
        className="d-flex flex-row align-items-center justify-content-between"
      >
        <div>Id : {rate.Id}</div>
        <div>TPid : {rate.TPid}</div>
        <div className="d-flex align-items-center">
          <Button
            onClick={() => navigate("/rules/action_plans/update")}
            style={{ marginRight: 8 }}
            color="primary"
            size="sm"
          >
            Update
          </Button>
          {isOpen ? (
            <IoIosArrowUp fontSize={18} />
          ) : (
            <IoIosArrowDown fontSize={18} />
          )}
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <CardBody>
          <div className="react-dataTable mv_datatable_container">
            <Fragment>
              <DataTable
                noDataComponent={
                  loadings.getRates ? (
                    ""
                  ) : (
                    <div style={{ margin: "24px 0" }}>
                      No Action Plan Founded!
                    </div>
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
export default ActionPlanCard;
