import React from "react";
import Button from "../Button";
const table = (props) => {
  let list = props.tableData.map((company) => (
    <tr key={company.symbol}>
      <td>{company.name}</td>
      <td>{company.symbol}</td>
      <td>{company.stockExchange}</td>
      <td>
        <Button
          id={company.symbol}
          click={() => props.clicked(company)}
          viewclick={props.viewclicked}
          buttonNewId={props.buttonId}
        >
          {props.text}
        </Button>
      </td>
      <td>{company.country}</td>
    </tr>
  ));
  return list;
};
export default table;
