import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./RecipeReviewCard";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { blue } from "@material-ui/core/colors";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CloseIcon from "@material-ui/icons/Close";

let data = [
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
        img: "https://cdn.mos.cms.futurecdn.net/EBEXFvqez44hySrWqNs3CZ.jpg",
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
];
export default function Discover() {
  const [innerData, setData] = React.useState(data);
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },

    paddingTop: {
      paddingTop: theme.spacing(8),
    },
  }));

  const onClose = (data1) => {
    console.log(data1);
    setData([...data1]);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box p={2} position="absolute" bottom={0} right={0}>
        <FoodEditor updateData={onClose} />
      </Box>

      {/* End hero unit */}
      <Grid container spacing={2} justify="space-between">
        {innerData.map((meal) => (
          <Grid item key={meal} xs={12} lg={6} md={6}>
            <RecipeReviewCard
              key={meal.key}
              title={meal.name}
              attributes={meal.attributes}
              ingredients={meal.ingredients}
              steps={meal.steps}
              preptime={meal.preptime}
              desc={meal.description}
              img={meal.img}
            ></RecipeReviewCard>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

let ingredients = [];

function createData(ingredient, quantity, metric) {
  return { ingredient, quantity, metric };
}

let choices = [];
let steps = [];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function IngredientDialog(props) {
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
      <DialogTitle id="simple-dialog-title">Pick an ingredient</DialogTitle>
      <List>
        {ingredients.map((ingredient) => (
          <ListItem
            button
            onClick={() => handleListItemClick(ingredient.name)}
            key={ingredient.name}
          >
            <ListItemText primary={ingredient.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "9ch",
  },
}));
function AddIngredient() {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValue] = React.useState(choices);
  const classes = useStyles2();
  const [, setMetric] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    choices.push(createData(value, 0));

    setSelectedValue(choices);
    console.log(selectedValues);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let customListItem2 = choices.find((i) => i.ingredient == name);
    let index = choices.indexOf(customListItem2);
    if (index != -1)
      choices[index] = createData(name, value, customListItem2.metric);

    setSelectedValue([...choices]);
    console.log(choices);
  };
  const handleChangeMetric = (event) => {
    setMetric(event.target.value);

    const { name, value } = event.target;
    let customListItem2 = choices.find((i) => i.ingredient == name);
    console.log(customListItem2);
    let index = choices.indexOf(customListItem2);
    if (index != -1)
      choices[index] = createData(name, customListItem2.quantity, value);

    setSelectedValue([...choices]);
    console.log(choices);
  };

  const handleChangeDelete = (name) => {
    let customListItem2 = choices.find((i) => i.ingredient == name);

    let index = choices.indexOf(customListItem2);
    if (index != -1) choices.splice(index, 1);

    setSelectedValue([...choices]);
    console.log(choices);
  };

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {choices.map((row) => (
          <ListItem>
            <Typography variant="subtitle1">
              {row.ingredient}
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                size="small"
                type="number"
                onChange={handleInputChange}
                name={row.ingredient}
                className={classes.textField}
              ></TextField>
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={row.ingredient}
              onChange={handleChangeMetric}
            >
              {/*
          measurements.map((measurement)=>{
            console.log(measurement.unit);
            <MenuItem value={measurement.unit}>{measurement.unit}</MenuItem>
          })
        */}

              <MenuItem value={"g"}>g</MenuItem>
              {/*     <MenuItem value={"l"}>l</MenuItem>
          <MenuItem value={"ml"}>ml</MenuItem> */}
            </Select>
            <Button
              onClick={() => {
                handleChangeDelete(row.ingredient);
              }}
            >
              <CloseIcon />
            </Button>
          </ListItem>
        ))}
      </List>

      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <IngredientDialog
        selectedValue={selectedValues}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
function StepDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleConfirm = () => {
    handleClose();
    let desc = document.getElementById("description_field").value;
    steps.push(desc);
    onClose(selectedValue);
    console.log(steps);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Add a step</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please describe what to do at the next step of preparing the dish.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="description_field"
          label="Step"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
function AddStep() {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValue] = React.useState(steps);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeDelete = (index) => {
    steps.splice(index, 1);
    setSelectedValue([...steps]);
    console.log(steps);
  };

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {steps.map((description, index) => (
          <ListItem>
            <Typography variant="subtitle1">{description}</Typography>
            <Button
              onClick={() => {
                handleChangeDelete(index);
              }}
            >
              <CloseIcon />
            </Button>
          </ListItem>
        ))}
      </List>

      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <StepDialog
        selectedValue={selectedValues}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

function FoodEditor(props) {
  fetch("https://damp-retreat-43305.herokuapp.com/api/ingredients/all", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
  })
    .then((response) => response.json())
    .then((result) => {
      ingredients = result;
      //check if user/email already exits,
    })
    .catch((error) => console.log("error", error));

  fetch("https://damp-retreat-43305.herokuapp.com/api/measurements/all", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
  })
    .then((response) => response.json())
    .then((result) => {
      //check if user/email already exits,
    })
    .catch((error) => console.log("error", error));

  const defaultValues = {
    name: "",
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(defaultValues);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    let something = [];
    let sum = { Calories: 0, Fat: 0, Protein: 0, Carbohydrates: 0 };
    let ingrlist = [];

    for (let i = 0; i < choices.length; i++) {
      let c = choices[i];
      let customListItem2 = ingredients.find((i) => i.name == c.ingredient);
      customListItem2["quantity"] = c.quantity;
      customListItem2["measurement"] = c.measurement;
      something.push(customListItem2);
      ingrlist.push({
        ingredient: customListItem2["name"],
        quantity: customListItem2["quantity"],
        metric: "g",
      });
      sum["Calories"] += customListItem2["calories"];
      sum["Fat"] += customListItem2["fat"];
      sum["Protein"] += customListItem2["protein"];
      sum["Carbohydrates"] += customListItem2["carbohydrates"];
    }
    console.log(something);
    data.push({
      name: formValues["name"],
      attributes: {
        Calories: sum["Calories"],
        Fat: sum["Fat"],
        Protein: sum["Protein"],
        Carbohydrates: sum["Carbohydrates"],
      },
      preptime: "30 min",
      ingredients: ingrlist,
      steps: steps,
      description: "trololol",
      img:
        "https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2.jpg",
    });
    fetch("https://damp-retreat-43305.herokuapp.com/api/recipes/all", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      body: JSON.stringify({
        name: formValues.name,
        ingredients: something,
        steps: steps,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        //check if user/email already exits,
      })
      .catch((error) => console.log("error", error));
    choices = [];
    steps = [];
    setFormValues({
      ...formValues,
      ["name"]: "",
    });
    props.updateData(data);
    setOpen(false);
  };
  const handleCancel = () => {
    choices = [];
    steps = [];
    setFormValues({
      ...formValues,
      ["name"]: "",
    });
    props.updateData(data);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddBoxIcon />
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Secret recipe?</DialogTitle>
        <DialogContent>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <hr />
          <Typography>Ingredients:</Typography>
          <AddIngredient />
          <hr />
          <Typography>Steps:</Typography>
          <AddStep />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
