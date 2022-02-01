// bag
const mainBag = document.getElementById('bag');
const myBagAnchor = document.getElementById('myBag');
// menu
const mainMenu = document.getElementById('menu');
const menuAnchor = document.getElementById('menuAnchor');
// notification
let mainNotif = document.getElementById('notif');
let myNotifAnchor = document.getElementById('mynotif');
// add btn
const addBtn = document.getElementById('add-btn');
// =======================================================================

// =======================================================================
// built mainBag content;
orderBagCont = () => {
    return(`
        <div class='totalPrice' id='totalPrice'></div>
        <div class='cells'>
            <div class='foodNameTitle'>Name</div>
            <div class='foodAmountTitle'>Amount</div>
            <div class='foodPriceTitle'>Price</div>
            <div class='foodActionTitle'>Action</div>
        </div>
    `)
}
const bag = () =>{
    return (`
    <div class='bagContent' id='bagContent'>
    
        <div class='orderBag' id='orderBag'>
            ${orderBagCont()}
        </div>

        <div class='userData' id='userData'>Your Bag Is Empty</div>

    </div>
            `)
};
mainBag.innerHTML = bag();

// =======================================================================
// built notification content;
const noti = () =>{
    return (`
        <div class='notifContent' id='notifContent'>
            <div class='noNoti' id='noNoti'>Thier Is No Notifications Untill Now</div>
        </div>
    `)
}
mainNotif.innerHTML = noti();
// =======================================================================
// make menu disappear
myBagAnchor.addEventListener('click' , function(){
    mainMenu.style = (`
    display : none;
    `);
    mainBag.style=(`
    display : block;
    `);
    mainNotif.style = (`
        display : none;
    `);
    mainSitt.style = (`
        display : none
    `);
});
menuAnchor.addEventListener('click' , function(){
    mainBag.style = (`
    display : none;
    `);
    mainMenu.style=(`
    display : block;
    `);
    mainNotif.style = (`
        display : none;
    `);
    mainSitt.style = (`
        display : none
    `);
});
myNotifAnchor.addEventListener('click' , function(){
    mainBag.style = (`
    display : none;
    `);
    mainMenu.style=(`
    display : none;
    `);
    mainNotif.style = (`
        display : block;
    `);
    mainSitt.style = (`
        display : none
    `);
});
// =======================================================================
// add meal to the bag
addBtn.addEventListener('click',function(){
    // i=1
    setTimeout(function(){
        // let addMealForm = Array.from(document.querySelectorAll('.add-meal-form input.mealsubmit'));
        let addMealForm = Array.from(document.querySelectorAll('.add-meal-form'));
        addMealForm.forEach(ele=>{
            ele.onsubmit = function(){
                setTimeout(function(){
                    let order = Array.from(document.querySelectorAll('.order'));
                    order.forEach(ele=>{
                        ele.onclick = function(){
                            let mealName = this.closest('.meal').querySelector('h3');
                            let mealAmount = this.closest('.meal').querySelector('input[type=number]');
                            let mealPrice = this.closest('.meal').querySelector('.price');
                            const list = () => {
                                return(`
                                <div class='cells'>
                                    <div class='foodName'>${mealName.textContent}</div>
                                    <input type='number' min= 1 class='foodAmount' value=${Number(mealAmount.value)} />
                                    <div class='foodPrice' data-price=${mealPrice.textContent}>${Number(mealPrice.textContent) *  Number(mealAmount.value)}</div>
                                    <div class='foodAction'>x</div>
                                </div>
                                `);
                            }
                            let orderBag = document.getElementById('orderBag');
                            orderBag.innerHTML += list();
                            const sub = () =>{
                                return (`
                                    <form class='orderForm'>
                                            <input  type='text' class='userName' placeholder='Your Name'/>
                                            <input  type='number' class='userNumber' placeholder='Your Phone Number'/>
                                            <textarea  name="userAdress" class='userTitle' id="" cols="30" rows="10" placeholder='Enter Your Adress'></textarea>
                                            <input class='sentOrder' type='submit' value='Send'/>
                                        </form>
                                        `)
                            };
                            let userData = document.getElementById('userData');
                            if(userData.children.length == 0){
                                userData.innerHTML = sub();
                            }
                            let totalPrice = document.getElementById('totalPrice');
                            let foodPrice = document.querySelectorAll('.cells .foodPrice');
                            let total = 0;
                            foodPrice.forEach((ele )=>{
                                total += Number(ele.textContent);
                                totalPrice.innerHTML = `Total Price : ${total} Eg`;
                            });

                            // edit on meals amount in bag
                            let foodAmount = document.querySelectorAll('.foodAmount');
                            foodAmount.forEach(ele=>{
                                ele.addEventListener('input' , function(){
                                    newAmount = this.value;
                                    presentPrice = this.closest('.cells').querySelector('.foodPrice');
                                    // console.log(newAmount * Number(presentPrice.getAttribute('data-Price')));
                                    presentPrice.innerHTML = newAmount * Number(presentPrice.getAttribute('data-Price'));
                                    newTotal = 0;
                                    foodPrice.forEach(ele =>{
                                        newTotal += Number(ele.textContent);
                                        totalPrice.innerHTML = `Total Price : ${newTotal} Eg`;
                                        this.setAttribute('value' , newAmount);
                                    })
                                })
                            });
                            // remove cells
                            let foodAction = Array.from(document.querySelectorAll('.foodAction'));
                            foodAction.forEach(ele=>{
                                ele.addEventListener('click' , function(){
                                    foodActionParent = this.closest('.cells');
                                    foodActionParent.remove();
                                    if (mainBag.querySelectorAll('.cells').length == 1){
                                        userData.innerHTML = `Your Bag Is Empty`
                                    }else{
                                        userData.innerHTML = sub();
                                    }
                                    let cellsPrice = document.querySelectorAll('.foodPrice');
                                    total = 0;
                                    cellsPrice.forEach(ele=>{
                                        total += Number(ele.textContent);
                                    })
                                    document.getElementById('totalPrice').innerHTML = `Total Price : ${total} Eg`;
                                })
                                
                            })
                            // sent order to the owner notifications
                            
                            let sentOrder = document.querySelectorAll('.orderForm');
                            sentOrder.forEach(ele=>{
                                ele.onsubmit = function(e){
                                    e.preventDefault();
                                    let bagCont = this.closest('.bagContent');
                                    let formParent = this;
                                    let userName = formParent.querySelector('.userName');
                                    let userNumber = formParent.querySelector('.userNumber');
                                    let userTitle = formParent.querySelector('.userTitle');
                                    let notifContent = document.getElementById('notifContent');
                                    
                                    
                                    const notifOrderContent = () =>{
                                        return (`
                                            <div>
                                            <div class='actionParent'>
                                                <div class='delReqOrder'>X</div>
                                                <div class='printReqOrder'>Print</div>
                                            </div>
                                                <div>Name : ${userName.value}</div>
                                                <div>Phone Number : ${userNumber.value}</div>
                                                <div>Adress : ${userTitle.value}</div>
                                            </div>
                                            
                                        `)
                                    };
                                    let bagContCopy = bagCont.querySelector('.orderBag').cloneNode(true); // used to copy elements
                                    let noNoti = document.getElementById('noNoti');
                                    noNoti.innerHTML = ``;
                                    notifContent.innerHTML += `<div class='requestedFood'>${notifOrderContent() + bagContCopy.innerHTML}</div>`;
                                    notifContent.querySelectorAll('.foodAction').forEach(ele=>{
                                        ele.remove();
                                    })
                                    notifContent.querySelectorAll('.foodActionTitle').forEach(ele=>{
                                        ele.remove();
                                    });
                                    notifContent.querySelectorAll('.foodAmount').forEach(ele=>{
                                        ele.setAttribute('disabled','')
                                    });
                                    userData.innerHTML = 'The request was successfully completed';
                                    setTimeout(function(){
                                        mainBag.innerHTML = bag();
                                    } , 1500);
                                    // remove and print orders by owner
                                    let delReqOrder = Array.from(document.querySelectorAll('.actionParent .delReqOrder'));
                                    delReqOrder.forEach(ele=>{
                                        ele.addEventListener('click',function(){
                                            this.closest('.requestedFood').remove();
                                            if(!notifContent.querySelectorAll('.requestedFood').length){
                                                mainNotif.innerHTML = noti();
                                            }
                                        })
                                    });
                                }
                            });
                        }
                    })
                } , 0)
            }
        })
    } , 200);
});
