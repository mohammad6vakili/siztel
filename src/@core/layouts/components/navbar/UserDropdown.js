// // ** React Imports
// import { Link } from "react-router-dom";
// import logoImage from "../../../../assets/image/logo.png";
// import Skeleton from "../../../../components/skeleton";

// // ** Third Party Components
// import { User, Power, Settings, BarChart2 } from "react-feather";

// // ** Reactstrap Imports
// import {
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownToggle,
//   DropdownItem,
// } from "reactstrap";

// import useAuth from "../../../../hooks/useAuth";
// import { useSelector } from "react-redux";
// import { Fragment } from "react";

// const UserDropdown = ({ userLoadings }) => {
//   const { userLogout, loadings } = useAuth();

//   const userProfile = useSelector((state) => state.account.userProfile);

//   return (
//     <UncontrolledDropdown
//       tag="li"
//       className="dropdown-user nav-item"
//       style={{ paddingLeft: 15 }}
//     >
//       <DropdownToggle
//         href="/"
//         tag="a"
//         className="nav-link dropdown-user-link"
//         onClick={(e) => e.preventDefault()}
//       >
//         <div className="user-nav d-sm-flex d-none">
//           {userLoadings?.getUserProfile ? (
//             <div className="d-flex flex-column align-items-end">
//               <Skeleton
//                 style={{
//                   width: 100,
//                   height: 15,
//                   borderRadius: 8,
//                   marginBottom: 5,
//                 }}
//               />
//               <Skeleton style={{ width: 80, height: 11, borderRadius: 8 }} />
//             </div>
//           ) : !userProfile?.first_name && !userProfile?.last_name ? (
//             <span className="user-name fw-bold">{userProfile?.email}</span>
//           ) : (
//             <Fragment>
//               <span className="user-name fw-bold">
//                 {userProfile?.first_name ? userProfile?.first_name : ""}{" "}
//                 {userProfile?.last_name ? userProfile?.last_name : ""}
//               </span>
//               <span className="user-status">
//                 {userProfile?.profile?.profile_type}
//               </span>
//             </Fragment>
//           )}
//         </div>
//         <img src={logoImage} alt="SIZ TEL" style={{ height: 25 }} />
//       </DropdownToggle>
//       <DropdownMenu end>
//         <DropdownItem tag={Link} to="/profile">
//           <User size={14} className="me-75" />
//           <span className="align-middle">Profile</span>
//         </DropdownItem>
//         <DropdownItem tag={Link} to="/settings">
//           <Settings size={14} className="me-75" />
//           <span className="align-middle">Settings</span>
//         </DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem tag={Link} to="/activity">
//           <BarChart2 size={14} className="me-75" />
//           <span className="align-middle">Activity</span>
//         </DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem
//           tag={"div"}
//           onClick={() => {
//             if (!loadings.logout) {
//               userLogout();
//             }
//           }}
//         >
//           <Power size={14} className="me-75" />
//           <span className="align-middle">
//             {loadings.logout ? "..." : "Logout"}
//           </span>
//         </DropdownItem>
//       </DropdownMenu>
//     </UncontrolledDropdown>
//   );
// };

// export default UserDropdown;
