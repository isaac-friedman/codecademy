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
