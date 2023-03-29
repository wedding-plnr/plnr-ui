import React from "react";
import './css/Discovery.css'

function Discovery() {
    return (
        <>
            <div className="discoverPage">
                <div className="cPostBtnContainer">
                    <button className="createPostBtn">Create New Post</button>
                </div>
                <section className="postGridContainer">
                    <div className="row1">
                        <div className="col1">BOX1</div>
                        <div className="col2">BOX2</div>
                        <div className="col3">BOX3</div>
                    </div>
                    <div className="row2">
                        <div className="col1">BOX1</div>
                        <div className="col2">BOX2</div>
                        <div className="col3">BOX3</div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Discovery;
