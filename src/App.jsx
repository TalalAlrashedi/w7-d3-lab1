import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
    // console.log("loop");
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          المنتجات الرقمية
        </h2>

        <div className="grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {items.map((i) => (
            <div
              key={i.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <p className="text-sm w-30 bg-sky-900 text-white py-1 rounded rounded-2xl mb-3 text-center">{i.category}</p>
              <img
                src={i.image}
                alt={i.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-[18px] text-center p-2 lg:text-2xl font-bold">{i.title}</h3>
              <p className="text-sm mb-4">{i.description}</p>
            <hr />
            <p className="text-green-700"> {i.price}$</p>
            </div>
          ))}
        </div>
   
      </div>
    </div>
  );
}

export default App;
