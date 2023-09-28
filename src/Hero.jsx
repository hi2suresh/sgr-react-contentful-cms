import hero from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            aperiam natus tempora quis? Corporis eveniet unde fugit
            reprehenderit eum mollitia?
          </p>
        </div>
        <div className="img-container">
          <img src={hero} alt="women and a browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
