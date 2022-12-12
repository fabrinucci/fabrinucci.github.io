import { useTranslation } from "react-i18next";
import styles from "./NavMenu.module.css";

import { navigation } from '../../data'

export const Nav = () => {
  const [text, i18n] = useTranslation("global");

  return (
    <nav className={styles.NavMenu}>
      <ul>
        {navigation.map(({ id, name, translation, Icon }) => (
          <li key={id}>
            <a className={styles.icontext} href={`#${name}`}>
              <div className={styles.iconContainer}>
                <Icon className={styles.icon}/>
              </div>
              {/* <span className={styles.text}>{text(translation)}</span> */}
            </a>
          </li>
        ))}
        <li><a className={styles.text} href="">theme</a></li>
        <li><a className={styles.text} href="">en/es</a></li>
      </ul>
    </nav>
  );
};
