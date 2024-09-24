import PropTypes from "prop-types";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            ZeeCare Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patients needs. At
            ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

// Adding PropTypes validation
Hero.propTypes = {
  title: PropTypes.string.isRequired, // title should be a required string
  imageUrl: PropTypes.string.isRequired, // imageUrl should also be a required string
};

export default Hero;
