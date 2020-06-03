import React, { useState } from "react";


const ApiData = () => {
    const [apiData, setApiData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showForm, setShowform] = useState(false)
    let favoritesData = [];
    const [favorite, setFavorite] = useState(favoritesData)
    let rawData = [];
    let filteredData = [];

    const [name, setName] = useState("")
    const [birth_year, setBirthYear] = useState("")
    const [eye_color, setEyeColor] = useState("")


    async function getData() {
        // let nextUrl = "1";
        // let apiUrl = `https://swapi.dev/api/people/?page=${nextUrl}`;
        let apiUrl = `https://swapi.dev/api/people/?page=1`;
        let hasMorePages = true;

        while (hasMorePages) {
            const response = await fetch(apiUrl);
            const json = await response.json();
            if (!json.next) hasMorePages = false;
            if (hasMorePages) {
                apiUrl = json.next.replace("http", "https");
                json.results.map((obj) => {
                    return rawData.push(obj)
                })
            }
        }
        filterData();
    };


    function filterData() {
        filteredData = [...rawData];
        filteredData = filteredData.filter(item => {
            if (item.name.toLowerCase().includes(searchValue)) return true;
            else if (item.birth_year.toLowerCase().includes(searchValue)) return true;
            else if (item.eye_color.toLowerCase().includes(searchValue)) return true;
            else return false;
        })
        return setApiData(filteredData);
    };
    function enterKeyPressed(event) {
        if (event.key === "Enter") {
            getData();
        }
    }
    function addFavorite(item) {
        let model = {
            name: item.name,
            birth_year: item.birth_year,
            eye_color: item.eye_color
        }
        setFavorite(favoritesData => [...favoritesData, model])
    };
    function removeFavorite(item) {
        setFavorite(favorite.filter(favorite => favorite.name !== item.name))
    }
    function buildFavorite() {
        let model = {
            name: name,
            birth_year: birth_year,
            eye_color: eye_color
        }
        addFavorite(model)
    }
    let spanText = "⭐";
    const elements = apiData.map((result, index) => {
        return (
            <div className="result-container" key={result.name + index}>
                <p className="name">{result.name}</p>
                <span onClick={() => addFavorite(result)} role="img" aria-label="add as favorite" className="favorite grow active">{spanText}
                </span>
                <p className="eye-color">Eye color: <span>{result.eye_color}</span></p>
                <p className="birth-year">Birth year: <span>{result.birth_year}</span></p>
            </div >
        )
    })

    const favorites = favorite.map((item) => {
        return (
            <div className="result-container" key={item.name}>
                <p className="name">{item.name}</p>
                <span onClick={() => removeFavorite(item)} role="img" aria-label="add as favorite" className="favorite grow active">❌
                </span>
                <p className="eye-color">Eye color: <span>{item.eye_color}</span></p>
                <p className="birth-year">Birth year: <span>{item.birth_year}</span></p>
            </div >
        )
    })

    let buttonText = "Add own favorite";
    if (showForm) {
        buttonText = "Show results"
    };
    return (
        <div className="search-bar">
            <input onKeyPress={enterKeyPressed} value={searchValue} onChange={e => setSearchValue(e.target.value.toLowerCase())} type="text" placeholder="Type a search value e.g Skywalker" />
            <button onClick={getData}>Search</button>
            <button onClick={() => setShowform(!showForm)} >{buttonText}</button>
            {showForm ?
                <div>
                    <h2>Add your own favorite:</h2>
                    <div className="form-container">
                        <label htmlFor="name">Name: <br /><input required id="name" type="text" onChange={e => setName(e.target.value)} /></label>
                        <label htmlFor="birth">Birth year: <br /><input required id="birth" type="text" onChange={e => setBirthYear(e.target.value)} /></label>
                        <label htmlFor="eye">Eye color: <br /><input required id="eye" type="text" onChange={e => setEyeColor(e.target.value)} /></label>
                        <button onClick={buildFavorite} disabled={name === "" || eye_color === "" || birth_year === ""} >Add</button>
                    </div>
                </div>
                : <div>
                    {elements}
                </div>}
            {favorite.length > 0 ?
                <div className="favorites">
                    <h1>Favorites</h1>
                    {favorites}
                </div>
                : null}
        </div>
    )
}

export default ApiData;

