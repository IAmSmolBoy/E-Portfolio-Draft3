const Navbar=document.getElementById("navbar")
const DropDown=document.getElementsByClassName("DropDown")
const ThreeLines=document.getElementById("ThreeLines")
const DropDownMenu=document.getElementById("DropDownMenu")
const OtherDropDown=document.getElementsByClassName("OtherDropDown")
const OtherDropDownMenu=document.getElementById("OtherDropDownMenu")
var Dropped=false
function Dropdown(){
        if(DropDown[0].style.display!="block"){
            for(i=0;i<DropDown.length;i++){
                DropDown[i].style.display="block"
            }
        }
        else{
            setTimeout(() => {
                for(i=0;i<DropDown.length;i++){
                    DropDown[i].style.display="none"
                }
            }, 250);
        }
    for(j=0;j<OtherDropDown.length;j++){
        if(OtherDropDown[j].style.display!="block"){
            OtherDropDown[j].style.display="block"
        }
        else{
            setTimeout(() => {
                for(j=0;j<OtherDropDown.length;j++){
                    OtherDropDown[j].style.display="none"
                }
            }, 250);
        }
    }
    if(Dropped===false){
        DropDownMenu.classList.add("Dropping")
        OtherDropDownMenu.classList.add("MovingLeft")
        DropDownMenu.style.top=`${parseInt(navbar.clientHeight)}px`
        Dropped=true
        setTimeout(() => {
            DropDownMenu.classList.remove("Dropping")
            OtherDropDownMenu.classList.remove("MovingLeft")
        }, 250);
    }
    else{
        DropDownMenu.classList.add("Rising")
        OtherDropDownMenu.classList.add("MovingRight")
        DropDownMenu.style.top="0"
        Dropped=false
        setTimeout(() => {
            DropDownMenu.classList.remove("Rising")
            OtherDropDownMenu.classList.remove("MovingRight")
        }, 250);
    }
}