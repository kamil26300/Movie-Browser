const Hero = ({text, imgURL}) => {
    return (
        <header className="bg-black p-5 hero-container">
            <h1 className="hero-text">{text}</h1>
            <div className="hero-img" style={{backgroundImage: `url(${imgURL})`}}></div>
        </header>
    )
}

export default Hero;