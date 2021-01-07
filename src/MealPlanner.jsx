import React, { useState } from "react";
import DailyMealList from "./DailyMealList";
import Calendar from "react-calendar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardContent, Typography } from "@material-ui/core";
import { PieChart } from "react-minimal-pie-chart";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import RefreshIcon from "@material-ui/icons/Refresh";
import { CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
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
  background: {
    backgroundColor: "#e6f4f3",
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
  text: {
    width: "100%",
  },

  calendar: {
    minHeight: "30rem",
  },

  width100: {
    width: "100%",
  },
  height100: {
    height: "100%",
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
  fixedHeight: {
    height: "100%",
  },
  list: {},
}));

function MealPlanner() {
  const classes = useStyles();
  const data = [
    {
      "Jan 05 2021": [
        {
          title: "Breakfast",
          name: "Banana pancakes",
          attributes: { Calories: 243, Fat: 15, Protein: 9, Carbohydrates: 15 },
          preptime: "10 min",
          img:
            "https://www.thespruceeats.com/thmb/LXIzM9lzhvHERkAhrSzSkUqRbZc=/1333x1000/smart/filters:no_upscale()/raspberry-pancakes-57961cbc5f9b58173ba3f277.jpg",
          ingredients: [
            {
              ingredient: "Banana",
              quantity: 1,
              metric: "",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/bananas-d5a7b4c.jpg?webp=true&quality=90&resize=276%2C251",
            },
            {
              ingredient: "Eggs",
              quantity: 2,
              metric: "",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/eggs-127432d.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Oil",
              quantity: 1,
              metric: "tbs",
              img:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bottle_of_olive_oil.jpg/1200px-Bottle_of_olive_oil.jpg",
            },
            {
              ingredient: "Raspberries",
              quantity: 125,
              metric: "g",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/raspberries-b194449.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Pecans",
              quantity: 25,
              metric: "g",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Pecans-fb971d7.jpg?webp=true&quality=90&resize=418%2C380",
            },
          ],
          steps: [
            "Mash the banana in a bowl until it resembles a puree.",
            "Stir 2 beaten eggs, add apintch of vanilla extract and baking powder.",
            "Heat a pan and brush with oil.",
            "Use half the batter for one pancake, 1-2 minutes per side.",
            "Top with raspberries and chopped pecans.",
          ],
          description: "trololol",
        },
        {
          title: "Lunch",
          name: "Chicken satay salad",
          attributes: {
            Calories: 353,
            Fat: 10,
            Protein: 38,
            Carbohydrates: 24,
          },
          preptime: "1 h 25 min",
          ingredients: [
            {
              ingredient: "Tamari",
              quantity: 1,
              metric: "tbsp",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/tamari-0d6aef4.jpg?webp=true&quality=90&resize=385%2C350",
            },
            {
              ingredient: "Curry powder",
              quantity: 1,
              metric: "tsp",
              img:
                "https://www.recipetineats.com/wp-content/uploads/2018/02/Thai-Red-Curry-Paste_0.jpg",
            },
            {
              ingredient: "Ground cumin",
              quantity: 1 / 4,
              metric: "tsp",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/cuminseeds-d7551db.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Garlic clove",
              quantity: 1,
              metric: "",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/garlic-c8aa91b.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Honey",
              quantity: 1,
              metric: "tsp",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/honey-pot-4d7c98d.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Skinless chicken breast fillet",
              quantity: 2,
              metric: "",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/03/chicken-b59b0b0.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Peanut butter",
              quantity: 1,
              metric: "tbsp",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/peanut-butter-c038335.jpg?webp=true&quality=90&resize=385%2C350",
            },
            {
              ingredient: "Sweet chilli",
              quantity: 1,
              metric: "tbsp",
              img:
                "https://glebekitchen.com/wp-content/uploads/2019/11/thaisweetchilisaucescene.jpg",
            },
            {
              ingredient: "Lime juice",
              quantity: 1,
              metric: "tbsp",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/lime-cb57460.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Oil",
              quantity: 1,
              metric: "tbsp",
              img:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bottle_of_olive_oil.jpg/1200px-Bottle_of_olive_oil.jpg",
            },
            {
              ingredient: "Lettuce heart",
              quantity: 2,
              metric: "",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/lettuce-13dba44.jpg?webp=true&quality=90&resize=588%2C534",
            },
            {
              ingredient: "Cucumber",
              quantity: 1 / 4,
              metric: "",
              img:
                "https://cdn.mos.cms.futurecdn.net/EBEXFvqez44hySrWqNs3CZ.jpg",
            },
          ],

          steps: [
            "Mix tamari, curry powder, cumin, garlic and honey in a bowl.",
            "Slice the fillets and marinade for at least one hour.",
            "Mix peanut butter with chilli sauce, lime juice and 1 tbsp water.",
            "Cook the chicken in a lid covered pan for 5-6 minutes, on medium heat. Set aside to rest.",
            "Mix the salad, spoon over a little sauce. Slice the chicken and top the salad.",
          ],
          description: "trololol",
          img:
            "https://www.closetcooking.com/wp-content/uploads/2011/01/Thai-Grilled-Chicken-Satay-Salad-1-500.jpg",
        },
        {
          title: "Dinner",
          name: "Coconut & squash dhansak",
          attributes: { Calories: 320, Fat: 17, Protein: 9, Carbohydrates: 29 },
          preptime: "20 min",
          ingredients: [
            {
              ingredient: "Oil",
              quantity: 1,
              metric: "tbsp",
              img:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bottle_of_olive_oil.jpg/1200px-Bottle_of_olive_oil.jpg",
            },
            {
              ingredient: "Butternut squash",
              quantity: 500,
              metric: "g",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/butternut-squash-ff46026.jpg?webp=true&quality=90&resize=385%2C350",
            },
            {
              ingredient: "Onion",
              quantity: 100,
              metric: "g",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/onionchop-69bfe13.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Curry paste",
              quantity: 4,
              metric: "tbsp",
              img:
                "https://www.recipetineats.com/wp-content/uploads/2018/02/Thai-Red-Curry-Paste_0.jpg",
            },
            {
              ingredient: "Tomatoes",
              quantity: 400,
              metric: "g",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/tomatoes-39dd2fd.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Coconut milk",
              quantity: 400,
              metric: "g",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/coconut-milk-4cc9cb3.jpg?webp=true&quality=90&resize=385%2C350",
            },
            {
              ingredient: "Spinach",
              quantity: 200,
              metric: "g",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/spinach-252cd47.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Coconut yogurt",
              quantity: 150,
              metric: "ml",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Yogurt-40da58e.jpg?webp=true&quality=90&resize=551%2C500",
            },
          ],
          steps: [
            "Heat oil in pan.",
            "Put the squash in bowl with a spalsh of water, cover with film and microwave for 10 mins.",
            "Add onions into the pan, cook until soft.",
            "Add curry paste, tomatoes and coconut milk.",
            "Simmer for 10 minutes.",
            "Drain the squash, add spinach and seasoning.",
            "Simmer for 2-3 mins.",
            "Stir in coconut yogurt.",
          ],
          description: "trololol",
          img:
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-a3a9133.jpg",
        },
        {
          title: "Snack",
          name: "Orange lollies",
          attributes: { Calories: 72, Fat: 0, Protein: 1, Carbohydrates: 15 },
          preptime: "5 min + freezing",
          description: "trololol",
          ingredients: [
            {
              ingredient: "Orange",
              quantity: 3,
              metric: "",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/orange-cropped-dfb5812.jpg?webp=true&quality=90&resize=418%2C380",
            },
            {
              ingredient: "Pear",
              quantity: 2,
              metric: "",
              img:
                "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/pears-28f8900.jpg?webp=true&quality=90&resize=385%2C350",
            },
          ],
          steps: [
            "Finely grate a bit of zest from one of the oranges.",
            "Peel, chop and put them in a bowl with zest and pears.",
            "Blitz.",
            "Pour into molds and frezze.",
          ],
          img:
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/9._fresh_orange_lollies-d3ae87c.jpg?quality=90&lb=700,350&background=white",
        },
      ],
    },
  ];
  const [selected, setSelected] = React.useState(0);
  const [hovered, setHovered] = React.useState(undefined);
  const [clicked, setClicked] = React.useState(false);

  const [visible, setVisible] = useState(false);

  let day = new Date();
  let inputData = [];
  if (typeof data[0][day.toString().slice(4, 15)] !== "undefined")
    inputData = data[0][day.toString().slice(4, 15)];

  let sum = { Calories: 0, Fat: 0, Protein: 0, Carbohydrates: 0 };
  for (let i = 0; i < inputData.length; i++) {
    sum["Calories"] += inputData[i]["attributes"]["Calories"];
    sum["Fat"] += inputData[i]["attributes"]["Fat"];
    sum["Protein"] += inputData[i]["attributes"]["Protein"];
    sum["Carbohydrates"] += inputData[i]["attributes"]["Carbohydrates"];
  }
  let tmp = [
    { title: "Fat", value: sum["Fat"], color: "#2c95b5" },
    { title: "Protein", value: sum["Protein"], color: "#ff6418" },
    { title: "Carbohydrates", value: sum["Carbohydrates"], color: "#90ae6c" },
  ];
  let tmp_data = tmp.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: "grey",
      };
    }
    return entry;
  });

  let planner_title = day.toString().slice(0, 16).toUpperCase();

  const [value, onChange] = useState(new Date());

  const changed = (value) => {
    day = value;
    planner_title = day.toString().slice(0, 16).toUpperCase();
    if (typeof data[0][day.toString().slice(4, 15)] !== "undefined")
      inputData = data[0][day.toString().slice(4, 15)];
    else inputData = [];
    sum = { Calories: 0, Fat: 0, Protein: 0, Carbohydrates: 0 };
    for (let i = 0; i < inputData.length; i++) {
      sum["Calories"] += inputData[i]["attributes"]["Calories"];
      sum["Fat"] += inputData[i]["attributes"]["Fat"];
      sum["Protein"] += inputData[i]["attributes"]["Protein"];
      sum["Carbohydrates"] += inputData[i]["attributes"]["Carbohydrates"];
    }
    tmp = [
      { title: "Fat", value: sum["Fat"], color: "#2c95b5" },
      { title: "Protein", value: sum["Protein"], color: "#ff6418" },
      { title: "Carbohydrates", value: sum["Carbohydrates"], color: "#90ae6c" },
    ];
    tmp_data = tmp.map((entry, i) => {
      if (hovered === i) {
        return {
          ...entry,
          color: "grey",
        };
      }
      return entry;
    });
  };

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} md={12} lg={10}>
          <Grid container justify="center" spacing={5}>
            <Grid item xs={12} lg={4} className={classes.height100}>
              <Card raised className={classes.calendar}>
                <CardHeader
                  title={
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      align="center"
                      color="textPrimary"
                    >
                      CALENDAR
                    </Typography>
                  }
                  subheader={
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h5"
                      align="center"
                      color="textSecondary"
                    >
                      Keep your schedule tidy!
                    </Typography>
                  }
                ></CardHeader>
                <CardContent>
                  <Calendar
                    className={classes.width100}
                    onChange={onChange}
                    onClick={changed(value)}
                    value={value}
                    className={classes.width100 + " " + classes.height100}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Card
                raised
                className={classes.width100 + " " + classes.calendar}
              >
                <CardHeader
                  title={
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      align="center"
                      color="textPrimary"
                    >
                      YOUR DAILY MEAL PLAN
                    </Typography>
                  }
                  subheader={
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h5"
                      align="center"
                      color="textSecondary"
                    >
                      Summary of your daily plan statistics.
                    </Typography>
                  }
                ></CardHeader>
                <Grid container justify="center">
                  {inputData.length > 0 && (
                    <Grid item xs={12} lg={3}>
                      <PieChart
                        className={classes.width100}
                        data={tmp_data}
                        segmentsStyle={{
                          transition: "stroke .3s",
                          cursor: "pointer",
                        }}
                        segmentsShift={(index) => (index === selected ? 6 : 1)}
                        label={({ dataEntry }) => dataEntry.title}
                        labelStyle={(index) => ({
                          fontSize: "8px",
                        })}
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
                  )}
                  {inputData.length > 0 && (
                    <Grid item xs={12} lg={3}>
                      <List>
                        <ListItem>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            Calories:
                          </Typography>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            {sum["Calories"]}
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            Carbs:
                          </Typography>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            {sum["Carbohydrates"]}
                          </Typography>
                          <Typography></Typography>
                        </ListItem>
                        <ListItem>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            Fat:
                          </Typography>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            {sum["Fat"]}
                          </Typography>
                          <Typography></Typography>
                        </ListItem>
                        <ListItem>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            Protein:
                          </Typography>
                          <Typography
                            component="div"
                            className={classes.text}
                            variant="h5"
                            component="h5"
                          >
                            {sum["Protein"]}
                          </Typography>
                        </ListItem>
                      </List>
                    </Grid>
                  )}
                  {inputData.length > 0 && (
                    <Grid item xs={12} lg={4}>
                      <Typography
                        component="div"
                        className={classes.text}
                        variant="h5"
                        component="h5"
                      >
                        Your plan is currently severly restricted in caloric
                        value. This will lead to rapid weight loss.
                      </Typography>
                      <br></br>
                      <Typography
                        component="div"
                        className={classes.text}
                        variant="h5"
                        component="h5"
                      >
                        Your plan has plenty of protein and a good amount of
                        fat. It also has an above average carbohydrate amount.
                      </Typography>
                    </Grid>
                  )}
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={10}
                    className={classes.button + " " + "my-4"}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={() => setVisible(!visible)}
                    >
                      GENERATE MEAL PLAN
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={12} className=" mb-5">
            {inputData.length > 0 && (
              <div className={classes.list}>
                {visible && <DailyMealList day={day} data={inputData} />}
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MealPlanner;
