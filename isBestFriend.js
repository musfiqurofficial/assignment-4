// Problem 5: isBestFriend

function isBestFrind(me = { name: 'tom', friend: 'rock' }, myFriend = { name: 'rock', friend: 'tom' }) {

    if (me.name === myFriend.friend && me.friend === myFriend.name) {
        return true;
    }
    else {
        return false;
    }
}
const isFriendShip = isBestFrind();
console.log(isFriendShip);