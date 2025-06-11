const Cart = () => {
  return (
    <div>
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
          <p className="text-xl text-gray-300 mt-4">Review your items</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8">
            <p className="text-center text-gray-400">Your cart is empty</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
