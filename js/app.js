// Creating an object for each product.

let selection = [

    {
        name = `homephone`,
        description = `Landlines phone bundle`,
        image_url = `/images/homephone.jpg`,
    },

    {
        name =`phone`,
        description = `A mobile phone is a portable telephone`,
        image_url = `/images/phone.jpg`,
    },

    {
        name = `shoe`,
        description = `quality men shoe`,
        image_url = `/images/shoe.jpg`,
    },
],

    
//Turn the object into Json and then store into a cookie

let selection_json = JSON.stringify(selection);
cookies.set(`selection`, selection_json);

location.href =`selection.html`



//If selection cookie is not set, display a message
if(selection ===undefined){
    document.querySelector(`selection`).innerHTML= `you can make a selection at the homepage`
}else{

    //selection.html should read the cookie with users selection and inject HTML
    let selection = JSON.spare(selection);
  

document.getElementById("selection-container").innerHTML = selectionHTML
    let selectionHTML = `
    <h2>${selection.name}</h2>
    <P>${selection.description}</p>
    <img src="${selection.image_url}" alt="${selection.name}">
}    `;







