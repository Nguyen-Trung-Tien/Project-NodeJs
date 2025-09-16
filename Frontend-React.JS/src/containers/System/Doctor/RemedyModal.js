import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./RemedyModal.scss";

class RemedyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    let { isOpenModal, closeRemedyModal, dataModal, sendRemedy } = this.props;

    return (
      <Modal
        isOpen={isOpenModal}
        className={"booking-modal-container"}
        size="md"
        centered
        // backdrop={true}
      >
        <div>
          <div className="modal-header">
            <h5 className="modal-title">Gửi hóa đơn khám bệnh</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeRemedyModal}
            ></button>
          </div>
          <ModalBody>
            <div className="row">
              <div className="col-6 form-group">
                <label>Email bệnh nhân</label>
                <input
                  className="form-control"
                  type="email"
                  value={dataModal.email}
                />
              </div>

              <div className="col-6 form-group">
                <label>Chọn file đơn thuốc</label>
                <input className="form-control-file" type="file" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={sendRemedy}>
              Send
            </Button>
            <Button color="secondary" onClick={closeRemedyModal}>
              Cancel
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.app.language, genders: state.admin.genders };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
