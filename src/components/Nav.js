import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
    const [ text, setText ] = useState('')
    const [ searchOptions, setSearchOptions ] = useState([])
    
    const navigate = useNavigate();

    // fetched api for drop down menu in search
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f8d314c84e820cd935e8e5c7ecb7125&language-en-US&query=${text}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            setSearchOptions(data.results)
        })
    }, [text])

    // updating text in search area
    const updateText = (e) => {
        setText(e.target.value)
    }
    
    // Shows all the cards on press of button
	const updateSearchText = () => {
        navigate('/search')
		setSearchText(text);
	};
    
    const resultOptions = searchOptions.map((obj, i) => {
        return <option key={i} value={obj.original_title}></option>
    })

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-success">
				<div className="container-fluid">
					<Link className="navbar-brand text-white" to="/">
						Movie Browser
					</Link>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active text-white"
									to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link text-white"
									to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link disabled text-white"
									to="/">
									Comming
									soon
								</Link>
							</li>
						</ul>
						<div
							className="d-flex"
							role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
                                list="titles"
								value={
									text
								}
								onChange={
									updateText
								}
                                // onKeyDown={(e) => {
                                //     if (e.keyCode == 13) {
                                //         updateSearchText()
                                //     }
                                // }}
							/>
                            <datalist id="titles">{resultOptions}</datalist>
							<button
								className="btn btn-outline-light"
								type="Button"
                                onClick={updateSearchText}>
								Search
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
