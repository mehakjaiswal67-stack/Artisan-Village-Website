import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="page-content">
        <h1>About Us</h1>

        <p>
          ArtisanVillage is a platform dedicated to supporting
          local artisans and preserving traditional craftsmanship.
        </p>

        <p>
          We bring together handmade products, unique artwork
          and meaningful gifts from talented creators across India.
        </p>

        <p>
          Every purchase helps artisans grow and sustain their craft.
        </p>

        <p>
          Our mission is to connect culture, creativity and
          community through handmade treasures.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;