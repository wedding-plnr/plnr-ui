import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./css/CreatePost.css";
import { useNavigate } from "react-router-dom";

const CreatePostForm = ({ values, errors, touched, status }) => {
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    status && setData((data) => [...data, status]);
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = values;

    //   console.log(userData); // for testing input fields

    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then(() => {
      console.log("new Post Created");
      history("/discover");
    });
  };

  return (
    <div className="form-div">
      <Form onSubmit={handleSubmit}>
        <label htmlFor="label">
          Label1
          <Field
            id="label1"
            type="text"
            required
            name="label1"
            placeholder=""
          />
        </label>
        {touched.label1 && errors.label1 && (
          <p className="errors">{errors.label1}</p>
        )}

        <label htmlFor="label2">
          Label2
          <Field
            id="label2"
            type="text"
            required
            name="label2"
            placeholder=""
          />
        </label>
        {touched.label2 && errors.label2 && (
          <p className="errors">{errors.label2}</p>
        )}

        <label htmlFor="label3">
          Label3
          <Field
            id="label3"
            type="text"
            required
            name="label3"
            placeholder=""
          />
        </label>
        {touched.label3 && errors.label3 && (
          <p className="errors">{errors.label3}</p>
        )}
      <h1>Vendor List</h1>
      <button className="submitButton">Post</button>
      </Form>

      {data.map((piece) => {
        console.log("this is data", data);
        return (
          <ul key={piece.id}>
            <li>Label1: {piece.label1}</li>
            <li>Label2: {piece.label2}</li>
            <li>Label3: {piece.label3}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(props) {
    return {
      label1: props.name || "",
      label2: props.password || "",
      label3: props.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    label1: Yup.string().required("input is required"),
    label2: Yup.string().required("input is required"),
    label3: Yup.string().required("input is required"),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then((res) => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch((err) => console.log(err.response));
  },
})(CreatePostForm);

export default FormikForm;
