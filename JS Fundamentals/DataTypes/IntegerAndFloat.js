function func(input) {
  let sum = 0;

  for (let i = 0; i < input.length; ++i) {
    sum += Number(input[i]);
  }

  console.log(`${sum} - ${sum % 1 === 0 ? "Integer" : "Float"}`);
}

func([9, 100, 1]);
