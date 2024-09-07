import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
  selectHandler,
  isSelected,
}) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox} 
        checked={isSelected} 
        onChange={() => selectHandler(id)} 
      />
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span> {email}
      </p>
      <p>
        <span>📱</span> {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
