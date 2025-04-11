import { CartItem } from "../types/product";

interface CartSidebarProps {
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  handleRemoveFromCart: (productId: number) => void;
  calculateTotal: () => string;
}

const CartSidebar = ({
  cart,
  isCartOpen,
  toggleCart,
  handleRemoveFromCart,
  calculateTotal,
}: CartSidebarProps) => {
  return (
    <>
      {/* Sidebar giỏ hàng */}
      <div
        className={`fixed top-0 right-0 h-full z-5 w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              onClick={toggleCart}
              className="text-red-500 hover:text-red-700"
            >
              Close
            </button>
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded mr-2"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-gray-500 text-xs">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4 border-t pt-2">
                <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay khi giỏ hàng mở */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleCart}
        ></div>
      )}
    </>
  );
};

export default CartSidebar;
