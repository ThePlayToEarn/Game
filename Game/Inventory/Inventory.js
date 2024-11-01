// Maximum inventory slots
const maxInventorySlots = 10;

// Load and display inventory from localStorage
function loadInventory() {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    displayInventory(inventory);
}

// Display the inventory in the inventory grid
function displayInventory(inventory) {
    const inventoryGrid = document.getElementById('inventory-grid');
    if (!inventoryGrid) return;

    inventoryGrid.innerHTML = ''; // Clear the inventory grid
    inventory.forEach(item => {
        // Check if the item is defined and valid
        if (item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'inventory-item';

            const img = document.createElement('img');
            img.src = `../assets/${item}`; // Ensure the path is correct
            img.alt = item;

            // Optional: Add a destroy button to each item
            const destroyButton = document.createElement('button');
            destroyButton.innerText = 'Destroy';
            destroyButton.onclick = () => destroyItem(item); // Call the destroy function with the item name

            itemDiv.appendChild(img);
            itemDiv.appendChild(destroyButton); // Add destroy button to the item div
            inventoryGrid.appendChild(itemDiv);
        } else {
            console.error('Item is undefined or empty'); // Log error for undefined items
        }
    });
}

// Add item to inventory and save to localStorage
function addItemToInventory(item) {
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    if (inventory.length < maxInventorySlots) {
        inventory.push(item);
        localStorage.setItem('inventory', JSON.stringify(inventory));
        displayInventory(inventory);
    } else {
        alert('Inventory is full!');
    }
}

// Function to destroy an item
function destroyItem(item) {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const confirmation = confirm(`Are you sure you want to destroy ${item}?`);
    if (confirmation) {
        const updatedInventory = inventory.filter(i => i !== item); // Remove the specified item
        localStorage.setItem('inventory', JSON.stringify(updatedInventory)); // Update localStorage
        displayInventory(updatedInventory); // Refresh inventory display
    }
}

// Call loadInventory on page load to display items
window.onload = loadInventory;
