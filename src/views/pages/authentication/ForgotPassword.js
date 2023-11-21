// // ** React Imports
// import { useEffect } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import LogoImage from "@src/assets/image/logo.png";
// import PinCodeInput from "../../../components/pin_input";
// import InputPasswordToggle from "@components/input-password-toggle";
// import loadingCircle from "../../../assets/loadings/circle_loading.svg";

// // ** Reactstrap Imports
// import {
//   Row,
//   Col,
//   CardTitle,
//   CardText,
//   Form,
//   Label,
//   Input,
//   FormFeedback,
// } from "reactstrap";
// import CustomButton from "../../../components/button";

// // ** Custom Hooks
// import { useSkin } from "@hooks/useSkin";

// // ** Icons Imports
// import { ChevronLeft } from "react-feather";

// // ** Styles
// import "@styles/react/pages/page-authentication.scss";
// import useAuth from "../../../hooks/useAuth";

// const ForgotPassword = () => {
//   // ** Hooks
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const { skin } = useSkin();
//   const {
//     verifyForgotPasswordWithToken,
//     forgotPasswordController,
//     submitNewPasswordController,
//     setNewPasswordWithTokenController,
//     forgotPasswordTab,
//     forgotPasswordToken,
//     loadings,
//   } = useAuth();

//   const illustration =
//       skin === "dark"
//         ? "forgot-password-v2-dark.svg"
//         : "forgot-password-v2.svg",
//     source = require(`@src/assets/images/pages/${illustration}`).default;

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       navigate("/home");
//     } else {
//       let c = searchParams.get("c");
//       if (c) {
//         verifyForgotPasswordWithToken(c);
//       }
//     }
//   }, []);

//   return (
//     <div className="auth-wrapper auth-cover">
//       <Row className="auth-inner m-0">
//         {/* header logo */}
//         <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
//           <img style={{ height: 28 }} src={LogoImage} alt="SIZ TEL" />
//           <h2 className="brand-text text-primary ms-1">SIZ</h2>
//         </Link>
//         {/* illustration */}
//         <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
//           <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
//             <img className="img-fluid" src={source} alt="Login Cover" />
//           </div>
//         </Col>
//         <Col
//           className="d-flex align-items-center auth-bg px-2 p-lg-5"
//           lg="4"
//           sm="12"
//         >
//           {loadings?.verifyForgotPasswordWithToken ? (
//             <div className="w-100 d-flex flex-column align-items-center justify-content-center">
//               <CardTitle tag="h5" className="fw-bold mb-2 text-center">
//                 Evaluating the reset password link ...
//               </CardTitle>
//               <img
//                 src={loadingCircle}
//                 alt="loading..."
//                 style={{ height: 50 }}
//               />
//             </div>
//           ) : (
//             <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
//               {/* titles */}
//               <CardTitle tag="h2" className="fw-bold mb-1">
//                 {forgotPasswordToken
//                   ? "The link was successfully detected!"
//                   : "Forgot Password? 🔒"}
//               </CardTitle>
//               <CardText className="mb-2">
//                 {forgotPasswordToken
//                   ? "Now you can change your password and use the new password to sign in"
//                   : "Enter your email and we'll send you instructions to reset your password"}
//               </CardText>
//               {/* form */}
//               {forgotPasswordToken ? (
//                 <Form onSubmit={setNewPasswordWithTokenController.handleSubmit}>
//                   {/* new password */}
//                   <div className="mb-1">
//                     <Label className="form-label" for="new_password">
//                       New password
//                     </Label>
//                     <InputPasswordToggle
//                       id="new_password"
//                       name="new_password"
//                       className="input-group-merge"
//                       value={
//                         setNewPasswordWithTokenController.values.new_password
//                       }
//                       onChange={setNewPasswordWithTokenController.handleChange}
//                       invalid={
//                         setNewPasswordWithTokenController.touched
//                           .new_password &&
//                         setNewPasswordWithTokenController.errors.new_password
//                       }
//                     />
//                     {setNewPasswordWithTokenController.touched.new_password &&
//                     setNewPasswordWithTokenController.errors.new_password ? (
//                       <FormFeedback>
//                         {setNewPasswordWithTokenController.errors.new_password}
//                       </FormFeedback>
//                     ) : null}
//                   </div>
//                   {/* repeat new password */}
//                   <div className="mb-1">
//                     <Label className="form-label" for="repeat_new_password">
//                       Repeat new password
//                     </Label>
//                     <InputPasswordToggle
//                       id="repeat_new_password"
//                       name="repeat_new_password"
//                       className="input-group-merge"
//                       value={
//                         setNewPasswordWithTokenController.values
//                           .repeat_new_password
//                       }
//                       onChange={setNewPasswordWithTokenController.handleChange}
//                       invalid={
//                         setNewPasswordWithTokenController.touched
//                           .repeat_new_password &&
//                         setNewPasswordWithTokenController.errors
//                           .repeat_new_password
//                       }
//                     />
//                     {setNewPasswordWithTokenController.touched
//                       .repeat_new_password &&
//                     setNewPasswordWithTokenController.errors
//                       .repeat_new_password ? (
//                       <FormFeedback>
//                         {
//                           setNewPasswordWithTokenController.errors
//                             .repeat_new_password
//                         }
//                       </FormFeedback>
//                     ) : null}
//                   </div>
//                   <CustomButton
//                     loading={loadings.setNewPasswordWithToken}
//                     color="primary"
//                     block
//                   >
//                     Submit new password
//                   </CustomButton>
//                 </Form>
//               ) : (
//                 <Form
//                   className="auth-forgot-password-form mt-2"
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     if (forgotPasswordTab === 0) {
//                       forgotPasswordController.handleSubmit();
//                     } else {
//                       submitNewPasswordController.handleSubmit();
//                     }
//                   }}
//                 >
//                   {/* email */}
//                   <div className="mb-1">
//                     <Label
//                       className="form-label w-100 d-flex align-items-center justify-content-between"
//                       for="email"
//                     >
//                       <span>Email </span>
//                       {forgotPasswordTab === 1 ? (
//                         <a
//                           href="#"
//                           onClick={() => {
//                             if (!loadings.forgotPassword) {
//                               forgotPasswordController.handleSubmit();
//                             }
//                           }}
//                         >
//                           {loadings.forgotPassword ? (
//                             <img
//                               style={{ height: 10 }}
//                               src={loadingCircle}
//                               alt="loading..."
//                             />
//                           ) : (
//                             "resend reset link"
//                           )}
//                         </a>
//                       ) : null}
//                     </Label>
//                     <Input
//                       type="email"
//                       id="email"
//                       placeholder="Enter your email address"
//                       autoFocus
//                       disabled={forgotPasswordTab === 1}
//                       value={forgotPasswordController.values.email}
//                       onChange={forgotPasswordController.handleChange}
//                       invalid={
//                         forgotPasswordController.touched.email &&
//                         forgotPasswordController.errors.email
//                       }
//                     />
//                   </div>
//                   {/* pin code input */}
//                   {forgotPasswordTab === 1 ? (
//                     <div className="mb-1">
//                       <Label className="form-label">Verification code</Label>
//                       <PinCodeInput
//                         onChange={(value, index) => {
//                           submitNewPasswordController.setFieldValue(
//                             "verification_code",
//                             value
//                           );
//                         }}
//                         error={
//                           submitNewPasswordController.touched
//                             .verification_code &&
//                           submitNewPasswordController.errors.verification_code
//                         }
//                         disabled={loadings.submitNewPassword}
//                       />
//                     </div>
//                   ) : null}
//                   {/* new password */}
//                   {forgotPasswordTab === 1 ? (
//                     <div className="mb-1">
//                       <Label className="form-label" for="new_password">
//                         New password
//                       </Label>
//                       <InputPasswordToggle
//                         id="new_password"
//                         name="new_password"
//                         className="input-group-merge"
//                         value={submitNewPasswordController.values.new_password}
//                         onChange={submitNewPasswordController.handleChange}
//                         invalid={
//                           submitNewPasswordController.touched.new_password &&
//                           submitNewPasswordController.errors.new_password
//                         }
//                       />
//                       {submitNewPasswordController.touched.new_password &&
//                       submitNewPasswordController.errors.new_password ? (
//                         <FormFeedback>
//                           {submitNewPasswordController.errors.new_password}
//                         </FormFeedback>
//                       ) : null}
//                     </div>
//                   ) : null}
//                   {/* repeat new password */}
//                   {forgotPasswordTab === 1 ? (
//                     <div className="mb-1">
//                       <Label className="form-label" for="repeat_new_password">
//                         Repeat new password
//                       </Label>
//                       <InputPasswordToggle
//                         id="repeat_new_password"
//                         name="repeat_new_password"
//                         className="input-group-merge"
//                         value={
//                           submitNewPasswordController.values.repeat_new_password
//                         }
//                         onChange={submitNewPasswordController.handleChange}
//                         invalid={
//                           submitNewPasswordController.touched
//                             .repeat_new_password &&
//                           submitNewPasswordController.errors.repeat_new_password
//                         }
//                       />
//                       {submitNewPasswordController.touched
//                         .repeat_new_password &&
//                       submitNewPasswordController.errors.repeat_new_password ? (
//                         <FormFeedback>
//                           {
//                             submitNewPasswordController.errors
//                               .repeat_new_password
//                           }
//                         </FormFeedback>
//                       ) : null}
//                     </div>
//                   ) : null}
//                   {/* action */}
//                   {forgotPasswordTab === 0 ? (
//                     <CustomButton
//                       loading={loadings.forgotPassword}
//                       color="primary"
//                       block
//                     >
//                       Send reset link
//                     </CustomButton>
//                   ) : (
//                     <CustomButton
//                       loading={loadings.submitNewPassword}
//                       color="primary"
//                       block
//                     >
//                       Submit new password
//                     </CustomButton>
//                   )}
//                 </Form>
//               )}
//               {/* back to sign in */}
//               <p className="text-center mt-2">
//                 <Link to="/login">
//                   <ChevronLeft className="rotate-rtl me-25" size={14} />
//                   <span className="align-middle">Back to sign in</span>
//                 </Link>
//               </p>
//             </Col>
//           )}
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ForgotPassword;
