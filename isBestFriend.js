// Problem 5: isBestFriend

function isBestFriend(me = { name: 'tom', friend: 'rock' }, myFriend = { name: 'rock', friend: 'tom' }) {

    if (me.name === myFriend.friend && me.friend === myFriend.name) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isBestFriend());