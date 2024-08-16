import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import hero1 from "../assets/images/banners/3.webp";
import hero2 from "../assets/images/banners/4.webp";
import hero3 from "../assets/images/banners/2.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  swiper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "170%",
    },
  },
  slideImage: {
    width: "100%",
    height: "auto",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Swiper
        pagination={{ clickable: true }}
        className={classes.swiper}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
      >
        {[hero3, hero1, hero2].map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Hero Slide ${index + 1}`}
              className={classes.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;