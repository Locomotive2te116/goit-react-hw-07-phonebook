import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/phonebookSlice.js';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <label className={s.input}>
      Find contacts by name
      <input
        className={s.win}
        onChange={changeFilter}
        type="text"
        placeholder="Enter contact name"
      />
    </label>
  );
};
