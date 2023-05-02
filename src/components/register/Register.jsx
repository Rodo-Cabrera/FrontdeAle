import React, { useState } from "react";
import { alertSuccess, alertError } from "../../utils/alertCustom";
import { messages } from "../../utils/configs";
import endPoint from "../../utils/configs";
import axios from "axios";


const Register = () => {

  const URL_BASE = process.env.REACT_APP_URL_BASE;

  const validationsFields = {
    user: /^[a-zA-Z0-9_-]{4,16}$/,
    name: /^[a-zA-Z0-9_-]{1,40}$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };


  const [userData, setUserData] = useState({
    email: '',
    password: '',
    password2: '',
    name: '',
    lastName: '',
    age: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validationsFields.email.test(userData.email)) {
      alertError(messages.errorMail, messages.logError, () => {
        console.log("test email");
      });
      return;
    }
    if (!validationsFields.password.test(userData.password)) {
      alertError(messages.errorPw, messages.logError, () => {
        console.log("test password");
      });
      return;
    }
    
    if (!validationsFields.name.test(userData.name)) {
      alertError(messages.errorUser, messages.logError, () => {
        console.log("test userName");
      });
      return;
    }
    if (userData.password !== userData.password2) {
      alertError(messages.errorPw, messages.logError, () => {
        console.log("test PwCheck");
      });
      return;
    }
    alertSuccess(messages.logSuccess, messages.tittleSuccesslog, () => { console.log('test success') });

    console.log(userData, URL_BASE);
   
    try {
      const {data} = await axios.post(`${URL_BASE}${endPoint.register}/create-user`, userData);
      alertSuccess(messages.logSuccess, data, () => {
        window.location.href = 'http://localhost:3000/home'
      });
    } catch (err) {
      alertError(`${err.response.data.errors[0].msg}`, 'Error', () => {
        console.log(err)
      })
    }
  };

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                aria-describedby="emailHelp"
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Edad
              </label>
              <input
                type="numberr"
                className="form-control"
                id="age"
                aria-describedby="emailHelp"
                name="age"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Repetir contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                name="password2"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
