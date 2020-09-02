import React, { useState, useEffect } from "react";

import Card from "../Card";

import { Title, Button, Container, CardContainer } from "./styles";

const Section = ({ title, bgColor, cards: propCards, name, onSave }) => {
  const [cards, setCards] = useState(propCards);

  const onAdd = () => {
    setCards([...cards, { props: {}, count: 0 }]);
  };

  const onRemove = (index) => {
    setCards(
      cards.filter((card, i) => {
        console.log("i", i, index, card);
        return i !== index;
      })
    );
  };

  const onValueSave = (value, index) => {
    const _cards = [...cards];
    _cards[index].value = value;
    setCards(_cards);
  };

  const onUpVote = (index) => {
    const _cards = [...cards];
    _cards[index].count += 1;
    setCards(_cards);
  };

  useEffect(() => {
    onSave(name, cards);
  }, [JSON.stringify(cards)]);

  return (
    <Container>
      <Title>
        {title}
        <Button onClick={onAdd}>Add</Button>
      </Title>
      <CardContainer>
        {cards.map((card, i) => (
          <Card
            key={i + 1}
            {...card.props}
            index={i}
            onRemove={onRemove}
            onUpVote={onUpVote}
            bgColor={bgColor}
            count={card.count}
            onValueSave={onValueSave}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Section;
