import React, { useEffect } from 'react';
import {useForm} from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHooks</h1>
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

            <div className="form-group">
                <input 
                    type="password"
                    name='password'
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
