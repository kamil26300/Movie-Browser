import { useState, useEffect } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=6f8d314c84e820cd935e8e5c7ecb7125&language-en-US`
		)
			.then((response) => response.json())
			.then((data) => {
				setIsLoading(false);
				setMovieDetails(data);
			});
	}, [id]);

	const posterr = () => {
		const imgURL = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
		if (movieDetails.homepage) {
			return (
				<a href={movieDetails.homepage}>
					<img
						className="img-fluid shadow rounded"
						src={imgURL}
						alt="poster"
					/>
				</a>
			);
		} else {
			return (
				<img
					className="img-fluid shadow rounded"
					src={imgURL}
					alt="poster"
				/>
			);
		}
	};

	function renderMovieDetails() {
		const imgURL = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`;
		if (isLoading) {
			return <Hero text="Loading......" />;
		}
		if (movieDetails) {
			return (
				<>
                    <Hero text={movieDetails.original_title} imgURL={imgURL}/>
					<div className="container m-5">
						<div className="row">
							<div className="col-md-3">
								{posterr()}
							</div>
							<div className="col-md-9">
								<div className="tagLine text-center">
									{
										movieDetails.tagline
									}
								</div>
								<div className="detail fw-bold fs-5">
									{
										movieDetails.overview
									}
								</div>
							</div>
						</div>
					</div>
				</>
			);
		}
	}
	return renderMovieDetails();
};

export default MovieView;
