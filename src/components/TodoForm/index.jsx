import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form.scss'

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props
    const [value, setValue] = useState('');

    function updateValueInput(e) {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    function submitForm(e) {
        e.preventDefault();

        if (!onSubmit) return;

        onSubmit(value);
        setValue('');
    }

    return (
        <form onSubmit={submitForm} className="form">
            <input
                type="text"
                value={value}
                onChange={updateValueInput}
                placeholder="Add new note"
            >
            </input>
        </form>
    );
}

export default TodoForm;