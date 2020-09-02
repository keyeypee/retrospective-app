import React, { useEffect, useRef } from "react";

import { Container, TextArea, Count } from "./styles";

const Card = (props) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onKeyDown = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      e.preventDefault();
      ref.current.blur();
      console.log("value", value);
      props.onValueSave(value, props.index);
    }
  };

  return (
    <Container className={props.bgColor}>
      <TextArea ref={ref} onKeyDown={onKeyDown} />
      <button onClick={() => props.onRemove(props.index)}>Remove</button>
      <Count onClick={() => props.onUpVote(props.index)}>+{props.count}</Count>
    </Container>
  );
};

export default Card;
