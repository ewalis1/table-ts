import React from 'react';
import {useEffect, useState} from 'react';
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  //   FormGroup,
  // FormControlLabel,
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

interface ISearch {
  name: string;
  email: string;
  age: number;
  address: string;
  dateOfBirth: string;
  hobbies: [];
}

const TableComponent: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [hobby, setHobby] = useState<IHobby[]>([]);
  const [search, setSearch] = useState<ISearch[]>([]);
  const [checked, setChecked] = useState([true, false]);

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

  const label = {inputProps: {'aria-label': 'Checkbox demo'}};

  return (
    <div className="table">
      <TextField
        id="outlined-basic"
        label="Search here"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value as any)}
        style={{margin: '20px 0'}}
      />
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name and Surname</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Phone number</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Date of birth</TableCell>
              <TableCell align="left">Hobbies</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter((user) => {
                if (search === ('' as any)) {
                  return user;
                } else if (user.name.toLowerCase().includes(search as any)) {
                  return user;
                } else if (user.email.toLowerCase().includes(search as any)) {
                  return user;
                } else if (user.address.toLowerCase().includes(search as any)) {
                  return user;
                } else if (
                  user.dateOfBirth.toLowerCase().includes(search as any)
                ) {
                  return user;
                } else {
                  return '';
                }
              })
              .map((user) => (
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
                  <TableCell align="left">
                    <Checkbox {...label} />
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
