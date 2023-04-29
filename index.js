var data = [
    { 
        'imgLocation': './images/img1.png', 
        'productName': 'Airplane tshirt', 
        'productPrice': "$25" 
    },
    { 
        'imgLocation': './images/img2.webp', 
        'productName': 'Cessna 172 Blueprint T-Shirt black', 
        'productPrice': "$25" 
    },
    { 
        'imgLocation': './images/img3.webp', 
        'productName': 'Cessna 172 Blueprint T-Shirt blue', 
        'productPrice': "$28" 
    },
    { 
        'imgLocation': './images/img4.webp', 
        'productName': 'Louis Philippe Polo Pink T-shirt', 
        'productPrice': "$30" 
    },
    { 
        'imgLocation': './images/img5.webp', 
        'productName': 'Louis Philippe Polo White T-shirt', 
        'productPrice': "$30" 
    },
    { 
        'imgLocation': './images/img6.webp', 
        'productName': 'White Running Shoes', 
        'productPrice': "$101"     
    },
    { 
        'imgLocation': './images/img7.webp', 
        'productName': 'Men White Running Shoes', 
        'productPrice': "$102" 
    },
    { 
        'imgLocation': './images/img8.webp', 
        'productName': 'Hoodies Sweatshirts', 
        'productPrice': "$50" 
    },
    { 
        'imgLocation': './images/img9.webp', 
        'productName': 'Jordan Sneakers Shoes', 
        'productPrice': "$151"
    },
    { 
        'imgLocation': './images/img10.webp', 
        'productName': 'Provogue Sneakers shoes', 
        'productPrice': "$104" 
    },
    { 
        'imgLocation': './images/img11.webp', 
        'productName': "SweatShirt Men's color", 
        'productPrice': "$41" 
    },
    { 
        'imgLocation': './images/img12.webp', 
        'productName': 'Windshield T-Shirt white', 
        'productPrice': "$40" 
    },
    { 
        'imgLocation': './images/img13.webp', 
        'productName': 'Windshield T-Shirt Yellow', 
        'productPrice': "$41" 
    },
    { 
        'imgLocation': './images/img14.png', 
        'productName': 'Ziya Hoodies High Street Pullover', 
        'productPrice': "$56" 
    },
    { 
        'imgLocation': './images/img15.png', 
        'productName': 'Ziya Gojo Running Hoodie', 
        'productPrice': "$65" 
    }
];
let productContainer = document.getElementById("product-list-container");
let searchIcon = document.getElementById("search-icon");
let searchButton = document.getElementById("search-bar");

let searchBarChange = function change() {
    searchIcon.style.display = 'none';
    searchButton.style.height = '30px';
    searchButton.ariaPlaceholder = '';
    searchButton.style.transition = '0.2s';
}

function searchProduct(searchString) {
    console.log(searchString);
    productContainer.innerHTML = '';
    data.forEach((element)=>{
        if(element.productName.toLowerCase().includes(searchString)){
            let productItem = document.createElement("div");
        productItem.className = "product-item";

        let img = document.createElement("img");
        img.src = element.imgLocation;

        let productDetails = document.createElement("div");
        productDetails.className ="product-details";

        let productName = document.createElement("span");
        productName.className = "product-Name";
        productName.innerText = element.productName;

        let prodcutPrice = document.createElement("span");
        prodcutPrice.className = "prodcut-price";
        prodcutPrice.innerText = element.productPrice;

        productDetails.appendChild(productName);
        productDetails.appendChild(prodcutPrice);

        productItem.appendChild(img);
        productItem.appendChild(productDetails);
        productContainer.appendChild(productItem);
        }
    });

}

searchButton.addEventListener('click', searchBarChange);
searchButton.addEventListener('keyup', (e) => {
    searchProduct(e.target.value.toLowerCase());
});

searchProduct("");