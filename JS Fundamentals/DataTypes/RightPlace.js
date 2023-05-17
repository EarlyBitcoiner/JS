function func(str, char, str2) {
  let word = str.replace(`_`, char);

  console.log(word === str2 ? "Matched" : "Not matched");
}

func("P_tar", "i", "Petar");
