// // ** React Imports
// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// // ** Custom Hooks
// import { useSkin } from "@hooks/useSkin";
// import LogoImage from "@src/assets/image/logo.png";

// // ** Third Party Components
// import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// // ** Custom Components
// import InputPasswordToggle from "@components/input-password-toggle";
// import CustomButton from "../../../components/button";

// // ** Reactstrap Imports
// import {
//   Row,
//   Col,
//   Form,
//   Input,
//   Label,
//   Button,
//   CardText,
//   CardTitle,
// } from "reactstrap";

// // ** Styles
// import "@styles/react/pages/page-authentication.scss";
// import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
  //   // ** Hooks
  //   const navigate = useNavigate();
  //   const { skin } = useSkin();
  //   const { loadings, loginFormController } = useAuth();
  //   const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
  //     source = require(`@src/assets/images/pages/${illustration}`).default;
  //   useEffect(() => {
  //     if (localStorage.getItem("token")) {
  //       navigate("/home");
  //     }
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
  //               Welcome to SIZ TEL!👋
  //             </CardTitle>
  //             <CardText className="mb-2 text-center" style={{ fontSize: 13 }}>
  //               sign-in to your account and start the adventure
  //             </CardText>
  //             {/* login form */}
  //             <Form
  //               className="auth-login-form mt-2"
  //               onSubmit={loginFormController.handleSubmit}
  //             >
  //               {/* email */}
  //               <div className="mb-1">
  //                 <Label className="form-label" for="email">
  //                   Email
  //                 </Label>
  //                 <Input
  //                   id="email"
  //                   name="email"
  //                   autoFocus
  //                   type="email"
  //                   placeholder="Enter you email address"
  //                   value={loginFormController.values.email}
  //                   onChange={loginFormController.handleChange}
  //                   invalid={
  //                     loginFormController.touched.email &&
  //                     loginFormController.errors.email
  //                   }
  //                 />
  //               </div>
  //               {/* password */}
  //               <div className="mb-1">
  //                 <div className="d-flex justify-content-between">
  //                   <Label className="form-label" for="login-password">
  //                     Password
  //                   </Label>
  //                   <Link to="/forgot-password">
  //                     <small>Forgot Password?</small>
  //                   </Link>
  //                 </div>
  //                 <InputPasswordToggle
  //                   id="password"
  //                   name="password"
  //                   className="input-group-merge"
  //                   value={loginFormController.values.password}
  //                   onChange={loginFormController.handleChange}
  //                   invalid={
  //                     loginFormController.touched.password &&
  //                     loginFormController.errors.password
  //                   }
  //                 />
  //               </div>
  //               {/* <div className="form-check mb-1">
  //                 <Input type="checkbox" id="remember-me" />
  //                 <Label className="form-check-label" for="remember-me">
  //                   Remember Me
  //                 </Label>
  //               </div> */}
  //               <CustomButton
  //                 type="submit"
  //                 color="primary"
  //                 block
  //                 loading={loadings.login}
  //               >
  //                 Sign in
  //               </CustomButton>
  //             </Form>
  //             {/* go to signup */}
  //             <p className="text-center mt-2">
  //               <span className="me-25">New on our platform?</span>
  //               <Link to="/register">
  //                 <span>Create an account</span>
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
};

export default Login;
