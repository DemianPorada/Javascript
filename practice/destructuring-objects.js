// const playlist = {
//     name: 'Мій супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//   };

//   const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
//   const {name, tag, location, avatar, stats} = profile
//   const {followers, views, likes} = stats
//   console.log(
//     name,
//     views,
//     likes
//   )

  const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

  const getAllNames = function (allFriends) {
    const names = []
    for( const friend of allFriends){
        names.push(friend,name);
        console.log(friend.name);
    }
    return names
  };
  console.log(getAllNames(friends))
  const getOnlineFriends = function (allFriends) {
    const names = []
    for( const friend of allFriends){
        if(friend.online){
            names.push(friend.name)
        }
    }
  }
  const getOfflineFriends = function (allFriends) {
    const names = []
    for( const friend of allFriends){
        if(!friend.online){
            names.push(friend.name)
        }
  };
  return names
}
console.log(getOfflineFriends(friends))
  const getFriendsByStatus = function () {};