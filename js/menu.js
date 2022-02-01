// =================================================================
const sidBar = () =>{
    return(`
        <div class='sidBar' id='sidBar'>
            <div class='btns-parent' id='btns-parent'>
                <div><input type='text' placeholder='add new section...' maxlength="20" id='add-link'/></div>
                <button class='add-btn' id='add-btn'>add</button>
                
            </div>
            <div class='links-parent' id='links-parent'>
                
            </div>
            
        </div>
    `)
}
// =================================================================
const container = () =>{
    return(`
        <div class='cont-parent' id='cont-parent'>
            
        </div>
    `)
}
const meal = () =>{
    return(`
        <img src="img/foods/checken.jpg" />
        <h3>meal</h3>
        <p>contents</p>
        <button class='order'>order</button>
        <span>price</span>
        `)
        }
const list = () =>{
    return(`
    

    `)
}
// =================================================================
const footer = () =>{
    return(`
        <div class='footer' id='footer'></div>
    `)
}
// =================================================================
const menu = () => {
    return(`
        <div class="parent">
            ${sidBar()}
            ${container()}
            ${footer()}
        </div>
        `)
}
// =================================================================
const menuStyling = document.getElementById('menu');
// console.log(menuStyling);
menuStyling.innerHTML += menu();
// =================================================================
