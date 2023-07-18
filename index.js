let CATEGORIES = {
    category1: {
        name: "Ноутбуки",
        items: [
            { 
                img: './Styles/images/products/275056538.webp',
                name: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ', 
                description: `Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / черный`,
                price: 28999,
            },

            { 
                img: './Styles/images/products/290842123.webp',
                name: 'Ноутбук ASUS Laptop X515EA-BQ2066',
                description: `Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 12 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.8 кг / серый`,
                price: 16999, 
            },

            { 
                img: './Styles/images/products/320929254.webp',
                name: 'Ноутбук Lenovo IdeaPad 3 15IAU7',
                description: `Екран 15.6" IPS (1920x1080) Full HD, матовий / Intel Core i5-1235U (3.3 - 4.4 ГГц) / RAM 16 ГБ / SSD 512 ГБ / Intel Iris Xe Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.63 кг / сірий`,
                price: 23999,
            }
        ]
    },
    category2: {
        name: "Комп'ютери",
        items: [
            { 
                img: './Styles/images/products/277930782.webp',
                name: 'Комп\'ютер Artline Gaming', 
                description: `AMD Ryzen 5 3600 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3050, 8 ГБ / без ОД / LAN / без ОС`,
                price: 26599,
            },

            { 
                img: './Styles/images/products/311809510.webp',
                name: 'Комп\'ютер ARTLINE Gaming X63',
                description: `AMD Ryzen 5 5600 (3.5 - 4.4 ГГц) / RAM 16 ГБ / SSD 1 ТБ / nVidia GeForce RTX 3060 Ti, 8 ГБ / без ОД / LAN / без ОС`,
                price: 34999, 
            },

            { 
                img: './Styles/images/products/318910162.webp',
                name: 'Моноблок Lenovo IdeaCentre 3 24IAP7',
                description: `Екран 23.8" WVA (1920x1080) Full HD / Intel Core i3-1215U (4.4 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 7.03 кг / чорний / клавіатура + миша`,
                price: 21999,
            }
        ]
    },
    category3: {
        name: "Планшети",
        items: [
            { 
                img: './Styles/images/products/224010065.webp',
                name: 'Планшет Apple iPad 10.2" 2021 Wi-Fi 64 GB Silver', 
                description: `Екран 10.2" IPS (2160x1620) MultiTouch / Apple A13 Bionic (2.65 ГГц) / 64 ГБ вбудованої пам'яті / Wi-Fi / Bluetooth 4.2 / основна камера 8 Мп, фронтальна — 12 Мп / iPadOS 15 / 487 г / сріблястий`,
                price: 16599,
            },

            { 
                img: './Styles/images/products/186993631.webp',
                name: 'Планшет Samsung Galaxy Tab A7 Lite LTE 32GB Grey',
                description: `Екран 8.7" (1340x800) MultiTouch/MediaTek Helio P22T (2.3 ГГц)/RAM 3 ГБ/32 ГБ вбудованої пам'яті + microSD/3G/4G/Wi-Fi/Bluetooth 5.0/основна камера 8 Мп, фронтальна — 2 Мп/GPS/ГЛОНАСС/Android /371 г/сірий`,
                price: 6199, 
            },

            { 
                img: './Styles/images/products/259395026.webp',
                name: 'Планшет Apple iPad Air 10.9" M1 Wi-Fi 64GB Space Gray',
                description: `Екран 10.9" (2360x1640) MultiTouch / Apple M1 / RAM 8 ГБ / 64 ГБ вбудованої пам'яті / Wi-Fi / Bluetooth 5.0 / основна камера 12 Мп, фронтальна 12 Мп / iPadOS 15 / 461 г / космічний сірий`,
                price: 29999,
            }
        ]
    }
};

const displayCategory = (category) => {
    const categoryItems = CATEGORIES[category].items;
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";

    categoryItems.forEach((item) => {
        const listItem = document.createElement("li");
        const image = document.createElement("img");
        image.src = item.img;
        image.alt = item.name;

        const heading = document.createElement("h3");
        heading.textContent = item.name;

        listItem.append(image);
        listItem.append(heading);

        listItem.addEventListener("click", () => {
        displayItem(item);
        });

        itemsList.append(listItem);
    });

};

const displayItem = (item) => {
    const itemDetails = document.querySelector(".item-details");
    itemDetails.style.display = "block";

    const itemInfo = document.getElementById("itemInfo");
    itemInfo.innerHTML = "";

    const image = document.createElement("img");
    image.src = item.img;
    image.alt = item.name;

    const heading = document.createElement("h2");
    heading.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.textContent = `Ціна: ${item.price} UAH`;

    itemInfo.append(image);
    itemInfo.append(heading);
    itemInfo.append(description);
    itemInfo.append(price);

    const buyButton = document.getElementById("buyButton");
    buyButton.style.display = "block";

    buyButton.onclick = () => {
        displayForm(item);
    };
};


const displayForm = () => {
    
    const formOrder = document.getElementById("formOrder");
    formOrder.style.display = "block";
    
};

function validateForm(event) {
    event.preventDefault();

    const lastName = document.getElementById('lastName').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const surName = document.getElementById('surName').value.trim();
    const city = document.getElementById('city').value;
    const shippingMethod = document.getElementById('shippingMethod').value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    const quantity = document.getElementById('quantity').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!lastName || !firstName || !surName) {
        displayError('Будь ласка, заповніть усі поля форми ПІБ!', errorContainer);
        return;
    }

    if (city === '') {
        displayError('Будь ласка, оберіть місто доставки!', errorContainer);
        return;
    } 

    if (!paymentMethod) {
        displayError('Будь ласка, оберіть спосіб сплати!', errorContainer);
        return;
    }

    if (!shippingMethod) {
        displayError('Будь ласка, введіть номер поштового відділення!', errorContainer);
        return;
    }

    if (isNaN(quantity) || parseInt(quantity) <= 0 || quantity === '') {
        displayError('Будь ласка, введіть кількість товару!', errorContainer);
        return;
    }

    displayOrderInfo(lastName, firstName, surName, city, shippingMethod, paymentMethod.value, quantity, comment);
        
}

function cancelOrder() {
    document.getElementById('formOrder').style.display = 'none';

}

function displayOrderInfo(lastName, firstName, surName, city, shippingMethod, paymentMethod, quantity, comment) {
        
    const deliveryInfo = `
    Прізвище: ${lastName}<br>
    Ім'я: ${firstName}<br>
    По-батькові: ${surName}<br>
    Місто: ${city}<br>
    Відділення Нової пошти: ${shippingMethod}<br>
    Спосіб сплати: ${paymentMethod}<br>
    Кількість: ${quantity} шт.<br>
    Коментар: ${comment}`;
    
    const productInfo = document.getElementById('itemInfo').innerHTML;   

    document.getElementById('productInfo').innerHTML = productInfo;
    document.getElementById('deliveryInfo').innerHTML = deliveryInfo;
    document.getElementById('formOrder').style.display = 'none';
    document.getElementById('orderInfoBr').style.display = 'block';
}

function sendingСonfirmation() {
    orderInfoBr.style.display = 'none';
    
}

function displayError(errorMessage, container) {
    const errorElement = document.createElement('p');
    errorElement.innerText = errorMessage;
    container.append(errorElement);
    setTimeout(() => {
        errorElement.remove();
        
    }, 2500);

}
