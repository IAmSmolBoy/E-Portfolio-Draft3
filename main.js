// Three lines button onclick opens up navbar and dropdown menu
const Navbar=document.getElementById("navbar")
const DropDown=document.getElementsByClassName("DropDown")
const ThreeLines=document.getElementById("ThreeLines")
const DropDownMenu=document.getElementById("DropDownMenu")
const OtherDropDown=document.getElementsByClassName("OtherDropDown")
const OtherDropDownMenu=document.getElementById("OtherDropDownMenu")
function Dropdown(){
    for(i=1;i<=DropDown.length;i++){
        if(DropDown[i-1].style.display!="block"){
            DropDown[i-1].style.display="block"
            DropDownMenu.style.animation="DropDown 0.25s linear"
            OtherDropDown[i-1].style.display="block"
            OtherDropDownMenu.style.animation="MoveLeft 0.25s linear"
            DropDownMenu.style.top=`${parseInt(navbar.clientHeight)}px`
        }
        else{
            for(i=1;i<=DropDown.length;i++){
                DropDown[i-1].style.display="none"
                DropDownMenu.style.animation=""
                OtherDropDown[i-1].style.display="none"
                OtherDropDownMenu.style.animation=""
            }
        }
    }
}


// Socials logo onlick, socials info pop up
const DiscordLogo = document.getElementById("discordlogo")
const GithubLogo = document.getElementById("Githublogo")



// Copy text code
function CopyText(){
    console.log("Hello")
    var copyText = document.getElementById("Email");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
