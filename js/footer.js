let mainFooter = document.getElementById('footer');

// =================================================================
// returne links
const footerLinks = () => {
    return(`
    <div class='footerLinksContent' id='footerLinksContent'>
        <ul>
                <li><a href = "" class="active menuAnchor" id='menuAnchor' title='menu'> MENU </a></li>
                <li><a href = "" class='myBag' id='myBag' title='bag'> BAG </a></li>
                <li><a href = "" title='contact us'> CONTACT US </a></li>
                <li><a href = "" title='ABOUT US'> ABOUT US </a></li>
        </ul>
    </div>
    `)
}
// =================================================================
const footerContacts = () => {
    return(`
    <div class='footerContactsCont'>
        <div class='footerContactsIcon'>
            <a href = "" > <i class="fab fa-facebook"></i> </a>
            <a href = ""> <i class="fab fa-whatsapp"></i> </a>
            <a href = ""> <i class="fab fa-instagram-square"></i> </a>
            <a href = ""> <i class="fab fa-twitter"></i> </a>
        </div>
        <div>GET IN TOUCH</div>
    </div>
    `)
}
// =================================================================
const footerCopyRight = () => {
    return(`
    <div class='footerCopyRightCont'>
        All Copy Rights <span class='right'>&copy;</span> Reserved By Mohamed Ahmad
    </div>
    `)
}
// =================================================================
const footerContent = () => {
    return(`
        
        ${footerLinks()}
        ${footerContacts()}
        ${footerCopyRight()}
    `)
};
mainFooter.innerHTML = footerContent();