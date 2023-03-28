import Hero from "./Hero";
import "../App.css";
import { useState } from "react";
// API key = 6f8d314c84e820cd935e8e5c7ecb7125
// example = https://api.themoviedb.org/3/search/movie/images?api_key=6f8d314c84e820cd935e8e5c7ecb7125&language-en-US&query=john%20wick%202&page=1&include_adult=true1
// example = https://api.themoviedb.org/3/search/movie/${obj.id}/images?api_key=6f8d314c84e820cd935e8e5c7ecb7125&language-en-US&query=john%20wick%202&page=1&include_adult=true1
// example = https://api.themoviedb.org/3/search/movie/324552/images?api_key=6f8d314c84e820cd935e8e5c7ecb7125&language-en-US&query=john%20wick%202&page=1&include_adult=true1

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text">
			{isReadMore ? text.slice(0, 150) : text}
			<span onClick={toggleReadMore} className="read-or-hide">
				{isReadMore ? "...read more" : " show less"}
			</span>
		</p>
	);
};

const Searchview = ({ keyword, results }) => {
	const title = `You are seraching for ${keyword}`;

	const resultHtml = results.map((obj, i) => {
		if (obj.backdrop_path) {
			const posterURL = `https://image.tmdb.org/t/p/original${obj.backdrop_path}`;
			return (
				<div key={i} className="card">
					<img
						src={posterURL}
						className="card-img-top"
						alt="poster.jpg"
					/>
					<div className="card-body">
						<h5 className="card-title">
							{obj.original_title}
						</h5>
                        <ReadMore>
							{obj.overview}
                        </ReadMore>
						<a
							href="/search"
							className="btn cardB btn-primary">
							Open
						</a>
					</div>
				</div>
			);
		}
	});
	return (
		<div>
			<Hero text={title} />
			<div className="d-flex cardDiv flex-wrap m-0">
				{resultHtml}
			</div>
		</div>
	);
};

export default Searchview;
