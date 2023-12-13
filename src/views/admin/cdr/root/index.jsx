import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useCdr from "../../../../hooks/use_cdr";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import CdrData from "../../../../data/cdr.json";
import { useNavigate } from "react-router-dom";
import Filterbar from "./components/filterbar";
import { useSelector } from "react-redux";

const CdrRoot = () => {
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { getCdr, filters, setFilters, loadings } = useCdr();

  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getCdr();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Breadcrumbs title="CDR" data={[{ title: "CDR" }]} />
      {/* filterbar */}
      <Filterbar filters={filters} setFilters={setFilters} getCdr={getCdr} />
      {/* tpids loading */}
      {getAllTpIdsLoading ? (
        <div
          style={{ width: "100%", height: "50vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          Loading TPIds...
        </div>
      ) : null}
      {/* table loading */}
      {!getAllTpIdsLoading && loadings.getCdr ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* datatable */}
      {!getAllTpIdsLoading && !loadings.getCdr ? (
        <div className="react-dataTable mv_datatable_container">
          {!loadings.getCdr ? (
            <Fragment>
              <DataTable
                noDataComponent={
                  loadings.getCdr ? (
                    ""
                  ) : (
                    <div style={{ margin: "24px 0" }}>No CDR Founded!</div>
                  )
                }
                noHeader
                columns={columns}
                className="react-dataTable"
                style={{ background: "red" }}
                data={CdrData}
                theme={skin === "dark" ? "darkTheme" : ""}
              />
            </Fragment>
          ) : null}
          {loadings.getCdr ? (
            <div className="datatable_loading_cover">
              <ProgressLoading />
            </div>
          ) : null}
        </div>
      ) : null}
    </Fragment>
  );
};
export default CdrRoot;
