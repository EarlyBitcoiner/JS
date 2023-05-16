function func(num, precision) {
  let number = Number(num);
  let point = Number(precision);

  if (point > 15) {
    point = 15;
  }

  console.log(parseFloat(number.toFixed(point)));
}

func(3.141, 7);
