export default function defineHealthGrade(user) {
  if (user.health > 50) {
    return "healthy";
  } else if (user.health > 14 && user.health < 51) {
    return "wounded";
  }
  return "critical";
}
