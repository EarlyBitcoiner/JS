
function func(input) {
    let glads = {};
    
    class Gladiator {
      constructor(name, th, sk) {
        this.name = name;
        this.ths = {};
        this.ths[th] = sk;
        this.totalSkill = sk;
      }

      getName() {
        return this.name;
      }

      getThsSize() {
        return Object.keys(ths).length;
      }

      getTotalSk() {
        return this.totalSkill;
      }

      hasTh(th) {
        return this.ths.hasOwnProperty(th);
      }

      upgradeSkills(th, sk) {
        if (this.ths.hasOwnProperty(th)) {
          if (this.ths[th] < sk) {
            this.totalSkill -= this.ths[th];
            this.totalSkill += sk;
            this.ths[th] = sk;
          }
        } else {
          this.ths[th] = sk;
          this.totalSkill += sk;
        }
      }
    }


    for (const command of input) {
        if (command.includes("vs")) {
            let arr = command.split(" vs ");

            let name1 = arr[0];
            let name2 = arr[1];
            let skill1 = 0;
            let skill2 = 0;

            if (!glads.hasOwnProperty(name1) || !glads.hasOwnProperty(name2)) {
                continue;
            }
            
            for (const [th,sk] of Object.entries(glads[name1].ths)) {
                
                if (glads[name2].hasTh(th)) {
                    skill1 += sk;
                    skill2 += glads[name2].ths[th];
                }
            }

            if (skill1 > skill2) {
                delete glads[name2];
            } else if (skill1 < skill2) {
                delete glads[name1];
            } else {
                continue;
            }
        } else if (command == "Ave Cesar") {
            break;
        }
        else {
            let arr = command.split(" -> ");

            let name = arr[0];
            let th = arr[1];
            let sk = Number(arr[2]);
            let flag = false;

            for (let i = 0; i < Object.keys(glads).length; i++){
                if (glads.hasOwnProperty(name)) {
                    glads[name].upgradeSkills(th, sk);
                    flag = true;
                }
            }

            if (!flag) {
                let glad = new Gladiator(name, th, sk);
                glads[name] = glad;
            }
        }
    };

    glads = Object.entries(glads).sort((a, b) => { // here we sort glads by total skills points DSC
        let totalSkA = a[1].getTotalSk();
        let totalSkB = b[1].getTotalSk();

        if (totalSkA > totalSkB)
            return -1;
        else if (totalSkA < totalSkB)
            return 1;
        else return 0;
    })

    glads = glads.sort((a, b) => {
      // here we sort glads by name ASC
      let nameA = a[1].getName();
      let nameB = b[1].getName();

        if (nameA > nameB)
            return -1;
      else if (nameA < nameB)
          return 1;
      else
          return 0;
    });

    for (const [name,glad] of glads) {
        console.log(`${glad.getName()}: ${glad.getTotalSk()} skill`);

        glad.ths = Object.entries(glad.ths).sort((a, b) => {
            let skA = a[1];
            let skB = b[1];

            if (skA > skB) return 1;
            else if (skA < skB) return -1;
            else return 0;
        })

        glad.ths = glad.ths.sort((a,b) => { // here we sort by th name
          let nameA = a[0];
          let nameB = b[0];

          if (nameA > nameB) return -1;
          else if (nameA < nameB) return 1;
          else return 0;
        })

        for (const [th,sk] of glad.ths) {
            console.log(`- ${th} <!> ${sk}`);
        }
    }

    
}

func([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
