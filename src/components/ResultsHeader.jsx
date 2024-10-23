import { RotatingLines } from "react-loader-spinner"

export default function ResultsHeader({
  loading,
  page,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <header>
      <h2>
        <span>Not Implemented Yet</span>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="20"
          visible={null}
        />
      </h2>
      <div>
        <button className="link" onClick={null} disabled={null}>
          Previous
        </button>
        <button className="link" onClick={null} disabled={null}>
          Next
        </button>
      </div>
    </header>
  )
}
