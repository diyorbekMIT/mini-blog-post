import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const Error = () => {
    const { error } = useSelector((state) => state.auth);

    const errorMessage = useMemo(() => {
        if (!error || typeof error !== 'object') return [];

        return Object.keys(error).map((key) => {
            const value = error[key];
            const message = Array.isArray(value) ? value.join(', ') : value;
            return `${key}: ${message}`;
        });
    }, [error]);

    if (!errorMessage.length) return null;

    return (
        <div className="alert alert-warning" role="alert">
            {errorMessage.map((msg, i) => (
                <p key={i}>{msg}</p>
            ))}
        </div>
    );
};

export default Error;
