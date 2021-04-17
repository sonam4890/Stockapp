import React, { Component } from "react";
import Table from "../../components/UI/Table/Table";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import styles from "./Api.module.css";
import PaginationList from "../../components/Pagination/PaginationList";

class ApiData extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 5,
    filterData: null,
  };

  componentDidMount() {
    this.props.onFetchData();
    this.props.onViewData()
    // this.props.history.push("/");
  }

  
  viewButtonHandler = () => {
    // this.props.onViewData();
    this.props.history.push("/saved");
  };

  pageHandler = (num) => {
    this.setState({ currentPage: num });
  };

  eventHandler = (event) => {
    if (event.target.value === "" || event.target.value === null) {
      this.setState({ filterData: null });
    } else {
      let val = event.target.value.toLowerCase();
      let value = [...val];
      let Value = value[0].toUpperCase();
      value.splice(0, 1, Value);
      let updatedArr = this.props.companyList.filter((company) =>
        company.name.includes(value.join(""))
      );
      this.setState({ filterData: updatedArr });
    }
  };

  render() {
    let totalPages = 0;
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    let currentPosts = null;
    if (this.state.filterData !== null) {
      currentPosts = this.state.filterData.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      totalPages = Math.ceil(
        this.state.filterData.length / this.state.postsPerPage
      );
    } else {
      currentPosts = this.props.companyList.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      totalPages = Math.ceil(
        this.props.companyList.length / this.state.postsPerPage
      );
    }

    return (
      <div className="container">
        <div className={styles.Head}>
          <span>Stock details table</span>
          <div className="ui action input">
            <input
              type="text"
              placeholder="Search..."
            
              onChange={(event) => this.eventHandler(event)}
            ></input>
            <button className="ui icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </div>
        <table id={styles["Table"]} className="table">
          <thead>
            <tr>
              <th>COMPANY NAME</th>
              <th>SYMBOL</th>
              <th>STOCK EXCHANGE</th>
              <th></th>
              <th>COUNTRY</th>
            </tr>
          </thead>
          <tbody>
            <Table
              tableData={currentPosts}
              buttonId={this.props.savedCompany}
              text="Save Data"
              clicked={this.props.onSaveData}
              viewclicked={this.viewButtonHandler}
            />
          </tbody>
        </table>
        <PaginationList total={totalPages} clicked={this.pageHandler} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyList: state.companyList,
    saved: state.savedSymbol,
   savedCompany : state.saveList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => dispatch(actions.fetchData()),
    onViewData: () => dispatch(actions.viewData()),
    onSaveData: (data) => dispatch(actions.saveData(data)),
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiData);
