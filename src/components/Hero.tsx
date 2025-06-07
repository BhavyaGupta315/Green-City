import bgImage from '../assets/Green City.jpg'; // adjust path as needed

const Hero = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`, // you can replace this with a colony image
      }}
    >
     <div className="absolute inset-0 bg-black/60" /> {/* opacity 50% */}

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Green City</h1>
        <p className="text-lg md:text-xl mb-6">
          A modern and peaceful colony built for a greener tomorrow.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
