function ProductCards() {
  const products = [
    {
      name: "Clay Pottery Vase",
      price: "₹899",
      image: "https://i.etsystatic.com/33553801/r/il/3ec5d3/5303449161/il_1588xN.5303449161_38ai.jpg"
    },
    {
      name: "Hand Painted Canvas",
      price: "₹1499",
      image: "https://i.etsystatic.com/37216702/r/il/0c1200/5998455267/il_680x540.5998455267_5knd.jpg"
    },
    {
      name: "Wooden Craft Bowl",
      price: "₹699",
      image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/132361/299345/handmade%2Fdownscaled%2Fh_dosx776rss7_2000x2000__71474.1779658820.jpg?c=2&imbypass=on"
    },
    {
      name: "Traditional Wall Art",
      price: "₹1199",
      image: "https://m.media-amazon.com/images/I/71MbH79iWzL.jpg"
    }
  ];

  return (
    <section className="products">

   

      <div className="product-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>


            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>Shop Now</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ProductCards;