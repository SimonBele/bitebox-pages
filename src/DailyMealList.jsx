import React from "react";
import PlannerMealItem from "./PlannerMealItem";
import Grid from "@material-ui/core/Grid";

function DailyMealList(props) {
  const data = props.data;
  const day = [props.day];

  return (
    <Grid container justify="space-evenly" direction="column">
      {data.map((meal, index) => {
        return (
          <Grid item xs={12} lg={12} className="mt-5 mb-5">
            <PlannerMealItem
              key={index}
              day={day}
              feed={meal.title}
              title={meal.name}
              attrs={meal.attributes}
              ingredients={meal.ingredients}
              steps={meal.steps}
              preptime={meal.preptime}
              desc={meal.description}
              img={meal.img}
            ></PlannerMealItem>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DailyMealList;
