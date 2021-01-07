import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import InputLabel from "@material-ui/core/InputLabel";

import "./Style.css";
import "./bootstrap.min.css";

/**
 * Webpage Text component
 *
 * @component
 * @param {void}
 * @return {void}
 * @example
 * return (
 *    <Login>
 *      </Login>
 * )
 */
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const [loaded, setLoaded] = useState(false);
  const [allValues, setAllValues] = useState({
    username: "",
    password: "",
  });
  //will be used later for errors
  const [formErrors] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (formValid(formErrors, allValues)) {
      fetch("https://damp-retreat-43305.herokuapp.com/auth/token/obtain/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          username: allValues.username,
          password: allValues.password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          //check if user/email already exits,
          if (
            result.detail ===
            "No active account found with the given credentials"
          ) {
            formErrors.password = result.detail;
            setLoaded(true);
          } else {
            console.log("User Logged in");
            console.log(result);
            //store refresh and access token in local storage
            localStorage.setItem("access", result.access);
            localStorage.setItem("refresh", result.refresh);
            //redirect to dashboard
            console.log("start");
            props.history.push("/Dashboard");
          }
        })
        .catch((error) => console.log("error", error));
      //ce error to prikazi; drugace ustvari userja
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    //we get the name and value from the event
    const { name, value } = e.target;

    //if loaded already clear the previous errors
    if (loaded) {
      formErrors.password = "";
      setLoaded(false);
    }

    setAllValues({ ...allValues, [name]: value });
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <InputLabel className="my-3">Username:</InputLabel>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="username"
            name="username"
            size="small"
            onChange={handleChange}
            autoComplete="username"
            placeholder="username"
          ></TextField>

          <InputLabel className="my-3">Password:</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            type="password"
            id="password"
            size="small"
            placeholder="passowrd"
            onChange={handleChange}
            required
            className={`form-control ${
              formErrors.password.length > 0 ? "error" : null
            }`}
            autoComplete="current-password"
          ></TextField>
          {formErrors.password.length > 0 && (
            <span className="errorMessage">{formErrors.password}</span>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            className="my-1"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="my-2"
          >
            Log in
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const formValid = (formErrors, allValues) => {
  //for now just check if empty
  let valid = true;

  // validate form errors being empty
  Object.values(allValues).forEach((val) => {
    val === null && (valid = false);
  });
  return valid;
};
export default Login;
