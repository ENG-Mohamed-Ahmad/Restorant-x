let sittings = document.getElementById('sittings');
let mainSitt = document.getElementById('sitt');
sittings.addEventListener('click' , function(){
    mainSitt.style = (`
        display : block
    `);
    mainBag.style = (`
    display : none;
    `);
    mainMenu.style=(`
    display : none;
    `);
    mainNotif.style = (`
        display : none;
    `);
})
// =======================================================================
const changeRestName = () =>{
    return(`
    <div class='sittObt restName'>
        <form id='restName'>
            <h3>Chang Restorant Name</h3>
            <input required disabled type='text' id='firstName' placeholder='First Name'/>
            <input required disabled type='text' id='secondName' placeholder='Second Name'/>

            <div>
                <input type='submit' value='Save' class='subsitting' id='subResName'/>
                <span class='editSitting' id='editSittingName'>edit</span>
            </div>
        </form>
    </div>
    `)
}
// =======================================================================
const hotLineFun = () =>{
    return(`
        <div class='sittObt hotNumber'>
            <form id='hotNumberform'>
                <h3>Chang Hot Line Number</h3>
                <input required disabled type='number' id='hotNumber' placeholder='Hot Line'/>
                <div>
                    <input type='submit' value='Save' class='subsitting'/>
                    <span class='editSitting' id='editSittingHot'>edit</span>

                </div>
            </form>
        </div>
    `)
}
// =======================================================================
const whatsNumber = () =>{
    return(`
        <div class='sittObt whatsNumber'>
            <form>
                <h3>Chang Whats Up Number</h3>
                <input type='number' placeholder='Whats Up'/>
                <div>
                    <input type='submit' value='Save' class='subsitting' id=''/>
                    <span class='editSitting'>edit</span>

                </div>
            </form>
        </div>
    `)
}
// =======================================================================
const faceLink = () =>{
    return(`
        <div class='sittObt faceLink'>
            <form>
                <h3>Chang FaceBook Link</h3>
                <input type='text' placeholder='FaceBook Link'/>
                <div>
                    <input type='submit' value='Save' class='subsitting' id=''/>
                    <span class='editSitting'>edit</span>
                </div>
            </form>
        </div>
    `)
}
// =======================================================================
// built sittings content
const sitting = () => {
    return(`
        <div class='sittContent' id='sittContent'>
            ${changeRestName()}
            <hr />
            ${hotLineFun()}
            <hr />
            ${whatsNumber()}
            <hr />
            ${faceLink()}
            <hr />
        </div>
    `)
};
mainSitt.innerHTML = sitting();
// =======================================================================
let sittContent = document.getElementById('sittContent');
// =======================================================================
// change restorant name
let restName = document.getElementById('restName');
let firstNameInput = document.getElementById('firstName');
let secondNameInput = document.getElementById('secondName');

let titleOne = document.getElementById('titleOne');
let titleSecond = document.getElementById('titleSecond');

let editSitting = document.querySelectorAll('.editSitting')
editSitting.forEach(ele => {
    ele.addEventListener('click' , function(){
        this.closest('.sittObt').querySelector('.subsitting').style = (`
            display : inline-block;
        `);
        this.style = (`
            display : none;
        `);
        
    })
})
let sittObtForms = document.querySelectorAll('.sittObt form');
sittObtForms.forEach(ele=>{
    ele.addEventListener('submit' , function(e){
        e.preventDefault();
    })
})
editSittingName.addEventListener('click' , function(){

    firstNameInput.removeAttribute('disabled' , '');
    secondNameInput.removeAttribute('disabled' , '');
})
restName.addEventListener('submit' , function(e){
    e.preventDefault();
    titleOne.textContent = firstNameInput.value;
    titleSecond.textContent = secondNameInput.value;
    this.querySelector('.editSitting').style = (`
        display : inline-block;
    `)
    this.querySelector('.subsitting').style = (`
        display : none;
    `);
    firstNameInput.setAttribute('disabled' , '');
    secondNameInput.setAttribute('disabled' , '');
});
// =======================================================================
let hotLine = document.getElementById('hotLine');
let hotNumberInput = document.getElementById('hotNumber');
let hotNumberform = document.getElementById('hotNumberform');

editSittingHot.addEventListener('click' , function(){
    hotNumberInput.removeAttribute('disabled')
})

hotNumberform.addEventListener('submit' , function(){
    hotLine.textContent = hotNumberInput.value;
    hotNumberInput.setAttribute('disabled' , '')
})
// =======================================================================
