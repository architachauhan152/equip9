// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" onChange={onChange} />
      <input type="email" name="email" placeholder="Email" onChange={onChange} />
      <input type="password" name="password" placeholder="Password" onChange={onChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
