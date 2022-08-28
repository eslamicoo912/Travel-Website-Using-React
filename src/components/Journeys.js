import React, { useEffect, useState } from "react";
import trainsData from "../trainsData";
import flightsData from "../flightsData";
import carsData from "../carsData";
import Card from "./Card";
import destinationsData from "../destinationsData";

const Journeys = () => {
  const [active, setActive] = useState("train");
  const [data, setData] = useState(trainsData);
  const [contact, setContact] = useState("sms");
  const [destinations, setDestinations] = useState(destinationsData);
  const [startInd, setStartInd] = useState(0);
  const [endInd, setEndInd] = useState(2);

  const list = data.map((item) => {
    return <Card item={item} key={item.id} />;
  });
  let destinationsList = [];

  useEffect(() => {
    destinationsList = [];
    for (let i = startInd; i <= endInd; i++) {
      destinationsList.push(destinations[i]);
    }
  }, [startInd, endInd]);

  function trainClick() {
    setActive("train");
    setData(trainsData);
  }

  function flightClick() {
    setActive("flight");
    setData(flightsData);
  }

  function carClick() {
    setActive("car");
    setData(carsData);
  }

  function btnClick() {
    window.scrollTo(0, 1130);
  }

  function smsClick() {
    setContact("sms");
  }

  function emailClick() {
    setContact("email");
  }

  function prevClick() {
    setStartInd(startInd - 1);
    setEndInd(endInd - 1);
  }

  function nextClick() {
    setStartInd(startInd + 1);
    setEndInd(endInd + 1);
  }

  return (
    <div className="journeys">
      <main>
        <h1 className="my-4">discover our journeys</h1>
        <button onClick={btnClick} className="my-4">
          get started
        </button>
      </main>
      <section className="data w-75 m-auto mt-5">
        <div className="btns">
          <div
            className={active === "train" ? "active" : ""}
            onClick={trainClick}
          >
            train
          </div>
          <div
            className={active === "flight" ? "active" : ""}
            onClick={flightClick}
          >
            flight
          </div>
          <div className={active === "car" ? "active" : ""} onClick={carClick}>
            car
          </div>
        </div>
        <div className="row">{list}</div>
      </section>
      <section className="mobile mt-5">
        <div className="mobile-img">
          <img src="https://pages.trip.com/images/app-download/screenshot/en-xx-main.jpg" />
        </div>
        <div className="mobile-content ms-5 ps-5">
          <div className="info">
            <h1 className="py-3">Your all-in-one travel app.</h1>
            <h4 className="py-3 lh-lg">
              Book flights, hotels, trains rental cars anywhere in the world in
              just seconds. Get real-time flight updates, travel info, exclusive
              deals, and 30% more Trip Coins only on the app!
            </h4>
          </div>
          <div className="btns">
            <div
              className={contact === "sms" ? "active" : ""}
              onClick={smsClick}
            >
              SMS
            </div>
            <div
              className={contact === "email" ? "active" : ""}
              onClick={emailClick}
            >
              Email
            </div>
          </div>
          {contact === "sms" ? (
            <div className="contact">
              <p className="py-3">
                Enter your phone number to receive a text with a link to
                download the app.
              </p>
              <input placeholder="Enter mobile phone" />
            </div>
          ) : (
            <div className="contact">
              <p className="py-3">
                The download link will be sent to your email. Please open the
                link and download the app using your phone.
              </p>
              <input placeholder="Enter Email Address" />
            </div>
          )}
          <button className="btn btn-primary my-5">Send App Link</button>
        </div>
      </section>
    </div>
  );
};

export default Journeys;
