import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Aboutview from "./components/About";
import Searchview from "./components/Searchview";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieView from "./components/MovieView"
import Hero from "./components/Hero"

function App() {
	const [ searchResults, setSearchResults ] = useState([]);
	const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f8d314c84e820cd935e8e5c7ecb7125&language-en-US&query=${searchText}&page=1&include_adult=true`)
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
				<Route path="/movies/:id" element={<MovieView />} />
				<Route path="/:else" element={<Hero text="Error 404 Page doesn't exist" />} />
			</Routes>
		</div>
	);
}

export default App;
