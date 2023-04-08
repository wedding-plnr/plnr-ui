import React from "react";
import CreatePostForm from '../CreatePostForm'
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

function Create() {
    return (
        <>
            <MDBCard>
                <MDBCardBody>
                    <CreatePostForm />
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

export default Create;
