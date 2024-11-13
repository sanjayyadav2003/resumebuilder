

function addNewWEField() {
    // Create a new textarea element
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    // Insert the new textarea before the "Add" button
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

//generate cv

function generateCV(){
    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("linT").innerHTML=document.getElementById("linkedinField").value;
    document.getElementById("gitT").innerHTML=document.getElementById("githubField").value;
    
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let wes=document.getElementsByClassName('weField')
    let str=''
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;
    
    // document.getElementById("aqT").innerHTML=document.getElementsByClassName("aqField").value;
    document.getElementById("projectT").innerHTML=document.getElementById("ProjectAdd").value;
     
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    
}    
function printCV(){
    window.print();
}
