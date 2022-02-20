import styles from "./Navbar.module.css";
import { BiShoppingBag } from "react-icons/bi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { Badge } from "reactstrap";
const Menubar = () => {
  return (
    <div>
      <div className={`${styles.navbar_section}`}>
        <div className={`${styles.navbar_section}`}>
          <FaCanadianMapleLeaf size={20} />
          <p className="px-4 pt-3">Store</p>
          <p className="px-4 pt-3">Products</p>
          <p className="px-4 pt-3">about</p>
        </div>
        <div className="d-flex">
          <div className={styles.badge}>
            <Badge color="primary" pill>
              0
            </Badge>
          </div>
          <div className={styles.cart_icon}>
            <BiShoppingBag size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
