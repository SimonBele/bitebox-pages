import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from "react-router-dom";
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
 *    <Register>
 *      </Register>
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  //za hranjenje ali je bila ze izpolnjena forma ali ne
  const [loaded, setLoaded] = useState(false);
  const [allValues, setAllValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [formErrors] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  async function handleSubmit(e) {
    //so it doesnt go to another page
    e.preventDefault();
    //if the form is valid
    if (formValid(formErrors, allValues)) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      allValues.password = allValues.password1;
      var raw = JSON.stringify(allValues);

      var requestOptions = {
        crossDomain: true,
        method: "POST",
        headers: myHeaders,
        body: raw,
        //redirect: 'follow'
      };

      fetch("https://damp-retreat-43305.herokuapp.com/auth/user/create/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          //check if user/email already exits,
          if (result.errors) {
            formErrors.email = result.email;
            formErrors.username = result.username;
            setLoaded(true);
          } else {
            console.log("Created User:", result);
            console.log(props);
            window.location.pathname = '/bitebox-pages/Login';
          }
        })
        .catch((error) => console.log("error", error));
      //ce error to prikazi; drugace ustvari userja
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    //we get the name and value from the event
    const { name, value } = e.target;
    //copy the errors so you can change them

    //if loaded already clear the previous errors
    if (loaded) {
      formErrors.username = "";
      formErrors.email = "";
      setLoaded(false);
    }
    //set the errors
    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";

        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";

        break;
      case "password1":
        formErrors.password1 =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "password2":
        formErrors.password2 =
          value === allValues.password1 ? "" : "passwords do not match";
        break;
      default:
        break;
    }
    //     sets the erros and every state value, callback-> do something after stateupate
    //setState({formErrors, [name]:value}, () => console.log(state));
    //set the values
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
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel className="mb-3">Username:</InputLabel>
              <TextField
                margin="none"
                variant="outlined"
                required
                fullWidth
                id="username"
                name="username"
                size="small"
                onChange={handleChange}
                autoComplete="fname"
                className={`form-control ${
                  formErrors.username.length > 0 ? "error" : null
                }`}
                autoFocus
                placeholder="username"
              ></TextField>
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </Grid>

            <Grid item xs={12}>
              <InputLabel className="mb-3">Email:</InputLabel>
              <TextField
                margin="none"
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                size="small"
                onChange={handleChange}
                autoComplete="username"
                className={`form-control ${
                  formErrors.email.length > 0 ? "error" : null
                }`}
                autoComplete="email"
                placeholder="email"
              ></TextField>

              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="mb-3">Password:</InputLabel>
              <TextField
                margin="none"
                variant="outlined"
                fullWidth
                name="password1"
                type="password"
                id="password1"
                size="small"
                onChange={handleChange}
                required
                className={`form-control ${
                  formErrors.password1.length > 0 ? "error" : null
                }`}
                autoComplete="current-password"
                placeholder="password"
              ></TextField>

              {formErrors.password1.length > 0 && (
                <span className="errorMessage">{formErrors.password1}</span>
              )}
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="mb-3">Confirm Password:</InputLabel>
              <TextField
                margin="none"
                variant="outlined"
                fullWidth
                name="password2"
                type="password"
                id="password2"
                size="small"
                onChange={handleChange}
                required
                className={`form-control ${
                  formErrors.password2.length > 0 ? "error" : null
                }`}
                autoComplete="current-password2"
                placeholder="password"
              ></TextField>
              {formErrors.password2.length > 0 && (
                <span className="errorMessage">{formErrors.password2}</span>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
//function for validating form
const formValid = (formErrors, allValues) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(allValues).forEach((val) => {
    val === "" && (valid = false);
  });
  return valid;
};

