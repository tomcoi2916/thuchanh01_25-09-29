import React, { useState } from 'react';

function Bai5() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Tên không được để trống';
    if (!form.email.trim()) newErrors.email = 'Email không được để trống';
    if (!form.password.trim()) newErrors.password = 'Mật khẩu không được để trống';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(Object.keys(validationErrors).length === 0);
  };

  return (
    <div>
      <h3>Bài 5: Form Đăng ký</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Mật khẩu:</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Đăng ký</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '16px' }}>
          <h4>Thông tin đã đăng ký:</h4>
          <p><strong>Tên:</strong> {form.name}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Mật khẩu:</strong> {form.password}</p>
        </div>
      )}
    </div>
  );
}

export default Bai5;
