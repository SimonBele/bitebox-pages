import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import { PieChart } from "react-minimal-pie-chart";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 10,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    paddingTop: "2%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
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
    height: 124,
    width: 124,
  },
  media: {
    height: 0,
    paddingTop: "12.4%", // 16:9
  },
}));
export default function MealItem(props) {
  const classes = useStyles();

  const [selected, setSelected] = React.useState(0);
  const [hovered, setHovered] = React.useState(undefined);

  let tmp = [
    { title: "Fat", value: props.attrs["Fat"], color: "#2c95b5" },
    { title: "Protein", value: props.attrs["Protein"], color: "#ff6418" },
    {
      title: "Carbohydrates",
      value: props.attrs["Carbohydrates"],
      color: "#90ae6c",
    },
  ];

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
    <Card raised>
      <CardHeader title={props.feed} subheader={props.title} />
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
      />
      <CardContent>
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={0.2}>
              <Grid item xs={8} sm={3}>
                <Typography>Ingredients</Typography>
                <List component="nav" aria-label="main mailbox folders">
                  {props.ingredients.map((row) => (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={row.img} />
                      </ListItemAvatar>
                      <Typography variant="subtitle1">
                        {row.ingredient} - {row.quantity}
                        {row.metric}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={8} sm={6}>
                <Typography>Steps</Typography>
                <List component="nav" aria-label="main mailbox folders">
                  {props.steps.map((description, index) => (
                    <ListItem>
                      Step {index + 1}:{" "}
                      <Typography variant="subtitle1">{description}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={8} sm={2}>
                <div className={classes.details}>
                  <Grid item xs={12} sm={12}>
                    <CardContent className={classes.content}>
                      <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        component="p"
                      >
                        Preperation Time: {props.preptime}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        component="p"
                      >
                        Calories: {props.attrs["Calories"]}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
