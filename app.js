import React from 'react';
import Bai1 from './bai1';
import Bai2 from './bai2';
import Bai3 from './bai3';
import Bai4 from './bai4';
import Bai5 from './bai5';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Thực hành React - Tổng hợp</h2>
      <hr />

      <section>
        <Bai1 />
      </section>
      <hr />

      <section>
        <Bai2 />
      </section>
      <hr />

      <section>
        <Bai3 />
      </section>
      <hr />

      <section>
        <Bai4 />
      </section>
      <hr />

      <section>
        <Bai5 />
      </section>
    </div>
  );
}

export default App;
