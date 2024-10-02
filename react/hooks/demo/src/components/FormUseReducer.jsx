import React, { useReducer } from 'react'
import Button from './Button'
import Input from './Input'

function FormUseReducer() {
    const initialState = {
        username: '',
        email: '',
    }

    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE',
            prop: e.target.name,
            value: e.target.value,
        });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div className="flex items-end gap-4">
            <form className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                    <label className="flex w-40">Username:</label>
                    <Input
                        name="username"
                        placeholder="Enter something"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <label className="flex w-40">Email:</label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter something"
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>
            </form>

            <Button onClick={handleReset}>Reset Form</Button>
        </div>
    )
}

export default FormUseReducer

function formReducer(state, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                [action.prop]: action.value
            }
        case 'RESET':
            return {
                username: '',
                email: '',
            }
        default:
            return state;
    }
}