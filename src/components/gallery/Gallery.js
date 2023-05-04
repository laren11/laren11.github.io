import React from "react";
import Carousel from "react-gallery-carousel";
import "./Gallery.css";
import { FormattedMessage } from "react-intl";
import "react-gallery-carousel/dist/index.css";
import welder_ponos from "../../photos/welder_ponos.jpg";
import photo1 from "../../photos/carousel-1/1.jpg";
import photo2 from "../../photos/carousel-1/2.jpg";
import photo3 from "../../photos/carousel-1/3.jpg";
import photo4 from "../../photos/carousel-1/4.jpg";
import photo5 from "../../photos/carousel-1/5.jpg";
import photo6 from "../../photos/carousel-1/6.jpg";
import photo7 from "../../photos/carousel-1/7.jpg";
import photo8 from "../../photos/carousel-1/8.jpg";
import photo9 from "../../photos/carousel-1/9.jpg";
import photo10 from "../../photos/carousel-1/10.jpg";
import photo11 from "../../photos/carousel-1/11.jpg";

import slika1 from "../../photos/carousel-2/1.jpg";
import slika2 from "../../photos/carousel-2/2.jpg";
import slika3 from "../../photos/carousel-2/3.jpg";
import slika4 from "../../photos/carousel-2/4.jpg";
import slika5 from "../../photos/carousel-2/5.jpg";
import slika6 from "../../photos/carousel-2/6.jpg";
import slika7 from "../../photos/carousel-2/7.jpg";
import slika8 from "../../photos/carousel-2/8.jpg";
import slika9 from "../../photos/carousel-2/9.jpg";
import slika10 from "../../photos/carousel-2/10.jpg";
import slika11 from "../../photos/carousel-2/11.jpg";
import slika12 from "../../photos/carousel-2/12.jpg";
import slika13 from "../../photos/carousel-2/13.jpg";
import slika14 from "../../photos/carousel-2/14.jpg";

import bild1 from "../../photos/carousel-3/1.jpg";
import bild2 from "../../photos/carousel-3/2.jpg";
import bild3 from "../../photos/carousel-3/3.jpg";
import bild4 from "../../photos/carousel-3/4.jpg";
import bild5 from "../../photos/carousel-3/5.jpg";
import bild6 from "../../photos/carousel-3/6.jpg";
import bild7 from "../../photos/carousel-3/7.jpg";
import bild8 from "../../photos/carousel-3/8.jpg";

import galleryBackground from "../../photos/galleryBackground.jpg";

const Gallery = () => {
  const images1 = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
  ].map((photo) => ({
    src: photo,
  }));
  const images2 = [
    slika1,
    slika2,
    slika3,
    slika4,
    slika5,
    slika6,
    slika7,
    slika8,
    slika9,
    slika10,
    slika11,
    slika12,
    slika13,
    slika14,
  ].map((photo) => ({
    src: photo,
  }));
  const images3 = [bild1, bild2, bild3, bild4, bild5, bild6, bild7, bild8].map(
    (photo) => ({
      src: photo,
    })
  );

  return (
    <div
      className="gallery"
      style={{
        backgroundImage: `url(${galleryBackground})`,
        height: "auto",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="NaseDeloTitleGallery">
        <FormattedMessage id="app.gallery.title1" />
      </div>
      <Carousel
        images={images1}
        hasMediaButton={false}
        transitionDurationLimit={750}
        objectFit="contain"
        hasThumbnails={false}
        style={{
          height: "70vh",
          width: "100%",
          background: "transparent",
          paddingBottom: "2%",
        }}
      />
      <div className="NaseDeloTitleGallery">
        <FormattedMessage id="app.gallery.title2" />
      </div>
      <Carousel
        images={images2}
        hasMediaButton={false}
        transitionDurationLimit={750}
        objectFit="contain"
        hasThumbnails={false}
        style={{
          height: "70vh",
          width: "100%",
          background: "transparent",
          paddingBottom: "2%",
        }}
      />
      <div className="NaseDeloTitleGallery">
        <FormattedMessage id="app.gallery.title3" />
      </div>
      <Carousel
        images={images3}
        hasMediaButton={false}
        transitionDurationLimit={750}
        objectFit="contain"
        hasThumbnails={false}
        style={{
          height: "70vh",
          width: "100%",
          background: "transparent",
          paddingBottom: "7%",
        }}
      />
    </div>
  );
};

export default Gallery;
