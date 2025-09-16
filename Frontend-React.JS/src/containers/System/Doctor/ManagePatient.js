import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./ManagePatient.scss";
import DatePicker from "../../../components/Input/DatePicker";
import { getAllPatientForDoctor } from "../../../services/userService";
import moment from "moment";
import { LANGUAGE } from "../../../utils";
import RemedyModal from "./RemedyModal";

class ManagePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(new Date()).startOf("day").valueOf(),
      dataPatient: [],
      isOpenRemedyModal: false,
      dataModal: {},
    };
  }

  async componentDidMount() {
    let { user } = this.props;
    let { currentDate } = this.state;
    let formatDate = new Date(currentDate).getTime();
    this.getDataPatient(user, formatDate);
  }

  getDataPatient = async (user, formatDate) => {
    let res = await getAllPatientForDoctor({
      doctorId: user.id,
      date: formatDate,
    });
    if (res && res.errCode === 0) {
      this.setState({
        dataPatient: res.data,
      });
    }
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  handleChangeDatePicker = (date) => {
    this.setState(
      {
        currentDate: date[0],
      },
      () => {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formatDate = new Date(currentDate).getTime();
        this.getDataPatient(user, formatDate);
      }
    );
  };

  handleBtnConfirm = (item) => {
    let data = {
      doctorId: item.doctorId,
      patientId: item.patientId,
      email: item.patientData.email,
    };
    this.setState({
      isOpenRemedyModal: true,
      dataModal: data,
    });
  };

  sendRemedy = () => {
    alert("click me");
  };

  closeRemedyModal = () => {
    this.setState({
      isOpenRemedyModal: false,
      dataModal: {},
    });
  };
  render() {
    let { dataPatient, isOpenRemedyModal, dataModal } = this.state;
    let { language } = this.props;
    return (
      <>
        <div className="manage-patient-container">
          <div className="m-p-title">Quản lý bệnh nhân khám bệnh</div>
          <div className="manage-patient-body row">
            <div className="col-4 form-group">
              <label> Chọn ngày khám</label>
              <DatePicker
                className="form-control"
                onChange={this.handleChangeDatePicker}
                selected={this.state.currentDate}
              />
            </div>
            <div className="col-12 table-manage-patient">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Thời gian</th>
                    <th>Họ và tên</th>
                    <th>Địa chỉ</th>
                    <th>Giới tính</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPatient && dataPatient.length > 0 ? (
                    dataPatient.map((item, index) => {
                      let time =
                        language === LANGUAGE.VI
                          ? item.timeTypeDataPatient.valueVi
                          : item.timeTypeDataPatient.valueEn;
                      let gender =
                        language === LANGUAGE.VI
                          ? item.patientData.genderData.valueVi
                          : item.patientData.genderData.valueEn;
                      return (
                        <tr key={item.id || index}>
                          <td>{index + 1}</td>
                          <td>{time}</td>
                          <td>{item.patientData.firstName}</td>
                          <td>{item.patientData.address}</td>
                          <td>{gender}</td>
                          <td>
                            <button
                              className="mp-btn-confirm"
                              onClick={() => this.handleBtnConfirm(item)}
                            >
                              Xác nhận
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center" }}>
                        No data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <RemedyModal
          isOpenModal={isOpenRemedyModal}
          dataModal={dataModal}
          closeRemedyModal={this.closeRemedyModal}
          sendRemedy={this.sendRemedy}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    user: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
