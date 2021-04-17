import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../API/Api.module.css";

class SearchField extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.Head}>
          <span>Stock details table</span>
          <div className="ui action input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(event) => this.props.onSearchFunc(event)}
            ></input>
            <button className="ui icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterList: state.filterList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFunc: (event) => dispatch(actions.searchData(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
