import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    date: '',
    phone: '',
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = (e) => {
    e.preventDefault(); // Prevent form submission reload
    axios.post("http://localhost:3000/Appointad", inputs)
      .then((result) => {
        alert(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.container}>
      <h2>Book an Appointment</h2>
      <form style={styles.form} onSubmit={addHandler}>
        <div style={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={inputHandler}
            placeholder="Enter your full name"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={inputHandler}
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={inputs.date}
            onChange={inputHandler}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={inputs.phone}
            onChange={inputHandler}
            placeholder="Enter your phone number"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>Book Appointment</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AppointmentForm;
