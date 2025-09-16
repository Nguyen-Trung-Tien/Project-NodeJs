import doctorService from "../services/doctorService";

let getTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server...",
    });
  }
};

let getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctors();
    return res.status(200).json(doctors);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

let postInfoDoctor = async (req, res) => {
  try {
    let response = await doctorService.saveDetailInfoDoctor(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

let getDetailDoctorById = async (req, res) => {
  try {
    let info = await doctorService.getDetailDoctorById(req.query.id);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form server!",
    });
  }
};

let bulkCreateSchedule = async (req, res) => {
  try {
    let info = await doctorService.bulkCreateSchedule(req.body);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form server!",
    });
  }
};

let getScheduleByDate = async (req, res) => {
  try {
    let info = await doctorService.getScheduleByDate(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form server!",
    });
  }
};

let getExtraDoctorById = async (req, res) => {
  try {
    let info = await doctorService.getExtraDoctorById(req.query.doctorId);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form server!",
    });
  }
};

let getProfileDoctorById = async (req, res) => {
  try {
    let info = await doctorService.getProfileDoctorById(req.query.doctorId);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form server!",
    });
  }
};

let getListPatientForDoctor = async (req, res) => {
  try {
    let info = await doctorService.getListPatientForDoctor(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form server!",
    });
  }
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  postInfoDoctor: postInfoDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleByDate: getScheduleByDate,
  getExtraDoctorById: getExtraDoctorById,
  getProfileDoctorById: getProfileDoctorById,
  getListPatientForDoctor: getListPatientForDoctor,
};
