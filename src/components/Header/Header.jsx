import cl from "./Header.module.scss";

const Header = () => {
  return (
    <div className={cl.headerContainer}>
      <div className={cl.containerLeft}>
        <div className={cl.dailyLangs}>DailyLangs</div>
      </div>

      <div className={cl.contaiterRight}>
        <a className={cl.linksMenu} href="#">Курсы</a>
        <a className={cl.linksMenu} href="#">Статьи</a>
        <a className={cl.linksMenu} href="#">Вопросы</a>
        <div className={cl.containterSearchUserLanguage}>
          <div className={cl.search}></div>
          <a href="#"><div className={ cl.userPic2 }></div></a>
          <select className={cl.chooseLanguage}>
          <option value="">RU</option>
        </select>
        <div className={ cl.burgerMenu1 }></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
