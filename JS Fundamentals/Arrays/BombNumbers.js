function solve(sequence, bomb) {
  let bombNum = bomb[0];
  let power = bomb[1];

  for (let i = 0; i < sequence.length; ++i) {
    if (sequence[i] == bombNum) {
      for (let j = i - 1, b = power; j >= 0 && b > 0; j--, b--) {
        sequence.splice(j, 1);
        i--;
      }

      for (let j = i + 1, b = power; j < sequence.length && b > 0; j++, b--) {
        sequence.splice(j, 1);
      }

      sequence.splice(i, 1);
    }
  }

  let sum = 0;

  for (let elem of sequence) {
    sum += elem;
  }

  console.log(sequence);
  console.log(sum);
}

solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
