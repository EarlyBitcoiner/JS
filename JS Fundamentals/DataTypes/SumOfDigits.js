function solve(num) {
  let str = "";
  str = num.toString();
  let sum = 0;

  for (let i = 0; i < str.length; ++i) {
    sum += Number(str[i]); // Въпрос към лектора, защо sum се преобразува до Стринг вместо str до Number?
  }

  console.log(sum);
}

solve(122);
