import PageHeader from './PageHeader';

function About() {
  return (
    <>
      <PageHeader title="About Lola's Kalan" subtitle="A Journey Through Authentic Filipino Home Cooking" />
      <section className="container py-5">
      <div className="row align-items-center gx-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1>Our Story</h1>
          <p>
            Lola's Kalan Bistro was founded in 2002 by Sophia Reyes, who brought her family's cherished Filipino recipes from the Province region of Manila to our community. What began as a small family gathering place with just 6 tables has flourished into a beloved neighborhood staple, known for authentic home-cooked Filipino cuisine.
          </p>
          <p>
            This restaurant is named after Sophia's grandmother, the one who taught Sophia these secret recipes. It is inspired by the traditional Filipino stove called "kalan," our restaurant honors the generations of family cooking wisdom. Every dish on our menu is a recipe passed down through generations, served with the same love that Lola used to prepare meals for her family.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="rounded overflow-hidden shadow-sm">
            <img
              src="https://platform.ny.eater.com/wp-content/uploads/sites/6/chorus/uploads/chorus_asset/file/24568717/reneed2.jpeg?quality=90&strip=all&crop=0,0,100,100"
              alt="Restaurant Interior"
              className="img-fluid"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <div className="row gx-5 align-items-center">
        <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
          <h2>Our Mission</h2>
          <p>
            At Lola's Kalan Bistro, our mission is to celebrate Filipino culinary heritage by serving authentic, homestyle dishes that bring families together. We believe that the best meals are made with tradition, quality ingredients, and a generous heart. Our recipes honor the flavors and memories of the Philippines.
          </p>
          <p className="mb-3">We maintain our commitment to excellence by:</p>
          <ul className="list-unstyled">
            <li className="mb-2">✓ Using time-tested family recipes passed down through generations</li>
            <li className="mb-2">✓ Sourcing the freshest ingredients for authentic Filipino flavors</li>
            <li className="mb-2">✓ Preparing each dish with care and attention to traditional methods</li>
            <li className="mb-2">✓ Creating a warm, welcoming "bahay" atmosphere for all guests</li>
            <li className="mb-2">✓ Sharing cultural pride and family values through our cuisine</li>
          </ul>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="rounded overflow-hidden shadow-sm">
            <img
              src="https://s3-media0.fl.yelpcdn.com/bphoto/KPjG591qpTgy1rIFFaNkAQ/348s.jpg"
              alt="Chef Preparing Food"
              className="img-fluid"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
