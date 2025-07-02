import React from 'react';
import styles from './Contacts.module.css';

import snapchatLogo from '../../assets/snapchat.svg';
import facebookLogo from '../../assets/facebook.svg';
import xLogo from '../../assets/twitter-x.svg';

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.infoBlock}>
        <h1>Контакты</h1>
        <ul className={styles.contactList}>
          <li>Телефон: +8-800-000-00-00</li>
          <li>Email: example@mail.com</li>
        </ul>

        <form className={styles.contactForm}>
          <input type="email" placeholder="Ваш email" required />
          <input type="text" placeholder="Ваше имя" required />
          <input type="text" placeholder="Введите сообщение" required />
          <div className={styles.buttonWrapper}>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>

      <div className={styles.socialBlock}>
        <p>Найдите нас на:</p>
        <div className={styles.socialLinks}>
          <a
            href="https://snapchat.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={snapchatLogo} alt="Snapchat" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={xLogo} alt="X" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
