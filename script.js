
function login()
{
    let names=document.getElementById("name").value;
let passwords=document.getElementById("psd").value;

    if(names=="karthik" && passwords=="1234")
    {
       alert("login successfull");
    }
    else{
        alert("login fail please enter valid details");
    }
}
