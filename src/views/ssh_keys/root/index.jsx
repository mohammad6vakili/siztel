// import { Fragment, useEffect } from "react";
// import Breadcrumbs from "@components/breadcrumbs";
// import useSsh from "../../../hooks/useSsh";
// import { useDispatch, useSelector } from "react-redux";
// import { setGetSshKeysCurrent } from "../../../redux/ssh_slice";
// import ProgressLoading from "../../../components/progress_loading";
// import ReactPaginate from "react-paginate";
// import { columns } from "./datatable/index";
// import { useSkin } from "@hooks/useSkin";
// import DataTable from "react-data-table-component";
// import { ChevronDown } from "react-feather";

// const SshKeys = () => {
//   const dispatch = useDispatch();
//   const { skin } = useSkin();
//   const { getUserSshKeys } = useSsh();

//   const sshKeys = useSelector((state) => state.ssh.sshKeys);
//   const getSshKeysLoading = useSelector((state) => state.ssh.getSshKeysLoading);
//   const getSshKeysCurrent = useSelector((state) => state.ssh.getSshKeysCurrent);
//   const getSshKeysTotal = useSelector((state) => state.ssh.getSshKeysTotal);
//   const getSshKeysPerPage = useSelector((state) => state.ssh.getSshKeysPerPage);

//   // ** Function to handle Pagination
//   const handlePagination = (page) => {
//     dispatch(setGetSshKeysCurrent(page.selected));
//     getUserSshKeys(page.selected + 1);
//   };

//   // ** Custom Pagination
//   const CustomPagination = () => (
//     <ReactPaginate
//       previousLabel=""
//       nextLabel=""
//       forcePage={getSshKeysCurrent}
//       onPageChange={(page) => handlePagination(page)}
//       pageCount={getSshKeysTotal}
//       breakLabel="..."
//       pageRangeDisplayed={2}
//       marginPagesDisplayed={2}
//       activeClassName="active"
//       pageClassName="page-item"
//       breakClassName="page-item"
//       nextLinkClassName="page-link"
//       pageLinkClassName="page-link"
//       breakLinkClassName="page-link"
//       previousLinkClassName="page-link"
//       nextClassName="page-item next-item"
//       previousClassName="page-item prev-item"
//       containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
//     />
//   );

//   useEffect(() => {
//     dispatch(setGetSshKeysCurrent(0));
//     getUserSshKeys(1);
//   }, []);

//   return (
//     <Fragment>
//       <Breadcrumbs title="SSH Keys" data={[{ title: "SSH Keys" }]} />
//       {/* datatable */}
//       <div className="react-dataTable mv_datatable_container">
//         {getSshKeysPerPage ? (
//           <Fragment>
//             <DataTable
//               noDataComponent={
//                 getSshKeysLoading ? (
//                   ""
//                 ) : (
//                   <div style={{ margin: "24px 0" }}>No Ssh Key Founded!</div>
//                 )
//               }
//               noHeader
//               pagination
//               columns={columns}
//               paginationPerPage={getSshKeysPerPage}
//               className="react-dataTable"
//               style={{ background: "red" }}
//               sortIcon={<ChevronDown size={10} />}
//               paginationComponent={CustomPagination}
//               data={sshKeys}
//               theme={skin === "dark" ? "darkTheme" : ""}
//             />
//           </Fragment>
//         ) : null}
//         {getSshKeysLoading ? (
//           <div className="datatable_loading_cover">
//             <ProgressLoading />
//           </div>
//         ) : null}
//       </div>
//     </Fragment>
//   );
// };
// export default SshKeys;
