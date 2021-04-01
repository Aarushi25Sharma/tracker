import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import './login.css';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';




const Home = lazy(() => import('./components/Home'));

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function App() {
  const classes = useStyles();

const [values, setValues] = React.useState({
  amount: '',
  password: '',
  weight: '',
  weightRange: '',
  showPassword: false,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
  return (
    <div className="App">
    <Container style={{width: "60rem"}}>
      <form>
        <Grid container
           alignItems="center"
            justify ="center"
            style = {{marginTop: '160px'}}>
          <Grid item xs={6}>
           <Card className="login">
           <CardContent>
             <div className="user">
                <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Username</InputLabel>
                <Input
                  id="standard-adornment-password"
                  label="username"
                   startAdornment={
                  <InputAdornment position="start">
                   <AccountCircle />
                 </InputAdornment>
                  }

                />
                </FormControl>
             </div>

      <div className="pass">
      <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>

        <div className="butt">
        <Link to="/" onClick={setExpand.bind(this, false)}>
          Submit
        </Link>
      </div>
      </CardContent>
      </Card>
      </Grid>
      </Grid>
      </form>
      </Container>
    </div>
  );
}

export default App;
