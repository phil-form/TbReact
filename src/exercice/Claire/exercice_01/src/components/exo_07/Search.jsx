import {useState} from "react";

function Search(props) {

    const { msg, onSearch } = props;
    const [query, setQuery] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        onSearch(query);
    }

    return (
        <form className="col-md-4 mx-auto">
            <div className="form-group"></div>
            <label htmlFor='searchbox'>Entrer un nom de ville</label>
            <input type='text' name='searchbox' className="form-control"
                   value={query} onChange={(e) => setQuery(e.target.value)} />

            <button className="btn btn-primary" onClick={handleSubmit}>Rechercher</button>
        </form>
    );
}

export default Search;
