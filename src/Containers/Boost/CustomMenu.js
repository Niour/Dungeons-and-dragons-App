import React, { useState } from "react";

import FormControl from "react-bootstrap/FormControl";

const CustomMenu = React.forwardRef(
  (
    { children, style, className, "aria-labelledby": labeledBy, clicked },
    ref
  ) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value.toLowerCase())}
          value={value}
        />
        <ul className="list-unstyled" onClick={clicked}>
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export default CustomMenu;
