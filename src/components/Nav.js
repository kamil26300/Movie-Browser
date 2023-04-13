import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
    const [ text, setText ] = useState('')
    
    const navigate = useNavigate();

    const updateText = (e) => {
        setText(e.target.value)
    }
    
	const updateSearchText = () => {
        navigate('/search')
		setSearchText(text);
	};

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
									aria-current="page"
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
						<form
							className="d-flex"
							role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
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
							<button
								className="btn btn-outline-light"
								type="Button"
                                onClick={updateSearchText}>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
