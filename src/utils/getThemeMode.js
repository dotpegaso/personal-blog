export default function getThemeMode() {
  const userClock = new Date().getHours();
  const startAt = 18;
  const endAt = 6;

  return (endAt < userClock && userClock > startAt) ||
    (startAt > userClock && userClock < endAt)
    ? "night"
    : "day";
}
