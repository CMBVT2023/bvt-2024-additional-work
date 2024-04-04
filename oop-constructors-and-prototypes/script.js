function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXP = function (xp) {
    this.points += xp;

    if (this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    };

    console.log(this.describe())
};

Player.prototype.describe = function () {
    return `${this.name} is ${this.lvl} with ${this.points} experience points.`;
};

const player1 = new Player("Bob");
const player2 = new Player("Alice")

player1.gainXP(4);
player2.gainXP(7);
player1.gainXP(6);
player2.gainXP(1);
player1.gainXP(4);
player2.gainXP(3);
player1.gainXP(7);
player2.gainXP(2);


document.getElementById('playerOne').innerText = player1.name;
document.getElementById('playerTwo').innerText = player2.name;

document.getElementById('playerOneLevel').innerText = player1.describe();
document.getElementById('playerTwoLevel').innerText = player2.describe();

