export const getRemainingSeconds = (expDate) => {
    return Math.ceil(((new Date(expDate)).getTime() - Date.now()) / 1000);
  }
  
export const countProgress = (expDate, progressChangePerSecond) => {
  const secondsLeft = getRemainingSeconds(expDate);
  return progressChangePerSecond * secondsLeft;
}