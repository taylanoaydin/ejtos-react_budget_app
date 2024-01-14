import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const changeBudget = (amt) => {

        if(amt > 20000) {
            alert("The value cannot exceed 20000");
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000
            });
            return;
        }
        if(amt < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses
            });
            return;
        }

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