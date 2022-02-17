function select(){
    
    
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    passOne = document.getElementById("passOne").value;
    passTwo = document.getElementById("passTwo").value;
    username = document.getElementById("userTwo").value;
    if (firstName==""||lastName==""||email==""||username==""||phone==""||passOne==""||passTwo=="") {
        if (firstName=="") {
            document.getElementById('fnameInvalid').innerHTML = " **invalid First name**";
            document.getElementById('fnameInvalid').style.color = "red"
        }   
        if (lastName=="") {
            document.getElementById('lnameInvalid').innerHTML = " **invalid last name**"
            document.getElementById('lnameInvalid').style.color = "red"
    
        }   
        if (email=="") {
            document.getElementById('emailInvalid').innerHTML = " **invalid email** "
            document.getElementById('emailInvalid').style.color = "red"
    
        }   
        if (username=="") {
            document.getElementById('usernameInvalid').innerHTML = " **invalid username** "
            document.getElementById('usernameInvalid').style.color = "red"
    
        } 
        if (phone=="") {
            document.getElementById('phoneInvalid').innerHTML = " **invalid phone name**"
            document.getElementById('phoneInvalid').style.color = "red"
    
        }   
        if (passOne=="") {
            document.getElementById('passwordInvalid').innerHTML = " **invalid password**"
            document.getElementById('passwordInvalid').style.color = " red"
    
        } 
        if (passTwo=="") {
            document.getElementById('repasswordInvalid').innerHTML = " **invalid  name**"
            document.getElementById('repasswordInvalid').style.color = "red"
    
        }
        return false;
    }


    
    
    
   


    










}