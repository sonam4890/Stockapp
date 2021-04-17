import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchDataStart = () => {
  return {
    type: actionTypes.FETCH_DATA_START,
  };
};

export const fetchDataSuccess = (resData) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    companyData: resData,
  };
};

export const fetchDataFail = (err) => {
  return {
    type: actionTypes.FETCH_DATA_FAIL,
    error: err,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    axios
      .get(
        "http://api.marketstack.com/v1/tickers?access_key=5637f6301cb54d06debd901d3b94f93a"
      )
      .then((response) => {
        let datalist = [];
        response.data.data.map((el) => {
          datalist.push({
            name: el.name,
            symbol: el.symbol,
            stockExchange: el.stock_exchange.name,
            country: el.stock_exchange.country,
          });
        });
        dispatch(fetchDataSuccess(datalist));
      })
      .catch((err) => {
        dispatch(fetchDataFail(err));
      });
  };
};

export const saveDataSuccess = (resData) => {
  return {
    type: actionTypes.SAVE_DATA_SUCCESS,
    savedCompany: resData,
  };
};

export const saveDataFail = (err) => {
  return {
    type: actionTypes.SAVE_DATA_FAIL,
    error: err,
  };
};

export const saveData = (compData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:4000/companies", compData)
      .then((res) => {
      
        dispatch(saveDataSuccess(res.data));
      })
      .catch((err) => dispatch(saveDataFail(err)));
  };
};

export const viewDataStart = () => {
  return {
    type: actionTypes.VIEW_DATA_START,
  };
};

export const viewDataSuccess = (resData) => {
  return {
    type: actionTypes.VIEW_DATA_SUCCESS,
    savedCompany: resData,
  };
};

export const viewDataFail = (err) => {
  return {
    type: actionTypes.VIEW_DATA_FAIL,
    error: err,
  };
};

export const viewData = () => {
  return (dispatch) => {
    dispatch(viewDataStart());
    axios
      .get("http://localhost:4000/companies")
      .then((res) => {
        console.log(res.data);
        dispatch(viewDataSuccess(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteDataStart = () => {
  return {
    type: actionTypes.DELETE_DATA_START,
  };
};

export const deleteDataSuccess = (resData) => {
  return {
    type: actionTypes.DELETE_DATA_SUCCESS,
    deleteCompany: resData,
  };
};

export const deleteDataFail = () => {
  return {
    type: actionTypes.DELETE_DATA_START,
  };
};

export const deleteData = (delData) => {
  return (dispatch) => {
    dispatch(deleteDataStart());
    axios
      .delete("http://localhost:4000/companies/" + delData._id)
      .then((res) => {
    
        dispatch(deleteDataSuccess(delData));
      })
      .catch((err) => dispatch(deleteDataFail(err)));
  };
};


