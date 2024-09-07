import { useState } from "react";
import { v4 } from "uuid";

import {toast ,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import ContactsList from "./ContactsList";
import SearchList from "./SearchList"; 

import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedContacts, setSelectedContacts] = useState([]); 
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    toast.success("Contact added successfully!");
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    toast.info("Contact deleted successfully!");
  };

  const bulkDeleteHandler = () => {
    const newContacts = contacts.filter(
      (contact) => !selectedContacts.includes(contact.id)
    );
    const deletedCount = selectedContacts.length;
    setContacts(newContacts);
    setSelectedContacts([]);
    toast.info(`${deletedCount} contacts deleted successfully!`);
  };

  const selectHandler = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(
        selectedContacts.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    `${contact.name} `.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <SearchList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler} className={styles.addContactStyle}>Add Contact</button>
        <button onClick={bulkDeleteHandler} className={styles.bulkDeleteButton}  disabled={!selectedContacts.length}>Delete Selected</button>
       
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList
        contacts={filteredContacts}
        deleteHandler={deleteHandler}
        selectHandler={selectHandler}
        selectedContacts={selectedContacts}
      />
       <ToastContainer  />
    </div>
  );
}

export default Contacts;
