import PageHeader from './PageHeader';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you! Your reservation request has been submitted.');
    event.target.reset();
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Salamat! We'd love to hear from you!" />
      <section className="container py-5">
      <div className="row gy-4">
        <div className="col-lg-6">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="col-md-6">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-control" rows="5" required />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-warning btn-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h2>Find Us</h2>
              <p>
                Our Google Maps location: <strong>40-06 70th St, Woodside, NY 11377</strong>.
              </p>
              <div className="ratio ratio-16x9 rounded overflow-hidden">
                <iframe
                  title="Lola's Kalan Bistro Location"
                  src="https://www.google.com/maps?q=40-06+70th+St,+Woodside,+NY+11377&hl=en&z=15&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Hours Section */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h3 className="mb-3">Hours</h3>
              <p className="mb-1"><strong>Monday - Thursday:</strong> 11am - 10pm</p>
              <p className="mb-1"><strong>Friday - Saturday:</strong> 11am - 11pm</p>
              <p className="mb-3"><strong>Sunday:</strong> 12pm - 9pm</p>
            </div>
          </div>

          {/* Phone and Email Section */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h3 className="mb-3">Get in Touch</h3>
              <p className="mb-2">
                <strong>Phone:</strong> <a href="tel:+11231231234" className="text-decoration-none">(123) 123-1234</a>
              </p>
              <p className="mb-0">
                <strong>Email:</strong> <a href="mailto:hello@lolaskalan.com" className="text-decoration-none">hello@lolaskalan.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
