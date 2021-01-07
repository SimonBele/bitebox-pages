import React, { useState } from "react";
// import "react-inputs-validation/lib/react-inputs-validation.min.css";

import "./Style.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from "@material-ui/core/Tooltip";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function CalorieCalculator({}) {
  const [allValues, setAllValues] = useState({
    goal: "",
    sex: "",
    height: "",
    weight: "",
    age: "",
    activityLevel: "",
  });
  const [formErrors] = useState({
    goal: "",
    sex: "",
    height: "",
    weight: "",
    age: "",
    activityLevel: "",
  });
  var rows = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("testing");

    if (formValid(formErrors, allValues)) {
      console.log(`
      goal: ${allValues.goal}
      sex: ${allValues.sex}
      height: ${allValues.height}
      weight: ${allValues.weight}
      age: ${allValues.age}
      activityLevel: ${allValues.activityLevel}
      `);
      //calculate calories
      //BMR, Calculated Calories, Lose weight,Maintain, gain weight
      let calories = calculateCalories();
      //calulate macros
      //inject results into html
      rows = [
        Math.round(calories[0]),
        Math.round(calories[1]),
        Math.round(calories[2]),
        Math.round(calories[3]),
        Math.round(calories[4]),
      ];

      let a = document.getElementById("result-table");

      let bmr = document.getElementById("bmr");
      bmr.innerHTML = rows[0];
      let cCalories = document.getElementById("cCalories");
      cCalories.innerHTML = rows[1];
      let lose = document.getElementById("lose");
      lose.innerHTML = rows[2];
      let maintain = document.getElementById("maintain");
      maintain.innerHTML = rows[3];
      let gain = document.getElementById("gain");
      gain.innerHTML = rows[4];

      //<protein: {Math.round(macros[2])}

      console.log(a.classList);
      a.classList.remove("d-none");
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  //handling input values
  const handleChange = (e) => {
    if(e){
      e.preventDefault();
      const { name, value } = e.target;
      

      switch (name) {
        case "height":
          formErrors.height =
            isNumberRegex.test(value) && value > 0
              ? ""
              : "Please enter a number greater than 0.";
          break;
        case "weight":
          formErrors.weight =
            isNumberRegex.test(value) && value > 0
              ? ""
              : "Please enter a number greater than 0.";
          break;
        case "age":
          formErrors.age =
            isNumberRegex.test(value) && value > 0
              ? ""
              : "Please enter a number greater than 0.";
          break;
        default:
          break;
      }
      
        for (let radio of e.nativeEvent.path[4].children) {
          radio.classList.remove("border-success");
        }
    
        
        e.nativeEvent.path[3].classList.add("border-success");

     

      setAllValues({ ...allValues, [name]: value });

      console.log("Values:", allValues);
      console.log("Errors:", formErrors);
    }

  };

  const calculateCalories = () => {
    //calculate based on the Mifflin-St Jeor Equation:
    //for men: BMR = 10W + 6.25H - 5A + 5
    //for women: BMR = 10W + 6.25H - 5A - 161
    // W- weight in kg, H-height in cm, A-age, F-body fat in percentage

    //set numerical values
    let activity_level = 0;
    let goal;
    console.log(allValues);
    if (allValues.activityLevel === "sedentary") {
      activity_level = 0.9;
    } else if (allValues.activityLevel === "walker") {
      activity_level = 1.1;
    } else if (allValues.activityLevel === "athlete") {
      activity_level = 1.3;
    } else if (allValues.activityLevel === "lifting") {
      activity_level = 1.2;
    }

    console.log(activity_level);
    if (allValues.goal === "loseWeight") {
      goal = 0.75;
    } else if (allValues.goal === "maintainWeight") {
      goal = 1;
    } else if (allValues.goal === "gainWeight") {
      goal = 1.15;
    }

    //calculate BMR(Basic Metabolic rate)
    let BMR;
    if (allValues.sex === "male") {
      BMR =
        10 * allValues.weight + 6.25 * allValues.height - 5 * allValues.age + 5;
    } else {
      BMR =
        10 * allValues.weight +
        6.25 * allValues.height -
        5 * allValues.age -
        161;
    }
    console.log(
      "BMR: ",
      BMR,
      "\n CalculatedvCalories: ",
      BMR * activity_level * goal,
      "\n Lose weight: ",
      BMR * activity_level * 0.75,
      "\n Maintain: ",
      BMR * activity_level,
      "\n Gain weight: ",
      BMR * activity_level * 1.15
    );

    //BMR, Calculated Calories, Lose weight,Maintain, gain weight
    localStorage.setItem('calories',BMR * activity_level * goal );
    localStorage.setItem('BMR',BMR );


    return [
      BMR,
      BMR * activity_level * goal,
      BMR * activity_level * 0.75,
      BMR * activity_level,
      BMR * activity_level * 1.25,
    ];
  };

  const title = (
    <Typography
      gutterBottom
      variant="h3"
      component="h3"
      align="center"
      color="textPrimary"
    >
      Calorie Calculator
    </Typography>
  );

  const subtitle = (
    <Typography
      gutterBottom
      variant="h5"
      component="h5"
      align="center"
      color="textSecondary"
    >
      Calculate your daily calorie consumption.
    </Typography>
  );

  const icons = {
    male: (
      <img src="https://img.icons8.com/offices/21/000000/male.png" alt="" />
    ),
    female: (
      <img src="https://img.icons8.com/offices/21/000000/female.png" alt="" />
    ),
    loseWeight: (
      <img
        src="https://img.icons8.com/carbon-copy/21/000000/lightweight.png"
        alt=""
      />
    ),
    maintainWeight: (
      <img src="https://img.icons8.com/wired/21/000000/scale.png" alt="" />
    ),
    gainWeight: (
      <img
        src="https://img.icons8.com/wired/21/000000/flex-biceps.png"
        alt=""
      />
    ),
    sedentary: (
      <img src="https://img.icons8.com/ios/21/000000/slouch.png" alt="" />
    ),
    walking: (
      <img src="https://img.icons8.com/ios/21/000000/walking.png" alt="" />
    ),
    running: (
      <img src="https://img.icons8.com/ios/21/000000/running.png" alt="" />
    ),
    lifting: (
      <img src="https://img.icons8.com/ios/21/000000/weightlift.png" alt="" />
    ),
  };

  return (
    <div>
      <Container maxwidth={"false"} disableGutters>
        <Card raised>
          <CardHeader title={title} subheader={subtitle}></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container justify="center">
                <Grid item lg={5} md={12} xs={12}>
                  <Grid
                    container
                    direction="column"
                    spacing={3}
                    justify="center"
                  >
                    <Grid item xs={12}>
                      {/*AGE*/}
                      <InputLabel className="mb-3">Age:</InputLabel>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="age"
                        type="age"
                        id="age"
                        size="small"
                        onChange={handleChange}
                      ></TextField>
                      {formErrors.age.length > 0 && (
                        <span className="errorMessage">{formErrors.age}</span>
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      {/*WEIGHT*/}
                      <InputLabel className="mb-3">Weight:</InputLabel>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="weight"
                        type="weight"
                        id="weight"
                        size="small"
                        onChange={handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">kg</InputAdornment>
                          ),
                        }}
                      ></TextField>
                      {formErrors.weight.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.weight}
                        </span>
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      {/*HEIGHT*/}
                      <InputLabel className="mb-3">Height:</InputLabel>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="height"
                        type="height"
                        id="height"
                        size="small"
                        onChange={handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">cm</InputAdornment>
                          ),
                        }}
                      ></TextField>
                      {formErrors.height.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.height}
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={5} md={12} xs={12}>
                  <Grid
                    container
                    direction="column"
                    spacing={3}
                    alignItems="flex-end"
                  >
                    <Grid item xs={12}>
                      {/*GENDER*/}
                      <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Sex</FormLabel>

                        <RadioGroup
                          row
                          name="sex"
                          value=""
                          onChange={handleChange}
                        >
                          <Grid container justify="start">
                            <FormControlLabel
                              value="male"
                              control={
                                <Tooltip title="Male">
                                  <Radio
                                    icon={icons.male}
                                    checkedIcon={icons.male}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            />

                            <FormControlLabel
                              value="female"
                              control={
                                <Tooltip title="Female">
                                  <Radio
                                    icon={icons.female}
                                    checkedIcon={icons.female}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            ></FormControlLabel>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      {/*WEIGHT GOAL*/}
                      <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Weight Goal</FormLabel>
                        <RadioGroup
                          row
                          name="goal"
                          value=""
                          onChange={handleChange}
                        >
                          <Grid container justify="start">
                            <FormControlLabel
                              value="loseWeight"
                              control={
                                <Tooltip title="Lose Weight">
                                  <Radio
                                    icon={icons.loseWeight}
                                    checkedIcon={icons.loseWeight}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            />
                            <FormControlLabel
                              value="maintainWeight"
                              control={
                                <Tooltip title="Maintain Weight">
                                  <Radio
                                    icon={icons.maintainWeight}
                                    checkedIcon={icons.maintainWeight}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            ></FormControlLabel>
                            <FormControlLabel
                              value="gainWeight"
                              control={
                                <Tooltip title="Gain Weight">
                                  <Radio
                                    icon={icons.gainWeight}
                                    checkedIcon={icons.gainWeight}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            ></FormControlLabel>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      {/*ACTIVITY*/}
                      <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Activity</FormLabel>
                        <RadioGroup
                          row
                          name="activityLevel"
                          value=""
                          onChange={handleChange}
                        >
                          <Grid container justify="start">
                            <FormControlLabel
                              value="sedentary"
                              control={
                                <Tooltip title="Sedentary">
                                  <Radio
                                    icon={icons.sedentary}
                                    checkedIcon={icons.sedentary}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            />
                            <FormControlLabel
                              value="walker"
                              control={
                                <Tooltip title="Walker">
                                  <Radio
                                    icon={icons.walking}
                                    checkedIcon={icons.walking}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            ></FormControlLabel>
                            <FormControlLabel
                              value="athlete"
                              control={
                                <Tooltip title="Athlete">
                                  <Radio
                                    icon={icons.running}
                                    checkedIcon={icons.running}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            ></FormControlLabel>
                            <FormControlLabel
                              value="lifting"
                              control={
                                <Tooltip title="Lifter">
                                  <Radio
                                    icon={icons.lifting}
                                    checkedIcon={icons.lifting}
                                  />
                                </Tooltip>
                              }
                              label=""
                              className="border rounded"
                            ></FormControlLabel>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={10} className="mt-5">
                  {/*BUTTON*/}
                  <Button
                    type="Calculate"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Calculate
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Grid
              container
              justify="center"
              id="result-table"
              className="mt-5 d-none"
            >
              <Grid item xs={11} className="border">
                {/**TABLE */}
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Stats</TableCell>
                        <TableCell align="right">Calories</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody id="table-body">
                      <TableRow key="BMR">
                        <TableCell component="th" scope="row">
                          BMR
                        </TableCell>
                        <TableCell align="right" id="bmr"></TableCell>
                      </TableRow>
                      <TableRow key="Calculated calories">
                        <TableCell component="th" scope="row">
                          Calculated calories
                        </TableCell>
                        <TableCell align="right" id="cCalories"></TableCell>
                      </TableRow>
                      <TableRow key="Lose weight">
                        <TableCell component="th" scope="row">
                          Lose weight
                        </TableCell>
                        <TableCell align="right" id="lose"></TableCell>
                      </TableRow>
                      <TableRow key="Maintain">
                        <TableCell component="th" scope="row">
                          Maintain
                        </TableCell>
                        <TableCell align="right" id="maintain"></TableCell>
                      </TableRow>
                      <TableRow key="Gain muscle">
                        <TableCell component="th" scope="row">
                          Gain muscle
                        </TableCell>
                        <TableCell align="right" id="gain"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

CalorieCalculator.propTypes = {
  /**
   * Logo prop1
   */
};
CalorieCalculator.defaultProps = {};

const isNumberRegex = RegExp(/^\d+(\.\d{1,2})?$/);

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

export default CalorieCalculator;

/* old calorie calculator... yes i wanna die
function CalorieCalculator({ props }) {

  //---------------------TOGGLE BUTTON GROUP----------------------------------------
  const ToggleGroup = (props) => {
    const { buttons, groupName } = props;
    //    const [active, setActive] = useState(buttons[0]);
    const [active, setActive] = useState();
    return (
      <div>
        {buttons.map((item) => (
          //() =>setActive(item)  
          <ButtonToggle
            value={item}
            active={active === item}
            name={groupName}
            //how to call two functions onClick={function(event){ func1(); func2()}}
            onClick={function (event) {
              setActive(item);
              handleChange(event);
            }}
          >
            {item}
          </ButtonToggle>
        ))}
      </div>
    );
  };

  const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding 5px 15px;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    margin: 10px 0px;
    &:hover{
      background-color: ${(props) => theme[props.theme].hover};
    }
    &disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;
  Button.defaultProps = {
    theme: "blue",
  };
  const theme = {
    blue: {
      default: "#3949ab",
      hover: "#283593",
    },
    orange: {
      default: "#3949ab",
      hover: "#283593",
    },
  };
  const ButtonToggle = styled(Button)`
    opacity: 0.7;
    ${({ active }) =>
      active &&
      `
      opacity: 1;
      `}
  `;
  //-----------------------END OF TOGGLE BUTTON GROUP ---------------------------------------
  //very ugly code -> yes i know
  const [allValues, setAllValues] = useState({
    goal: "",
    sex: "",
    height: "",
    weight: "",
    age: "",
    bodyFat: "",
    activityLevel: "Sedentary",
  });
  const [formErrors, setAllErrors] = useState({
    goal: "",
    sex: "",
    height: "",
    weight: "",
    age: "",
    bodyFat: "",
    activityLevel: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("testing");
    //check for errors of toggleButtons
    formErrors.goal = allValues.goal === "" ? "Please select a goal": "";
    formErrors.sex = allValues.sex === "" ? "Please select sex": "";
    formErrors.bodyFat = allValues.bodyFat === "" ? "Please select body fat": "";
    if(formValid(formErrors,allValues)){
      console.log(`
      goal: ${allValues.goal}
      sex: ${allValues.sex}
      height: ${allValues.height}
      weight: ${allValues.weight}
      age: ${allValues.age}
      bodyfat: ${allValues.bodyFat}
      activityLevel: ${allValues.activityLevel}
      `);
    }else{
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

  }
  //handling input values
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    switch(name){
      case "height":
        formErrors.height =
          isNumberRegex.test(value) && value > 0 ? "" : "Please enter a number greater than 0.";
        break;
      case "weight":
        formErrors.weight =
          isNumberRegex.test(value) && value > 0  ? "" : "Please enter a number greater than 0.";
        break;
      case "age":
        formErrors.age =
          isNumberRegex.test(value) && value > 0 ? "" : "Please enter a number greater than 0.";
        break;
      default:
        break;
    }
    setAllValues({...allValues,[name]: value});
    
    console.log("Values:",allValues);
    console.log("Errors:",formErrors);
   

  };


  return (
    <div className="CalorieCalculator">
      <div className="form-wrapper">
        <h1>Calorie calculator</h1>
        <form onSubmit={handleSubmit} noValidate>

          <div className="goal">
            <label htmlFor="goal">I want to</label>
            <i class="question"> &#10068;</i>
            <ToggleGroup
              buttons={["Lose weight", "Maintain", "Build muscle"]}
              groupName="goal"
            ></ToggleGroup>
             {formErrors.goal.length > 0 && (
              <span className="errorMessage">{formErrors.goal}</span>
            )}
          </div>

          <div className="sex">
            <label htmlFor="sex">Sex</label>
            <ToggleGroup
              buttons={["Male", "Female"]}
              groupName="sex"
            ></ToggleGroup>
             {formErrors.sex.length > 0 && (
              <span className="errorMessage">{formErrors.sex}</span>
            )}
          </div>

          <div className="height">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              noValidate
              name="height"
              onChange={handleChange}
              id="height"
              placeholder="cm"
            />
             {formErrors.height.length > 0 && (
              <span className="errorMessage">{formErrors.height}</span>
            )}
          </div>

          <div className="weight">
            <label htmlFor="weight">Weight</label>
            <input 
            type="text" 
            id="weight" 
            name="weight"
            placeholder="kg"
            noValidate
            onChange={handleChange} />
             {formErrors.weight.length > 0 && (
              <span className="errorMessage">{formErrors.weight}</span>
            )}
          </div>

          <div className="age">
            <label htmlFor="age" >Age</label>
            <input 
            type="text" 
            id="age" 
            name="age"
            placeholder="years" 
            noValidate
            onChange={handleChange} />
             {formErrors.age.length > 0 && (
              <span className="errorMessage">{formErrors.age}</span>
            )}
          </div>

          <div className="bodyfat">
            <label htmlFor="age">Bodyfat</label>
            <i class="question"> &#10068;</i>
            <ToggleGroup
              buttons={["Low", "Medium", "High"]}
              groupName="bodyFat"
            ></ToggleGroup>
             {formErrors.bodyFat.length > 0 && (
              <span className="errorMessage"> {formErrors.bodyFat}</span>
            )}
          </div>

          <div className="activityLevel">
            <label>Activity level</label>
            <select name="activityLevel" id="activityLevel" onChange={handleChange}>
              <option value="Sedentary">Sedentary</option>
              <option value="Lightly active">Lightly active</option>
              <option value="Moderately active">Moderately active</option>
              <option value="Very active">Very active</option>
              <option value="Extremely active">Extremely active</option>
         
            </select>
          </div>

          <div>
            <button type="submit">Calculate</button>
          </div>
        </form>
      </div>
    </div>
  );
}

CalorieCalculator.propTypes = {
  /**
   * Logo prop1
   
};
CalorieCalculator.defaultProps = {};

const isNumberRegex =RegExp(/^\d+$/);
function calculateCalories() {
  //calculate based on the Mifflin-St Jeor Equation:
  //for men: BMR = 10W + 6.25H - 5A + 5
  //for women: BMR = 10W + 6.25H - 5A - 161
  // W- weight in kg, H-height in cm, A-age, F-body fat in percentage
  //https://www.calculator.net/calorie-calculator.html
}

const formValid = (formErrors, allValues) =>{
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

export default CalorieCalculator;

*/
