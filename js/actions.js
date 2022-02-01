    // // loop on sidebar elements to change ${#cont} element content;

    
    // console.log(sidEle);
    // Array.from(sidEle).forEach((ele) => {
    //     ele.addEventListener('click' , (e)=>{
    //         e.preventDefault();
    //         // x = ele.href;
    //         document.getElementById('sections').style =(`
    //         height: 300px;
    //         `)

    //     })
    // })
    // $(function(){
    //     Array.from(sidEle).forEach((ele) => {
    //         ele.addEventListener('click' , (e)=>{
    //             e.preventDefault();
    //             console.log(ele.getAttribute('href'));
    //             id = ele.getAttribute('href')
    //             $(`${id}`).slideToggle(100);
    //         })
    //     })
    // })
// ===========================================================
sidInput = document.getElementById('add-link');
$(function(){
    var i = 0;
    $('#add-btn').click(function(){
        // add new link to a side;
        newLink = `<div data-href= #no${i} class='anchor'>
            <div class='link-name'>${sidInput.value} </div>
            <div class='links-btns'>
                <button class ='edit'>edit</button>
                <button class ='save' id='save'>save</button>
                <button class='del' id='del${i}'>X</button>
            </div>
        </div>`;
        // console.log(newLink);
        document.getElementById('links-parent').innerHTML += (`
        ${newLink}
    `);
    // add new section to cont-parent;
        document.getElementById('cont-parent').innerHTML += (`
            <div class='sections' id=no${i}>
                <h1 class='section-title' style='text-align:center;'>${sidInput.value}</h1>
                <div>
                    <form class='add-meal-form'>
                        <input  type='file' class='fileInput'/>
                        <input  type='text' class='nameInput' placeholder='meal name' />
                        <input  type='text' class='ingrInput' placeholder='ingrediants' />
                        <input  type='number' class='priceInput' placeholder='price' />
                        <input type='submit' class='mealsubmit'/>
                    </form>
                </div>
                <div class='cont' id='cont${i}'>
                    ${list()}
                </div>
            </div>
        `)
        $(`#no${i}`).slideUp(300);
        sidInput.value = '';
        
        // apear section when click its link in aside;
        let sidEle = document.querySelectorAll('#sidBar .links-parent .anchor');
        Array.from(sidEle).forEach(function(ele){
            ele.addEventListener('click' , function(){
                id = this.getAttribute('data-href').slice(1);
                // console.log($('#cont-parent .sections'));
                Array.from($('#cont-parent .sections')).forEach(function(ele){
                    // console.log(ele.id == id);
                    ele.id == id ? ele.style=(`display:block`) : ele.style=(`display:none`);
                })
            })
        })
        // remove link and section;
        var delet = Array.from(document.querySelectorAll('.sidBar .links-parent > .anchor .links-btns .del'));
        delet.forEach(function(ele){
            ele.addEventListener('click' , ()=>{
                ele.closest('.anchor').remove();
                let id = ele.closest('.anchor').getAttribute('data-href').slice(1);
                // console.log(`del${id}`);
                document.getElementById(id).remove()
            })
        })
        // edite the links in aside and section name
        var editBtn = document.querySelectorAll('.edit');
        // console.log(editBtn);
        Array.from(editBtn).forEach((ele)=>{
            ele.addEventListener('click' , ()=>{
                // console.log('edit done' , $(this));
                let parent = ele.closest('.anchor');
                parent.querySelector('.link-name').setAttribute('contenteditable' , 'true');
                parent.querySelector('.link-name').style = (`
                    border-bottom : 1px solid #ccc;
                    outline : none;
                `)
                let save = ele.closest('.links-btns').querySelector('.save');
                save.style=(`
                    display : inline;
                `)
                let del = ele.closest('.links-btns').querySelector('.del');
                del.style = (`
                    display : none;
                `);
                ele.style=(`
                    display : none;
                `)
                
            })
        })
        // save changes on link name;
        Array.from(document.querySelectorAll('.save')).forEach(function(ele){
            // console.log(ele);
            ele.addEventListener('click' , function(){
                let parent = this.closest('.anchor');
                parent.querySelector('.link-name').removeAttribute('contenteditable');
                let edit = this.closest('.links-btns').querySelector('.edit');
                let del = this.closest('.links-btns').querySelector('.del');
                parent.querySelector('.link-name').style = (`
                    border : none;
                `)
                edit.style = (`
                    display : inline;
                `);
                del.style = (`
                    display : inline;
                `);
                this.style=(`
                    display : none;
                `);
                let sectionTitle = document.getElementById(parent.getAttribute('data-href').slice(1)).querySelector('.section-title');
                sectionTitle.textContent = parent.querySelector('.link-name').textContent;
            })
        })
        // ===========================================================
        // addMeal() function to cont
        let addingMeal = Array.from(document.querySelectorAll('.add-meal-form'));
        addingMeal.forEach( function(ele){
            x = 0;
            ele.addEventListener('submit',function(e){
                e.preventDefault();
                fileInput = this.querySelector('.fileInput');
                nameInput = this.querySelector('.nameInput');
                ingrInput = this.querySelector('.ingrInput')
                priceInput = this.querySelector('.priceInput')
                // console.log(this.closest('.sections').querySelector('.cont').innerHTML);

                        

                this.closest('.sections').querySelector('.cont').innerHTML +=(`
                    <div class="meal" id='meal${x}'>
                        <span class='remove-meal'>X</span>
                        <img id='img${x}'>
                        <input type='file' />
                        <h3>${nameInput.value}</h3>
                        <p>${ingrInput.value}</p>
                        <div><input type='number' value='1' min='1' max=100 /></div>
                        <button class="order">order</button>
                        <span class='price'>${priceInput.value}</span>
                        <button class='mealEdit'>edit</button>
                        <button class='mealSaveEdit' id='mealSaveEdit'>save</button>
                    </div>
                `);
                y = x;
                if (fileInput.files.length){
                    var fileReader = new FileReader();
                    fileReader.onload = function(event){
                        document.getElementById(`img${y}`).src = event.target.result
                    };
                    fileReader.readAsDataURL(fileInput.files[0]);
                }else{
                    document.getElementById(`img${y}`).src = `./img/foods/poteto.jpg`;
                }
                // nameInput.value='';
                // ingrInput.value = '';
                // priceInput.value = '';
                this.reset();
                

                // ===========================================================
                // editting on img
                allMeals = Array.from(document.querySelectorAll('.meal'));
                allMeals.forEach(ele =>{
                    ele.querySelector('input[type=file]').addEventListener('change' , function(){
                        let myFileInput = this;
                        if(myFileInput.files.length){
                            var myReader = new FileReader();
                            myReader.addEventListener('load',function(event){
                                console.log(event.target.result);
                                console.log(ele.querySelector('img').src = event.target.result);
                            });
                            myReader.readAsDataURL(myFileInput.files[0])
                        }
                    })
                })
                
                // ===========================================================
                //Editting on meal
                mealEdit = Array.from(document.querySelectorAll('.mealEdit'));
                mealEdit.forEach(ele=>{
                    ele.addEventListener('click' , function(){
                        var parentMeal = this.closest('.meal');
                        parentMeal.querySelector('h3').setAttribute('contenteditable','true')
                        parentMeal.querySelector('p').setAttribute('contenteditable','true')
                        parentMeal.querySelector('span.price').setAttribute('contenteditable','true');
                        parentMeal.querySelector('.mealSaveEdit').style='display:inline-block';
                        this.style='display : none';
                        // save editing on meal
                        parentMeal.querySelector('.mealSaveEdit').addEventListener('click' , function(){
                            parentMeal.querySelector('h3').removeAttribute('contenteditable')
                            parentMeal.querySelector('p').removeAttribute('contenteditable')
                            parentMeal.querySelector('span.price').removeAttribute('contenteditable')
                            this.style = 'display : none;';
                            parentMeal.querySelector('.mealEdit').style = 'display : inline-block';
                        });

                    });
                    
                    removeMeal = Array.from(document.querySelectorAll('.remove-meal'));
                    removeMeal.forEach(function(ele){
                        ele.addEventListener('click' , function(){
                            this.closest('.meal').remove();
                        })
                })
                x++;
            });
            
        });

        });


        
        i++;
    })
})
// ===========================================================