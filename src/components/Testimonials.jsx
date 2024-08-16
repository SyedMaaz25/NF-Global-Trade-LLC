import React from "react";
import { Box,Typography,Container } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import T1 from "../assets/images/testimonials/1.webp";
import T2 from "../assets/images/testimonials/2.webp";
import T3 from "../assets/images/testimonials/3.webp";
import Bg from "../assets/images/testimonials/bg.webp";

const useStyles = makeStyles((theme) => ({
  root: {
      textAlign: "center",
      backgroundImage: `url(${Bg})`,
      backgroundSize: "cover",
      padding: theme.spacing(10, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 0),
      margin: theme.spacing(6, 0,0.),
      },
  },
  container: {
    "& h4": {
      fontVariant: "small-caps",
      fontFamily: "PoppinsMedium",
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(2),
      },
    },
  },
  cardImage: {
    borderRadius: "50%",
    width: "25%",
  },
  card: {
    padding: theme.spacing(4, 2),
    [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4,0,1,0),
        margin: theme.spacing(1),
        },  
},
}));

const testimonials = [
  {
    name: "Emily Wilson",
    location: "New York",
    content:
      "Yousuf Trading LLC has been my go-to online store for all of my Home & Kitchen needs. The products are always high quality and their customer service is unbeatable! I highly recommend this store to anyone looking for great deals on top notch products.",
    image: T1,
  },
  {
    name: "Michael Rodriguez",
    location: "London",
    content:
      "I recently purchased Mobile Accessories from Yousuf Trading LLC and I am extremely pleased with the quality as well as the value. The staff was helpful and accommodating throughout my purchase, and I will definitely be coming back for more!",
    image: T2,
  },
  {
    name: "Jennifer Turner",
    location: "Ontario",
    content:
      "It's been a pleasure shopping with Yousuf Trading LLC for all of my Office & Stationary needs. The prices are always reasonable and the wide selection makes it easy for me to find exactly what I'm looking for. Highly recommended online shopping website!",
    image: T3,
  },
  {
    name: "Jennifer Turner",
    location: "Ontario",
    content:
      "It's been a pleasure shopping with Yousuf Trading LLC for all of my Office & Stationary needs. The prices are always reasonable and the wide selection makes it easy for me to find exactly what I'm looking for. Highly recommended online shopping website!",
    image: T1,
  },
  {
    name: "Jennifer Turner",
    location: "Ontario",
    content:
      "It's been a pleasure shopping with Yousuf Trading LLC for all of my Office & Stationary needs. The prices are always reasonable and the wide selection makes it easy for me to find exactly what I'm looking for. Highly recommended online shopping website!",
    image: T2,
  },
];

const Testimonials = () => {
  const classes = useStyles();

  const renderTestimonialCard = (testimonial) => (
    <Card className={classes.card}>
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className={classes.cardImage}
      />
      <CardContent>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          {testimonial.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {testimonial.location}
        </Typography>
        <Typography variant="body2" pt="0.25rem">"{testimonial.content}"</Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4">Testimonial`s</Typography>
        <Swiper
        style={{cursor:"grab"}}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {renderTestimonialCard(testimonial)}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;