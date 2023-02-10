import React from "react";
import SignInFormComponent from "../SignInForm";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

function SignUpForm() {
  return (
    <>
      <MDBCard>
        <MDBCardBody>
          <SignInFormComponent />
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default SignUpForm;
