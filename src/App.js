import { useState } from "react";
import { Row } from "reactstrap";
import Menubar from "./component/Navbar/Navbar";
import Product from "./component/Products/Product";
import styles from "./component/Products/Product.module.css";

const App = () => {
  const [count, setCount] = useState(0);
  const data = [
    {
      id: 1,
      img: "/se.jfif",
      title: "Iphone SE",
      subtitle: "Produced by Apple",
      description: "Represented in 2020",
      price: "399.00$",
    },
    {
      id: 2,
      img: "/samsung.jpg",
      title: "Samsung",
      subtitle: "Produced by SAMSUNG",
      description: "Represented in 2021",
      price: "299.00$",
    },
    {
      id: 3,
      img: "/xiaomi.jpeg",
      title: "Xiaomi Mi12",
      subtitle: "Produced by Xiaomi",
      description: "Represented in 2019",
      price: "199.00$",
    },
    {
      id: 4,
      img: "/oneplus.jpg",
      title: "Oneplus X",
      subtitle: "Produced by OnePlus",
      description: "Represented in 2021",
      price: "299.00$",
    },
    {
      id: 5,
      img: "/apple.jpg",
      title: "Iphone 13 mini",
      subtitle: "Produced by Apple",
      description: "Represented in 2021",
      price: "399.00$",
    },
  ];
  const addHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Menubar total={count} />
      <Row className="d-flex justify-content-center my-3 gx-0">
        <div className="text-center mb-4">
          <h3>Store is like a HOME</h3>
          <p className={styles.header_subtitle}>
            Provided best experience to clients and customers
          </p>
        </div>
        {data.map((item, index) => (
          <Product
            id={item.id}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            price={item.price}
            onAddHandler={addHandler}
          />
        ))}
      </Row>
    </>
  );
};

export default App;
