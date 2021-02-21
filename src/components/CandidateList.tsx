import React from 'react';
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

function createData(firstname: string, lastname: string, age: number, slogan: string, protein: number) {
    return { firstname, lastname, age, slogan, protein };
}

const rows = [
    createData('Carlos', 'Saballe', 18, 'Slogan 1 test', 4),
    createData('Ana', 'Florez', 25, 'I am a blue car', 4),
    createData('Juan', 'García', 30, 'Telmi mor aboud yursel', 6),
    createData('Silvestre', 'Dangond', 78, 'Cantinero deme un trago, dos tragos...', 2),
    createData('Maria', 'Perez', 43, 'La vaca lola está loca', 10),
    createData('Carlos', 'Saballe', 18, 'Slogan 1 test', 4),
    createData('Ana', 'Florez', 25, 'I am a blue car', 4),
    createData('Juan', 'García', 30, 'Telmi mor aboud yursel', 6),
    createData('Silvestre', 'Dangond', 78, 'Cantinero deme un trago, dos tragos...', 2),
    createData('Maria', 'Perez', 43, 'La vaca lola está loca', 10),
    createData('Carlos', 'Saballe', 18, 'Slogan 1 test', 4),
    createData('Ana', 'Florez', 25, 'I am a blue car', 4),
    createData('Juan', 'García', 30, 'Telmi mor aboud yursel', 6),
    createData('Silvestre', 'Dangond', 78, 'Cantinero deme un trago, dos tragos...', 2),
    createData('Maria', 'Perez', 43, 'La vaca lola está loca', 10),
    createData('Carlos', 'Saballe', 18, 'Slogan 1 test', 4),
    createData('Ana', 'Florez', 25, 'I am a blue car', 4),
    createData('Juan', 'García', 30, 'Telmi mor aboud yursel', 6),
    createData('Silvestre', 'Dangond', 78, 'Cantinero deme un trago, dos tragos...', 2),
    createData('Maria', 'Perez', 43, 'La vaca lola está loca', 10),
];

export default function CandidateList() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Slogan</TableCell>
                        <TableCell>Votes</TableCell>
                        <TableCell align='center'>Voting for</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.firstname}>
                            <TableCell>{row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell >{row.age}</TableCell>
                            <TableCell>{row.slogan}</TableCell>
                            <TableCell>{row.protein}</TableCell>
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