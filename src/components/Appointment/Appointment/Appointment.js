import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import NavbarDark from "../../Shared/Navbar/NavbarDark";
import AppointmentHeader from "../AppointmentHeader/AppoinmentHeader";
import BookAppoinment from "../BookAppointment/BookAppoinment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <NavbarDark></NavbarDark>
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookAppoinment date={selectedDate}></BookAppoinment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
