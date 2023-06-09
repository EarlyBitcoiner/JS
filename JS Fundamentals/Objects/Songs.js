class Song{

    constructor(list,name,time) {
        this.list = list;
        this.name = name;
        this.time = time;
    }

    getList() {
        return this.list;
    }
}

function func(input) {
    
    let songs = input.shift();
    let songsArr = [];

    for (let i = 0; i < songs; i++){
        let curr = input[i].split('_');
        songsArr.push(new Song(curr[0], curr[1], curr[2]));
    }

    play(input[songs],songsArr);

    function play(listType, songs) {
        
        if (listType == 'All') {
            for (let song of songs) {
                console.log(song.name);
            }
        } else {
        
            for (let song of songs) {
                if (song.getList() == listType) {
                    console.log(song.name);
                }
            }
        }
    }

}

func([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);

func([
  4,

  "favourite_DownTown_3:14",

  "listenLater_Andalouse_3:24",

  "favourite_In To The Night_3:58",

  "favourite_Live It Up_3:48",

  "All",
]);