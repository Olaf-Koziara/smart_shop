document.addEventListener("DOMContentLoaded", () => {
    const breakpointMedium = 600;
    const breakpointLarge = 900;
    const breakpointXLarge = 1200;

    const calculateProductsPerLoad = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= breakpointXLarge) {
            return 12;
        } else if (screenWidth >= breakpointLarge) {
            return 9;
        } else if (screenWidth >= breakpointMedium) {
            return 8;
        } else {
            return 6;
        }
    };

    let productsData = [];
    let currentProductsIndex = 0;
    let productsPerLoad = calculateProductsPerLoad();
    const productListContainer = document.getElementById("product-list");
    const loadMoreButton = document.getElementById("load-more-button");

    const fetchProducts = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            const response = await fetch("products.json");
            if (!response.ok) {
                throw new Error(`Błąd sieci: ${response.status}`);
            }

            productsData = await response.json();

            if (productsData.length > productsPerLoad) {
                loadMoreButton.style.display = "block";
            } else {
                loadMoreButton.style.display = "none";
            }
            loadProducts();

        } catch (error) {
            console.error("Błąd pobierania produktów:", error);
            productListContainer.innerHTML = `<p class="product-list__error">Wystąpił błąd podczas ładowania produktów. Spróbuj ponownie później.</p>`;
            loadMoreButton.style.display = "none";
        }
    };

    const createProductElement = (product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.dataset.productId = product.id;

        const img = document.createElement("img");
        img.classList.add("product__image");
        img.src = product.image;
        img.alt = product.name;
        img.loading = "lazy";
        img.onerror = () => {
            img.src = "https://placehold.co/300x300";
            img.alt = "Brak obrazka";
        };

        const name = document.createElement("h3");
        name.classList.add("product__name");
        name.textContent = product.name;

        const footerDiv = document.createElement("div");
        footerDiv.classList.add("product__footer");

        const price = document.createElement("p");
        price.classList.add("product__price");
        price.textContent = `${product.price.toFixed(2)} zł`;

        const id = document.createElement("p");
        id.classList.add("product__id");
        id.textContent = `ID: ${product.id}`;

        footerDiv.appendChild(price);
        footerDiv.appendChild(id);

        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(footerDiv);

        return productDiv;
    };

    const loadProducts = () => {
        const endIndex = Math.min(currentProductsIndex + productsPerLoad, productsData.length);
        for (let i = currentProductsIndex; i < endIndex; i++) {
            const productElement = createProductElement(productsData[i]);
            productListContainer.appendChild(productElement);
            observer.observe(productElement);
        }
        currentProductsIndex = endIndex;

        if (currentProductsIndex >= productsData.length) {
            loadMoreButton.style.display = "none";
        }
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("product--visible");
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    loadMoreButton.addEventListener("click", loadProducts);

    fetchProducts();

});