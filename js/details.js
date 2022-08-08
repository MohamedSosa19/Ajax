 


var param = new URLSearchParams(location.search);
var recipeId=param.get("rid");
var receipeDetails={};
var recipeImg=document.getElementById("recepiImage")
var ingradients=[]


getDetails()
function getDetails(){
    var httpRequest=new XMLHttpRequest();
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
        if(httpRequest.readyState==4 && httpRequest.status==200){
            receipeDetails=JSON.parse(httpRequest.response).recipe;
            recipeImg.src=receipeDetails.image_url;
            ingradients=receipeDetails.ingredients;
            displayIngredients()
        }
    })
}


function displayIngredients(){
    
    var DeatilsContianer=''
    for(var i=0;i<ingradients.length;i++){
        DeatilsContianer+=`<li>${ingradients[i]}</li>`
    }

    document.getElementById("UlCon").innerHTML=DeatilsContianer
}