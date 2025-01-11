import { TypographyHeader, TypographyText } from "../../../UI";
import React from "react";
const Description: React.FC = () => {
  return (
    <div>
      <TypographyHeader>↑ ↓ → ← Arrow-game description</TypographyHeader>
      <TypographyText>
        The player's task is to press the arrow key shown to him on the keyboard
        until the next one appears.
      </TypographyText>
      <TypographyText>
        After three successful hits in a row - the game is won, after three
        mistakes - lost. <br />
        <b>Good luck Broski!</b>
      </TypographyText>
    </div>
  );
};

export default Description;
