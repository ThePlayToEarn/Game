let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
const maxInventorySlots = 10;

window.onload = () => {
    loadInventory();
    displayMarketplace();
};

// Display the available inventory slots, including empty ones
function loadInventory() {
    const inventoryGrid = document.getElementById('inventory-grid');
    inventoryGrid.innerHTML = '';

    for (let i = 0; i < maxInventorySlots; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item';

        if (inventory[i] && inventory[i].endsWith('.png')) {
            const img = document.createElement('img');
            img.src = `../assets/${inventory[i]}`;
            img.alt = inventory[i];
            itemDiv.appendChild(img);
        }
        inventoryGrid.appendChild(itemDiv);
    }
}

// Function to display marketplace items
function displayMarketplace() {
    const marketplaceElement = document.getElementById('resources-for-sale');
    marketplaceElement.innerHTML = ''; // Clear previous content

    const resourcesForSale = {
        "T1-Wood.png": { price: 10, quantity: 5 },
        "T1-Stone.png": { price: 15, quantity: 3 }
    };

    for (const [resource, info] of Object.entries(resourcesForSale)) {
        const resourceDiv = document.createElement('div');
        resourceDiv.className = 'resource-item';
        resourceDiv.innerHTML = `
            ${resource.replace("T1-", "").replace(".png", "")} - Price: $${info.price} (Available: ${info.quantity})
            <button onclick="buyResource('${resource}')">Buy</button>
        `;
        marketplaceElement.appendChild(resourceDiv);
    }
}

function buyResource(resource) {
    const resourcesForSale = {
        "T1-Wood.png": { price: 10, quantity: 5 },
        "T1-Stone.png": { price: 15, quantity: 3 }
    };
    const resourceInfo = resourcesForSale[resource];

    if (resourceInfo && resourceInfo.quantity > 0) {
        if (inventory.length < maxInventorySlots) {
            resourceInfo.quantity -= 1; // Deduct quantity
            inventory.push(resource);
            localStorage.setItem('inventory', JSON.stringify(inventory));
            loadInventory(); // Update inventory display
            alert(`You bought 1 ${resource.replace("T1-", "").replace(".png", "")}!`);
        } else {
            alert('Inventory is full!');
        }
    } else {
        alert(`Sorry, no more ${resource.replace("T1-", "").replace(".png", "")} available.`);
    }
}
