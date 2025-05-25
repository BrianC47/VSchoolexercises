 const readline = require("readline-sync");

let player = { // Created Object instead of separate variables
    name: "",
    hp: 100,
    inventory: [],
    enemiesDefeated: 0
};

const enemies = ["Ogre", "Witch", "Kunoichi"];
const items = ["Potion", "Magic Ring", "Shield"];

function randomEnemy() {
    return enemies[Math.floor(Math.random() * enemies.length)]; // Pick random enemy
}

function getRandomItem() {
    return items[Math.floor(Math.random() * items.length)]; // Pick random items
}

function getRandomDamage(min = 10, max = 20) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Take random Damage
}

function printStatus() {
    console.log(`\nName: ${player.name}`);
    console.log(`HP: ${player.hp}`);
    console.log(`Inventory: ${player.inventory.join(", ") || "Empty"}\n`);
}

// Start Game
console.log("👾 Welcome to Retro RPG 1985!");
player.name = readline.question("What is your name, adventurer? ");
console.log(`\nGreetings, ${player.name}! Let the adventure begin...\n`);

while (player.hp > 0 && player.enemiesDefeated < 3) {
    let input = readline.question("Press 'w' to walk or 'p' to print status: ").toLowerCase(); // Continue game as long as hp is greater than 0 and less than 3 enemies are defeated

    if (input === "p") {
        printStatus();
        continue;
    }

    if (input === "w") {
        if (Math.random() < 0.33) {
            let enemy = randomEnemy();
            let enemyHp = 50;
            console.log(`\n💥 A angry ${enemy} appears!\n`);

            while (enemyHp > 0 && player.hp > 0) {
                let action = readline.question("Do you want to [a]ttack or [r]un? ").toLowerCase();

                if (action === "a") {
                    let playerDmg = getRandomDamage(); // calls the function get random damage
                    enemyHp -= playerDmg;
                    console.log(`You hit the ${enemy} for ${playerDmg} damage.`);

                    if (enemyHp <= 0) {
                        console.log(`🎉 You defeated the ${enemy}!`);
                        player.enemiesDefeated++;
                        player.hp += 20;
                        let newItem = getRandomItem();
                        player.inventory.push(newItem);
                        console.log(`You found a ${newItem} and gained 20 HP!\n`);
                        break;
                    }

                    let enemyDmg = getRandomDamage(5, 15);
                    player.hp -= enemyDmg;
                    console.log(`The ${enemy} strikes back for ${enemyDmg} damage.`);

                    if (player.hp <= 0) {
                        console.log("\n💀 You have been defeated. Game over!");
                        break;
                    }

                } else if (action === "r") {
                    if (Math.random() < 0.5) {
                        console.log("You successfully escaped!\n");
                        break;
                    } else {
                        console.log("You failed to run!");
                        let enemyDmg = getRandomDamage(5, 15);
                        player.hp -= enemyDmg;
                        console.log(`The ${enemy} hits you for ${enemyDmg} damage.\n`);
                        if (player.hp <= 0) {
                            console.log("\n💀 You have been slain while running. Game over!");
                            break;
                        }
                    }
                } else {
                    console.log("Invalid choice. Choose 'a' or 'r'.");
                }
            }
        } else {
            console.log("You walk quietly through the land... 🌲\n");
        }
    }
}

if (player.hp > 0 && player.enemiesDefeated === 3) { // You beat the game once all enemies are defeated and health is greater than 0 
    console.log(`🏆 Congratulations, ${player.name}! You defeated all enemies and won the game!`);
}
