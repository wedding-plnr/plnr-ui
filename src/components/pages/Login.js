import React from "react";
import LogInFormComponent from "../LogInForm";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

function SignUpForm() {
  return (
    <>
      <MDBCard>
        <MDBCardBody>
          <LogInFormComponent />
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default SignUpForm;
