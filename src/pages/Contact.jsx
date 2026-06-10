import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="page-content">
        <h1>Contact Us</h1>

        <p>Email: support@artisanvillage.com</p>

        <p>Phone: +91 9876543210</p>

        <p>Address: Pune, Maharashtra, India</p>

        <p>
          Feel free to reach out for product inquiries,
          artisan partnerships and support.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;