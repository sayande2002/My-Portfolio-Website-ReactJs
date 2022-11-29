import { Grid } from "@mui/material";
import React from "react";
import "./projectss.css";
import { FaLaptopCode } from "react-icons/fa";
import Calulator from "../../assests/calculator.png";
import ToDo from "../../assests/todo.png";
import FreeCV from "../../assests/1.png";
import { Label } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

// const Label = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(0.5),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   borderBottomLeftRadius: 0,
//   borderBottomRightRadius: 0,
// }));
const itemData = [
  {
    img: FreeCV,
    title: "FreeCV",
  },
  {
    img: Calulator,
    title: "Calculator",
  },
  {
    img: ToDo,
    title: "Port",
  },
];

export default function Projects() {
  return (
    <Grid container className="projects" p={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="projects-heading">
          <FaLaptopCode className="projects-icon" />
          &nbsp;My <span style={{ color: "#ffe600" }}>&nbsp;Projects</span>
        </div>
        <h3 className="projects-quote">
          A project is complete when it starts working for you, rather than you
          working for it.
        </h3>
      </Grid>

      {/* <Box sx={{ width: "100%", minHeight: 829, padding: "2rem 6rem" }}>
        <Masonry columns={3}>
          {itemData.map(({ img, title }, index) => (
            <div key={index}>
              <Label>{title}</Label>
              <img
                src={img}
                // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={"item.title"}
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box> */}
      {/* <div className="container">
        <div className="card">
          <img src={Calulator} alt="cal" />
          <div className="intro">
            <h1>Calculator</h1>
            <p>My name is Sayan De</p>
          </div>
        </div>
      </div> */}
    </Grid>
  );
}
