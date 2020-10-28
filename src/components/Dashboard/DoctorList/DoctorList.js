import React, { useEffect, useState } from "react";
import DoctorListTable from "../DoctorListTable/DoctorListTable";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://secure-savannah-43276.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <h2 className='text-brand'>Doctor List</h2>
      <table className='table table-borderless'>
        <thead>
          <tr>
            <th className='text-secondary' scope='col'>
              Name
            </th>
            <th className='text-secondary' scope='col'>
              Phone
            </th>
            <th className='text-secondary' scope='col'>
              Email
            </th>
            <th className='text-secondary' scope='col'>
              Photo
            </th>
          </tr>
        </thead>
        {doctors.map((doctor) => (
          <DoctorListTable key={doctor._id} doctor={doctor} />
        ))}
      </table>
    </div>
  );
};

export default DoctorList;
