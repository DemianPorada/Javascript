const playlist = {
    name: "my best songs",
    raiting: 10,
    tracks: ["track-1, track-2, track-3"],
    trackscount: 3,
};
console.log(playlist.name);
console.log(playlist['name']);

const Lviv = {
    area: "149 км.кв",
    population: 1141119,
    mayor: "Andrii Ivanovych Sadovy",
};
Lviv.area = "148 км.кв"
console.log(Lviv);

function fnA(){

}
fnA.key = "hello"
console.dir(fnA);

const arr = [1, 2];
arr.value = "Hi";
console.dir(arr)
