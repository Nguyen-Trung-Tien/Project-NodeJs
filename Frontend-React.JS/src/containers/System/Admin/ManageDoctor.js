import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import "./ManageDoctor.scss";
import Select from "react-select";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedOption: " ",
      description: "",
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {}

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  handleSaveContentMarkdown = () => {
    console.log("check markdown", this.state);
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleOnchangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  render() {
    return (
      <div className="manage-doctor-container">
        <div className="manage-doctor-title">Tạo thông tin doctors </div>
        <div className="more-info">
          <div className="content-left form-group">
            <label>Chọn bác sĩ</label>
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
          <div className="content-right form-group">
            <label> Thông tin giới thiệu</label>
            <textarea
              className="form-control"
              rows="4"
              onChange={(event) => this.handleOnchangeDescription(event)}
              value={this.state.description}
            ></textarea>
          </div>
        </div>
        <div className="manage-doctor-editor">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <button
          className="save-content-doctor"
          onClick={() => this.handleSaveContentMarkdown()}
        >
          Lưu thông tin
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
    deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
