// const playlist = {
//     name: "my best songs",
//     raiting: 10,
//     tracks: ["track-1, track-2, track-3"],
//     trackscount: 3,
// };
// console.log(playlist.name);
// console.log(playlist['name']);

// const Lviv = {
//     area: "149 км.кв",
//     population: 1141119,
//     mayor: "Andrii Ivanovych Sadovy",
// };
// Lviv.area = "148 км.кв"
// console.log(Lviv);

// function fnA(){

// }
// fnA.key = "hello"
// console.dir(fnA);

// const arr = [1, 2];
// arr.value = "Hi";
// console.dir(arr)

const playlist = {
    name: 'Плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    changeName(newName){
        this.name = newName
    },
    addTrack(newTrack){
        this.tracks.push(newTrack)
    },
    updateRating(newTop){
        this.rating = newTop
    },
    getTrackCount(){
        return this.tracks.length
       
    }
}
playlist.updateRating('Your Top Raiting')
playlist.addTrack('Track-4')
playlist.changeName('My playlist')
console.log(playlist);
console.log(playlist.getTrackCount())

// - addTrack
//  * - updateRating
//  * - getTrackCount
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
const findFriendByName = function (allFriends, nameToFind) {
    for(const friend of allFriends){
        console.log(friend);
    }
};
console.log(friends);