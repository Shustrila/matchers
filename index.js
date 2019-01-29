const maxHealth = (arr) => arr.sort((a, b) => (a.health > b.health)? -1 : 1);

module.exports = maxHealth;
