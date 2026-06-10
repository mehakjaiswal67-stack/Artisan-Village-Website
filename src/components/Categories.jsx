function Categories() {
  const categories = [
    "Handmade Crafts",
    "Pottery",
    "Paintings",
    "Traditional Art"
  ];

  return (
    <section className="categories">

      <h2>Shop By Categories</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <h3>{item}</h3>
            <p>Explore Now</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Categories;