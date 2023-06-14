function func(input) {
  let unique = input.shift().split(" ");
  let words = new Map();

  unique.forEach((element) => {
    words.set(element, 0);
  });

  input.forEach((x) => {
    if (words.has(x)) words.set(x, words.get(x) + 1);
  });

  console.log(words);
}

func([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
