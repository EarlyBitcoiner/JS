function func(text) {
    
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = text.match(regex);

    console.log(validNames.join(" "));
}

func(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);