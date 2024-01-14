import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);
    const changeBudget = (amt) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: amt
        });

    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £ </span>
<input type="number" step="10" value={budget} onChange={event=> changeBudget(event.target.value)}></input>
</div>
    );
};
export default Budget;