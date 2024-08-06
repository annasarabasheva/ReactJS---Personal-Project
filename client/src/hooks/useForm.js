import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
        setErrors(state => ({ ...state, [e.target.name]: '' }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};
        
        
        if (!values.email) validationErrors.email = 'Email is required';
        if (!values.password) validationErrors.password = 'Password is required';

        if (Object.keys(validationErrors).length === 0) {
            try {
                await submitHandler(values);
            } catch (error) {
                setSubmitError('Email or Password is invalid');
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return {
        values,
        errors,
        submitError,
        onChange,
        onSubmit,
    };
}
