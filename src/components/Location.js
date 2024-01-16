import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap';
import './CustomDropdown.css';

const Location = () => {
  const { currency, dispatch } = useContext(AppContext);

  const changeLocation = (eventKey) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: eventKey,
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
    <div>
      <Dropdown className="green-dropdown" onSelect={changeLocation}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Currency ({curtext})
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
          <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
          <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
          <Dropdown.Item eventKey="₹">₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};


export default Location;
