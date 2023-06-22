function func(input) {
  let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

  let validNumbers = [];

  for (let number of input) {
      if (regex.exec(number) != null)
          validNumbers.push(number);
    }
    
    console.log(validNumbers.join(", "));
}

func([
  "+359 2 222 2222",
  "359-2-222-2222",
  "+359/2/222/2222",
  "+359-2 222 2222",
  "+359 2-222-2222",
  "+359-2-222-222",
  "+359-2-222-22222",
  "+359-2-222-2222",
]);
