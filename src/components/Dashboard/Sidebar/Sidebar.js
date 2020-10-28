import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCalendar,
  faUsers,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("https://secure-savannah-43276.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);
  return (
    <div
      className='sidebar d-flex flex-column justify-content-between py-5 px-4'
      style={{ height: "100vh" }}
    >
      <ul className='list-unstyled'>
        <li>
          <Link to='/dashboard/appointment' className='text-white'>
            <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
          </Link>
        </li>
        {isDoctor && (
          <>
            {" "}
            <li>
              <Link to='/dashboard/allPatients' className='text-white'>
                <FontAwesomeIcon icon={faUsers} /> <span>All Patients</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/allPatients' className='text-white'>
                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link to='/addDoctor' className='text-white'>
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add a Doctor</span>
              </Link>
            </li>
          </>
        )}

        <li>
          <Link to='/' className='text-white'>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to='/' className='text-white'>
          <FontAwesomeIcon icon={faSignOutAlt} />{" "}
          <span
            onClick={() => {
              setLoggedInUser({});
              setIsDoctor(false);
              history.push("/");
            }}
          >
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
