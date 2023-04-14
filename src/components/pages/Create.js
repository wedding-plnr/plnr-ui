import React from "react";
import CreatePostForm from "../CreatePostForm";
// import VendorList from "../VendorList";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import '../css/CreatePage.css'

function Create() {
  return (
    <>
      <MDBCard>
        <MDBCardBody>
          <CreatePostForm />
          {/* <VendorList /> */}
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Create;
