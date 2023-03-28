import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Aboutview from "./components/About";
import Searchview from "./components/Searchview";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
	const [ searchResults, setSearchResults ] = useState([]);
	const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f8d314c84e820cd935e8e5c7ecb7125&language-en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            setSearchResults(data.results)
        })
    }, [searchText])

	return (
		<div>
			<Navbar searchText={searchText} setSearchText={setSearchText}/>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route
					exact
					path="/about"
					element={<Aboutview />}
				/>
				<Route
					path="/search"
					element={
						<Searchview
							keyword={searchText}
							results={searchResults}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
