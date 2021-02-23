import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.body} >
            <div className={classes.big}>404 Not found</div>
            <div className={classes.small}>voting app :(</div>
        </div>
    )
}

const useStyles = makeStyles({
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big : {
        padding: '8rem',
        color: 'blue',
        fontSize: '8rem',
    },
    small: {
        fontWeight: 'bold',
        fontSize: '5rem',
    }
});

export default NotFound;