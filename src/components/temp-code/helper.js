export const getRemainingSeconds = (expDate) => {
    return Math.ceil(((new Date(expDate)).getTime() - Date.now()) / 1000);
  }
  
export const countProgress = (expDate, progressChangePerSecond) => {
  const secondsLeft = getRemainingSeconds(expDate);
  return progressChangePerSecond * secondsLeft;
}

export const getPositiveValueOnly = (number) => {
  if (number <= 0) return 0;
  return number;
}

export const getNegativeValueOnly = (number) => {
  if (number >= 0) return 0;
  return Math.abs(number);
}