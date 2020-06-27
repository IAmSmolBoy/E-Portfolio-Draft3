const Navbar=document.getElementById("navbar")
const DropDown=document.getElementsByClassName("DropDown")
const ThreeLines=document.getElementById("ThreeLines")
const DropDownMenu=document.getElementById("DropDownMenu")
const OtherDropDown=document.getElementsByClassName("OtherDropDown")
const OtherDropDownMenu=document.getElementById("OtherDropDownMenu")
var Dropped=false
function Dropdown(){
    for(i=0;i<DropDown.length;i++){
        if(DropDown[i].style.display!="block"){
            DropDown[i].style.display="block"
        }
        else{
            DropDown[i].style.display="none"
        }
    }
    for(j=0;j<OtherDropDown.length;j++){
        if(OtherDropDown[j].style.display!="block"){
            OtherDropDown[j].style.display="block"
        }
        else{
            OtherDropDown[j].style.display="none"
        }
    }
    if(Dropped===false){
        DropDownMenu.style.animation="DropDown 0.25s linear"
        DropDownMenu.style.top=`${parseInt(navbar.clientHeight)}px`
        OtherDropDownMenu.style.animation="MoveLeft 0.25s linear"
        Dropped=true
    }
    else{
        DropDownMenu.style.animation=""
        OtherDropDownMenu.style.animation=""
        Dropped=false
    }
}