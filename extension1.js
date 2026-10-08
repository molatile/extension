let myleads=[]
const btn1=document.querySelector("#btn1")//save btn
const btn2=document.querySelector("#btn2")//delete btn
const btn3=document.querySelector("#btn3")//tab btn

const input=document.querySelector("#input")
const ul=document.querySelector("#ul")

let storage=JSON.parse(localStorage.getItem("myleads"))

if(storage){
    myleads=storage
    render(myleads)

}

btn3.addEventListener('click',()=>{
   
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        console.log(tabs[0].url)
        render(myleads)
    })
    
})

btn1.addEventListener("click",()=>{
    let data=input.value
    myleads.push(data)
    localStorage.setItem("myleads",JSON.stringify(myleads))

    render(myleads)
})

btn2.addEventListener("click",()=>{
    localStorage.clear()
    myleads=[]
    render(myleads)
   
})

function render(leads){
    let lines=""
    for(let i=0;i<leads.length;i++){
        lines += `<li> <a target="_blank" href="${leads[i]}">${leads[i]} </a> </li>`

    }
    input.value=""
    ul.innerHTML=lines

}


