

let products = [

    {
        name: 'Shoe',
        description: 'Lightweight stylish and confortable shoe',
        image_url: 'https://images.dsw.ca/is/image/dswca/283411168_421_ss_05?impolicy=qlt-medium-high&imwidth=640&imdensity=2'
    },

    {
        name: 'T-shirt',
        description: 'Vintage Tshirt',
        image_url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNxN24QQt3rQCIXYlWjGSWlvoJUYUHjdthMTNYnJU5xpT7Lma0at-lkaGb6xUsG64WdEzWsoh8RDg5ogp7LDOoP1nr2LeUgSvhz5x-1VkpK9D2Wi7WbDFUxZzTKADyfiEiZ3HwCPc&usqp=CAc'
    },


    {
        name: 'Pant',
        description: 'Gray pant. cotton',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMIzCy--9FYezJj2KebbSaqge3iY1Yv4mS4DvtaMsAvL9riK62notN9gGuw&s'
    }
]

console.log(products);

//Looping

for(let i = 0; i < products.length; i++){
    let product = products[i];
    console.log(product);

    document.body.insertAdjacentHTML('beforeend', 
    
    `
    <div class="product_one" data-product-id="${i}">
     <h3 data-product-id="${i}" >Name: ${product.name}</h3>
     <p data-product-id="${i}">Description: ${product.description}</p>
     <img data-product-id="${i}"  src="${product.image_url}" width="200" height="200">
     
    
    </div>
    `

);

}

//Selector
let card_products = document.getElementsByClassName('product_one');
console.log(card_products);


//function

function productClick(event){
    console.dir(event.target.dataset.productId);
    let productId = event.target.dataset.productId
    let id = parseInt(productId);

    let product = products[id]

    console.log(product)

    let json_product = JSON.stringify(product);
    console.log(json_product);
    

    Cookies.set('selection', json_product);
}




//Looping

for(let i =0; i <card_products.length; i++){
    let product = card_products[i]
    console.log(product)
    product.addEventListener('click', productClick);
}