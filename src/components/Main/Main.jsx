import cl from "./Main.module.scss";
import down from "../../assets/down.svg";
import girl1 from "../../assets/girl1.svg";
import girl2 from "../../assets/girl2.svg";
import ae from "../../assets/ae.svg";
import az from "../../assets/az.svg";
import star from "../../assets/star.svg";
import lines from "../../assets/lines.svg";
import ellipse from "../../assets/ellipse.svg";
import ItemCard from "../ItemCard/ItemCard";

const Header = () => {
  return (
    <div className={cl.mainContainer}>
      <img className={cl.imgStar} src={star} />
      <img className={cl.imgEllipse} src={ellipse} />

      <div className={cl.containerLeft}>
        <div className={cl.languageSection}>
          <select className={cl.language}>
            <option value="">Язык</option>
          </select>
          <div className={ cl.burgerMenu2 }></div>
        </div>

        <div className={cl.duration}>
          <span className={cl.spanLanguage}>Продолжительность</span>
          <p className={cl.pLanguage}>От 1 до 6 мес.</p>
          <input
            className={cl.inputDuration}
            type="range"
            name="range"
            min="0"
            max="6"
            step="1"
          />
        </div>

        <div className={cl.complexity}>
          <span className={cl.spanComplexity}>Сложность</span>

          <div className={cl.radioContainer}>
            <input type="radio" value="all" />
            <span>Для всех</span>
          </div>

          <div className={cl.radioContainer}>
            <input type="radio" value="beginner" />
            <span>Для начинающих</span>
          </div>

          <div className={cl.radioContainer}>
            <input type="radio" value="advanced" />
            <span>Продвинутый уровень</span>
          </div>
        </div>

        <div className={cl.skills}>
          <span className={cl.spanSkills}>Навыки</span>

          <div className={cl.skillsBox}>
            <input type="checkbox" value="Grammar" />
            <span>Грамматика</span>
          </div>

          <div>
            <input type="checkbox" value="Vocabulary" />
            <span>Лексика</span>
          </div>

          <div>
            <input type="checkbox" value="Syntax" />
            <span>Синтаксис</span>
          </div>

          <div>
            <input type="checkbox" value="Phonetics" />
            <span>Фонетика</span>
          </div>

          <div>
            <input type="checkbox" value="Punctuation" />
            <span>Пунктуация</span>
          </div>
        </div>
        <img className={cl.imgLines} src={lines} />
      </div>
      <div className={cl.containerRight}>
        <div className={cl.courses}>
          <span className={`${cl.spanCourses} ${cl.first}`}>Курсы</span>
          <span className={`${cl.spanCourses} ${cl.second}`}>
            английского языка
          </span>
        </div>
        <div className={cl.cardsContainer}>
          <ItemCard
            className={cl.card}
            level="Базовый уровень"
            girl={girl1}
            lettersAz={az}
            price1="6000₽"
            price2="2940₽"
            discount="51%"
          />
          <ItemCard
            className={cl.card}
            level="Вводно-фонетический курс"
            girl={girl2}
            lettersAe={ae}
            price1="6000₽"
            price2="2940₽"
            discount="51%"
          />
          <ItemCard
            className={cl.card}
            level="Базовый уровень"
            girl={girl1}
            lettersAz={az}
            price1="6000₽"
            price2="2940₽"
            discount="51%"
          />
          <ItemCard
            className={cl.card}
            level="Вводно-фонетический курс"
            girl={girl2}
            lettersAe={ae}
            price1="6000₽"
            price2="2940₽"
            discount="51%"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
