import { useDispatch, useSelector } from 'react-redux';
import s from './Input.module.css';
import { addContactsThunk } from '../../store/operations.js';

export const Input = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const createContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContactsThunk({ name, phone }));
    event.target.reset();
  };

  return (
    <form onSubmit={createContact}>
      <div className={s.styleForm}>
        <label>
          Name <br />
          <input
            className={s.win}
            name="name"
            type="text"
            placeholder="Enter contact name"
          />
        </label>

        <label>
          Number <br />
          <input
            className={s.win}
            name="phone"
            type="tel"
            placeholder="Enter contact number"
            required
          />
        </label>
      </div>
      <button className={s.inputbtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
