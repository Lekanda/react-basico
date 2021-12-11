
import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;


    useEffect(() => {
        console.log('Hey');
    },[]);

    useEffect(() => {
        console.log('formState cambió');
    },[formState]);

    useEffect(() => {
        console.log('formState cambió');
    },[email]);

    const handleInputChange = ({ target }) => {
        if (target.name === 'name') {
            setFormState({
                ...formState,
                name: target.value,
            });
        } else {
            setFormState({
                ...formState,
                email: target.value,
            });
        }
    }


    return (
        <>
            <h1>useEffect</h1>
            <hr></hr>   

            <div className="form-group">
                <input 
                    type="text"
                    name='name'
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="email"
                    name='email'
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}
