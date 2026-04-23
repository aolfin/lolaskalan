import PageHeader from './PageHeader';

const dishes = [
  {
    title: 'Lechon Kawali',
    description: 'Crispy pork belly with rich sauce and garlic rice.',
    price: '$22.95',
    image: 'https://static01.nyt.com/images/2023/11/28/multimedia/ND-Lechon-Kawali-bflv/ND-Lechon-Kawali-bflv-mediumSquareAt3X.jpg',
  },
  {
    title: 'Lumpia Shanghai',
    description: 'Crispy spring rolls filled with seasoned pork and vegetables.',
    price: '$8.95',
    image: 'https://barefeetinthekitchen.com/wp-content/uploads/2025/05/Lumpia-BFK-8.jpg',
  },
  {
    title: 'Pancit Bihon',
    description: 'Stir-fried rice noodles with shrimp, chicken, and fresh vegetables.',
    price: '$10.95',
    image: 'https://panlasangpinoy.com/wp-content/uploads/2024/11/Filipino-Pancit-Recipe.jpg',
  },
  {
    title: 'Inihaw na Baboy',
    description: 'Grilled pork with smoky glaze and sticky rice.',
    price: '$16.95',
    image: 'https://i.pinimg.com/564x/b5/01/86/b50186244dd162698f82122327b8854f.jpg',
  },
  {
    title: 'Sinigang',
    description: 'Tamarind soup with pork, vegetables, and bright, tangy broth.',
    price: '$13.95',
    image: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/1_1_768px_width/public/srh_recipes/442ce059c4c490e1ab61cdaef9c98511.jpg.webp?itok=sKq8qila',
  },
  {
    title: 'Halo-Halo',
    description: 'Mix of shaved ice, beans, fruits, and leche flan for a refreshing dessert.',
    price: '$6.95',
    image: 'https://assets.bonappetit.com/photos/60e46c6701084801b06de2a3/16:9/w_2190,h_1232,c_limit/Halo-Halo-Recipe-2021.jpg',
  },
];

function Menu({ onAddToCart }) {
  return (
    <>
      <PageHeader title="Our Menu" subtitle="Your local favorites, reimagined with modern flair." />
      <section className="container py-5">
      <div className="row g-4">
        {dishes.map((dish) => (
          <div key={dish.title} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 menu-card">
              <img src={dish.image} className="card-img-top" alt={dish.title} />
              <div className="card-body">
                <h3 className="card-title">{dish.title}</h3>
                <p className="card-text">{dish.description}</p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                <span className="fw-bold text-primary">{dish.price}</span>
                <button className="btn btn-sm btn-warning" onClick={() => onAddToCart(dish)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Menu;
