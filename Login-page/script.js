// =-------------------loginpage scripts-----------
var password= document.querySelector(".password")
var show = document.getElementById("show")
var hide= document.getElementById("hide")

show.onclick = function()
{
    
    if(password.type=="password")
    {
        password.type="text";
        show.style.display="none"
        hide.style.display="block";

    }
    else
    {
        password.type="password"
    
       
       
    } 
}
hide.onclick = function()
{
    
    if(password.type=="password")
    {
        password.type="text";
    
    }
    else
    {
        password.type="password";
        show.style.display="block";
        hide.style.display="none";
    } 
}


// =-------------------------------------------------validation------------------------;
 
var nameerror= document.getElementById("nameerror");
var emailerror= document.getElementById("emailerror");
var  passerror= document.getElementById(" passerror");
var  confirmerror= document.getElementById(" confirmerror");
var  fixerror= document.getElementById(" fixerror");

function validationName()
{
    var name=document.getElementById("name").value;

    if(name.length == 0 )
    {
        nameerror.innerHTML='Name is required !'
        name.classList.toggle(".error")
        return false;

    }
    else if(!name.match(/^[A-za-z]*s{1}[A-za-z]*&/))
    {
        nameerror.innerHTML='Write a full name' 
        name.classList.toggle(".error")
        return false;
    }
    else
    nameerror.innerHTML='valid';
    return true;

}




