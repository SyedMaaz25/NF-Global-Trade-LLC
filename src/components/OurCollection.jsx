import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { Card, CardContent, CardActions, CardMedia } from "@mui/material";
import { Button } from "../atoms/button";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Arrival1 from "../assets/images/new-arrivals/1.webp";
import Arrival2 from "../assets/images/new-arrivals/2.webp";
import Arrival3 from "../assets/images/new-arrivals/3.webp";
import Arrival4 from "../assets/images/new-arrivals/4.webp";
import Arrival5 from "../assets/images/new-arrivals/5.webp";
import Arrival6 from "../assets/images/new-arrivals/6.webp";
import Arrival7 from "../assets/images/new-arrivals/7.webp";
import Arrival8 from "../assets/images/new-arrivals/8.webp";
import Arrival9 from "../assets/images/new-arrivals/9.webp";
import Arrival10 from "../assets/images/new-arrivals/10.webp";
import Arrival11 from "../assets/images/new-arrivals/11.webp";
import Arrival12 from "../assets/images/new-arrivals/12.webp";
import Arrival13 from "../assets/images/new-arrivals/13.webp";
import Arrival14 from "../assets/images/new-arrivals/14.webp";
import Arrival15 from "../assets/images/new-arrivals/15.webp";
import Arrival16 from "../assets/images/new-arrivals/16.webp";
import Arrival17 from "../assets/images/new-arrivals/17.webp";
import Arrival18 from "../assets/images/new-arrivals/18.webp";
import Arrival19 from "../assets/images/new-arrivals/19.webp";
import Arrival20 from "../assets/images/new-arrivals/20.webp";
import Arrival21 from "../assets/images/new-arrivals/21.webp";
import Arrival22 from "../assets/images/new-arrivals/22.webp";
import Arrival23 from "../assets/images/new-arrivals/23.webp";
import Arrival24 from "../assets/images/new-arrivals/24.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 0),
    },
  },
  container: {
    textAlign: "center",
    "& h4": {
      fontFamily: "PoppinsMedium",
      padding: theme.spacing(0, 0, 4, 0),
      [theme.breakpoints.down("md")]: {
        fontSize: "1.80rem",
      },
    },
  },
  card: {
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px !important",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1rem !important",
  },
  cardMedia: {
    height: 300,
    [theme.breakpoints.down("md")]: {
      height: 180,
    },
  },
  cardContent: {
    textAlign: "center",
    paddingBottom: "0.50rem !important",
  },
}));

const initialProducts = [
  { id: 1, title: "Soft Cleaner 13oz", price: 10, image: Arrival1 },
  {
    id: 2,
    title: "CLEANER&POLISH + SOFTCLENER",
    price: 20.19,
    image: Arrival2,
  },
  { id: 3, title: "Healing Ointment", price: 20, image: Arrival3 },
  {
    id: 4,
    title: "Hydrating Cream To Form Cleaner",
    price: 18.99,
    image: Arrival4,
  },
  { id: 5, title: "SA SMOOTHING CREAM", price: 20.39, image: Arrival5 },
  { id: 6, title: "MOISTURIZING LOTION", price: 18.9, image: Arrival6 },
  { id: 7, title: "RESURFACING RETINOL SERUM", price: 23.2, image: Arrival7 },
  { id: 8, title: "ST.CLAIRE'S LICORICE", price: 14.5, image: Arrival8 },
  { id: 9, title: "ST.CLAIRE'S WINTERMINT", price: 14.8, image: Arrival9 },
  { id: 10, title: "ST.CLAIRE'S CINNAMON ", price: 15.6, image: Arrival10 },
  { id: 11, title: "ALL-ONE TOOTHPASTE", price: 12.3, image: Arrival11 },
  { id: 12, title: "MAGIC SOAPS", price: 21.4, image: Arrival12 },
  { id: 13, title: "MAGIC SOAPS", price: 8.49, image: Arrival13 },
  { id: 14, title: "PURE-CASTILE SOAP", price: 11.8, image: Arrival14 },
  { id: 15, title: "MONIN RASPBERRY ", price: 22.19, image: Arrival15 },
  { id: 16, title: "MONIN RED PASSION FRUIT", price: 20.7, image: Arrival16 },
  { id: 17, title: "MONIN DRAGON FRUIT ", price: 19.99, image: Arrival17 },
  {
    id: 18,
    title: "MONIN MANGO + STRAWBERRY WATERMELON + RASPBERRY",
    price: 56.7,
    image: Arrival18,
  },
  { id: 19, title: "CALCIUM CITRATE 1000MG", price: 24.9, image: Arrival19 },
  { id: 20, title: "SUPER BIO VITAMIN C", price: 23.4, image: Arrival20 },
  { id: 21, title: "OKRA 1600MG", price: 20.7, image: Arrival21 },
  { id: 22, title: "INTENSIVE AMPOULE", price: 20.9, image: Arrival22 },
  { id: 23, title: "ENRICH CREAM", price: 26.9, image: Arrival23 },
  { id: 24, title: "Quick Calmine Pad", price: 27.8, image: Arrival24 },
];

const ShopByBrands = () => {
  const classes = useStyles();
  const [visibleCount, setVisibleCount] = useState(8); // Number of items initially visible
  const [hasMore, setHasMore] = useState(true); // To track if there are more items

  const handleShowMore = () => {
    const newCount = visibleCount + 8;
    if (newCount >= initialProducts.length) {
      setVisibleCount(initialProducts.length); // Set to total items if at end
      setHasMore(false);
    } else {
      setVisibleCount(newCount);
    }
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.container}>
          <Typography variant="h4">Our Collections</Typography>
          <Grid container spacing={3}>
            {initialProducts
              .slice(0, visibleCount)
              .map(({ id, title, price, image }) => (
                <Grid item xs={6} sm={6} md={3} key={id}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={image}
                      title={title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="body1">
                        {title}
                      </Typography>
                      <Typography variant="body1">${price}</Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" variant="secondary">
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
        <Box pt="3rem" textAlign="center">
          {hasMore ? (
            <Button variant="primary" onClick={handleShowMore}>
              Show More
            </Button>
          ) : (
            <Typography variant="body1">You have reached the end</Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ShopByBrands;