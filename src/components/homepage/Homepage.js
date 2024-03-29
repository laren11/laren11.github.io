import React from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Welder from "../../photos/homepage-welder.png";
import Welder1 from "../../photos/Welding1.webp";
import WelderNew from "../../photos/welderNew.jpg";
import logo from "../../photos/logo.png";
import "./Homepage.css";
import MetalStructures from "../../photos/metalStructures.jpeg";
import { Button } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import placeholder from "../../photos/placeholder.png";
import L from "leaflet";
import homepageNew2 from "../../photos/homepageNew2.jpg";
import photo1 from "../../photos/carousel-3/1.jpg";
import photo2 from "../../photos/carousel-3/2.jpg";
import photo3 from "../../photos/carousel-3/3.jpg";
import photo4 from "../../photos/carousel-3/4.jpg";
import photo6 from "../../photos/carousel-3/6.jpg";
import Carousel from "react-gallery-carousel";
import { AnimationOnScroll } from "react-animation-on-scroll";
import certificate1 from "../../photos/CertificateLogos/1.png";
import certificate2 from "../../photos/CertificateLogos/2.png";
import certificate3 from "../../photos/CertificateLogos/3.png";
import certificate4 from "../../photos/CertificateLogos/4.png";
import certificate5 from "../../photos/CertificateLogos/5.png";
import carousel1 from "../../photos/homepage-carousel/1.jpg";
import carousel2 from "../../photos/homepage-carousel/2.jpg";
import carousel3 from "../../photos/homepage-carousel/3.jpg";
import carousel4 from "../../photos/homepage-carousel/4.jpg";
import carousel5 from "../../photos/homepage-carousel/5.jpg";
import carousel6 from "../../photos/homepage-carousel/6.jpg";
import carousel7 from "../../photos/homepage-carousel/7.jpg";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  const navigate = useNavigate();
  const pin = new L.Icon({
    iconUrl: placeholder,
    iconRetinaUrl: placeholder,
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
    iconSize: [25, 25],
  });

  const images1 = [photo1, photo2, photo3, photo4, photo6].map((photo) => ({
    src: photo,
  }));

  function handleNavigateClick() {
    navigate("/contact");
  }
  function handleNavigateToGalleryClick() {
    window.scrollTo(0, 0);
    navigate("/gallery");
  }
  function handleNavigateToQualityClick() {
    window.scrollTo(0, 0);
    navigate("/quality");
  }

  const carousel = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
  ].map((photo) => ({
    src: photo,
  }));
  return (
    <div>
      <Helmet>
        <title>Plan-Tech Homepage</title>
        <meta name="description" content="Experts for welding - Plan-Tech" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div style={{ width: "100%", maxHeight: "879px" }} className="shadow">
        <Carousel
          images={carousel}
          hasMediaButton={false}
          transitionDurationLimit={750}
          objectFit="cover"
          hasThumbnails={false}
          hasLeftButton={false}
          hasRightButton={false}
          hasIndexBoard={false}
          shouldLazyLoad={true}
          isAutoPlaying={true}
          autoPlayInterval={3000}
          hasSizeButton={false}
          style={{
            maxHeight: "879px",
            width: "100%",
            background: "transparent",
            paddingBottom: "2%",
            zIndex: "-2",
            position: "absolute",
          }}
        />
        <div
          className="homepagePadding"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        >
          <div>
            <div style={{ display: "flex" }} className="homepageTitle">
              <h1
                style={{
                  textAlign: "left",
                  paddingTop: "3%",
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                PLAN-TECH
              </h1>

              <img src={logo} className="homepageLogo" alt="" />
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "white",
              }}
              className="homepage-picture-text"
            >
              <FormattedMessage id="app.homepage.firstPictureText" />

              <div className="certificatesLogos">
                <img src={certificate3} className="certificateLogo" alt="" />
                <img src={certificate1} className="certificateLogo" alt="" />

                <img src={certificate2} className="certificateLogo" alt="" />

                <img src={certificate4} className="certificateLogo" alt="" />

                <img src={certificate5} className="certificateLogo" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          fontFamily: "Poppins",
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundColor: "#414c50",
          color: "white",
        }}
        className="logoImage"
      >
        <div
          className="NaseDeloTitle"
          style={{ paddingBottom: "1%", paddingTop: "3%" }}
        >
          <FormattedMessage id="app.homepage.about" />
        </div>
        <div className="NaseDeloText" style={{ paddingBottom: "5%" }}>
          <FormattedMessage id="app.homepage.aboutText" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${WelderNew})`,
          height: "auto",
          paddingBottom: "25%",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        {/* <div className="spacerDiv"></div> */}
        <div
          style={{
            background: "#414c50",
            paddingTop: "3%",
            height: "100%",
            fontFamily: "Poppins",
          }}
          className="narrowDivs"
        >
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <div className="NaseDeloTitle" style={{ paddingTop: "1%" }}>
              <FormattedMessage id="app.homepage.ourWork" />
            </div>
            <div
              className="NaseDeloText"
              style={{
                paddingLeft: "4%",
                paddingRight: "4%",
                paddingTop: "1%",
                paddingBottom: "2%",
              }}
            >
              <FormattedMessage id="app.homepage.ourWorkText" />
            </div>
          </AnimationOnScroll>
          {/*           <div
            style={{
              backgroundImage: `url(${MetalStructures})`,
              height: "350px",
              backgroundColor: "black",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              margin: "3%",
              borderRadius: "5px",
            }}
          ></div> */}
          <div
            style={{
              height: "auto",
              backgroundColor: "#2d383c",
            }}
          >
            <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
              <div className="NaseDeloTitle" style={{ paddingTop: "1%" }}>
                <FormattedMessage id="app.homepage.services" />
              </div>
              <div
                style={{
                  paddingTop: "1%",
                  paddingLeft: "4%",
                  paddingRight: "4%",
                  paddingBottom: "2%",
                }}
                className="NaseDeloText"
              >
                <FormattedMessage id="app.homepage.servicesText1" />
                <Button
                  onClick={() => {
                    handleNavigateToQualityClick();
                  }}
                  variant="text"
                  style={{
                    paddingBottom: ".5%",
                    paddingRight: ".8%",
                    paddingLeft: ".8%",
                    paddingTop: ".5%",
                    fontFamily: "Poppins",
                    fontSize: "inherit",
                  }}
                  className="NaseDeloText"
                >
                  <FormattedMessage id="app.homepage.servicesButton" />
                </Button>
                <FormattedMessage id="app.homepage.servicesText2" />
              </div>
            </AnimationOnScroll>
          </div>
          <div
            style={{
              height: "auto",
              backgroundColor: "#414c50",
            }}
          >
            <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
              <div className="NaseDeloTitle" style={{ paddingTop: "1%" }}>
                <FormattedMessage id="app.homepage.howWeOperate" />
              </div>
              <div
                style={{
                  paddingTop: "1%",
                  paddingLeft: "4%",
                  paddingRight: "4%",
                  paddingBottom: "2%",
                }}
                className="NaseDeloText"
              >
                <FormattedMessage id="app.homepage.howWeOperateText" />
              </div>
            </AnimationOnScroll>
          </div>
          <div
            style={{
              height: "auto",
              backgroundColor: "#2d383c",
            }}
          >
            <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
              <div className="NaseDeloTitle" style={{ paddingTop: "2%" }}>
                <FormattedMessage id="app.homepage.whyChooseUs" />
              </div>
              <div
                style={{
                  paddingTop: "1%",
                  paddingLeft: "4%",
                  paddingRight: "4%",
                  paddingBottom: "0%",
                }}
                className="NaseDeloText"
              >
                <FormattedMessage id="app.homepage.whyChooseUsText" />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            backgroundColor: "whitesmoke",
            position: "relative",
            height: "auto",
            top: "10%",
            color: "black",
          }}
        >
          <div
            className="divOverflow"
            style={{
              backgroundColor: "#2d383c",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            className="flexDirection"
          >
            <div
              style={{
                fontFamily: "Poppins",
              }}
              className="galleryDiv"
            >
              <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
                <div className="NaseDeloTitle2">
                  <FormattedMessage id="app.homepage.gallery" />
                </div>
                <div className="NaseDeloText2">
                  <Button
                    onClick={() => {
                      handleNavigateToGalleryClick();
                    }}
                    variant="text"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "inherit",
                    }}
                  >
                    <FormattedMessage id="app.homepage.galleryButton" />
                  </Button>
                  <FormattedMessage id="app.homepage.galleryText" />
                </div>
              </AnimationOnScroll>
            </div>
            <div
              style={{
                fontFamily: "Poppins",
              }}
            >
              <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
                <div className="carouselDiv">
                  <Carousel
                    images={images1}
                    hasMediaButton={false}
                    transitionDurationLimit={750}
                    hasLeftButton={false}
                    hasRightButton={false}
                    hasIndexBoard={false}
                    objectFit="cover"
                    shouldLazyLoad={true}
                    isAutoPlaying={true}
                    autoPlayInterval={3000}
                  />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div>
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <div
              className="NaseDeloTitle"
              style={{
                color: "white",
                paddingTop: "1%",
                fontFamily: "Poppins",
              }}
            >
              <FormattedMessage id="app.homepage.location" />
            </div>
            <div
              className="NaseDeloText"
              style={{
                color: "white",
                fontFamily: "Poppins",
                paddingLeft: "10%",
                paddingRight: "10%",
              }}
            >
              <FormattedMessage id="app.homepage.locationText" />
            </div>
            <Button
              onClick={() => {
                handleNavigateClick();
              }}
              variant="contained"
              style={{
                marginTop: "1%",
                fontFamily: "Poppins",
                backgroundColor: "red",
                marginBottom: "3%",
                fontSize: "inherit",
              }}
            >
              <FormattedMessage id="app.homepage.locationButton" />
            </Button>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
          <MapContainer
            center={[46.387187, 15.965526]}
            zoom={13}
            style={{ height: "400px" }}
            className="map"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[46.387187, 15.965526]} icon={pin}>
              <Popup>
                Bukovci 080, Markovci,
                <br />
                Slovenia
              </Popup>
            </Marker>
          </MapContainer>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Homepage;
