// Make the game as my loan game. 
What are you gonna do with the loan?
// Hire employees
Define what their role is going to be 
Define how much they are going to earn 
How long are they going to be working for
Is this an hourly, daily, weekly rate or contract? 


// Paris Sportifs

Remove all // Before uploading


Uniform colors and guilds at the palace
Are we only just humans song

5 novembre 13h trajectoire emploi

function addWoodToInventory() {
    const inventoryGrid = document.getElementById('inventory-grid');

    // Create a new div for the T1-Wood item
    const woodItem = document.createElement('div');
    woodItem.className = 'inventory-item glow'; // Add the glow class

    // Create the image and description
    const img = document.createElement('img');
    img.src = 'assets/T1-Wood.png';
    img.alt = 'T1 Wood';

    const p = document.createElement('p');
    p.textContent = 'T1 Wood';

    // Append the image and description to the wood item
    woodItem.appendChild(img);
    woodItem.appendChild(p);

    // Append the wood item to the inventory grid
    inventoryGrid.appendChild(woodItem);
}