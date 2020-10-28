import React from "react";

const DoctorListTable = ({ doctor }) => {
  return (
    <tbody>
      <tr>
        <td className='font-weight-bold text-brand-dark'>{doctor.name}</td>
        <td>
          <p>+880-188-934789</p>
        </td>
        <td className='font-italic'>{doctor.email}</td>
        <td>
          <img
            style={{ height: "40px", width: "40px" }}
            src={`data:image/png;base64,${doctor.image.img}`}
            alt=''
          />
        </td>
      </tr>
    </tbody>
  );
};

export default DoctorListTable;
