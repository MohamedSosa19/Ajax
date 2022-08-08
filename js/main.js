

var Recipts=[]
var links=document.getElementsByClassName("nav-link")
for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
        var currentmeal=e.target.text;
        getRecipes(currentmeal)

    })
}
getRecipes("pizza")
function getRecipes(meal){
    var httpRequest=new XMLHttpRequest();
    
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
        if(httpRequest.readyState==4 && httpRequest.status==200){
            Recipts=JSON.parse(httpRequest.response).recipes
            displayRecipes()
        }
    })
}



function displayRecipes(){
    var RecipeContainer=''
    for(var i=0;i<Recipts.length;i++){
        RecipeContainer+=
        `
            <div class="col-md-3 my-4">
                <img class="w-100 imageRecipe" src="${Recipts[i].image_url}"
                <h5 class="mt-3">${Recipts[i].title}</h5>
                <br>
                <button class="btn btn-info">
                    <a class="text-white " target="_blank" href="${Recipts[i].source_url}">Source</a>
                </button>
                <button class="btn btn-warning">
                    <a class="text-white " target="_blank" href="details.html?rid=${Recipts[i].recipe_id}">details</a>
                </button>
            </div>
        `
    }

    document.getElementById("ReceiptsRow").innerHTML=RecipeContainer
}

//********************************************************************************************************************** */


// function getPizza(){
//     return new Promise(function(resolve,reject){
//         var httpRequest=new XMLHttpRequest();
    
//         httpRequest.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza")
//         httpRequest.send();
//         httpRequest.addEventListener("readystatechange",function(){
//             if(httpRequest.readyState==4 && httpRequest.status==200){
//                 Recipts=JSON.parse(httpRequest.response).recipes
//                 console.log("pizzzzzzzzzzzzzzzzzzzzzza",Recipts)
//                 var test=true;
//                 if(test){
//                     resolve()
//                 }
//                 else{
//                     reject()
//                 }
//             }
//         })

//     })

// }

// function getPasta(){

//     return new Promise (function(callbacks){
//         var httpRequest=new XMLHttpRequest();
    
//     httpRequest.open("GET","https://forkify-api.herokuapp.com/api/search?q=pasta")
//     httpRequest.send();
//     httpRequest.addEventListener("readystatechange",function(){
//         if(httpRequest.readyState==4 && httpRequest.status==200){
//             Recipts=JSON.parse(httpRequest.response).recipes
//             console.log("pastttttttttttttttttttttttttta",Recipts)
//             callbacks()
//         }
//     })

//     })
    
// }

// function finish(){
//     console.log("Finishhhhhhhhhhhhh")
// }

// getPizza().then(function(){console.log("Success")}).catch(function(){console.log("Failed")})

// getPizza().then(function(){
//     getPasta().then(function(){
//         finish()
//     })
// })
// getPasta(function(){
//     getPizza(function(){
//         finish()
//     })
// })

//*******************************************************************************


// async function getpizza(){
//     var apiResponse=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
//     var response=await (apiResponse.json())

//     console.log(response)

// }

// getpizza()