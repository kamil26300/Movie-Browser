import Hero from "./Hero";

const Home = () => {
	return (
		<div>
            <Hero text="Welcome to home hero."/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti possimus ipsa ea quis debitis quasi vitae suscipit id. Repudiandae inventore commodi animi, iusto omnis placeat provident harum suscipit amet.
                        </p>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default Home;