/**
 * Implement the delivery of notes when a client does a withdraw in a cash machine.
 * THE BASIC REQUIREMENTS ARE THE FOLLOW:
 * Always deliver the lowest number of possible notes;
 * Cahs machine has limits
 */

function iWantToGet(amount, limits) {
  const nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  return withdraw(amount, nominals, limits);
}

function withdraw(amount, nominals, limits) {
  if (amount === 0) return {};
  if (!nominals.length) return;

  const currentNominal = nominals[0];
  const availableNotes = limits[currentNominal];
  const neededNotes = Math.floor(amount / currentNominal);
  const givenNotes = Math.min(availableNotes, neededNotes);

  for (let i = givenNotes; i >= 0; i--) {
    let result = withdraw(
      amount - i * currentNominal,
      nominals.slice(1),
      limits,
    );
    if (result) {
      return i ? {[currentNominal]: i, ...result} : result;
    }
  }
}

const limits = {1000: 5, 500: 2, 100: 5, 50: 100, 30: 6};

console.log(iWantToGet(230, limits)); // {100: 2, 30: 1}
console.log(iWantToGet(120, limits)); // {30: 4}
