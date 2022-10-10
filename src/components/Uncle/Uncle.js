import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>Houses: {house}</small></p>
            <h3>Total: {money}tk</h3>
            <button onClick={() => setMoney(money - 50)}>Reduce</button>
        </div>
    );
};

export default Uncle;