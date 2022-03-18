import React, { useEffect } from "react";

import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import shape from "../Assets/shape.png";
import { ToastContainer, toast } from "react-toastify";
import "../styles/contactus.css";
import $ from "jquery";
import { Formik, useFormik } from "formik";



const ValidateForm = (empData) => {
  const errors = {};

  if (!empData.name) {
    errors.name = "Please Enter Your Name";
  } else if (empData.name.length > 20) {
    errors.name = "Name Should Not Exeed 20 Characters";
  }

  if (!empData.phNo) {
    errors.phNo = "Please Enter Your Phone number";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(empData.phNo)
  ) {
    errors.phNo = "Phone Number you entered is invalid";
  }

  if (!empData.email) {
    errors.email = "Please Enter Your Email Adress";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = "Email address you entered in invalid";
  }
  if (!empData.message) {
    errors.message = "Please Enter your Message";
  }
  return errors;
};

const ContactUs = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  useEffect(() => {
    const inputs = document.querySelectorAll(".contact-input");

    if (inputs) {
      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          input.parentNode.classList.add("focus");
        });
        input.addEventListener("blur", () => {
          if (input.value === "") {
            input.parentNode.classList.remove("focus");
          }
        });
      });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      phNo: "",
      email: "",
      message: "",
      timeStamp: JSON.stringify(new Date())
    },
    validate: ValidateForm,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

const addEnquiry=(values, { resetForm })=>{
   console.log("submitted");
}

  

  return (
    <div>
  
      <ToastContainer />
      <div className="contact-us-main">
        {/* <div className="heading-contact">
          <p>&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</p>
        </div> */}
        <div className="contact-us-container">
          <span className="big-circle"></span>
          <img src={shape} className="square" alt=""></img>
          <div className="contact-us-form">
            <div className="contact-info">
              <h3 className="contact-info-title">Let's get in touch</h3>
              <p className="contact-info-text">
              The #1st IRL crypto events company where you can connect, learn, 
              socialise and party with like minded people. Access our events by minting 
              an NFT ticket on our platform. 
              </p>
              <div className="info">
                <div className="information">
                  <img
                    src={location}
                    alt="Location"
                    className="contact-info-icon"
                  />
                  <p>Address</p>
                </div>
              </div>
              <div className="info">
                <div className="information">
                  <img
                    src={email}
                    alt="Location"
                    className="contact-info-icon"
                  />
                  <p>
                    <a
                      className="contact-us-link"
                      href="mailto:info@pacauli.com"
                    >
                      info@crytoclub.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="information">
                  <img
                    src={phone}
                    alt="Location"
                    className="contact-info-icon"
                  />
                  <p>
                    <a className="contact-us-link" href="tel:917906114905">
                      +91-1234567890
                    </a>
                  </p>
                </div>
              </div>
              
            </div>
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form className="contact-us-main-form">
                <h3 className="contact-form-title">Contact Us</h3>

                <div
                  className="contact-form-input-container"
                  style={formik.errors.name ? { marginBottom: "0" } : null}
                >
                  <input
                    type="text"
                    name="name"
                    className="contact-input"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />

                  <label className="contact-form-label" for="">
                    Name
                  </label>
                  <span>Name</span>
                </div>

                {formik.touched.name && formik.errors.name ? (
                  <p className="errt">{formik.errors.name}</p>
                ) : null}
                <div
                  className="contact-form-input-container"
                  style={formik.errors.phNo ? { marginBottom: "0" } : null}
                >
                  <input
                    type="text"
                    name="phNo"
                    className="contact-input"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phNo}
                  />

                  <label className="contact-form-label" for="">
                    Phone Number
                  </label>
                  <span>Phone Number</span>
                </div>

                {formik.touched.phNo && formik.errors.phNo ? (
                  <p className="errt">{formik.errors.phNo}</p>
                ) : null}

                <div
                  className="contact-form-input-container"
                  style={formik.errors.email ? { marginBottom: "0" } : null}
                >
                  <input
                    id="Email"
                    type="email"
                    name="email"
                    className="contact-input"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />

                  <label className="contact-form-label" for="">
                    Email
                  </label>
                  <span>Email</span>
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <p className="errt">{formik.errors.email}</p>
                ) : null}

                <div
                  className="contact-form-input-container contact-textarea"
                  style={formik.errors.message ? { marginBottom: "0" } : null}
                >
                  <textarea
                    name="message"
                    cols=""
                    rows=""
                    className="contact-input"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  />

                  <label className="contact-form-label" for="">
                    Message
                  </label>
                  <span>Message</span>
                </div>
                {formik.touched.message && formik.errors.message ? (
                  <p className="errt">{formik.errors.message}</p>
                ) : null}

                <input
                  type="submit"
                  value="Submit"
                  onClick={formik.isValid ? addEnquiry : null}
                  className="contact-button"
                  style={formik.errors.message ? { marginTop: "0" } : null}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    
    </div>
  );
};

export default ContactUs;