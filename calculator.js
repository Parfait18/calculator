

function btn_click(obj){

    var elementId= obj.getAttribute('id');


    //je recupère l'attribut value du bouton appuyé
    var val= document.getElementById(elementId).value;

    //je recupère le dernier contenu de l'ecran input
    var ecran= document.getElementById("operation_input");
    var content = ecran.value;
   
    //je verifie si la taille du content a atteint la taille maxi de caractère
    if(content.length<=ecran.getAttribute('maxlength')){
        console.log(content.length);
        console.log(ecran.getAttribute('maxlength'));

         document.getElementById("operation_input").value+=val;
    }
    
    
   //  set_color(val);
    
}

function equal_click(){
    //je recupère le contenu de l'input pour le calcul
   var operation = document.getElementById('operation_input').value
  
        // console.log(eval(operation).valueOf());
       
    try{
        var result = eval(operation);
        if(isFinite(result))
        {
            document.getElementById('operation_input').value=result;
              
        }else {   document.getElementById('operation_input').value="error"; 
                 setTimeout(function(){ document.getElementById('operation_input').value="" }, 500);
        }

    }catch(error)
    {

        //j'affiche pendant 500ms le text Invlaid calcul puis j'efface l'ecran
        document.getElementById('operation_input').value="Invalid calcul"; 
        setTimeout(function(){ document.getElementById('operation_input').value="" }, 500);
    }
    
       
             
   
}
function  clear_click(){
    document.getElementById('operation_input').value="";
}

function del_click(){
    //j'efface le denier caratère du contenu de l'input
    let content=document.getElementById('operation_input').value;
    document.getElementById('operation_input').value = content.substring(0, content.length -1);

}
function set_color(text){

    if(text=="*" ||text=="-" || text=="%" || text=="+" ||text=="/"){

       //  document.getElementById('operation_input').value+="<span class='clr1'>"+text+"</span>";
    }else{
       // document.getElementById("operation_input").value+=text;
    }
   

}