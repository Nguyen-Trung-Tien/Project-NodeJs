import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfo.scss";
import { LANGUAGE } from "../../../utils";
import { FormattedMessage } from "react-intl";
import { getScheduleDoctorByDate } from "../../../services/userService";

class DoctorExtraInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfo: false,
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      let allDays = this.getArrDays(this.props.language);
      this.setState({ allDays: allDays });
    }
  }

  showHideDetailInfo = (status) => {
    this.setState({
      isShowDetailInfo: status,
    });
  };
  render() {
    let { isShowDetailInfo } = this.state;
    return (
      <div className="doctor-extra-info-container">
        <div className="content-up">
          <div className="text-address">ĐỊA CHỈ KHÁM</div>
          <div className="name-clinic">PHÒNG KHÁM ĐA KHOA </div>
          <div className="detail-address">170 - Thống Nhất - HCM -UTH</div>
        </div>
        <div className="content-down">
          {isShowDetailInfo === false && (
            <div className="short-info">
              GIÁ KHÁM: 200.000đ .
              <span onClick={() => this.showHideDetailInfo(true)}>
                Xem Thêm
              </span>
            </div>
          )}

          {isShowDetailInfo === true && (
            <>
              <div className="title-price">GIÁ KHÁM:</div>
              <div className="detail-info">
                <div className="price">
                  <span className="left">Giá Khám</span>
                  <span className="right">250.000đ</span>
                </div>
                <div className="note">
                  Được ưu tiên khám trước khi đặt lịch qua BookingCare. Giá khám
                  cho bệnh nhân nước ngoài là 30 usd{" "}
                </div>
              </div>
              <div className="payment">
                Người bệnh có thể thanh toán bằng tiền mặc hoặc qua thẻ ngân
                hàng
              </div>
              <div className="hide-price">
                <span onClick={() => this.showHideDetailInfo(false)}>
                  Ẩn bản giá
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.app.language };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfo);
