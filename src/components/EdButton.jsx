import * as React from "react";
import Button from "@mui/material/Button";

const EdButton = ({ buttonType = "text" }) => {
  if (buttonType === "text") {
    return <Button variant="text">Text</Button>;
  }

  if (buttonType === "contained") {
    return <Button variant="contained">Contained</Button>;
  }

  return <Button variant="outlined">Outlined</Button>;
};

export default EdButton;
