import { useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar({ sort, q }) {
    const [query, setQuery] = useState("")
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if (q.length > 0) {
          setHasSearched(true);
        }
      }, [q]);

    const handleChange = (e) => {
        setQuery(e.target.value);
        sort(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sort(query);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="SearchBar">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Pokemon name"
                />
                <button type="submit" title="Search">Search</button>
            </form>
            {hasSearched && !q.length && <div className="Nwf">Nothing was found! Check if the name is correct..</div>}
        </>
    )
}