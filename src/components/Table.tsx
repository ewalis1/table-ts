import React from 'react';
import {useEffect, useState} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

interface IUser {
  name: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  phoneNumber: number;
  address: string;
  dateOfBirth: string;
  hobbies: [];
}

interface IHobby {
  name: string;
  id: string;
}

const TableComponent: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [hobby, setHobby] = useState<IHobby[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Komunikacja z serwerem się nie powiodła!');
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3002/hobbies')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Komunikacja z serwerem się nie powiodła!');
      })
      .then((data) => {
        console.log(data);
        setHobby(data);
      });
  }, []);

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Imię i nazwisko</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Wiek</TableCell>
              <TableCell align="left">Płeć</TableCell>
              <TableCell align="left">Numer telefonu</TableCell>
              <TableCell align="left">Adres</TableCell>
              <TableCell align="left">Data urodzenia</TableCell>
              <TableCell align="left">Zainteresowania</TableCell>
              <TableCell align="left">Akcja</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {`${user.name} ${user.lastName}`}
                </TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.age}</TableCell>
                <TableCell align="left">{user.gender}</TableCell>
                <TableCell align="left">{user.phoneNumber}</TableCell>
                <TableCell align="left">{user.address}</TableCell>
                <TableCell align="left">{user.dateOfBirth}</TableCell>
                <TableCell align="left">
                  {hobby.map((hob) => {
                    if (user.hobbies.includes(hob.id as never)) {
                      return hob.name + '; ';
                    } else {
                      return '';
                    }
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
