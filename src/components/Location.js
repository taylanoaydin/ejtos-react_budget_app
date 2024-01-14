import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { currency, dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  let curtext = '';
  switch (currency) {
    case '$':
      curtext = '$ Dollar';
      break;
    case '£':
      curtext = '£ Pound';
      break;
    case '€':
      curtext = '€ Euro';
      break;
    case '₹':
      curtext = '₹ Rupee';
      break;
    default:
      curtext = 'Select Currency';
      break;
  }

  return (
    <div className='alert alert-secondary'>
      <label htmlFor="Location" className="dropdown-header">Currency ({curtext})</label>
      <select name="Location" id="Location" value={currency} onChange={event => changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Location;
