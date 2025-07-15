const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));


// Trả về file HTML khi truy cập vào đường dẫn /
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'view/index.html');
  res.sendFile(filePath);
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
