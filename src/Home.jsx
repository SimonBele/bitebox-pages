import React from "react";
import "./Style.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CalorieCalculator from "./CalorieCalculator";
import MacrosSlider from "./MacrosSlider";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import { PieChart } from "react-minimal-pie-chart";
import Register from "./Register";

import bannerPhoto from "./bannerPhoto.jpg";
import photo1 from "./photo1.jpeg";
import photo11 from "./photo11.jpg";

import photo2 from "./photo2.jpeg";
import photo3 from "./photo3.jpeg";
import photo4 from "./photo4.jpg";
import photo5 from "./photo5.jpg";
import photo6 from "./photo6.jpg";
import photo7 from "./photo7.jpg";
import photo8 from "./photo8.jpg";
import photo9 from "./photo9.jpg";
import photo10 from "./photo10.jpg";

import photo12 from "./photo12.jpg";

/**
 * Webpage Splitter component
 *
 * @component
 * @param {void}
 * @return {void}
 * @example
 * return (
 *    <Splitter ratios={[3,1,1,1]}>
 *      <Logo />
 *      <Logo />
 *      <Logo />
 *      <Logo />
 *    </Splitter>
 * )
 */

function Home() {
  const useStyles = makeStyles((theme) => ({
    background: {
      background:
        "linear-gradient(0deg, rgba(241,251,241,1) 30%, rgba(70,134,70,1) 100%);",
      paddingTop: theme.spacing(6),
    },

    banner: {
      backgroundColor: "rgba(230,230,230,1) ",
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);",
    },
    bannerText: {
      backgroundColor: "",
      background:
        "linear-gradient(90deg, #D1E0D1 80%, rgba(250,250,250,1) 100%);",
    },

    bannerPhotoStyle: {
      maxWidth: "100%",
      height: "auto;",
    },

    width100: {
      width: "100%",
    },

    height100: {
      height: "100%",
    },
    chart: {
      height: "85%",
      width: "85%",
    },

    mainText: {
      color: "#303030",
    },

    registerCard: {
      backgroundImage: `url(${photo1})`,
      backgroundSize: "cover",
    },

    startImage: {
      backgroundImage: `url(${photo11})`,
      backgroundSize: "cover",
    },

    startTextImage: {
      /*
      backgroundImage: `url(${photo10})`,
      backgroundSize: "cover",
      */
    },

    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor: "rgba(70,134,70,1)",
      color: "#FFFFFF",
    },
  }));

  const classes = useStyles();

  const title = (
    <Typography
      gutterBottom
      variant="h3"
      component="h3"
      align="center"
      color="textPrimary"
    >
      Importance Of Macronutrients
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

  const title2 = (
    <Typography
      gutterBottom
      variant="h3"
      component="h3"
      align="center"
      color="textPrimary"
    >
      How Much Do You Burn
    </Typography>
  );

  const subtitle2 = (
    <Typography
      gutterBottom
      variant="h5"
      component="h5"
      align="center"
      color="textSecondary"
    >
      Now we know about calories in. What about calories out?
    </Typography>
  );

  const title3 = (
    <Typography
      gutterBottom
      variant="h3"
      component="h3"
      align="center"
      color="textPrimary"
    >
      Now You Are Ready
    </Typography>
  );

  const mainTitle = (
    <Typography
      gutterBottom
      variant="h3"
      component="h3"
      align="center"
      color="textPrimary"
    >
      Now You Are Ready
    </Typography>
  );

  const data = [
    { title: "Fats", value: 10, color: "#FC9E4F" },
    { title: "Carbs", value: 60, color: "#52af77" },
    { title: "Protein", value: 30, color: "#7C72A0" },
  ];

  const selected = 0;

  return (
    <div className={classes.background}>
      <CssBaseline />
      <Grid container justify="center">
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          className={
            classes.width100 +
            " " +
            classes.height100 +
            " " +
            classes.startImage +
            " pb-5 pt-5"
          }
        >
          <Paper raised className={classes.banner + " "}>
            <Grid container justify="center">
              <Grid
                item
                lg={6}
                md={12}
                xs={12}
                className={classes.bannerText + ""}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.height100}
                >
                  <Grid item xs={10}>
                    <Grid container justify="center">
                      <Grid item lg={12} md={12} xs={12} className="mb-5">
                        <Typography
                          gutterBottom
                          variant="h1"
                          component="h1"
                          align="center"
                          color="textPrimary"
                          className="bannerTextHeader"
                        >
                          Take a Bite Into a Healthy Lifestyle!
                        </Typography>
                      </Grid>
                      <Grid item lg={12} md={12} xs={12} className="mt-5">
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h5"
                          align="center"
                          color="textPrimary"
                        >
                          The term ‘healthy lifestyle’ is heard almost
                          everywhere these days – on the television, on social
                          media platforms as well as in magazines. The need to
                          follow a healthy lifestyle is stressed upon via these
                          mediums but people still ignore it and continue with
                          their not-so-healthy lifestyle and eventually bear its
                          consequences.
                        </Typography>
                        <br></br>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h5"
                          align="center"
                          color="textPrimary"
                        >
                          It is time people should understand that our health is
                          of utmost importance and it is only when we are
                          healthy would we be able to work efficiently on other
                          aspects of our lives. Developing healthy habits
                          requires just a few changes in the daily routine.
                          These changes eventually become a habit and before you
                          know you are on your way to a healthy lifestyle.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6} md={12} xs={12}>
                <img
                  src={bannerPhoto}
                  className={classes.bannerPhotoStyle}
                ></img>
              </Grid>
            </Grid>{" "}
          </Paper>

          <Grid container justify="center">
            <Grid item lg={9} md={12} xs={12} className="mt-5">
              <Card
                raised
                className={
                  classes.height100 + " " + classes.width100 + " text-center"
                }
              >
                <CardHeader title={mainTitle}></CardHeader>
                <CardContent>
                  <Grid container justify="center">
                    <Grid item lg={12} md={12} xs={12}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        align="center"
                        color="textPrimary"
                      >
                        Take control of your health today and improve your
                        productivity, happiness and immune system.
                      </Typography>
                    </Grid>
                    <Grid item lg={6} md={12} xs={12} className=" "></Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={9} md={12} xs={12} className={" mt-5"}>
              <Grid container justify="center" spacing={2}>
                <Grid item lg={6} md={12} xs={12}>
                  <Card raised className={classes.height100}>
                    <CardHeader title={title}></CardHeader>
                    <CardContent>
                      <Grid container justify="center" spacing={1}>
                        <Grid item lg={4} md={12} xs={12}>
                          <PieChart
                            className={classes.chart}
                            data={data}
                            segmentsStyle={{
                              transition: "stroke .3s",
                              cursor: "pointer",
                            }}
                            segmentsShift={(index) =>
                              index === selected ? 6 : 1
                            }
                            radius={44}
                          />
                        </Grid>
                        <Grid item lg={7} md={12} xs={12}>
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="h4"
                            align="center"
                            color="textPrimary"
                          >
                            You Are What You Eat
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            align="center"
                            color="textPrimary"
                          >
                            Carbohydrates, fats and proteins are the three main
                            macronutrients, and whatever you consume will fall
                            into one of these categories. However, when you eat
                            a meal, you will normally consume a mixture of
                            these.
                          </Typography>
                          <br></br>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            align="center"
                            color="textPrimary"
                          >
                            <ul className="text-start">
                              <li>
                                Carbohydrates (found in fruits, pasta, rice)
                              </li>
                              <li>
                                Proteins (found in animal products and some
                                vegetables)
                              </li>
                              <li>Fats (found in animal products and nuts)</li>
                            </ul>
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={6} md={12} xs={12}>
                  <MacrosSlider></MacrosSlider>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={9} md={12} xs={12} className="mt-5">
              <Grid container justify="center" spacing={2}>
                <Grid item lg={7} md={12} xs={12}>
                  <Card raised className={classes.height100}>
                    <CardHeader
                      title={title2}
                      subheader={subtitle2}
                    ></CardHeader>
                    <CardContent>
                      <Grid container justify="center" spacing={1}>
                        <Grid item lg={12} md={12} xs={12}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            align="center"
                            color="textPrimary"
                          >
                            As simple as CICO (Calories In, Calories Out), yet
                            infinately more complicated.
                          </Typography>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            align="center"
                            color="textPrimary"
                          >
                            While restricting calories will certainly help with
                            weight loss, it can also help with restricting your
                            metabolism and consequently, your caloric burn.
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            align="center"
                            color="textPrimary"
                            className="mt-4"
                          >
                            One of the most common problems people make when
                            they’re struggling to lose weight is underestimating
                            how many calories they’re eating while also
                            overestimating how many calories they are burning.
                          </Typography>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h5"
                            align="center"
                            color="textPrimary"
                          >
                            A calorie calculator won’t fix that problem (you’ll
                            need to actually track your food for that), but at
                            least it will tell you how much your should be
                            eating, or at least a range to aim for.
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={5} md={12} xs={12}>
                  <CalorieCalculator></CalorieCalculator>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={9} md={12} xs={12} className="mt-5">
              <Card
                raised
                className={
                  classes.height100 +
                  " " +
                  classes.width100 +
                  " " +
                  classes.registerCard
                }
              >
                <CardHeader title={title3}></CardHeader>
                <CardContent>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12} xs={12}>
                      <Register></Register>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <footer className={classes.footer}>
        <Container maxWidth="lg" className="">
          <Grid container justify="center" spacing={2}>
            <Grid item lg={6} md={12} xs={12} className="text-left">
              <Grid container justify="center" spacing={2}>
                <Grid item lg={6} md={12} xs={12} className="text-left">
                  <Typography variant="body1">
                    <ul>
                      <li>Matija Trost</li>
                      <li>Robert Jutreša</li>
                      <li>Valter Hudovernik</li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item lg={6} md={12} xs={12} className="text-left">
                  <Typography variant="body1">
                    <ul>
                      <li>Ana Marija Ručigej</li>
                      <li>Simon Bele</li>
                      <li>Miha Puš</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Typography variant="body1" align="center">
                <li>Damjan Fujs ❤ &nbsp; &nbsp;</li>
                <li>Damjan Murko ❤</li>
                <li>Igor Rožanc ❤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

Home.propTypes = {
  /**
   * Ratios for distributing the element horizontally
   */
};

Home.defaultProps = {};

export default Home;
