const nav = () => {
    return(
        `
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo">quick <span>food</span></label>
            <ul>
                <li><a href = "" class="active">menue</a></li>
                <li><a href = "">Mybag</a></li>
                <li><a href = "">contact</a></li>
                <li><a href = "">about</a></li>
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
