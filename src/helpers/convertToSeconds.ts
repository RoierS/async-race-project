const TO_SECONDS = 1000;
const FRACTION_DIGITS = 2;

const convertTimeToSeconds = (time: number) =>
  parseFloat((time / TO_SECONDS).toFixed(FRACTION_DIGITS));

export default convertTimeToSeconds;
