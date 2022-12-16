function createIceCreamStoreDiv(iceCreamStoreData) {
    return `
        <div class="result">
            <img
                src="${iceCreamStoreData.img}"
            />
            <h3>${iceCreamStoreData.name}</h3>
            <p>${iceCreamStoreData.dsc}</p>
        </div>
    `
}

function findIceCream() {
    const url = "https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream"

    fetch(url)
        .then(response => response.json())
        .then(iceCreamStores => {
                const iceCreamStoresString = iceCreamStores.map(
                iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
                ).join(" ");
        })
}
