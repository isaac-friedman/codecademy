bobsFollowers = ['Larry', 'Moe', 'Curly', 'Shemp'];
tinasFollowers = ['Harpo', 'Curly', 'Shemp'];

mutualFollowers = [];

/***
*This is the least efficient way to find mutual followers because it iterates
* over both arrays twice.
***/

for (let i=0; i<bobsFollowers.length; i++) {
  for (let j=0; j<tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}


/***
*This way is more efficient in terms of time because array lookups are O(1)
*time while iterating over an array is O(n).
***/

//Reset mutualFollowers
mutualFollowers = []
//iterate over shorter array. In production code it would be trivial to check for the shorter array each time the function was called.
tinasFollowers.forEach(function(follower) {
    if (bobsFollowers.includes(follower)) {
        mutualFollowers.push(follower);
    }
});
console.log(mutualFollowers);
