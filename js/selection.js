
  
    let json_selection = Cookies.get('selection');
    console.log(json_selection);

 

if(!json_selection){
    console.log('Error');
    document.body.insertAdjacentHTML('beforeend', '<h2>There is an error.</h2>')

}else{
    let product = JSON.parse(json_selection);
    console.log(product);

    document.body.insertAdjacentHTML('beforeend', 
    
    `
    <div class="product_one"> 
     <h3 >Name: ${product.name}</h3>
     <p>Description: ${product.description}</p>
     <img src="${product.image_url}" width="200" height="200">
     
    
    </div>
    `

);

}
