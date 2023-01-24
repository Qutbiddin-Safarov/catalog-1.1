        const tBody = document.querySelector("#tBody")

        getProd();

async function getProd(){
    const response = await fetch('./data/data.json');
    console.log(response);
 
    const catalog = await response.json();
    console.log(catalog);
 
    renderProd(catalog);
}
 
 function renderProd(prodArr){
     prodArr.forEach(function(item){
          const prodHTML = `
            <tr>
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed}</td>
            </tr>
         `;
         tBody.insertAdjacentHTML('beforeend', prodHTML)
     });
 }