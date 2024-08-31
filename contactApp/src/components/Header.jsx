import styles from "./Header.module.css"


function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://google.com">GO To Google</a> | Rract.js Full Course
      </p>
    </div>
  );
}

export default Header;
