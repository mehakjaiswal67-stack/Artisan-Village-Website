function GiftSection() {
  return (
    <section className="gift-section">

      <div className="gift-heading">
        <h2> The Ultimate Gift Destination</h2>

        <p>
          Discover handcrafted gifts that make every celebration
          memorable. From artisan pottery to traditional artwork,
          find the perfect gift for your loved ones.
        </p>
      </div>

      <div className="gift-grid">

        <div className="gift-large">
          <img
            src="https://imgmedia.lbb.in/media/2022/01/61dd97420169ed72cd364bf2_1641912130464.jpg"
          />

          <div className="gift-overlay">
            <h3>Wedding Gifts</h3>
            <p>Elegant handmade treasures for special occasions.</p>
            <button>Explore</button>
          </div>
        </div>

        <div className="gift-small">
          <img
            src="https://m.media-amazon.com/images/I/61g9gF-eHeL._AC_.jpg"
            alt="Birthday Gifts"
          />

          <div className="gift-overlay">
            <h3> Birthday Gifts</h3>
            <button>Explore</button>
          </div>
        </div>

        <div className="gift-small">
          <img
            src="https://www.zwende.com/cdn/shop/files/Modern-Ceramic-Diya-Jar-Candle-1_1800x1800.jpg?v=1730118764"
          />

          <div className="gift-overlay">
            <h3>Festival Gifts</h3>
            <button>Explore</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default GiftSection;