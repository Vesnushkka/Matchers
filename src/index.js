export default function filterUsers(users) {
  return users.sort(function (a, b) {
    return b.health - a.health;
  });
}

