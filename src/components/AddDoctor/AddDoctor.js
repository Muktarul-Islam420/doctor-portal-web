import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DoctorList from "../Dashboard/DoctorList/DoctorList";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("https://secure-savannah-43276.herokuapp.com/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className='container-fluid row'>
      <Sidebar></Sidebar>
      <div
        className='col-md-10 p-4 pr-5'
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className='text-brand'>Add a Doctor</h5>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              onBlur={handleBlur}
              type='email'
              className='form-control'
              name='email'
              placeholder='Email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Name</label>
            <input
              onBlur={handleBlur}
              type='text'
              className='form-control'
              name='name'
              placeholder='Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>
              Upload an Image{" "}
              <FontAwesomeIcon className='text-brand' icon={faCloudUploadAlt} />
            </label>
            <input
              style={{ border: "none" }}
              onChange={handleFileChange}
              type='file'
              className='form-control'
              placeholder='Picture'
            />
          </div>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </form>
        <div
          className='mt-5 pt-3'
          style={{ backgroundColor: "#F4FDFB", borderTop: "1px solid gray" }}
        >
          <DoctorList></DoctorList>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
