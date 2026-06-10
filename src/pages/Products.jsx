import Navbar from "../components/Navbar";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Navbar />

      <div className="page-content">
        <h1>Our Products</h1>
        <p>
          Explore our collection of handmade crafts, pottery,
          paintings and traditional artwork.
        </p>
      </div>
      
        
      <ProductCards />

      <Footer />
    </>
  );
}

export default Products;