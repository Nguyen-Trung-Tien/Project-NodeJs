📅 Web Đặt Lịch Khám Bệnh:
Một ứng dụng web để đặt lịch khám bệnh, quản lý lịch hẹn và quản lý bác sĩ.
Frontend: React.js + SCSS · Backend: Node.js (v16) · DB: MySQL + Sequelize

🔥 Tổng quan
Ứng dụng cho phép người dùng đăng ký/đặt lịch khám, xem/huỷ lịch, đồng thời cho phép quản trị viên/quản lý xem danh sách lịch hẹn và quản lý thông tin bác sĩ. Thiết kế hướng modular, dễ mở rộng để tích hợp thêm chức năng (thông báo email, thanh toán, v.v.).

✨ Tính năng chính
  +Đặt lịch khám: chọn bác sĩ, ngày giờ, thông tin bệnh nhân.
  +Quản lý đặt lịch: tạo — sửa — huỷ — lọc theo trạng thái (đã xác nhận, chờ, đã huỷ).
  +Quản lý bác sĩ: CRUD bác sĩ (họ tên, chuyên khoa, mô tả, lịch làm việc).
  +Xác thực cơ bản (có thể mở rộng JWT / OAuth).
  +API RESTful cho frontend và quản trị.

🧩 Kiến trúc & Stack
  +Frontend: React.js (create-react-app / Vite tuỳ project), SCSS cho styling.
  +Backend: Node.js 16, Express.js.
  +CSDL: MySQL.
  +ORM: Sequelize (models, migrations, seeders).

📁 Cấu trúc thư mục (gợi ý)
```
/backend
  /config
  /controllers
  /models
  /routes
  /services
  /migrations
  /seeders
  server.js
/frontend
  /src
    /components
    /pages
    /services (API)
    /styles (SCSS)
    App.jsx
README.md
```
⚙️ Yêu cầu
Node.js v16.x
MySQL server
npm / yarn
(Tùy chọn) Sequelize CLI nếu dùng migration/seed: npm i -g sequelize-cli
Môi trường: .env (biến môi trường).
Lưu trữ file (nếu cần): local / cloud (S3).  

🛠️ Cài đặt & chạy (local)

1. Backend
  1.Vào thư mục backend:
```
cd backend
```
  2. Cài dependencies:
```
npm install
```
  3. Tạo file .env
```
PORT=8081
DB_HOST=localhost
DB_PORT=3306
DB_NAME=clinic_db
DB_USER=root
DB_PASS=your_password
JWT_SECRET=your_jwt_secret
```
  4. Chạy migration & seed
  ```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
  ```
  5. Chạy server (dev):
```
   npm run dev
   #Hoặc
   npm start
```
2. Frontend
  1. Vào thư mục frontend:
```
cd frontend
```
  2 .Cài dependencies:
```
npm install
```
  3. Tạo file .env
```
  REACT_APP_API_BASE_URL=http://localhost:8081/api
```
 4. Chạy frontend:
```
npm start
```

📌 Một số API mẫu
Base: /api

POST /bookings — Tạo đặt lịch
Request body:
```
{
  "patientName": "Nguyen Van A",
  "patientPhone": "0123456789",
  "doctorId": 3,
  "date": "2025-09-25",
  "time": "09:30",
  "reason": "Khám tổng quát"
}
```
```
+GET /bookings?status=pending&doctorId=3&date=2025-09-25 — Lấy danh sách đặt lịch
+PUT /bookings/:id — Cập nhật trạng thái / thông tin đặt lịch
+DELETE /bookings/:id — Huỷ đặt lịch
+GET /doctors — Lấy danh sách bác sĩ
+POST /doctors — Tạo bác sĩ mới (admin)
+PUT /doctors/:id — Cập nhật bác sĩ
+DELETE /doctors/:id — Xoá bác sĩ
=>Gợi ý: phân tách routes thành routes/booking.js, routes/doctor.js, middleware xác thực ở middlewares/auth.js.
```


