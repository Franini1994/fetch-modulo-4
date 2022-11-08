function mostrarResultados(results) {
    // console.log(results)
    const contenedor = document.querySelector(".results")
    const template = document.querySelector("#result-item-template")

    for (const r of results) {
        const titleEl = template.content.querySelector(".results-item-title");
        titleEl.textContent = r.title;

        const precioEl = template.content.querySelector(".results-item-price")
        precioEl.textContent = "$" + r.price;

        const imgEl = template.content.querySelector(".results-item-img")
        imgEl.src = r.thumbnail

        const conditionEl = template.content.querySelector(".results-item-condition")
        conditionEl.textContent = r.condition

        const vendidosEl = template.content.querySelector(".results-item-sell-count-num")
        vendidosEl.textContent = r.sold_quantity


        const clone = document.importNode(template.content, true);
        contenedor.appendChild(clone);
    }

}


function main() {

    const formEl = document.querySelector(".search-form")
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();
        const palabraABuscar = e.target.buscar.value;
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar).then(response => response.json())
            .then(data => mostrarResultados(data.results));
    })
};

main();