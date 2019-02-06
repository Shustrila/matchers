export default (arr) => arr.sort((a, b) => (a.health >= b.health)? 0 : 1);
