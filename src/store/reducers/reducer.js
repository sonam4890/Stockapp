import * as actionTypes from "../actions/actionTypes";

const initialState = {
  companyList: [],
  saveList: [],
  error: null,
  // savedSymbol: [],
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        companyList: action.companyData,
      };
    case actionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.VIEW_DATA_START:
      return {
        ...state,
      };
    case actionTypes.VIEW_DATA_SUCCESS:
      return {
        ...state,
        saveList: action.savedCompany,
      };
    case actionTypes.VIEW_DATA_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.DELETE_DATA_START:
      return {
        ...state,
      };
    case actionTypes.DELETE_DATA_SUCCESS:
      const updatedList = state.saveList.filter(
        (el) => el !== action.deleteCompany
      );
      return {
        ...state,
        saveList: updatedList,
        // savedSymbol: state.savedSymbol.filter(
        //   (el) => el !== action.deleteCompany.symbol
        // ),
      };
    case actionTypes.DELETE_DATA_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.SAVE_DATA_SUCCESS:
      return {
        ...state,
        saveList: state.saveList.concat(action.savedCompany)
        // savedSymbol: state.savedSymbol.concat(action.savedCompanySymbol),
      };
    case actionTypes.SAVE_DATA_FAIL:
      return {
        ...state,
        error: action.error,
      };
    
    default:
      return state;
  }
};

export default reducer;
