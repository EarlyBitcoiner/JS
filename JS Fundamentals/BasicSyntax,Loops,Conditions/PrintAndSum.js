function func(start, end) {
    let sum = 0;
    let string ="";

  for (let i = start; i <= end; ++i) {
      sum += i;
      string += i + " ";
  }
    console.log(string);

    console.log(`Sum is: ${ sum }`);
}

func(5, 10);
