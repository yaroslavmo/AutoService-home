import React from 'react';
import classes from './Spinner.css'

const Spinner = () => {
    return (
        <div className={classes["Lds-ring"]}>
            Loading...
        </div>
    );
};

export default Spinner;
