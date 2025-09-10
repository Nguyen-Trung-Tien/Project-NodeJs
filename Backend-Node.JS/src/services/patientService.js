import db from "../models/index";
import emailService from "./emailService";

require("dotenv").config();

let postBookAppointment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.doctorId || !data.timeType || !data.date) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameter !",
        });
      } else {
        //upsert patient
        let user = await db.User.findOrCreate({
          where: { email: data.email },
          default: { email: data.email, roleId: "R3" },
        });

        await emailService.sendSimpleEmail({
          receiveEmail: data.email,
          patientName: "Nguyễn Văn A",
          time: "8.00 - 9.00 thứ 5, 24/5/2025",
          doctorName: "Mana",
          redirectLink:
            "https://youtu.be/0GL--Adfqhc?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI",
        });
        //create booking record

        if (user && user[0]) {
          await db.Bookings.findOrCreate({
            where: { patientId: user[0].id },
            defaults: {
              statusId: "S1",
              doctorId: data.doctorId,
              patientId: user[0].id,
              date: data.date,
              timeType: data.timeType,
            },
          });
        }
        resolve({
          errCode: 0,
          errMessage: "Save info patient success!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { postBookAppointment: postBookAppointment };
