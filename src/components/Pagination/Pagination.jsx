import "./Pagination.css";
import PageButton from "../PageButton/PageButton";
import { useEffect, useState } from "react";

const Pagination = ({ pages, handlePage, page }) => {
  const prevOffSet = parseInt(page) - 4;
  const nextOffSet = parseInt(page) + 4;
  const maxLimit = parseInt(pages) - 4;
  const items = [];

  function pushItem(num) {
    if (num == page) {
      items.push(
        <PageButton
          key={num}
          number={num}
          activated="activated"
          handleClick={handlePage}
        />
      );
    } else {
      items.push(
        <PageButton key={num} number={num} handleClick={handlePage} />
      );
    }
  }

  if (prevOffSet <= 1) {
    for (let i = 1; i <= 9; i++) {
      pushItem(i);
    }
  } else if (page >= maxLimit) {
    for (let i = pages - 8; i <= pages; i++) {
      pushItem(i);
    }
  } else if (prevOffSet > 1 && nextOffSet < pages) {
    for (let i = prevOffSet; i <= nextOffSet; i++) {
      pushItem(i);
    }
  }

  return (
    <div>
      <div className="pagination">{items}</div>
    </div>
  );
};

export default Pagination;
