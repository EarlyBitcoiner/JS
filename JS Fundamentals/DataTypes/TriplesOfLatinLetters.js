function func(n) {
  let string = "";

  for (let a = 0; a < n; ++a) {
    let str1 = String.fromCharCode(97 + a);

    for (let b = 0; b < n; ++b) {
      let str2 = String.fromCharCode(97 + b);

      for (let c = 0; c < n; ++c) {
        let str3 = String.fromCharCode(97 + c);

        string = str1 + str2 + str3;
        console.log(string);
      }
    }
  }
}

func(5);
