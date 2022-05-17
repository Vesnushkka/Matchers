import filterUsers from "../index.js";

test("filterHealthGrade", () => {
    const usersList = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]

    const result = filterUsers(usersList);
    expect(result).toEqual([{name: 'маг', health: 100}, {name: 'лучник', health: 80}, {name: 'мечник', health: 10}]);
});
