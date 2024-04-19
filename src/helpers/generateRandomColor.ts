const HEX_LENGTH = 16;
const NUM_COLORS = 6;

const generateRandomColor = () =>
  `#${Array.from({ length: NUM_COLORS }, () =>
    Math.floor(Math.random() * HEX_LENGTH).toString(HEX_LENGTH),
  ).join("")}`;

export default generateRandomColor;
