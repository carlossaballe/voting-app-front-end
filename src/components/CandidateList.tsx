import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_CANDIDATES = gql`{
    getCandidates {
      id
      firstname
      lastname
      age
      slogan
      votes
    }
}`;

const UPDATE_VOTES = gql`
    mutation update ($id: Int!, $votes: Int!){
        updateVotes(id: $id, data:{
            votes: $votes
        }){
            id
            votes
        }
    }
`;

const createData = (firstname: string, lastname: string, age: number, slogan: string, votes: number) => {
    return { firstname, lastname, age, slogan, votes };
}

export default function CandidateList(): JSX.Element {

    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_CANDIDATES);
    const [updateCandidate] = useMutation(UPDATE_VOTES);
    
    let info: any[] = [];
    
    if(loading) return <div>loading</div>;
    if(error) return <div>Error</div>;

    const dataInfo = data.getCandidates;

    dataInfo.forEach((candidate: any) => {
        createData(candidate.firstname, candidate.lastname, candidate.age, candidate.slogan, candidate.votes);
    });

    info = dataInfo;

    const handleVotes = (type: string, id: number, votes: number) => {
        if (type === 'up' && votes < 20) {
            votes++;
            updateCandidate({ variables: { id, votes: votes} })
        }
        if (type === 'down' && votes > 0) {
            votes--;
            updateCandidate({ variables: { id, votes: votes} })
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Slogan</TableCell>
                        <TableCell align='center'>Votes</TableCell>
                        <TableCell align='center'>Voting for</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {info.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell>{row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell >{row.age}</TableCell>
                            <TableCell>{row.slogan}</TableCell>
                            <TableCell align='center'>{row.votes}</TableCell>
                            <TableCell align='center' className={classes.last}>
                                <IconButton edge="start" className={classes.up} aria-label="up" onClick={() => handleVotes('up', row.id, row.votes)}>
                                    <ThumbUpIcon />
                                </IconButton>
                                &nbsp;&nbsp;&nbsp;
                                <IconButton edge="start" className={classes.down} aria-label="down" onClick={() => handleVotes('down', row.id, row.votes)}>
                                    <ThumbDownIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    up: {
        color: 'rgb(215,245,214)'
    },
    down: {
        color: 'rgb(242,198,194)'
    },
    last: {
        paddingLeft: '30px'
    }
});