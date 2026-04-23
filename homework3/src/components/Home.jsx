import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Lechon_Kawali.jpg',
  'https://barefeetinthekitchen.com/wp-content/uploads/2025/05/Lumpia-BFK-8.jpg',
  'https://www.whats4eats.com/wp-content/uploads/2023/04/pastas-pancit-bihon-flickr-dbgg1979-3852511838-4x3-1.jpg',
  'https://farm6.staticflickr.com/5134/14023792431_b286835d88_b.jpg',
  'https://static.where-e.com/United_States/Kusina-Pinoy-Bistro_944716181fa7e75c000deefb9fdb1012.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/wu7lXgefIrzifS_nDqHJ3g/l.jpg',
];

const featuredItems = [
  {
    title: 'Lechon Kawali',
    description: 'Crispy pork belly with savory sauce, a beloved Filipino favorite.',
    image: 'https://static01.nyt.com/images/2023/11/28/multimedia/ND-Lechon-Kawali-bflv/ND-Lechon-Kawali-bflv-mediumSquareAt3X.jpg',
  },
  {
    title: 'Lumpia',
    description: 'Golden spring rolls filled with meat and vegetables, served with sweet sauce.',
    image: 'https://barefeetinthekitchen.com/wp-content/uploads/2025/05/Lumpia-BFK-8.jpg',
  },
  {
    title: 'Pancit',
    description: 'Stir-fried noodles with shrimp, chicken, and fresh vegetables.',
    image: 'https://panlasangpinoy.com/wp-content/uploads/2024/11/Filipino-Pancit-Recipe.jpg',
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="home-page">
      <div className="hero text-white text-center d-flex align-items-center justify-content-center">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Welcome to Lola's Kalan Bistro</h1>
          <p className="lead mb-4">
            Authentic Filipino home cooking since 2002 
          </p>
          <Link to="/menu" className="btn btn-warning btn-lg me-2">
            View Menu
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg">
            Reserve a Table
          </Link>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">Experience Filipino Comfort</h2>
          <p className="lead text-muted">
            At Lola's Kalan Bistro, we bring the authentic flavors of the Philippines to your table. 
            Our chefs craft each dish with traditional recipes passed down through generations, 
            ensuring every bite transports you to a Filipino home kitchen.
          </p>
        </div>
      </div>

      {/* Gallery Slider */}
      <div className="container mb-5">
        <div className="home-gallery-slider">
          <div className="slider">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`slide ${idx === currentSlide ? 'active' : ''}`}
                style={{
                  opacity: idx === currentSlide ? 1 : 0,
                }}
              >
                <img src={img} alt={`Gallery ${idx + 1}`} />
              </div>
            ))}
          </div>
          <button className="prev" onClick={handlePrevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={handleNextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
