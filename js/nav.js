const nav = () => {
    return(
        `
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo">
                
                <span id='titleOne'>quick</span>
                <span id='titleSecond'>food</span>
                <span class='hotLine'> <i id='hotLine'>01012534356</i> <span class='fa fa-phone'></span> </span>
            </label>
            <ul>
                <li><a href = "" class="active menuAnchor" id='menuAnchor' title='menu'> <i class="fas fa-utensils"></i> </a></li>
                <li><a href = "" class='myBag' id='myBag' title='bag'> <i class='fas fa-cart-plus'></i> </a></li>
                <li><a href = "" class='mynotif' id='mynotif' title='notifications'> <i class='fas fa-bell notific'></i> </a></li>
                <li><a href = "" class='sittings' id='sittings' title='sittings'> <i class="fas fa-cog"></i> </a></li>
                <li><a href = "" title='contact us'> <i class='fas fa-users'></i> </a></li>
            </ul>
        </nav>
        `
                // <li><a href = "">feedback</a></li>
    )
};
const navStyling = document.getElementById('nav');
navStyling.innerHTML += nav();

// =======================================================================
                                    // style
// variabls...
// var mainBackground = `#0082e6`;
var mainBackground = `#22242A`;
var logoColor = `#F9B06D`;
var navUlColor = `#19b3d3`;
var navHeight = `80px`;

// =======================================================================
navStyling.style = (`
    background: ${mainBackground};
    height: ${navHeight};
    width: 100%;
`);
// =======================================================================
const labelLogo = document.querySelector('label.logo');
labelLogo.style = (`
    color: #fff;
    font-size: 35px;
    line-height: ${navHeight};
    font-weight: bold;
    padding: 0 100px;
    `)
labelLogo.querySelector('span').style = (`
    color : ${logoColor}
    `)
// =======================================================================
const navUl = document.querySelector('nav ul');
navUl.style = (`
    float: right;
    margin-right: 25px;
`);
// =======================================================================
const lis = document.querySelectorAll('nav ul li');
lis.forEach(ele => {
    ele.style = (`
    display: inline-block;
    line-height: ${navHeight};
    margin: 0 5px;
    `)
});
// =======================================================================
const liA = document.querySelectorAll('nav ul li a');
liA.forEach(ele => {
    ele.style = (`
    color: #fff;
    font-size: 17px;
    text-transform: uppercase;
    padding: 7px 13px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    `);
});
// =======================================================================
// const active = document.getElementsByClassName('active');
// =======================================================================
const checkbtn = document.querySelectorAll('.checkbtn');
Array.from(checkbtn).forEach(ele => {
    ele.style = (`
    font-size: 30px;
    color: #fff;
    float: right;
    line-height: ${navHeight};
    margin-right: 40px;
    cursor: pointer;
    display: none;
    `)
});
// =======================================================================
// add class list to
const mainNavLinks = Array.from(document.querySelectorAll('nav ul li a'));
mainNavLinks.forEach( (ele)=>{
    ele.addEventListener('click',function(e){
        e.preventDefault();
        mainNavLinks.forEach(ele=>{
            ele.classList.remove('active')
        });
        this.classList.add('active')
    })
});


// =======================================================================
