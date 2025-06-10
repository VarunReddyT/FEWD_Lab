import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const newErrors = {};

    if (!/^[a-z0-9 ]+$/i.test(name)) {
      newErrors.name = 'Name must be alphanumeric';
    }
    if (!email.includes('@')) {
      newErrors.email = 'Email must contain "@"';
    }
    if (message.trim() === '') {
      newErrors.message = 'Message is required';
    } else if (message.length > 150) {
      newErrors.message = 'Message must be less than 150 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmittedData(formData);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="container p-4">
      <h2 className="text-center mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            placeholder="Enter your message..."
            required
          />
          <small
            className={`form-text ${
              formData.message.length > 150 ? 'text-danger' : 'text-muted'
            }`}
          >
            {formData.message.length} / 150 characters
          </small>
          {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-4 p-3 border rounded bg-light">
          <h4>Submitted Data:</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}
