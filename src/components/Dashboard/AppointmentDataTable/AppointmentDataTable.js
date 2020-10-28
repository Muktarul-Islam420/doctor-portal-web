import React from "react";

const AppointmentDataTable = ({ appointments }) => {
  return (
    <table className='table table-borderless'>
      <thead>
        <tr>
          <th className='text-secondary text-left' scope='col'>
            Sr.
          </th>
          <th className='text-secondary' scope='col'>
            Name
          </th>
          <th className='text-secondary' scope='col'>
            Gender
          </th>
          <th className='text-secondary' scope='col'>
            Age
          </th>
          <th className='text-secondary' scope='col'>
            Weight
          </th>
          <th className='text-secondary' scope='col'>
            Phone
          </th>
          <th className='text-secondary' scope='col'>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr>
            <td>{index + 1}</td>
            <td className='font-weight-bold text-brand-dark'>
              {appointment.name}
            </td>
            <td>{appointment.gender}</td>
            <td>{appointment.age}</td>
            <td>{appointment.weight} .Kg</td>
            <td>{appointment.phone}</td>
            <td className='font-italic'>{appointment.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentDataTable;
