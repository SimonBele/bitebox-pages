//import React from 'react';
import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { CardHeader } from "@material-ui/core";

function preventDefault(event) {
  event.preventDefault();
}

async function CreatePdf(ingr, quan) {
  const ingredients = ["sugar", "banana", "cocaine", "xanax", "kajmak", "milk"]; //not dej prazn array
  const quantity = [10, 1, 1000, 200, 13, 2];
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 14;
  var y = height - 4 * fontSize + 10;

  page.drawText("Shopping list:", {
    x: 50,
    y: height - 4 * 50,
    size: 50,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  for (var i = 0; i < ingredients.length; i++) {
    if (quantity.length >= i) {
      var str = ingredients[i] + " x1";
    } else {
      var str = ingredients[i] + " x" + quantity[i].toString();
    }

    page.drawText(str, {
      x: 50,
      y: height - 4 * fontSize,
      size: y,
      font: timesRomanFont,
      color: rgb(1, 1, 1),
    });
    y += 10;
  }

  const pdfBytes = await pdfDoc.save();

  //window.open(pdfDoc);

  let pdfWindow = window.open("");
  pdfWindow.document.write(
    "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
      encodeURI(pdfBytes) +
      "'></iframe>"
  );
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const title = (
  <Typography
    gutterBottom
    variant="h4"
    component="h4"
    align="center"
    color="textPrimary"
  >
    Shopping list
  </Typography>
);

function ShoppingListDisplay(ingr) {
  const ingredients = ["sugar", "banana", "melona", "kajmak", "milk"]; //not dej prazn array
  const quantity = [10, 1, 1000, 200, 13, 2];
  var list = "";

  const ingredients1 = [];
  const quantity1 = [];

  let i = 0;
  for(let item of data ){
    for(let test of item["Jan 05 2021"]){
      for(let a of test["ingredients"]){
        console.log(a);
        ingredients1.push(a["ingredient"]);
        quantity1.push(a["quantity"]);
  
      }

    }
  }
  /*
  ingredients.forEach(function (ingredient) {
    html += '<l " 0i>' + ingredient + '</li>';
  });

  html = '<ul>' + html + '</ul>';

  <ul>
              {ingredients.map((ingredient,index) => {return (<li>{ingredient}</li>); })}
            </ul>
  */
  const test = () => {
    let i = 0;
    for(let item of data ){
      for (let neki of  item["Jan 05 2021"][i++]["ingredients"]){
        console.log(neki);
        ingredients1.push(neki["ingredient"]);
        quantity1.push(neki["quantity"]);

      }

    }
    
    //console.log("AHA ", item["Jan 05 2021"][i++]["ingredients"]);
   
  };
  return (
    <Grid container justify="space-between" spacing={2}>
      <Grid item lg={6} md={8} xs={12}>
        <Card className="mb-3">
          <CardHeader title={title}></CardHeader>
          <List component="nav">
            {ingredients1.map((ingredient, index) => (
              <ListItem>
                <Typography variant="subtitle1">
                  {ingredient + " x" + quantity1[index]}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Card>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          onClick={test}
        >
          Save PDF
        </Button>
      </Grid>
    </Grid>
  );
}

export default function ShoppingList() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ShoppingListDisplay></ShoppingListDisplay>
    </React.Fragment>
  );
}

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
    ],
  },
];
