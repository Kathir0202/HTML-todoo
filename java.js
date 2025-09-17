var input = document.getElementById("input")
var btn = document.getElementById("btn")

var list = document.getElementById("list")

function update(){

    var listItem = document.createElement("li")
    listItem.innerHTML=textContent= "<input class='strik' type='checkbox' onclick='strikout(event)'>" + input.value +"<button class='bttn' onclick='deleting(event)'>X</button>"
    list.append(listItem)
}

function deleting(event){
    var bttn=document.getElementsByClassName("bttn") 

    event.target.parentElement.remove()
}

function strikout(event){
        var strik=document.getElementsByClassName("strik")

        event.target.remove()

}

