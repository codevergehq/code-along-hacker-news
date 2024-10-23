export default function SearchForm({ query, tag, handleSearch, handleTag }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="query">Search</label>
        <input
          type="text"
          id="query"
          name="query"
          value={query}
          onChange={handleSearch}
          placeholder="Search Hacker News..."
        />
      </div>
      <div>
        <label htmlFor="tag">Tag</label>
        <select id="tag" name="tag" onChange={handleTag} value={tag}>
          <option value="story">Story</option>
          <option value="ask_hn">Ask HN</option>
          <option value="show_hn">Show HN</option>
          <option value="poll">Poll</option>
        </select>
      </div>
    </form>
  )
}
