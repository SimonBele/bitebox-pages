import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CloseIcon from '@material-ui/icons/Close';

let ingredients = [];

function createData(ingredient, quantity, metric) {
  return { ingredient, quantity, metric };
}

let choices = [];
let steps   = [];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function IngredientDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    choices = [];

    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Pick an ingredient</DialogTitle>
      <List>
        {ingredients.map((ingredient) => (
          <ListItem button onClick={() => handleListItemClick(ingredient.name)} key={ingredient.name}>

            <ListItemText primary={ingredient.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '9ch',
  },
}));
function AddIngredient() {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValue] = React.useState(choices);
  const classes = useStyles2();
  const [, setMetric] = React.useState('');
  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    choices.push( createData(value,0) );

    setSelectedValue(choices);
    console.log(selectedValues);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    let customListItem2 = choices.find(i=> i.ingredient == name);
    let index = choices.indexOf(customListItem2);
    if(index != -1)
      choices[index] = createData(name, value, customListItem2.metric);

    setSelectedValue([...choices]);
    console.log(choices);
  };
  const handleChangeMetric = (event) => {
    setMetric(event.target.value);

    const { name, value } = event.target;
    let customListItem2 = choices.find(i=> i.ingredient == name);
    console.log(customListItem2);
    let index = choices.indexOf(customListItem2);
    if(index != -1)
      choices[index] = createData(name, customListItem2.quantity, value);

    setSelectedValue([...choices]);
    console.log(choices);
  };

  const handleChangeDelete = (name) => {
    let customListItem2 = choices.find(i=> i.ingredient == name);

    let index = choices.indexOf(customListItem2);
    if(index != -1)
      choices.splice(index, 1);

    setSelectedValue([...choices]);
    console.log(choices);
  };

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
       {choices.map((row) => (    
        <ListItem>
          <Typography variant="subtitle1">{row.ingredient}
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
        <Button onClick={()=>{handleChangeDelete(row.ingredient)}} >
          <CloseIcon />
        </Button>
        </ListItem>
          ))}
     
     </List>

      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <IngredientDialog selectedValue={selectedValues} open={open} onClose={handleClose} />
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
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
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
          <Typography variant="subtitle1">{description}
          </Typography>
        <Button onClick={()=>{handleChangeDelete(index)}} >
          <CloseIcon />
        </Button>
        </ListItem>
          ))}
     
     </List>

      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <StepDialog selectedValue={selectedValues} open={open} onClose={handleClose} />
    </div>
  );
}

export default function FoodEditor() {
  fetch("http://localhost:8000/api/ingredients/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem("access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        ingredients = result;
        //check if user/email already exits,
      })
      .catch((error) => console.log("error", error));

  fetch("http://localhost:8000/api/measurements/all", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem("access"),
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
  const [formValues, setFormValues] = React.useState(defaultValues)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    let something = [];
    for(let i =0; i<choices.length; i++)
    {
       let c = choices[i];
       let customListItem2 = ingredients.find(i=> i.name == c.ingredient);
       customListItem2["quantity"] = c.quantity;
       customListItem2["measurement"] = c.measurement;
       something.push(customListItem2);
     }
    fetch("http://localhost:8000/api/recipes/all", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem("access"),
      },
      body: JSON.stringify({
         "name":formValues.name,
         "ingredients":something,
         "steps":steps
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        //check if user/email already exits,
      })
      .catch((error) => console.log("error", error));

    setOpen(false);
  };
  const handleCancel = () => {
    choices = [];
    handleClose();
    
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      <AddBoxIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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