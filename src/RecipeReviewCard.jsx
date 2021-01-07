import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MealItem from "./MealItem";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 305,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title:{
    color: "#00695f",
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();



  return (<div>
    
    <MealItem
                    key={props.key}
                    title={props.title}
                    attrs={props.attributes}
                    ingredients={props.ingredients}
                    steps={props.steps}
                    preptime={props.preptime}
                    desc={props.description}
                    img={props.img}
                ></MealItem>

      </div>
  );
}