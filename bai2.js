import React, { useState, useEffect } from 'react';

function Bai2() {
  const lights = ['red', 'green', 'yellow'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chuyển đèn thủ công
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % lights.length);
  };

  // Chuyển đèn tự động sau mỗi 2 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lights.length);
    }, 2000);

    return () => clearInterval(interval); // Clear interval khi unmount
  }, []);

  return (
    <div>
      <h3>Bài 2: Đèn giao thông</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '60px' }}>
        {lights.map((color, index) => (
          <div
            key={color}
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              backgroundColor: color,
              opacity: currentIndex === index ? 1 : 0.3,
              border: '1px solid #000',
            }}
          ></div>
        ))}
      </div>
      <button onClick={handleNext} style={{ marginTop: '10px' }}>Chuyển đèn</button>
    </div>
  );
}

export default Bai2;
