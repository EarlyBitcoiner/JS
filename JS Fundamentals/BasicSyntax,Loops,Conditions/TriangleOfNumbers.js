function func(rows) {
  for (let i = 1; i <= rows; ++i) {
    let string = "";

    for (let j = 1; j <= i; ++j) {
      string += i + " ";
    }

    console.log(string);
  }
}

func(5);
