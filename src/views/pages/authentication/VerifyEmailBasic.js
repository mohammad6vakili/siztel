// // ** React Imports
// import { Fragment, useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// // ** Reactstrap Imports
// import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
// import PinCodeInput from "../../../components/pin_input";

// import logoImage from "../../../assets/image/logo.png";

// // ** Styles
// import "@styles/react/pages/page-authentication.scss";
// import useAuth from "../../../hooks/useAuth";
// import circleLoading from "../../../assets/loadings/circle_loading.svg";

// const VerifyEmailBasic = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const {
//     loadings,
//     verifyRegisterEmailWithCode,
//     verifyRegisterEmailResendCode,
//     verifyRegisterEmailWithToken,
//   } = useAuth();

//   const [verifyEmail, setVerifyEmail] = useState("");

//   // effects
//   useEffect(() => {
//     let email = searchParams.get("email");
//     let c = searchParams.get("c");
//     if (email && !c) {
//       setVerifyEmail(email);
//     } else if (!email && c) {
//       verifyRegisterEmailWithToken(c);
//     } else {
//       navigate("/register");
//     }
//   }, []);

//   return (
//     <div className="auth-wrapper auth-basic px-2">
//       <div className="auth-inner my-2">
//         <Card className="mb-0">
//           <CardBody>
//             <Link
//               className="brand-logo d-flex align-items-center"
//               to="/"
//               onClick={(e) => e.preventDefault()}
//             >
//               <img src={logoImage} alt="SIZ TEL" />
//               <h2 className="brand-text text-primary ms-1 mt-1">SIZ TEL</h2>
//             </Link>
//             {loadings.verifyRegisterEmailWithToken ? (
//               <Fragment>
//                 <CardTitle tag="h2" className="fw-bolder mb-1 text-center">
//                   Verifing your email
//                 </CardTitle>
//                 <CardText className="mb-2 text-center">
//                   Please wait a while for us to redirect you
//                 </CardText>
//                 <div className="d-flex justify-content-center">
//                   <img
//                     style={{ height: 50, marginLeft: 8 }}
//                     src={circleLoading}
//                     alt="loading..."
//                   />
//                 </div>
//               </Fragment>
//             ) : (
//               <Fragment>
//                 <CardTitle tag="h2" className="fw-bolder mb-1 ">
//                   Verify your email ✉️
//                 </CardTitle>
//                 <CardText className="mb-2">
//                   We've sent a code to your email address
//                   {verifyEmail ? ":" : null}{" "}
//                   <span className="fw-bolder">{verifyEmail}</span> Please insert
//                   the code to continue.
//                 </CardText>
//                 <PinCodeInput
//                   disabled={loadings.verifyRegisterEmailWithCode}
//                   onComplete={(value, index) => {
//                     verifyRegisterEmailWithCode(verifyEmail, value);
//                   }}
//                 />
//                 {/* resend code */}
//                 {verifyEmail ? (
//                   <p className="text-center mt-2 d-flex align-items-center justify-content-center">
//                     <span>Didn't receive an email? </span>
//                     {loadings?.verifyRegisterEmailResendCode ? (
//                       <img
//                         style={{ height: 20, marginLeft: 8 }}
//                         src={circleLoading}
//                         alt="loading..."
//                       />
//                     ) : (
//                       <a
//                         href="/"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           verifyRegisterEmailResendCode(verifyEmail);
//                         }}
//                       >
//                         <span>Resend</span>
//                       </a>
//                     )}
//                   </p>
//                 ) : null}
//               </Fragment>
//             )}
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmailBasic;
