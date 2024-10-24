import { RotatingLines } from "react-loader-spinner"

export default function ResultsHeader({
  loading,
  page,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) {
  const currentPage = page === totalPages ? page : page + 1
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <header>
      <h2>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="20"
          visible={loading}
        />
      </h2>
      <div>
        <button
          className="link"
          onClick={handlePrevPage}
          disabled={isFirstPage}
        >
          Previous
        </button>
        <button className="link" onClick={handleNextPage} disabled={isLastPage}>
          Next
        </button>
      </div>
    </header>
  )
}
