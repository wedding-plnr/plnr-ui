import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/SignInForm.css";


const SignInFormComponent = ({ values, errors, touched, status }) => {
  const [data, setData] = useState([]);
  const history = useNavigate();


  useEffect(() => {
    // console.log("new state aquired", status);
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
      <h1>Sign up to create an Account</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <br></br>
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="Username"
          />
        </label>
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}

        <br></br>
        <label htmlFor="state">
          State
          <br></br>
          <Field as="select" name="state" id="state">
            <option value="null"></option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Field>
        </label>
        <br></br>

        <label htmlFor="email">
          Email
          <br></br>
          <Field id="email" type="text" name="email" placeholder="Email" />
        </label>
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}

        <br></br>

        <label htmlFor="password">
          Password
          <br></br>
          <Field
            id="password"
            type="text"
            name="password"
            placeholder="Password"
          />
        </label>
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}

        <br></br>

        <button className="submitButton" type="submit">Submit</button>
      </Form>

      {data.map((piece) => {
        console.log("this is data", data);
        return (
          <ul key={piece.id}>
            <li>Username: {piece.username}</li>
            <li>State: {piece.state}</li>
            <li>Password: {piece.password}</li>
            <li>Email: {piece.email}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      state: props.state || "",
      email: props.email || "",
      password: props.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().required("EMAIL IS REQUIRED"),
    password: Yup.string().min(8).max(16).required("PASSWORD MAY NOT BE LEFT BLANK"),
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
})(SignInFormComponent);

export default FormikForm;
