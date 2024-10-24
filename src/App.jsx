import * as React from "react"
import SearchForm from "./components/SearchForm"
import ResultsHeader from "./components/ResultsHeader"
import ResultsList from "./components/ResultsList"
import { fetchData } from "./utils/fetchData"

import "./styles.css"

export default function App() {
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState([])
  const [tag, setTag] = React.useState("story")
  const [page, setPage] = React.useState(0)
  const [resultsPerPage, setResultsPerPage] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(50)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    fetchData({ query, tag, page })
      .then(({ results, pages, resultsPerPage }) => {
        setResults(results)
        setResultsPerPage(resultsPerPage)
        setTotalPages(pages)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setLoading(false)
      })
  }, [query, tag, page])

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPage(0)
  }

  const handleTag = (e) => {
    setTag(e.target.value)
    setPage(0)
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    setPage(page - 1)
  }

  return (
    <main>
      <h1>Hacker News Search</h1>
      <SearchForm
        query={query}
        tag={tag}
        handleSearch={handleSearch}
        handleTag={handleTag}
      />
      <section>
        <ResultsHeader
          loading={loading}
          page={page}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        <ResultsList results={results} />
      </section>
    </main>
  )
}
