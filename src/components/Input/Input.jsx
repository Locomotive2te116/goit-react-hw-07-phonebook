import { useDispatch, useSelector } from 'react-redux';
import s from './Input.module.css';
import { addContact } from 'store/phonebookSlice';

export const Input = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

  // const handleChange = event => {
  //   const type = event.target.name;
  //   const val = event.target.value;
  //   if (type === 'name') {
  //     setName(val);
  //   }
  //   if (type === 'number') {
  //     setNumber(val);
  //   }
  // };

  const createContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContact({ name, number }));
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
            name="number"
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
