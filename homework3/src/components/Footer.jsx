function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Lola's Kalan Bistro</h5>
            <p className="small">Authentic Filipino dining experience since 2002.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Hours</h5>
            <p className="small mb-1">Monday - Thursday: 11am - 10pm</p>
            <p className="small mb-1">Friday - Saturday: 11am - 11pm</p>
            <p className="small mb-0">Sunday: 12pm - 9pm</p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="small mb-1">
              <a href="tel:+11231231234" className="text-white text-decoration-none">(123) 123-1234</a>
            </p>
            <p className="small mb-0">
              <a href="mailto:hello@lolaskalan.com" className="text-white text-decoration-none">hello@lolaskalan.com</a>
            </p>
          </div>
        </div>
        <div className="border-top pt-3">
          <p className="text-center small mb-0">&copy; 2026 Lola's Kalan Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
