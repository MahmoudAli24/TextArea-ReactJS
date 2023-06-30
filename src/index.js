import React from "react";
import ReactDOM from "react-dom";
import { TextareaField } from "evergreen-ui";

const Demo = () => {
  return (
    <TextareaField
      isInvalid={false}
      label="Default textarea field"
      description="This is a description."
      hint="This is a hint. It's rendered under the textarea"
      required
      validationMessage="This field is required. It's only rendered when isInvalid is true."
      placeholder="Placeholder text"
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));
