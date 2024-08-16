import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import brand1 from "../assets/images/brands/1.webp";
import brand2 from "../assets/images/brands/2.webp";
import brand3 from "../assets/images/brands/3.webp";
import brand5 from "../assets/images/brands/4.webp";
import brand6 from "../assets/images/brands/5.webp";
import brand7 from "../assets/images/brands/6.webp";
import brand4 from "../assets/images/brands/7.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3.5, 0),
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
  swiperSlide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    [theme.breakpoints.down("md")]: {
      height: 150,
    },
    cursor: "grab",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
}));

const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const ShopByBrands = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.container}>
          <Typography variant="h4">Shop By Brands</Typography>
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Autoplay]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={classes.swiperSlide}>
                <img
                  src={image}
                  alt={`Brand ${index + 1}`}
                  className={classes.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopByBrands;