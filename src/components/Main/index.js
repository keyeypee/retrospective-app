import React, { useState } from "react";

import Section from "../Section";
import pageConfig from "../../config/page.json";
import { Container, Heading, SectionContainer } from "./styles";

const Main = () => {
  const [state, setState] = useState({
    what_went_well: [],
    what_can_be_improved: [],
    start_doing: [],
    action_items: [],
  });
  const { title, sections } = pageConfig;

  const onSave = (name, cards) => {
    setState({ ...state, [name]: cards });
  };

  console.log("state", state);

  return (
    <Container>
      <Heading>{title}</Heading>
      <SectionContainer>
        {sections.map((section) => (
          <Section
            key={section.name}
            title={section.heading}
            bgColor={section.bgColor}
            name={section.name}
            onSave={onSave}
            cards={state[section.name]}
          />
        ))}
      </SectionContainer>
    </Container>
  );
};

export default Main;
