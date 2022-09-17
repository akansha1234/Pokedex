import Button from "react-bootstrap/Button";
const Pagination = ({ goNextPage, goPrevPage }) => {
  return (
    <div className="btn-grps">
      {goPrevPage && (
        <Button variant="secondary" onClick={goPrevPage}>
          Previous
        </Button>
      )}
      {goNextPage && (
        <Button variant="secondary" onClick={goNextPage}>
          Next
        </Button>
      )}
    </div>
  );
};
export default Pagination;
