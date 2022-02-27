/**
 * Develop a solution that simulate the delivery of notes when a client does a withdraw in a cash machine.
 * THE BASIC REQUIREMENTS ARE THE FOLLOW:
 * Always deliver the lowest number of possible notes;
 * It's possible to get the amount requested with available notes;
 * The client balance is infinite;
 * Amount of notes is infinite;
 * Available notes R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00
 */

function iWantToGet(amount) {
  const banknotes = [100, 50, 20, 10];
  const result = [];
  for (let i = 0; i < banknotes.length; i++) {
    while (amount - banknotes[i] >= 0) {
      amount -= banknotes[i];
      result.push(banknotes[i]);
    }
  }
  return result;
}

console.log(iWantToGet(280)); // [100, 100, 50, 20, 10]
