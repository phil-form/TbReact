import { useState } from "react";

const Search = ({onMyEvent}) => {
    const [query, setQuery] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onMyEvent(query);
    }

    return (
        <>
            <form action="">
                <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <input type="submit" value="Search" onClick={handleSubmit}/>
            </form>
        </>
    );
};

export default Search;