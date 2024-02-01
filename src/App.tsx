// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import { ExampleCarouselTypeA } from "./components/CarouselTypeA";
import { ExampleCarouselTypeB } from "./components/CarouselTypeB";
import { ExampleDrawer } from "./components/Drawer";
import { FileUploadExample } from "./components/FileUpload";
import ExampleSteps from "./components/Steps";
import { ExampleTabsTypeA } from "./components/TabsTypeA";
import { ExampleTabsTypeB } from "./components/TabsTypeB";
import { ExampleTimeline } from "./components/Timeline";
import { ExampleTour } from "./components/Tour";
// import { MyButton } from "vite-lib-one";
// import {
//   Button,
//   Label,
//   Input,
//   TraditionalButton,
//   MiniatureLibraryButton,
// } from "vite-miniature-library";
// import { Button, Label, Input, ExampleButton } from "canary-design";
function App() {
  return (
    <div>
      {/* -----------canary-design code----------- */}
      {/* <Button type="fill" onClick={() => alert("Vikrant is awesome!")}>
        Hello
      </Button> */}
      {/* <hr /> */}
      {/* <Label>Convocation label hai ye kya </Label>
      <hr />
      <Input type="text" placeholder="type here" />
      <hr />
      <ExampleButton onClick={() => alert("Vikrant is awesome!")}>
        Hello
      </ExampleButton> */}
      {/* -----------canary-design code----------- */}
      {/* <CustomButton
        onClick={() => alert("This CustomButton is awesommmeeeee!")}
      >
        This is a Custom Button
      </CustomButton> */}
      {/* <TraditionalButton>Ye Traditional Button hai</TraditionalButton> */}
      {/* <MiniatureLibraryButton
        type="fill"
        onClick={() => alert("This Miniature Library Button is awesome!")}
      >
        Ye hai Miniature Library Button
      </MiniatureLibraryButton> */}
      <div>
        {/* <ExampleSteps /> */}
        {/* <ExampleTimeline /> */}
        {/* <ExampleTabsTypeA /> */}
        {/* <ExampleTabsTypeB /> */}
        {/* <ExampleCarouselTypeA /> */}
        {/* <div style={{ width: 600, height: 400, border: "2px dotted blue" }}> */}
        {/* <ExampleCarouselTypeB /> */}
        {/* <ExampleDrawer /> */}
        {/* <FileUploadExample /> */}
        <ExampleTour />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
