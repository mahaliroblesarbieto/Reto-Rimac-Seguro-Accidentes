// import 'date-fns';
// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import moment from 'moment'

// export default function DatePickerComponent({ input, meta, type, label, name, ...custom}) {
//   // The first commit of Material-UI
//   // const [selectedDate, setSelectedDate] = React.useState(null);

//   function handleDateChange(date) {
//     // setSelectedDate(date);
//     console.log(typeof selectedDate);
//   }

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justify="space-around">
//         <KeyboardDatePicker
//            name={name}
//            {...input}
//            type={type}
//            {...custom}
//           disableToolbar
//           variant="inline"
//           format="dd/MM/yyyy"
//           margin="normal"
//           // selected={input.value ? moment(input.value) : null}
//           id="date-picker-inline"
//           label="Fecha de Nacimiento"
//           // value={selectedDate}
//           value={input.value? moment(input.value) : null}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickerComponent({ input, meta, type, label, name, ...custom }) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
      name={name}
      {...input}
      {...custom}
        id="date"
        label="Birthday"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}