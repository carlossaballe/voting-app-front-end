import React, { useState } from 'react';
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
import { useQuery, gql } from '@apollo/client';

const GET_CANDIDATES = gql`{
    getCandidates {
      id
      firstname
      lastname
      age
      slogan
      votes
    }
}`

interface Control {
    id: number;
    votes: number;
}

const createData = (firstname: string, lastname: string, age: number, slogan: string, votes: number) => {
    return { firstname, lastname, age, slogan, votes };
}

export default function CandidateList() {

    const classes = useStyles();
    const { data, loading, error } = useQuery(GET_CANDIDATES);
    const [votesCounter, setVotesCounter] = useState<Control[]>([]);

    let rows: any[] = [];
    let votes: any[] = [];

    const add = (id:number, votes:number) => {
  
        const counter = [...votesCounter, { id, votes }];
        console.log(counter);
        
        setVotesCounter(counter)
    }

    if (data) {
        let candidates = data.getCandidates;

        candidates.forEach((cand: any) => {
            votes.push({ id: cand.id, votes: cand.votes })
            createData(cand.firstname, cand.lastname, cand.age, cand.slogan, cand.votes)
        });

        rows = candidates;
    }

    console.log(votes);
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">

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
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell>{row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell >{row.age}</TableCell>
                            <TableCell>{row.slogan}</TableCell>
                            <TableCell align='center'>{row.votes}</TableCell>
                            <TableCell align='center' className={classes.last}>
                                <IconButton edge="start" className={classes.up} aria-label="up">
                                    <ThumbUpIcon />
                                </IconButton>
                                &nbsp;&nbsp;&nbsp;
                                <IconButton edge="start" className={classes.down} aria-label="down">
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