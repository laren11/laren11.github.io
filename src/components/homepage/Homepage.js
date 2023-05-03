import React from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Welder from "../../photos/homepage-welder.png";
import Welder1 from "../../photos/Welding1.webp";
import WelderNew from "../../photos/welderNew.jpg";
import logo from "../../photos/logo.png";
import "./Homepage.css";
import { Repeat } from "@material-ui/icons";
import MetalStructures from "../../photos/metalStructures.jpeg";
import { Button } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import placeholder from "../../photos/placeholder.png";
import L from "leaflet";
import homepageNew from "../../photos/homepageNew.jpg";
import photo1 from "../../photos/carousel-1/1.jpg";
import photo2 from "../../photos/carousel-1/2.jpg";
import photo3 from "../../photos/carousel-1/3.jpg";
import photo4 from "../../photos/carousel-1/4.jpg";
import photo5 from "../../photos/carousel-1/5.jpg";
import photo6 from "../../photos/carousel-1/6.jpg";
import Carousel from "react-gallery-carousel";

const Homepage = () => {
  const navigate = useNavigate();
  const pin = new L.Icon({
    iconUrl: placeholder,
    iconRetinaUrl: placeholder,
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
    iconSize: [25, 25],
  });

  const images1 = [photo1, photo2, photo3, photo4, photo5, photo6].map(
    (photo) => ({
      src: photo,
    })
  );

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
  return (
    <div>
      <div style={{ width: "100%", maxHeight: "879px" }}>
        <div
          style={{
            backgroundImage: `url(${homepageNew})`,
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: " left 7%",
            justifyContent: "flex-end",
          }}
          className="homepagePlanTech"
        >
          <div style={{ padding: "0% 10% 20% 10%" }}>
            <div style={{ display: "", flexDirection: "column" }}>
              <div style={{ display: "flex" }} className="homepageTitle">
                <h1
                  style={{
                    textAlign: "left",
                    paddingTop: "3%",
                    display: "flex",
                    color: "white",
                    fontFamily: "MyFont",
                  }}
                >
                  PLAN-TECH
                </h1>
                <img src={logo} style={{ width: "20vw" }} />
              </div>
            </div>
            <p
              style={{
                textAlign: "center",
                fontFamily: "MyFont",
                fontWeight: "bold",
                color: "white",
              }}
              className="homepage-picture-text"
            >
              <FormattedMessage id="app.homepage.firstPictureText" />
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "19%",
          paddingRight: "19%",
          fontFamily: "MyFont",
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        }}
        className="logoImage"
      >
        <div
          className="NaseDeloTitle"
          style={{ paddingBottom: "1%", paddingTop: "3%" }}
        >
          O podjetju
        </div>
        <div className="NaseDeloText" style={{ paddingBottom: "5%" }}>
          Naše podjetje se ukvarja s strokovnim varilskim delom in zagotavlja
          kakovostne storitve strankam. Imamo dolgoletne izkušnje na področju
          varjenja in uporabljamo najnovejšo tehnologijo. Naš cilj je zagotoviti
          visoko kakovostne storitve in zadovoljiti potrebe naših strank.
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${WelderNew})`,
          height: "auto",
          paddingBottom: "10%",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="spacerDiv"></div> */}
        <div
          style={{
            background: "whitesmoke",
            marginLeft: "10%",
            marginRight: "10%",
            paddingTop: "3%",
            height: "100%",
            fontFamily: "MyFont",
          }}
        >
          <div className="NaseDeloTitle" style={{ paddingTop: "1%" }}>
            Naše delo
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
            Naši izkušeni varilci uporabljajo najnovejšo tehnologijo in tehnike
            za ustvarjanje natančnih, visokokakovostnih varov, ki so močni in
            trajni. Od nerjavnega jekla do aluminija in titanove zlitine, delamo
            z različnimi materiali, da ustvarimo prilagojena kovinska dela, ki
            ustrezajo specifičnim potrebam strank.
          </div>
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
              backgroundColor: "darkgray",
            }}
          >
            <div className="NaseDeloTitle" style={{ paddingTop: "1%" }}>
              Storitve
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
              Ponujamo širok nabor varilskih storitev za različne aplikacije in
              materiale, vključno z MIG, TIG, MAG, elektrodnim in laserskim
              varjenjem. Naši strokovnjaki so izkušeni in usposobljeni za
              opravljanje vseh vrst varilskih del. Strankam zagotavljamo
              kakovostno in zanesljivo storitev. Ponosni smo na našo ekipo
              izkušenih varilcev, ki imajo različne{" "}
              <Button
                onClick={() => {
                  handleNavigateToQualityClick();
                }}
                variant="contained"
                style={{
                  paddingBottom: ".5%",
                  paddingRight: ".8%",
                  paddingLeft: ".8%",
                  paddingTop: ".5%",
                  fontFamily: "MyFont",
                  backgroundColor: "blue",
                  fontSize: "inherit",
                }}
                className="NaseDeloText"
              >
                certifikate in kvalifikacije
              </Button>
              . Naše varilsko delo je v skladu s sodobnimi industrijskimi
              standardi, kar zagotavlja, da bo vaš projekt dokončan z najvišjo
              kakovostjo.
            </div>
          </div>
          <div
            style={{
              height: "auto",
              backgroundColor: "whitesmoke",
            }}
          >
            <div className="NaseDeloTitle" style={{ paddingTop: "1%" }}>
              Kako delujemo
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
              Pri delu uporabljamo najnovejšo tehnologijo in strokovno znanje.
              Za vsako stranko pripravimo individualni načrt dela, ki ustreza
              njihovim specifičnim potrebam. Naš cilj je zagotoviti učinkovito
              in prilagojeno storitev za vsakega posameznega kupca.
            </div>
          </div>
          <div
            style={{
              height: "auto",
              backgroundColor: "darkgray",
            }}
          >
            <div className="NaseDeloTitle" style={{ paddingTop: "2%" }}>
              Zakaj izbrati nas?
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
              V naši varilni storitvi razumemo, da je vsak projekt edinstven.
              Zato si vzamemo čas in prisluhnemo vašim potrebam, da ustvarimo
              smiselne rešitve, ki so prilagojene vašim specifičnim zahtevam. Od
              prvotne zasnove do končne dostave tesno sodelujemo z vami, da
              zagotovimo, da bo vaš projekt zaključen pravočasno učinkovito.
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            backgroundColor: "whitesmoke",
            position: "relative",
            height: "auto",
            top: "10%",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "4vw",
              backgroundColor: "darkgray",
              marginLeft: "10%",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <div
              style={{
                fontFamily: "MyFont",
              }}
            >
              <div className="NaseDeloTitle2" style={{ paddingLeft: "12%" }}>
                Galerija
              </div>
              <div className="NaseDeloText2">
                <Button
                  onClick={() => {
                    handleNavigateToGalleryClick();
                  }}
                  variant="contained"
                  style={{
                    paddingBottom: ".5%",
                    paddingRight: ".8%",
                    paddingLeft: ".8%",
                    paddingTop: ".5%",
                    fontFamily: "MyFont",
                    backgroundColor: "blue",
                    fontSize: "inherit",
                  }}
                  className="NaseDeloText"
                >
                  Raziščite našo galerijo varjenja
                </Button>
                in si oglejte primere našega dela in širino naših zmogljivosti.
                Naši projekti varjenja segajo od preprostih popravil do velikih
                industrijskih instalacij. Naša obsežna izkušnja in strokovnost
                nam omogočata zagotavljanje prilagojenih rešitev tudi za najbolj
                zapletene varilske izzive.
              </div>
            </div>
            <div
              style={{
                fontFamily: "MyFont",
              }}
            >
              <div className="carouselDiv" style={{ borderRadius: "5px" }}>
                <Carousel
                  images={images1}
                  hasMediaButton={false}
                  transitionDurationLimit={500}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="NaseDeloTitle"
            style={{ color: "white", paddingTop: "1%", fontFamily: "MyFont" }}
          >
            Lokacija
          </div>
          <div
            className="NaseDeloText"
            style={{
              color: "white",
              fontFamily: "MyFont",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            Locirani smo v okolici Maribora, svoje storitve pa opravljamo po
            vsej Evropi
          </div>
          <Button
            onClick={() => {
              handleNavigateClick();
            }}
            variant="contained"
            style={{
              marginTop: "1%",
              fontFamily: "MyFont",
              backgroundColor: "red",
              marginBottom: "2%",
            }}
          >
            Kontaktirajte nas
          </Button>
        </div>
        <MapContainer
          center={[46.387187, 15.965526]}
          zoom={13}
          style={{ height: "400px" }}
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
      </div>
    </div>
  );
};

export default Homepage;
