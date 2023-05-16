function func(arr) {
  let username = arr[0];
  let password = "";
  let leftTries = 4;

  for (let i = arr[0].length - 1; i >= 0; --i) {
    password += username[i];
  }

  for (let i = 1; i <= arr.length - 1; ++i) {
    leftTries -= 1;
    if (password !== arr[i] && leftTries == 0) {
      console.log(`User ${username} blocked!`);
      return;
    } else if (password === arr[i]) {
      console.log(`User ${username} logged in!`);
      return;
    } else {
      console.log(`Incorrect password. Try again.`);
    }
  }
}

func(["Acer", "login", "go", "let me in", "fdfd", "recA"]);
