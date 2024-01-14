import cl from "./ItemCard.module.scss";
import flag from "../../assets/flag.svg";

const ItemCard = (props) => {
  return (
    <div className={cl.card}>
      <div>
        <p className={cl.p1}>Английский шаг за шагом:</p>
        <p className={cl.p2}>{props.level}</p>
      </div>
      <p className={cl.name}>Полина Коваленко</p>
      <p className={cl.price2}>{ props.price2 }</p>
      <p className={cl.discount}>{ props.discount }</p>
      <div className={cl.textFixed}><p className={cl.price1}>{ props.price1 }</p></div>
      <a href="#" className={cl.linkDetails}>Подробнее</a>
      <img className={cl.imgGirl} src={props.girl} />
      <img className={cl.imgFlag} src={flag} />
      <img className={cl.imgLettersAe} src={props.lettersAe} />
      <img className={cl.imgLettersAz} src={props.lettersAz} />
    </div>
  );
};

export default ItemCard;
