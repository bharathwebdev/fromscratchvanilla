import React from "react";
import styled from "styled-components";
import DepartMentCard from "./DepartMentCard";
import { departobj } from "../configsFiles/Departments.config";

const DeptHeader = styled.h1`
    font-size: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
   font-family: poppins,sans-serif;


`;
const DepartmentContainer = styled.div`
  /* display: flex;
gap: 30px;
width: 100vw;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap; */

  width: 100vw;
  margin: 0 auto;
  display: grid;
  margin-top: 50px;
  place-items: center;
  min-height: 100px;

  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Departments() {
  return (
    <>
      <DeptHeader>departments</DeptHeader>
      <DepartmentContainer>
        {departobj.map((data) => {
          return <DepartMentCard {...data} />;
        })}
      </DepartmentContainer>
    </>
  );
}

export default Departments;
