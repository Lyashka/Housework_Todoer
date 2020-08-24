export default function determineСardСolorByTaskReward(reward) {
  if (reward <= 75 && reward >= 50) {
    return "#FFB966";
  } else if (reward <= 100 && reward >= 75) {
    return "#FE8368";
  } else if (reward <= 125 && reward >= 100) {
    return "#FF5F5F";
  } else {
    return "#FF467D";
  }
}
