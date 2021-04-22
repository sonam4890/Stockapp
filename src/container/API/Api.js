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
    this.props.onViewData();
    // this.props.history.push("/");
  }

  viewButtonHandler = () => {
    // this.props.onViewData();
    this.props.history.push("/saved");
  };

  nextPageHandler = () => {
    let totalPage = 0;
    if (this.state.filterData !== null) {
      totalPage = Math.ceil(
        this.state.filterData.length / this.state.postsPerPage
      );
    } else {
      totalPage = Math.ceil(
        this.props.companyList.length / this.state.postsPerPage
      );
    }

    this.setState((prevState) => {
      if (prevState.currentPage === totalPage) {
        return {
          currentPage: 1,
        };
      } else {
        return {
          currentPage: prevState.currentPage + 1,
        };
      }
    });
  };

  prevPageHandler = () => {
    this.setState((prevState) => {
      if (prevState.currentPage !== 1) {
        return {
          currentPage: prevState.currentPage - 1,
        };
      }
    });
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
    let totalPost = 0;
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    let currentPosts = null;
    if (this.state.filterData !== null) {
      currentPosts = this.state.filterData.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      totalPost = this.state.filterData.length;
    } else {
      currentPosts = this.props.companyList.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      totalPost = this.props.companyList.length;
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
        <PaginationList
          total={totalPost}
          currentPage={this.state.currentPage}
          postPerPage={this.state.postsPerPage}
          next={this.nextPageHandler}
          prev={this.prevPageHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyList: state.companyList,
    saved: state.savedSymbol,
    savedCompany: state.saveList,
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
