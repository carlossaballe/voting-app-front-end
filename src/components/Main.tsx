import React, { Fragment } from 'react';
import ButtonAppBar from './HeaderAppBar';
import CandidateList from './CandidateList';

const Main = () => {
    return (
        <Fragment>
            <ButtonAppBar />
            <CandidateList />
        </Fragment>
    )
}

export default Main;