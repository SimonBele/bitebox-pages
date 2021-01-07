import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { PieChart } from "react-minimal-pie-chart";
import "./Style.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { red } from "@material-ui/core/colors";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MoreIcon from "@material-ui/icons/More";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 450,
//     border: `1px solid ${theme.palette.divider}`,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   grid: {
//     width: "fit-content",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: theme.palette.background.paper,
//     color: theme.palette.text.secondary,
//     "& svg": {
//       margin: theme.spacing(0.5),
//     },
//     "& hr": {
//       margin: theme.spacing(0, 0.5),
//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    display: "flex",
  },

  bannerPhotoStyle: {
    maxWidth: "60%",
    height: "100%",

    display: "inline-block",
  },

  cardHeader: {
    minHeight: 64,
  },

  content: {
    width: "40%",
  },
  cover: {
    width: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  chart: {
    height: "auto",
    width: "80%",
  },
  card: {},
}));
export default function MealItem(props) {
  const classes = useStyles();

  const [selected, setSelected] = React.useState(0);
  const [hovered, setHovered] = React.useState(undefined);
  const [clicked, setClicked] = React.useState(false);

  const handleIconClick = (id) => {
    if (clicked) setClicked(false);
    else setClicked(true);
    // change <AddCircleIcon /> to <BlockIcon /> at "id"
  };
  const handleLike = () => {};
  const handleExpandClick = () => {};
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let tmp = [
    { title: "Fat", value: props.attrs["Fat"], color: "#2c95b5" },
    { title: "Protein", value: props.attrs["Protein"], color: "#ff6418" },
    {
      title: "Carbohydrates",
      value: props.attrs["Carbohydrates"],
      color: "#90ae6c",
    },
  ];
  const defaultLabelStyle = {
    fontSize: "10px",
    fontFamily: "sans-serif",
  };
  const data = tmp.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: "grey",
      };
    }
    return entry;
  });

  return (
    <div className="meal-item">
      <Card className={classes.root} raised>
        <CardContent className={classes.content}>
          <Grid container justify="flex-start">
            <Grid item lg={12} md={12} xs={12}>
              <Grid container justify="center">
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
                  className={classes.cardHeader}
                >
                  <Typography
                    variant="h4"
                    color="textPrimary"
                    component="h4"
                    align="left"
                  >
                    {props.title}
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12} className="pt-3">
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    component="h5"
                    align="center"
                  >
                    Time:
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    component="h5"
                    align="center"
                  >
                    &nbsp;{props.preptime}
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12} className="" align="center">
                  <PieChart
                    className={classes.chart}
                    data={data}
                    segmentsStyle={{
                      transition: "stroke .3s",
                      cursor: "pointer",
                    }}
                    segmentsShift={(index) => (index === selected ? 6 : 1)}
                    radius={44}
                    onClick={(event, index) => {
                      setSelected(index === selected ? undefined : index);
                    }}
                    onMouseOver={(_, index) => {
                      setHovered(index);
                    }}
                    onMouseOut={() => {
                      setHovered(undefined);
                    }}
                  />
                </Grid>
                <Grid item lg={12} md={12} xs={12} className="">
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    component="h5"
                    align="center"
                  >
                    Calories: {props.attrs["Calories"]}
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12} className="">
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Shh! This is a secret recipe!"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Typography>Ingredients</Typography>
                        <List component="nav" aria-label="main mailbox folders">
                          {props.ingredients.map((row) => (
                            <ListItem>
                              <Typography variant="subtitle1">
                                {row.ingredient} - {row.quantity}
                                {row.metric}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                        <hr />
                        <Typography>Steps</Typography>

                        <List component="nav" aria-label="main mailbox folders">
                          {props.steps.map((description, index) => (
                            <ListItem>
                              Step {index + 1}:{" "}
                              <Typography variant="subtitle1">
                                {description}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
                <Grid item lg={12} md={12} xs={12} align="center">
                  <IconButton
                    className={classes.expand}
                    onClick={handleClickOpen}
                  >
                    <MoreIcon />
                  </IconButton>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={handleIconClick}
                  >
                    {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>

        <CardMedia
          component="img"
          image={props.img}
          className={classes.bannerPhotoStyle}
          title={props.title}
        />
      </Card>
    </div>
  );
}
