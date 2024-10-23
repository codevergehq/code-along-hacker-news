export default function ResultsList({ results }) {
  if (results.length === 0) {
    return <p>No results found</p>
  }

  return (
    <ul>
      {results.map(({ url, objectID, title }, index) => {
        const href = url || `https://news.ycombinator.com/item?id=${objectID}`

        return (
          <li key={objectID}>
            <span>{index + 1}.</span>
            <a href={href} target="_blank" rel="noreferrer">
              {title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
