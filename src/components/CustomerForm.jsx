import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={submit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
