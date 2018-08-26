import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const InputField = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FormGroup controlId="rootName">
        <ControlLabel>Board Name</ControlLabel>
        <FormControl
          type="text"
          value={props.boardName}
          placeholder="root/"
          onChange={props.handleName}
        />
      </FormGroup>
      <FormGroup controlId="inputField">
        <ControlLabel>JSON Input</ControlLabel>
        <FormControl
          onChange={props.handleInput}
          componentClass="textarea"
          spellCheck="false"
          placeholder="{ bubble:{bubble:bubble}, bubble:{bubble:{bubble:bubble}} }"
        />
      </FormGroup>
      <Button type="submit">Bubblify</Button>
    </form>
  );
};

export default InputField;
