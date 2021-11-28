import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../LandingPage/Header";
import MainFeaturedPost from "../LandingPage/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import WallTile from "./WallTile";

export default function Wall() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Activity Wall" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2} align="center">
            <WallTile />
          </Grid>
        </main>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "WellEmirate Activity Wall",
  description:
    "Activity Wall to know what your friends, colleague and various platform users are upto",
  image: "https://miro.medium.com/max/480/1*JPgnhoJBXyprgbmRQdihYA.gif",
  imgText: "Employee Profile",
  linkText: "Continue reading…",
};
