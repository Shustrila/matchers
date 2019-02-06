import sortMaxHealth from './sortMaxHealth.js';

describe("TEST: sort max health", () => {

	test('max health', () => {
		let arr = [
			{name: 'мечник', health: 10},
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
		];
		let result = [
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'мечник', health: 10},
		];

		expect(sortMaxHealth(arr)).toEqual(result);
	});

	test('max health', () => {
		let arr = [
			{name: 'мечник', health: 10},
			{name: 'маг', health: 80},
			{name: 'маг', health: 100},
			{name: 'лучник', health: 80},
			{name: 'лучник', health: 20},
		];
		let result = [
			{name: 'маг', health: 100},
			{name: 'маг', health: 80},
			{name: 'лучник', health: 80},
			{name: 'лучник', health: 20},
			{name: 'мечник', health: 10},
		];

		expect(sortMaxHealth(arr)).toEqual(result);
	});

});
