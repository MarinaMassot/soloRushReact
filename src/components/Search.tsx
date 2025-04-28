import "./Search.css";

interface SearchPropsType {
        search: string;
        SetSearch: any;
}

function Search({search, setSearch}): SearchPropsType {

    return (
                <input
                    type="text"
                    id="coffin-search"
                    value={search}
                    placeholder="Choose your final resting place ☠️ "
                    onChange={(event) => setSearch(event.target.value)}
                />
    )
}

export default Search;