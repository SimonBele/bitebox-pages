import React, { useState } from "react";
import "./Style.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

localStorage.setItem("carbs", 60);
localStorage.setItem("fats", 10);
localStorage.setItem("protein", 30);
const CarbSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const ProteinSlider = withStyles({
  root: {
    color: "#7C72A0",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const FatsSlider = withStyles({
  root: {
    color: "#FC9E4F",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
function MacrosSlider() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

  const marksCarbs = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  const marksFats = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  const marksProteins = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  const title = (
    <Typography
      gutterBottom
      variant="h3"
      component="h3"
      align="center"
      color="textPrimary"
    >
      Set Your Macros
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
      <span>
        Set your desired proportions of macronutrients for your daily intake.
      </span>
      <br></br>
      <span>
        The default is set to carbohydrates 60%, protein 30% and fats 10%.
      </span>
    </Typography>
  );
  //is the summation of macros equal 100?
  const [sum, setSum] = useState(true);
  const [macros, setMacros] = useState({
    carbs: 60,
    protein: 30,
    fats: 10,
  });
  const handleChange = (name) => (e, newValue) => {
    e.preventDefault();

    setMacros({ ...macros, [name]: newValue });
    //check if the sum is equal to 100%
    if (!checkSum()) {
     
      setSum(false);
    } else {
      localStorage.setItem("carbs", macros.carbs);
      localStorage.setItem("fats", macros.fats);
      localStorage.setItem("protein",macros.protein);

      setSum(true);
    }
  };
  const checkSum = () => {
    return macros.carbs + macros.fats + macros.protein === 100;
  };
  const valuetext = (value) => {
    return `${value}%`;
  };
  return (
    <Container maxWidth={"false"} disableGutters>
      <Card raised>
        <CardHeader title={title} subheader={subtitle}></CardHeader>
        <CardContent>
          <Grid container justify="space-around">
            <Grid item xs={12} lg={10}>
              <div className="MacrosSlider">
                <Typography id="discrete-slider-custom" gutterBottom>
                  Carbohydrates
                </Typography>
                <CarbSlider
                  onChange={handleChange("carbs")}
                  valueLabelDisplay="on"
                  step={10}
                  getAriaValueText={valuetext}
                  defaultValue={60}
                  marks={marksCarbs}
                />
                <Typography id="discrete-slider-custom" gutterBottom>
                  Proteins
                </Typography>
                <ProteinSlider
                  onChange={handleChange("protein")}
                  valueLabelDisplay="on"
                  getAriaValueText={valuetext}
                  step={10}
                  aria-label="pretto slider"
                  defaultValue={30}
                  name="protein"
                  marks={marksProteins}
                />
                <Typography id="discrete-slider-custom" gutterBottom>
                  Fats
                </Typography>
                <FatsSlider
                  onChange={handleChange("fats")}
                  valueLabelDisplay="on"
                  getAriaValueText={valuetext}
                  step={10}
                  aria-label="pretto slider"
                  defaultValue={10}
                  name="fats"
                  marks={marksFats}
                />
              </div>
              <div className="error">
                {!sum && (
                  <span>
                    Remember the sum of percentages of all macronutrients must
                    be 100%
                  </span>
                )}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

MacrosSlider.propTypes = {
  /**
   * Ratios for distributing the element horizontally
   */
};

MacrosSlider.defaultProps = {};

export default MacrosSlider;
