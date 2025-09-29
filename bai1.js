import React, { useState } from 'react';

function Bai1() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;
  const isOverLimit = charCount > 100;

  return (
    <div>
      <h3>Bài 1: Bộ đếm ký tự</h3>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
      />
      <p style={{ color: isOverLimit ? 'red' : 'black' }}>
        Số ký tự: {charCount}
      </p>
    </div>
  );
}

export default Bai1;
