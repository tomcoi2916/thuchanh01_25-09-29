import React, { useState } from 'react';

function Bai3() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h3>Bài 3: Danh sách công việc</h3>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => handleDelete(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai3;
