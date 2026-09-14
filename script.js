// COLLECTION SEARCH AND FILTER


let searchInput = document.getElementById("searchInput");

let categoryFilter = document.getElementById("categoryFilter");

let products = document.querySelectorAll(".collection-product");

let noProducts = document.getElementById("noProducts");


function filterProducts() {

    let searchValue = searchInput.value.toLowerCase();

    let categoryValue = categoryFilter.value;

    let found = false;


    products.forEach(function(product) {

        let productName =
            product.querySelector("h3").textContent.toLowerCase();

        let productCategory =
            product.getAttribute("data-category");


        let searchMatch =
            productName.includes(searchValue);


        let categoryMatch =
            categoryValue === "all" ||
            productCategory === categoryValue;


        if (searchMatch && categoryMatch) {

            product.style.display = "block";

            found = true;

        } else {

            product.style.display = "none";

        }

    });


    if (found) {

        noProducts.style.display = "none";

    } else {

        noProducts.style.display = "block";

    }

}


// Search

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


// Filter

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}

// CONTACT FORM

let contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Thank you! Your message has been sent."
            );

            contactForm.reset();

        }
    );

}