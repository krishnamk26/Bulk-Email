import React, { useContext,useState } from 'react';
import api from "../api/api"
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLogOut } from "react-icons/fi";
import { FaEarlybirds } from "react-icons/fa";
import DataContext from "../context/DataContext";
import "./EmailForm.css"

const EmailForm = ({
  loggedUser,
  handleLogout,
}) => {
  const { width } = useContext(DataContext);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recipients, setRecipients] = useState('');

  const handleSendEmails = async () => {
    try {
      const response = await api.post('/api/sendBulkEmails', {
        subject,
        message,
        recipients: recipients.split(',').map((email) => email.trim()),
      });
      toast.success(response.data.message)
      console.log(response.data.message);
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };

  return (
    <div className="login">
      <nav className="navbar navbar-light bg-light px-2 d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <h1> <FaEarlybirds /> Bulk Email Tool</h1>
        <button
          onClick={handleLogout}
          className="btn customBtn btn-outline-secondary d-flex align-items-center gap-2"
        >
          {width > 500 ? "logout" : ""}
          <FiLogOut />
        </button>
      </nav>
      <header className="bg-dark py-1">
        <p className="lead fw-normal text-center text-dark-100 mb-0">
          Welcome back {loggedUser} !!!
        </p>
      </header>
      <main className="main-content">
        <div className='sub-content'>
          <input style={{ margin: "20px" }}
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea style={{ margin: "20px" }}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <textarea style={{ margin: "20px" }}
            placeholder="Recipients (comma-separated)"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
          />
          <div className='main-button'>
            <button onClick={handleSendEmails}>Send Bulk Emails</button>

            <button style={{ marginLeft: "10%" }}>EmailTemplate</button>
          </div>
        </div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Zoom}
        draggable={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </div>

  );
};

export default EmailForm;
