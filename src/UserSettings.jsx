import React, { useState } from "react";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";

import Title from "./Title";
import MacrosSlider from "./MacrosSlider";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import CalorieCalculator from "./CalorieCalculator";
function preventDefault(event) {
  event.preventDefault();
}

const drawerWidth = 240;
localStorage.setItem('calories', 2000);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "#00695f",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",

    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    textAlign: "center",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function CalorieCalculatorDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <CalorieCalculator></CalorieCalculator>
    </Dialog>
  );
}

const title = (
  <Typography
    gutterBottom
    variant="h3"
    component="h3"
    align="center"
    color="textPrimary"
  >
    Your Settings
  </Typography>
);



export default function UserSettings() {
  const [calories, setCalories] = useState(2000);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("testing");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };
  /*
  Ko sem mislil, da ostal bom sam, da na svetu ni več pravih dam, se
  ona mi prikaže, vse se spremeni, dolge noge, vitek stas, božanski
  njen obraz. Sem pristopil k njej in kar drhtel, najraje bi takoj jo
  vzel, mislim, da je prava, dala bi mi vse, kaj bi dal za takšno
  žensko to se vendar ve. Rečem ji: “Hej, mala, bi ti z mano šla?” Ona
  mi prikima, se v sobi srečava. Potem pa ŠOK, o, moj bog! Ko sleče
  se, saj to ni res, saj pod krilom skriva ona penis, večjega kot moj
  prijatelj Denis!
  */
  return (
    <Grid container justify="space-between" spacing={2}>
      <Grid item lg={4} md={12} xs={12}>
        <Card className="infoHeader">
          <CardHeader title={title}></CardHeader>
          <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            align="center"
            color="textPrimary"
          >
            Here you can change your desired daily calorie intake and macronutrients 
             everytime you desire. <br></br>
            We will generate the best meal plan for you based on your input. 
            <br></br>
            Although calories are important macronutrients reflect the full potential 
            of your food. 
            These are the building blocks of your food, and most items you eat provide two or even three macros.
          </Typography>

          
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={8} md={12} xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid container justify="center" spacing={2}>
            <Grid item lg={12} md={12} xs={12}>
              <Card className="mb-3">
                <CardContent>
                  <Grid
                    containter
                    className={classes.root}
                    justify="space-around"
                    spacing={2}
                  >
                    <Grid item lg={5} xs={12}>
                      <InputLabel className="mb-3">
                        Enter your calories:
                      </InputLabel>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="calories"
                        type="calories"
                        id="calories"
                        //'calories
                        value={localStorage.getItem('calories')}
                        size="small"
                        onChange={(e) => setCalories(e.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              kcal
                            </InputAdornment>
                          ),
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item lg={5} xs={12}>
                      <InputLabel className="mb-3 text-center">
                        Don't know your daily calorie intake?
                      </InputLabel>
                      <Button
                        onClick={handleClickOpen}
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Calculate calories
                      </Button>
                      <CalorieCalculatorDialog
                        open={open}
                        onClose={handleClose}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid className="mb-3" item lg={12} md={12} xs={12}>
              <MacrosSlider></MacrosSlider>
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
              >
                Save your settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
