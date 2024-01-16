import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, dispatch, expenses, budget } = useContext(AppContext);
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
            <div className="row">
                <div className="col-auto">
                    <label htmlFor="budgetInput" className="col-form-label">
                        Budget: {currency}
                    </label>
                </div>
                <div className="col">
                    <input
                        type="number"
                        id="budgetInput"
                        className="form-control"
                        step="10"
                        value={budget}
                        onChange={event => changeBudget(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};
export default Budget;