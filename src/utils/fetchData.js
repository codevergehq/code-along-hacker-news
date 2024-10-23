export const fetchData = async ({ query = "", page = 0, tag = "story" }) => {
    return fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
        tag
      )}&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => ({
        results: json.hits?.filter((hit) => hit.title) || [],
        pages: json.nbPages || 0,
        resultsPerPage: json.hitsPerPage || 20
      }));
  };