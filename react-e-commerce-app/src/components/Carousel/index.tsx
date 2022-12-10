import { useState } from "react";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { IconButton, Typography, Box, Stack } from "@mui/material";
import carouselBottomData from "./carouselBottomData.json";
import { MoneyBackIcon, ShippingIcon, SmileIconWithBackground } from "../../ui";

interface ICarouselItemType {
  id: number;
  src: string;
  text: string;
  link: string;
  imageType: string;
}

interface ICarouselProps {
  variant: "mobile" | "desktop";
  data: ICarouselItemType[];
}

const Carousel = ({ variant, data }: ICarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const updateCurrentImageIndex = (slideDirection: string) => {
    if (slideDirection === "right") {
      setCurrentImageIndex((prevState) => prevState + 1);
    } else if (slideDirection === "left") {
      setCurrentImageIndex((prevState) => prevState - 1);
    }
  };

  const renderIcon = (id: string) => {
    switch (id) {
      case "carouselShipping":
        return <ShippingIcon id={id} sx={{ width: "39px", height: "39px" }} />;
      case "carouselCustomer":
        return (
          <SmileIconWithBackground
            id={id}
            sx={{ width: "39px", height: "39px" }}
            width="39"
            height="39"
            viewBox="0 0 39 39"
          />
        );
      case "Originality Guaranteed":
        return <MoneyBackIcon id={id} sx={{ width: "39px", height: "39px" }} />;
    }
  };

  const renderCarouselBottomData = () => {
    return carouselBottomData.map((data) => (
      <Box key={data.id} sx={{ display: "flex", columnGap: "27px" }}>
        {renderIcon(data.id)}
        <Stack rowGap="9px">
          <Typography
            component="h3"
            sx={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {data.title}
          </Typography>
          <Typography sx={{ fontSize: "12px", maxWidth: "160px" }}>
            {data.description}
          </Typography>
        </Stack>
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        display: {
          xs: `${variant === "mobile" ? "flex" : "none"}`,
          lg: `${variant === "mobile" ? "none" : "flex"}`,
        },
        position: "relative",
        height: { xs: "501px", lg: "100vh" },
        overflow: "hidden",
      }}
    >
      {data.map((item, index) => {
        return (
          <Box
            data-testid={`carouselItem${item.id}`}
            sx={{
              flexShrink: "0",
              height: { xs: "501px", lg: "100vh" },
              width: "100%",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayScale(0.2)",
              },
              "&.carousel-item": {
                transform: "translateX(0)",
                position: "absolute",
                transition: "transform 800ms ease",
              },
              transition: "transform 800ms ease",
              "&.hide": { transform: `translateX(calc(100vw * ${index + 1}))` },
            }}
            key={item.id}
            className={`${
              currentImageIndex !== index + 1
                ? "carousel-item hide"
                : "carousel-item "
            }`}
          >
            <Typography
              sx={{
                position: "absolute",
                fontSize: { xs: "43px", lg: "66px" },
                fontWeight: "bold",
                lineHeight: { xs: "42px", lg: "77px" },
                color: "white",
                transform: { xs: "translateY(-50%)", lg: "initial" },
                top: { xs: "50%", lg: "188px" },
                left: { xs: "35px", lg: "263px", xl: "363px" },
                zIndex: 2,
                width: { xs: "80%", lg: "365px" },
              }}
            >
              {item.text}
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "74px", lg: "265px" },
                display: "flex",
                columnGap: "22px",
                zIndex: 2,
                left: { xs: "35px", lg: "263px", xl: "363px" },
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  color: "white",
                  backgroundColor: "#FBB03B",
                }}
                component="button"
              >
                <ArrowForwardIcon data-testid="shopIcon" />
              </IconButton>
              <Typography
                sx={{ fontSize: "13px", color: "white", fontWeight: "bold" }}
              >
                SHOP NOW
              </Typography>
            </Box>
            <img src={item.src + (index + 1) + "." + item.imageType} />
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderTopRightRadius: "131px",
                color: "#000000",
                columnGap: "56px",
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                height: "131px",
                justifyContent: "space-evenly",
                paddingLeft: { lg: "129px", xl: "298px" },
                paddingRight: { lg: "49px", xl: "97px" },
                position: "absolute",
                bottom: "0px",
                maxWidth: "1221px",
                width: "90%",
              }}
            >
              {renderCarouselBottomData()}
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "10px", lg: "75px", xl: "59px" },
          right: "30px",
          "& .Mui-disabled": {
            backgroundColor: "rgba(255,255,255, 0.2) !important",
            color: "white !important",
          },
        }}
      >
        <IconButton
          sx={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "0",
            marginRight: "5px",
            "&:hover": { color: "black", backgroundColor: "white" },
          }}
          component="button"
          data-testid="backwardButton"
          onClick={() => updateCurrentImageIndex("left")}
          {...(currentImageIndex === 1 && { disabled: true })}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "0",
            "&:hover": { color: "black", backgroundColor: "white" },
          }}
          component="button"
          data-testid="forwardButton"
          onClick={() => updateCurrentImageIndex("right")}
          {...(currentImageIndex === data.length && { disabled: true })}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
