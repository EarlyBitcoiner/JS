function func(text) {
    
    let regex =
      /\b(?<user>(?<=\s)[a-z0-9]+(?:[\.\-_][a-z0-9]+)*)@(?<host>[a-z]+(?:-?[a-z]+)*\.\w+(?:\.\w+)*)/gi;

    let emails = text.match(regex);

    for (const email of emails) {
        console.log(email);
    }
}

func("Please contact us at: support@github.com.");
func("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");
func("Many users @ SoftUni confuse email addresses. We @Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");