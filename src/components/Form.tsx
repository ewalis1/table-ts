import React, {useState} from 'react';
import {styled, Box, Paper, Grid, TextField, Button} from '@mui/material';

// const Item = styled(Paper)(({theme}) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   marginTop: '20px',
//   color: theme.palette.text.secondary,
// }));

// interface IForm {
//   name: string;
//   lastName: string;
//   email: string;
//   age: number;
//   gender: string;
//   phoneNumber: number;
//   address: string;
//   dateOfBirth: string;
//   hobbies: [];
// }

const Form: React.FC = () => {
  //   const [formValues, setFormValues] = useState<IForm[]>({
  //     name: '',
  //     lastName: '',
  //     email: '',
  //     age: '',
  //     gender: '',
  //     phoneNumber: '',
  //     address: '',
  //     dateOfBirth: '',
  //     hobbies: [],
  //   });

  return (
    <div className="Form">
      <Box
        component="form"
        sx={{
          '& > :not(style)': {m: 1, width: '40ch'},
        }}
        autoComplete="on"
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Surname" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Age" variant="outlined" />
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Gender" variant="outlined" />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Date of Birth"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField id="outlined-basic" label="Hobbies" variant="outlined" />
          </Grid>
        </Grid>
        <Button variant="outlined">Send</Button>
      </Box>
    </div>
  );
};

export default Form;
