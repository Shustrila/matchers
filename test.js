const maxHealth = require ("./index");

test("max health'", () => {
	let arr = [
		{name: 'мечник', health: 10},
		{name: 'маг', health: 100},
		{name: 'лучник', health: 80},
	];

	expect(maxHealth(arr)).toEqual(
		[
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		]
	);
});
