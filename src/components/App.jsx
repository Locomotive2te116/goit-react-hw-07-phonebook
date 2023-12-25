import ContactsList from './ContactsList/ContactsList';
import { Input } from './Input/Input';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

export const App = () => {
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
