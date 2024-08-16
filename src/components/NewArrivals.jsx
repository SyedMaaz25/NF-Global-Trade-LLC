import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Card, CardContent, CardActions, CardMedia } from "@mui/material";
import { Button } from "../atoms/button";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Arrival1 from "../assets/images/new-arrivals/9.webp";
import Arrival2 from "../assets/images/new-arrivals/8.webp";
import Arrival3 from "../assets/images/new-arrivals/10.webp";
import Arrival4 from "../assets/images/new-arrivals/6.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
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

const products = [
  { id: 1, title: "ST.CLAIRE'S WINTERMINT", price: 14.8, image: Arrival1 },
  {
    id: 2,
    title: "ST.CLAIRE'S LICORICE",
    price: 14.5,
    image: Arrival2,
  },
  {
    id: 3,
    title: "ST.CLAIRE'S CINNAMON",
    price: 15.6,
    image: Arrival3,
  },
  {
    id: 4,
    title: "MOISTURIZING LOTION",
    price: 18.9,
    image: Arrival4,
  },
];

const ShopByBrands = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.container}>
          <Typography variant="h4">New Arrivals</Typography>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 30 },
            }}
            modules={[Autoplay]}
          >
            {products.map(({ id, title, price, image }) => (
              <SwiperSlide key={id}>
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
                    <Typography variant="body1">{price}</Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button size="small" variant="secondary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopByBrands;