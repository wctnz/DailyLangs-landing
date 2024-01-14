import cl from "./Footer.module.scss";

const Header = () => {
  return (
    <div className={cl.footerContainer}>
      <div className={`${cl.footerElement} ${ cl.first }`}>
        <a href="#" className={ cl.linksFooter }><h1>Политика конфеденциальности</h1></a>
        <a href="#" className={ cl.linksFooter }><h1>Условия пользования</h1></a>
      </div>
      <div className={`${cl.footerElement} ${ cl.second }`}>
        <p>© DailyLangs | 2023 Все права защищены</p>
      </div>
      <div className={`${cl.footerElement} ${ cl.third }`}>
        <p>DailyLangs</p>
      </div>
    </div>
  );
};

export default Header;
