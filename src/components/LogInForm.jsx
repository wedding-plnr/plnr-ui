import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";

const LogInFormComponent = ({ values, errors, touched, status }) => {
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    status && setData((data) => [...data, status]);
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = values;

    console.log(userData);

    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then(() => {
      console.log("new User added");
      history("/");

      // may have to add something to change state to "logged in"
    });
  };

  return (
    <div className="form-div">
      <h1>Sign in to continue to your Account </h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <br></br>
          <Field
            id="username"
            type="text"
            required
            name="username"
            placeholder="Username"
          />
        </label>
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}

        <br></br>

        <label htmlFor="password">
          Password
          <br></br>
          <Field
            id="password"
            type="text"
            minlength="8"
            maxlength="16"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}

        <br></br>

        <button className="submitButton">Login</button>
      </Form>

      {data.map((piece) => {
        console.log("this is data", data);
        return (
          <ul key={piece.id}>
            <li>Username: {piece.username}</li>
            <li>Password: {piece.password}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.name || "",
      password: props.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().min(8).max(16).required("password is required"),
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
})(LogInFormComponent);

export default FormikForm;
