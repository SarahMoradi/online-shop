import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  CardImg,
} from "reactstrap";
import { IoBagAdd } from "react-icons/io5";
import styles from "./Product.module.css";
const Product = (props) => {
  return (
    <>
      <Col sm="12" md="4" xl="2">
        <Card className={`${styles.card_style} mx-5 mx-xl-3`}>
          <CardImg alt="Card image cap" src={props.img} top className={styles.card_image} />
          <CardBody>
            <CardTitle tag="h6">{props.title}</CardTitle>
            <CardSubtitle className={`${styles.card_subtitle} mb-2 text-muted`}>
              {props.subtitle}
            </CardSubtitle>
            <CardText className={styles.card_text}>
              {props.description}
            </CardText>
          </CardBody>
          <Button
            color="primary"
            className="d-flex justify-content-between mx-3 mb-3"
          >
            <IoBagAdd size={20} />
            <p className="m-0">{props.price}</p>
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Product;
