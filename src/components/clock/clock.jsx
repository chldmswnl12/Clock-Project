import React from "react";
import styled from "styled-components";

const Clock = ({ time, welcomeString, location, day }) => {
  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) =>
      props.day ? "/img/day.jpg" : "/img/night.jpg"});
    background-size: cover;
  `;

  const Time = styled.span`
    position: absolute;
    top: 400px;
    left: 100px;
    color: white;
    font-weight: bold;
    font-size: 7rem;
  `;

  const Welcome = styled.span`
    position: absolute;
    top: 380px;
    left: 100px;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
  `;

  const Location = styled.span`
    position: absolute;
    top: 540px;
    left: 100px;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
  `;

  const ToggleButton = styled.button`
    position: absolute;
    top: 480px;
    left: 450px;
    border-radius: 20px;
    width: 100px;
    height: 20x;
    padding: 10px;
    border: none;
    background-color: white;
    font-weight: bold;
    color: #545452;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `;

  console.log(day);
  return (
    <Container day={day}>
      <Time>{time}</Time>
      <Welcome>{welcomeString} It's currently</Welcome>
      <Location>In {location}</Location>
      <ToggleButton>
        More
        <span className="fas fa-chevron-up" />
      </ToggleButton>
    </Container>
  );
};

export default Clock;
