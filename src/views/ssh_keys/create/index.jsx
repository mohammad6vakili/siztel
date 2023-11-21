// import { Fragment } from "react";
// import "./styles/create_ssh.scss";
// import Breadcrumbs from "@components/breadcrumbs";
// import {
//   Row,
//   Col,
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Form,
//   Label,
//   Input,
//   FormFeedback,
//   CardFooter,
//   Button,
// } from "reactstrap";
// import CustomButton from "../../../components/button";
// import toast from "react-hot-toast";
// import useSsh from "../../../hooks/useSsh";

// const CreateSshKey = () => {
//   const { createSshKeyFormController, sshLoadings } = useSsh();
//   return (
//     <Fragment>
//       <Breadcrumbs
//         title="Create SSH Key"
//         data={[{ title: "Create SSH Key" }]}
//       />
//       <Row className="w-100 flex-column-reverse flex-md-row">
//         {/* form */}
//         <Col xs="12" md="7">
//           <Card>
//             <Form onSubmit={createSshKeyFormController.handleSubmit}>
//               <CardHeader>
//                 <CardTitle>create new ssh key</CardTitle>
//               </CardHeader>
//               <CardBody>
//                 {/* title */}
//                 <Col xs="12" className="mb-1">
//                   <Label for="title">Title</Label>
//                   <Input
//                     disabled={sshLoadings.createSshKey}
//                     value={createSshKeyFormController.values.title}
//                     onChange={createSshKeyFormController.handleChange}
//                     type="text"
//                     name="title"
//                     id="title"
//                     placeholder="Enter your key title"
//                     invalid={
//                       createSshKeyFormController.touched.title
//                         ? createSshKeyFormController.errors.title
//                         : null
//                     }
//                   />
//                   {createSshKeyFormController?.errors?.title && (
//                     <FormFeedback>
//                       {createSshKeyFormController.errors.title}
//                     </FormFeedback>
//                   )}
//                 </Col>
//                 {/* public_key */}
//                 <Col xs="12" className="mb-1">
//                   <Label for="public_key">public key</Label>
//                   <Input
//                     disabled={sshLoadings.createSshKey}
//                     value={createSshKeyFormController.values.public_key}
//                     onChange={createSshKeyFormController.handleChange}
//                     name="public_key"
//                     id="public_key"
//                     type="textarea"
//                     placeholder="ssh-rsa AAAA.... you@example.com"
//                     invalid={
//                       createSshKeyFormController.touched.public_key
//                         ? createSshKeyFormController.errors.public_key
//                         : null
//                     }
//                   />
//                   {createSshKeyFormController?.errors?.public_key && (
//                     <FormFeedback>
//                       {createSshKeyFormController.errors.public_key}
//                     </FormFeedback>
//                   )}
//                 </Col>
//               </CardBody>
//               <CardFooter className="w-100 d-flex justify-content-center">
//                 <CustomButton
//                   loading={sshLoadings.createSshKey}
//                   color="primary"
//                 >
//                   Create ssh key
//                 </CustomButton>
//               </CardFooter>
//             </Form>
//           </Card>
//         </Col>
//         {/* descriptions */}
//         <Col xs="12" md="5">
//           <Card>
//             <CardBody>
//               <div className="mb-2">
//                 <h4>SSH Keys</h4>
//                 <div>
//                   Follow these instructions to create or add SSH keys on Linux,
//                   MacOS & Windows. Windows users without OpenSSH can install and
//                   use PuTTY instead.
//                 </div>
//               </div>
//               <div className="mb-1">
//                 <h4>Create a new key pair, if needed</h4>
//                 <div className="mb-1">
//                   Open a terminal and run the following command :
//                 </div>
//                 <div className="create_ssh_code_copy">
//                   <div>ssh-keygen</div>
//                   <Button
//                     onClick={() => {
//                       navigator.clipboard.writeText("ssh-keygen");
//                       toast.success("Copied to clipboard.");
//                     }}
//                     color="primary"
//                   >
//                     Copy
//                   </Button>
//                 </div>
//               </div>
//               <div className="mb-1">
//                 <div>You will be prompted to save and name the key.</div>
//               </div>
//               <div className="create_ssh_code_copy mb-1">
//                 <div>
//                   Generating public/private rsa key pair. Enter file in which to
//                   save the key
//                 </div>
//                 <div>(/Users/USER/.ssh/id_rsa):</div>
//               </div>
//               <div className="mb-1">
//                 Next you will be asked to create and confirm a passphrase for
//                 the key (highly recommended):
//               </div>
//               <div className="create_ssh_code_copy mb-1">
//                 <div>Enter passphrase (empty for no passphrase):</div>
//                 <div>Enter same passphrase again:</div>
//               </div>
//               <div className="mb-2">
//                 This will generate two files, by default called{" "}
//                 <code>id_rsa</code> and <code>id_rsa.pub</code> . Next, add this
//                 public key.
//               </div>
//               <h4 className="mb-1">Add the public key</h4>
//               <div className="mb-1">
//                 Copy and paste the contents of the .pub file, typically
//                 id_rsa.pub, into the SSH key content field on the left.
//               </div>
//               <div className="create_ssh_code_copy">
//                 <div>cat ~/.ssh/id_rsa.pub</div>
//                 <Button
//                   onClick={() => {
//                     navigator.clipboard.writeText("cat ~/.ssh/id_rsa.pub");
//                     toast.success("Copied to clipboard.");
//                   }}
//                   color="primary"
//                 >
//                   Copy
//                 </Button>
//               </div>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </Fragment>
//   );
// };
// export default CreateSshKey;
