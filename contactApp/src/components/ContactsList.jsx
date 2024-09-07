import ContactItem from "./ContactItem";

import styles from "./ContactsList.module.css";

function ContactsList({
  contacts,
  deleteHandler,
  selectedContacts,
  selectHandler,
}) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              selectHandler={selectHandler}
              isSelected={selectedContacts.includes(contact.id)}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
