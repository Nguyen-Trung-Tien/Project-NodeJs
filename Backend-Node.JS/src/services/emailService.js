require("dotenv").config();
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"XIN CHÀO BẠN" <tien83442@gmail.com>',
    to: dataSend.receiveEmail,
    subject: "Thông tin đặt lịch khám bệnh",
    html: `<h3>Xin chào ${dataSend.patientName}!</h3>
    <p>Bạn nhận được email này vì bạn đã đặt lịch thành công!</p>
    <p><b>Thông tin đặt lịch khám bệnh:</b></p>
    <div><b>⏰ Thời gian:</b> ${dataSend.time}</div>
    <div><b>👨‍⚕️ Bác sĩ:</b> ${dataSend.doctorName}</div>
    <p>Nếu các thông tin trên là đúng, vui lòng xác nhận tại liên kết bên dưới để hoàn tất quy trình đặt lịch khám bệnh.</p>
    <p>Chân thành cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
    <div>
    <a href="${dataSend.redirectLink}" target="_blank">👉 Xác nhận đặt lịch tại đây</a>
    </div>
    `,
  });
};

module.exports = { sendSimpleEmail };
