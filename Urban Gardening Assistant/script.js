document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const clickIndicator = document.getElementById('clickIndicator');
    const content = document.getElementById('content');
    const plantSelection = document.getElementById('plantSelection');
    const plantGuide = document.getElementById('plantGuide');
    const plantList = document.getElementById('plantList');
    const guideContent = document.getElementById('guideContent');
    const setReminderButton = document.getElementById('setReminder');

    document.title = "Urban Gardening Assistant";

    const plants = {
        herbs: [
            { name: 'Basil', benefits: 'Rich in antioxidants, anti-inflammatory properties', specifications: 'Requires full sun, well-drained soil' },
            { name: 'Mint', benefits: 'Aids digestion, relieves headaches', specifications: 'Prefers partial shade, moist soil' },
            { name: 'Parsley', benefits: 'Rich in vitamins A, C, and K, supports bone health', specifications: 'Prefers full sun to partial shade, well-drained soil' }
        ],
        vegetables: [
            { name: 'Tomato', benefits: 'High in vitamins A and C, good for heart health', specifications: 'Needs full sun, regular watering' },
            { name: 'Carrot', benefits: 'Rich in beta-carotene, good for vision', specifications: 'Prefers loose, sandy soil' },
            { name: 'Spinach', benefits: 'High in iron and calcium, supports bone health', specifications: 'Prefers partial shade, well-drained soil' }
        ],
        fruits: [
            { name: 'Strawberry', benefits: 'High in vitamin C, boosts immune system', specifications: 'Requires full sun, well-drained soil' },
            { name: 'Blueberry', benefits: 'Rich in antioxidants, supports brain health', specifications: 'Prefers acidic soil, full sun' },
            { name: 'Apple', benefits: 'Rich in fiber, supports heart health', specifications: 'Requires full sun, well-drained soil' }
        ],
        flowers: [
            { name: 'Rose', benefits: 'Aesthetic value, used in perfumes', specifications: 'Needs full sun, well-drained soil' },
            { name: 'Lavender', benefits: 'Calming effect, used in aromatherapy', specifications: 'Prefers full sun, well-drained soil' },
            { name: 'Sunflower', benefits: 'Aesthetic value, attracts pollinators', specifications: 'Requires full sun, well-drained soil' }
        ]
    };

    banner.addEventListener('click', () => {
        content.style.display = 'block';
        content.classList.add('slide-in');
        plantSelection.classList.add('slide-in');
        plantGuide.classList.add('slide-in');
        clickIndicator.style.display = 'none';
    });

    plantSelection.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const plantType = event.target.getAttribute('data-plant-type');
            displayPlantList(plantType);
        }
    });

    function displayPlantList(plantType) {
        plantList.innerHTML = '';
        plants[plantType].forEach(plant => {
            const plantDiv = document.createElement('div');
            plantDiv.textContent = plant.name;
            plantDiv.addEventListener('click', () => {
                displayPlantDetails(plant);
                highlightSelectedPlant(plantDiv);
            });
            plantList.appendChild(plantDiv);
        });
    }

    function displayPlantDetails(plant) {
        guideContent.innerHTML = `
            <h3>${plant.name}</h3>
            <p><strong>Benefits:</strong> ${plant.benefits}</p>
            <p><strong>Specifications:</strong> ${plant.specifications}</p>
        `;
        plantGuide.style.display = 'block';
    }

    function highlightSelectedPlant(selectedDiv) {
        const plantDivs = plantList.querySelectorAll('div');
        plantDivs.forEach(div => {
            div.classList.remove('selected');
        });
        selectedDiv.classList.add('selected');
    }

    setReminderButton.addEventListener('click', () => {
        const days = document.getElementById('reminderDays').value;
        const hours = document.getElementById('reminderHours').value;
        alert(`Reminder set for ${days} days and ${hours} hours.`);
    });
});