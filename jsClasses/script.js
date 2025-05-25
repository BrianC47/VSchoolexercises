class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        console.log(`Name: ${this.name}\nCoins: ${this.totalCoins}\nStatus: ${this.status}\nStar: ${this.hasStar}`);
    }
}

// Instantiate and use
const mario = new Player("Mario", 0, "Small", false);
mario.addCoin();
mario.print();
    