import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaginationComponenet = ({ productPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mr-8 py-8 pagination">
      <ul className="page-numbers">
        {currentPage !== 1 && (
          <li className="prev page-numbers" onClick={() => paginate(currentPage - 1)}>
            ←
          </li>
        )}
        {pageNumbers.map((number, index) => (
          <li onClick={() => paginate(number)} key={index} className={`page-numbers ${currentPage === number ? "current" : "passive"}`}>
            {number}
          </li>
        ))}
        {pageNumbers.length !== currentPage && (
          <li className="next  page-numbers" onClick={() => paginate(currentPage + 1)}>
            →
          </li>
        )}
      </ul>
    </div>
  );
};
export default PaginationComponenet;
