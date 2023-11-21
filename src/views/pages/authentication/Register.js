// // ** React Imports
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// // ** Custom Hooks
// import { useSkin } from "@hooks/useSkin";
// import useAuth from "../../../hooks/useAuth";

// // ** Third Party Components
// import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// // ** Custom Components
// import InputPasswordToggle from "@components/input-password-toggle";
// import CustomButton from "../../../components/button";
// import Select from "react-select";
// import { selectThemeColors } from "@utils";

// // ** Reactstrap Imports
// import {
//   Row,
//   Col,
//   CardTitle,
//   CardText,
//   Label,
//   Button,
//   Form,
//   Input,
//   FormFeedback,
// } from "reactstrap";

// // ** Styles
// import "@styles/react/pages/page-authentication.scss";
// import LogoImage from "@src/assets/image/logo.png";
// import useApp from "../../../hooks/useApp";

// const Register = () => {
//   // ** Hooks
//   const { skin } = useSkin();
//   const {
//     loadings,
//     registerFormController,
//     registerCountry,
//     setRegisterCountry,
//     privacyCheck,
//     setPrivacyCheck,
//   } = useAuth();
//   const { appLoadings, getCountries, countries } = useApp();

//   const illustration =
//       skin === "dark" ? "register-v2-dark.svg" : "register-v2.svg",
//     source = require(`@src/assets/images/pages/${illustration}`).default;

//   useEffect(() => {
//     getCountries();
//   }, []);

//   return (
//     <div className="auth-wrapper auth-cover">
//       <Row className="auth-inner m-0">
//         {/* header logo */}
//         <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
//           <img style={{ height: 28 }} src={LogoImage} alt="SIZ TEL" />
//           <h2 className="brand-text text-primary ms-1">SIZ TEL</h2>
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
//           <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
//             {/* titles */}
//             <CardTitle tag="h2" className="fw-bold mb-1 text-center">
//               Adventure starts here 🚀
//             </CardTitle>
//             <CardText className="mb-2 text-center">
//               Make your dreams real!
//             </CardText>
//             {/* form */}
//             <Form
//               className="auth-register-form mt-2"
//               onSubmit={registerFormController.handleSubmit}
//             >
//               {/* first name */}
//               <div className="mb-1">
//                 <Label className="form-label" for="first_name">
//                   First name
//                 </Label>
//                 <Input
//                   autoFocus
//                   id="first_name"
//                   name="first_name"
//                   placeholder="Enter your first name"
//                   value={registerFormController.values.first_name}
//                   onChange={registerFormController.handleChange}
//                   invalid={
//                     registerFormController.touched.first_name &&
//                     registerFormController.errors.first_name
//                   }
//                 />
//                 {registerFormController.touched.first_name &&
//                 registerFormController.errors.first_name ? (
//                   <FormFeedback>
//                     {registerFormController.errors.first_name}
//                   </FormFeedback>
//                 ) : null}
//               </div>
//               {/* last name */}
//               <div className="mb-1">
//                 <Label className="form-label" for="last_name">
//                   Last name
//                 </Label>
//                 <Input
//                   id="last_name"
//                   name="last_name"
//                   placeholder="Enter your last name"
//                   value={registerFormController.values.last_name}
//                   onChange={registerFormController.handleChange}
//                   invalid={
//                     registerFormController.touched.last_name &&
//                     registerFormController.errors.last_name
//                   }
//                 />
//                 {registerFormController.touched.last_name &&
//                 registerFormController.errors.last_name ? (
//                   <FormFeedback>
//                     {registerFormController.errors.last_name}
//                   </FormFeedback>
//                 ) : null}
//               </div>
//               {/* email */}
//               <div className="mb-1">
//                 <Label className="form-label" for="email">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={registerFormController.values.email}
//                   onChange={registerFormController.handleChange}
//                   invalid={
//                     registerFormController.touched.email &&
//                     registerFormController.errors.email
//                   }
//                 />
//                 {registerFormController.touched.email &&
//                 registerFormController.errors.email ? (
//                   <FormFeedback>
//                     {registerFormController.errors.email}
//                   </FormFeedback>
//                 ) : null}
//               </div>
//               {/* mobile */}
//               <div className="mb-1">
//                 <Label className="form-label">Mobile number</Label>
//                 <div className="register_mobile_field">
//                   <Select
//                     value={registerCountry}
//                     onChange={setRegisterCountry}
//                     isClearable={false}
//                     isDisabled={countries?.length === 0}
//                     theme={selectThemeColors}
//                     closeMenuOnSelect={true}
//                     placeholder="Country"
//                     maxMenuHeight={120}
//                     options={countries}
//                     className={"react-select"}
//                     classNamePrefix="select"
//                     id="country"
//                     name="country"
//                   />
//                   <Input
//                     id="mobile"
//                     name="mobile"
//                     type="tel"
//                     placeholder="Enter phone number"
//                     value={registerFormController.values.mobile}
//                     onChange={registerFormController.handleChange}
//                   />
//                 </div>
//               </div>
//               {/* password */}
//               <div className="mb-1">
//                 <Label className="form-label" for="password">
//                   Password
//                 </Label>
//                 <InputPasswordToggle
//                   id="password"
//                   name="password"
//                   className="input-group-merge"
//                   value={registerFormController.values.password}
//                   onChange={registerFormController.handleChange}
//                   invalid={
//                     registerFormController.touched.password &&
//                     registerFormController.errors.password
//                   }
//                 />
//                 {registerFormController.touched.password &&
//                 registerFormController.errors.password ? (
//                   <FormFeedback>
//                     {registerFormController.errors.password}
//                   </FormFeedback>
//                 ) : null}
//               </div>
//               {/* confirm password */}
//               <div className="mb-1">
//                 <Label className="form-label" for="password_confirmation">
//                   Repeat password
//                 </Label>
//                 <InputPasswordToggle
//                   id="password_confirmation"
//                   name="password_confirmation"
//                   className="input-group-merge"
//                   value={registerFormController.values.password_confirmation}
//                   onChange={registerFormController.handleChange}
//                   invalid={
//                     registerFormController.touched.password_confirmation &&
//                     registerFormController.errors.password_confirmation
//                   }
//                 />
//                 {registerFormController.touched.password_confirmation &&
//                 registerFormController.errors.password_confirmation ? (
//                   <FormFeedback>
//                     {registerFormController.errors.password_confirmation}
//                   </FormFeedback>
//                 ) : null}
//               </div>
//               {/* privacy checkbox */}
//               <div className="form-check mb-1">
//                 <Input
//                   name="privacy"
//                   id="privacy"
//                   type="checkbox"
//                   checked={privacyCheck}
//                   onChange={(e) => setPrivacyCheck(e.target.checked)}
//                   invalid={!privacyCheck}
//                 />
//                 <Label className="form-check-label" for="privacy">
//                   I agree to
//                   <a
//                     className="ms-25"
//                     href="/"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     privacy policy & terms
//                   </a>
//                 </Label>
//               </div>
//               {/* submit button */}
//               <CustomButton
//                 loading={loadings.register}
//                 type="submit"
//                 block
//                 color="primary"
//               >
//                 Sign up
//               </CustomButton>
//             </Form>
//             {/* login link */}
//             <p className="text-center mt-2">
//               <span className="me-25">Already have an account?</span>
//               <Link to="/login">
//                 <span>Sign in instead</span>
//               </Link>
//             </p>
//             {/* divider */}
//             <div className="divider my-2">
//               <div className="divider-text">or</div>
//             </div>
//             {/* social network links */}
//             <div className="auth-footer-btn d-flex justify-content-center">
//               <Button color="facebook">
//                 <Facebook size={14} />
//               </Button>
//               <Button color="twitter">
//                 <Twitter size={14} />
//               </Button>
//               <Button color="google">
//                 <Mail size={14} />
//               </Button>
//               <Button className="me-0" color="github">
//                 <GitHub size={14} />
//               </Button>
//             </div>
//           </Col>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Register;
