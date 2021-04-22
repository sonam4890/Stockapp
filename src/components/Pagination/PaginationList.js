import React from "react";
import styles from "./Pagination.module.css";

const paginationList = (props) => {
  let posts = Number(props.currentPage * props.postPerPage);

  return (
    <div className={styles.Head}>
      <span>
        {posts + 1 - props.postPerPage} - {posts} of {props.total}
      </span>
      <i class="angle left icon" onClick={props.prev}></i>
      <i class="angle right icon" onClick={props.next}></i>
    </div>
  );
};

// const pageNumbers = [];
// for (let i = 1; i <= props.total; i++) {
//   pageNumbers.push(i);
// }
// return (
//   <nav aria-label="Page navigation example">
//     <ul class="pagination">
//       {pageNumbers.map((num) => (
//         <li className="page-item" key={num}>
//           <Link
//             className="page-link"
//             to="#"
//             onClick={() => props.clicked(num)}
//           >
//             {num}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );

export default paginationList;
