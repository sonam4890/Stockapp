import React, { Component } from "react";
import Table from "../../components/UI/Table/Table";
import { connect } from "react-redux";
import styles from "../API/Api.module.css";
import * as actions from "../../store/actions/index";
import PaginationList from "../../components/Pagination/PaginationList";

class SaveData extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 5,
  };
   
  backHandler = () => {
    this.props.history.push("/");
  };

  pageHandler = (num) => {
    this.setState({ currentPage: num });
  };
  render() {
    const totalPages = Math.ceil(
      this.props.saveData.length / this.state.postsPerPage
    );
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.props.saveData.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return (
      <div className="container">
        <div className={styles.Head}>Saved Data table</div>
        <table className="table" id={styles["Table"]}>
          <Table
            tableData={currentPosts}
            clicked={this.props.onDeleteData}
            text="Delete"
          />
        </table>
        <PaginationList total={totalPages} clicked={this.pageHandler} />
        <div className={styles.Head}>
          <button className="btn btn-primary" onClick={this.backHandler}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saveData: state.saveList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteData: (data) => dispatch(actions.deleteData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveData);
