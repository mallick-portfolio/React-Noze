const Cart = ({ show, setShow, data }) => {
  return (
    <div
      className={`fixed ${
        show ? "-right-0 top-0 bottom-0" : "top-0 -right-96 bottom-0"
      } px-4 py-2 bg-white shadow-md z-20 w-80 duration-1000 transition-all ease-in-out`}
    >
      <div className="flex justify-between items-center text-xl font-semibold">
        <h3>Cart</h3>
        <button onClick={() => setShow(false)}>X</button>
      </div>
      {!data ? (
        <div className="text-center">Your Cart Is empty</div>
      ) : (
        <div className="flex justify-between flex-col h-[calc(100vh_-_2rem)] py-4">
          <div className="flex justify-between items-start">
            <img
              className="w-16"
              src="https://cdn.shopify.com/s/files/1/0572/5369/1554/products/NOZE-Front_180x180.png?v=1628274438"
              alt=""
            />
            <div>
              <h3 className="text-sm">Noze | Smart Air Quality Monitor</h3>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <button className="text-xl font-bold px-2 border">-</button>
                  <button className="border pt-1 px-3">{1}</button>
                  <button className="text-xl font-bold px-2 border">+</button>
                </div>
                <p>price</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm text-secondary">
              <h5 className="">SUBTOTAL</h5>
              <p>Price</p>
            </div>
            <p className="text-[10px] py-3">
              Shipping and discount codes are added at checkout.
            </p>
            <button className="bg-[#654a9b] w-full text-white px-6 py-3 font-bold rounded-md">
              Pre Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
