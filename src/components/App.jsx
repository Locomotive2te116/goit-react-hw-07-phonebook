import { ContactsList } from './ContactsList/ContactsList';
import { Input } from './Input/Input';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
export const App = () => {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const updateContactState = newContact => {
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  // const getFilteredData = () => {
  //   if (filter) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }
  //   return contacts;
  // };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <Input />
      <h2 className={s.title2}>Contacts</h2>
      <ContactsList>
        <Filter />
      </ContactsList>
    </div>
  );
};
