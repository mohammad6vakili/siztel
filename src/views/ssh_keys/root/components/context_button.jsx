// import {
//   CiMenuKebab,
//   FiTrash,
//   AiOutlineCloseCircle,
//   IoCloudDoneOutline,
//   FiEdit,
//   MdOutlineCloudDone,
// } from "react-icons/all";
// import {
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownToggle,
//   DropdownItem,
//   Input,
//   Label,
//   Form,
// } from "reactstrap";
// import Confirm from "../../../../components/confirm";
// import { Fragment } from "react";

// const ContextButton = ({ row }) => {
//   return (
//     <Fragment>
//       <UncontrolledDropdown style={{ width: "100%", cursor: "pointer" }}>
//         <div style={{ width: "100%" }}>
//           <DropdownToggle
//             className="w-100 d-flex justify-content-center align-items-center"
//             tag="div"
//           >
//             <CiMenuKebab />
//           </DropdownToggle>
//         </div>
//         <DropdownMenu style={{ zIndex: 99999 }} start>
//           {/* edit */}
//           <DropdownItem
//             tag="a"
//             href="/"
//             className="w-100"
//             onClick={(e) => {
//               e.preventDefault();
//               setUpdateTitleConfirm(1);
//             }}
//           >
//             <FiEdit size={15} />
//             <span className="align-middle ms-50">Edit title</span>
//           </DropdownItem>
//           {/* status */}
//           <DropdownItem
//             tag="a"
//             href="/"
//             className="w-100"
//             onClick={(e) => {
//               e.preventDefault();
//               setUpdateStatusConfirm(1);
//             }}
//           >
//             {row?.status == 1 ? (
//               <AiOutlineCloseCircle size={15} />
//             ) : (
//               <IoCloudDoneOutline size={15} />
//             )}
//             <span className="align-middle ms-50">
//               {row?.status == 1 ? "Disable" : "Enable"}
//             </span>
//           </DropdownItem>
//           {/* set as default */}
//           {row?.default == 0 ? (
//             <DropdownItem
//               tag="a"
//               href="/"
//               className="w-100"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setUpdateDefaultConfirm(1);
//               }}
//             >
//               <MdOutlineCloudDone size={15} />
//               <span className="align-middle ms-50">Set as default</span>
//             </DropdownItem>
//           ) : null}
//           {/* delete */}
//           <DropdownItem
//             tag="a"
//             href="/"
//             className="w-100"
//             onClick={(e) => {
//               e.preventDefault();
//               setDeleteConfirm(1);
//             }}
//           >
//             <FiTrash size={15} />
//             <span className="align-middle ms-50">Delete</span>
//           </DropdownItem>
//         </DropdownMenu>
//       </UncontrolledDropdown>
//       {/* update title confirm */}
//       <Confirm
//         visible={updateTitleConfirm}
//         setVisible={setUpdateTitleConfirm}
//         title="Please enter the new title"
//         noAction={() => setUpdateTitleConfirm(null)}
//         noColor="secondary"
//         noTitle="Cancel"
//         yesLoading={sshLoadings.updateTitle}
//         yesAction={() => updateSshKeyTitle(row)}
//         yesColor="success"
//         yesTitle="Update title"
//         type="local"
//       >
//         <Label for="title">Title</Label>
//         <Input
//           autoFocus={true}
//           value={updateTitle}
//           onChange={(e) => setUpdateTitle(e.target.value)}
//           name="title"
//           id="title"
//         />
//       </Confirm>
//       {/* update status confirm */}
//       <Confirm
//         visible={updateStatusConfirm}
//         setVisible={setUpdateStatusConfirm}
//         title={
//           row?.status == 1
//             ? "Are you sure you want to disable this ssh key?"
//             : "Are you sure you want to enable this ssh key?"
//         }
//         noAction={() => setUpdateStatusConfirm(null)}
//         noColor="secondary"
//         noTitle="Cancel"
//         yesLoading={sshLoadings.updateStatus}
//         yesAction={() => {
//           if (row?.status == 1) {
//             updateSshKeyStatus(row, 0);
//           } else {
//             updateSshKeyStatus(row, 1);
//           }
//         }}
//         yesColor={row?.status == 1 ? "danger" : "success"}
//         yesTitle={row?.status == 1 ? "Disable ssh key" : "Enable ssh key"}
//         type="local"
//       />
//       {/* update default confirm */}
//       <Confirm
//         visible={updateDefaultConfirm}
//         setVisible={setUpdateDefaultConfirm}
//         title={"Are you sure you want to set this ssh key as default?"}
//         noAction={() => setUpdateDefaultConfirm(null)}
//         noColor="secondary"
//         noTitle="Cancel"
//         yesLoading={sshLoadings.updateDefault}
//         yesAction={() => setSshKeyAsDefault(row)}
//         yesColor={"success"}
//         yesTitle={"Set as default"}
//         type="local"
//       />
//       {/* delete confirm */}
//       <Confirm
//         visible={deleteConfirm}
//         setVisible={setDeleteConfirm}
//         title={"Are you sure you want to delete this ssh key?"}
//         noAction={() => setDeleteConfirm(null)}
//         noColor="secondary"
//         noTitle="Cancel"
//         yesLoading={sshLoadings.deleteSshKey}
//         yesAction={() => deleteSshKey(row)}
//         yesColor={"danger"}
//         yesTitle={"Delete ssh key"}
//         type="local"
//       />
//     </Fragment>
//   );
// };
// export default ContextButton;
