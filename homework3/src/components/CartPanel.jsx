function CartPanel({ visible, cart, onClose, onRemove, onQuantityChange }) {
  if (!visible) {
    return null;
  }

  const total = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace('$', '')), 0);

  return (
    <>
      <div className="cart-panel-overlay" onClick={onClose} />
      <div className="cart-panel">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Your Cart</h3>
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onClose}>
            Close
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty. Add items from the menu to see them here.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.title} className="cart-item">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="small text-muted mb-2">{item.price} × {item.quantity}</p>
                  </div>
                  <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onRemove(item.title)}>
                    Remove
                  </button>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <button type="button" className="btn btn-sm btn-secondary" onClick={() => onQuantityChange(item.title, -1)}>-</button>
                  <span className="fw-semibold">{item.quantity}</span>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={() => onQuantityChange(item.title, 1)}>+</button>
                </div>
              </div>
            ))}
            <div className="cart-actions">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <strong>Total</strong>
                <span className="text-primary fw-bold">${total.toFixed(2)}</span>
              </div>
              <button type="button" className="btn btn-warning w-100" onClick={() => {
                alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\n\nYour food will be ready soon!`);
                window.location.reload();
              }}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartPanel;
