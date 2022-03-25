import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Store.css';

const Store = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className="store-container">
            {
                guns.map(gun => <Gun gun={gun}></Gun>)
            }
        </div>
    );
};

export default Store;