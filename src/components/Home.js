import React from "react";
import Alert from "./Alert";
import TextForm from "./TextForm";

export default function Home(props) {

  document.title = "Text Utils - Home";

  return (
    <>
      <Alert alert={props.alert} />

      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          setAlertMessage={props.setAlertMessage}
          mode={props.mode}
        />
      </div>
    </>
  );
}
