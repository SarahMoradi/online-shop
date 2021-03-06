import styles from "./Navbar.module.css";
import { BiShoppingBag } from "react-icons/bi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { Badge } from "reactstrap";
const Menubar = (props) => {
  return (
    <div>
      <div className={`${styles.navbar_section}`}>
        <div className={`${styles.navbar_section}`}>
          <FaCanadianMapleLeaf size={20} color="lightGreen" />
          <p className="px-4 pt-3">Store</p>
          <p className="px-4 pt-3">Products</p>
          <p className="px-4 pt-3">about</p>
        </div>
        <div className="d-flex">
          <div className={styles.badge}>
            <Badge color="success" pill>
              {props.total}
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
