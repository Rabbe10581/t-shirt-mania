import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
const Friend = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Cousin's Friend</h4>
            <h5>house: {house}</h5>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;