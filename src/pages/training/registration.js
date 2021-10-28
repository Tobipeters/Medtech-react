import React, { useState } from "react";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import db from "../../config/firebase";
import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import Loader from "../../components/loader";
import { Formik } from "formik";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  training_name: yup.string().required("* Training name is required"),
  name_of_organisation: yup
    .string()
    .required("* Name of organisation is required"),
  attendee_name: yup.string().required("* Attendee name is required"),
  phone: yup.string().required("* Phone number is required"),
  email: yup.string().required("* Email is required"),
  sex: yup.string().required("* Sex is required"),
  qualification: yup.string().required("* Qualification is required"),
  dob: yup.date().required("* Date of birth is required"),
  amount_paid: yup.string().required("* Amount paid is required"),
  payment_date: yup.date().required("* Payment date is required"),
  depositor_name: yup.string().required("* Account name is required"),
  position: yup.string().required("* Position is required"),
});

const Register = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goHome = () =>  history.push('/')

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Body className="p-5 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <i className="fas fa-check fs-1 text-success"></i>
              <h3 className="fw-600 fs-4 mt-4 mb-3">
                Your registration was successful!
              </h3>
              <p className="fs-6 fw-600">We'll get back to you</p>
              <button className="btn btn-primary" onClick={goHome}>Go home</button>
            </div>
          </Modal.Body>
        </Modal>

        <div className="row">
          <div className="col-lg-7 col-md-8">
            <Formik
              validationSchema={schema}
              initialValues={{
                training_name: "",
                name_of_organisation: "",
                attendee_name: "",
                phone: "",
                email: "",
                sex: "",
                qualification: "",
                dob: "",
                amount_paid: "",
                payment_date: "",
                depositor_name: "",
                position: "",
              }}
              onSubmit={async (values, { resetForm }) => {
                setLoading(true);
                const payload = values;
                const collectionRef = collection(db, "trainingRegistration");
                const docRef = await addDoc(collectionRef, payload);
                resetForm({ values: "" });
                setLoading(false);
                handleShow();
                console.log(values);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <h3 className="fw-700 fs-3 mb-4">Training Registration</h3>
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">
                        Training registered for
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="training_name"
                        value={values.training_name}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.training_name}
                      </small>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Name of organisation</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="name_of_organisation"
                        value={values.name_of_organisation}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.name_of_organisation}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Attendee's Name</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="attendee_name"
                        value={values.attendee_name}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.attendee_name}
                      </small>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Position</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="position"
                        value={values.position}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.position}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={values.email}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.email}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Phone number</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={values.phone}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.phone}
                      </small>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Date of birth</label>
                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={values.dob}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">{errors.dob}</small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Sex</label>
                      <select
                        className="form-control"
                        name="sex"
                        value={values.sex}
                        onChange={(e) => handleChange(e)}
                      >
                        <option selected disabled>
                          Select gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <small className="fw-500 text-danger">{errors.sex}</small>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Qualification</label>
                      <select
                        className="form-control"
                        name="qualification"
                        value={values.qualification}
                        onChange={(e) => handleChange(e)}
                      >
                        <option selected disabled>
                          Select qualification
                        </option>
                        <option value="ssce">SSCE</option>
                        <option value="ond">OND</option>
                        <option value="hnd">HND</option>
                        <option value="beng">BEng</option>
                        <option value="bedu">BEdu</option>
                        <option value="bsc">Bsc</option>
                        <option value="ba">BA</option>
                        <option value="msc">MSc</option>
                        <option value="phd">PhD</option>
                      </select>
                      <small className="fw-500 text-danger">
                        {errors.qualification}
                      </small>
                    </div>
                  </div>
                  <h3 className="fw-600 fs-4 my-4">Payment Details</h3>
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Amount paid</label>
                      <input
                        type="number"
                        className="form-control"
                        name="amount_paid"
                        value={values.amount_paid}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.amount_paid}
                      </small>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="form-label">Payment date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="payment_date"
                        value={values.payment_date}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.payment_date}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12 mb-3">
                      <label className="form-label">
                        Account name of payee/depositor
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="depositor_name"
                        value={values.depositor_name}
                        onChange={(e) => handleChange(e)}
                      />
                      <small className="fw-500 text-danger">
                        {errors.depositor_name}
                      </small>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
