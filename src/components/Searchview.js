import Hero from "./Hero";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// API key = 6f8d314c84e820cd935e8e5c7ecb7125

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	if (text.length > 160) {
		return (
			<p className="text">
				{isReadMore ? text.slice(0, 160) : text}
				<span
					onClick={toggleReadMore}
					className="read-or-hide">
					{isReadMore
						? "...read more"
						: " show less"}
				</span>
			</p>
		);
	} else {
		return <p>{text}</p>;
	}
};

const Searchview = ({ keyword, results }) => {
	const title = `You are seraching for ${keyword}`;
	const resultHtml = results.map((obj, i) => {
		if (obj.backdrop_path) {
			const posterURL = `https://image.tmdb.org/t/p/original${obj.poster_path}`;
			const detailURL = `/movies/${obj.id}`;
			return (
				<div
					key={i}
					className="col-lg-4 col-md-6 col-12 py-2">
					<div
						className="card bg-dark text-light">
						<img
							src={posterURL}
							className="card-img-top"
							alt="poster.jpg"
						/>
						<div className="card-body">
							<h5 className="card-title">
								{
									obj.original_title
								}
							</h5>
							<ReadMore
								className={
									"overview"
								}>
								{obj.overview}
							</ReadMore>
							<Link
								to={detailURL}
								className="btn cardB btn-primary">
								Open
							</Link>
						</div>
					</div>
				</div>
			);
		} else {
			return <></>;
		}
	});

	return (
		<div>
			<Hero text={title} />
			<div className="container cardDiv">
				<div className="row py-3">{resultHtml}</div>
			</div>
		</div>
	);
};

export default Searchview;
