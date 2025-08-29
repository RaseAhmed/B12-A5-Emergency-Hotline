
function getelement(id){
    const element =document.getElementById(id);
    return element;
}

let heartCount = 0;
const heartCounter = document.getElementById("heart-count");
const hearts = document.querySelectorAll(".heart-click");

for (const heart of hearts) {
  heart.addEventListener("click", function()  {
    heartCount++;
    heartCounter.innerText = heartCount;
  });
}


const callBtns = document.getElementsByClassName("call-btn")


for(let callButton of callBtns ){
    callButton.addEventListener("click",function(){
        const productTitle = callButton.parentNode.parentNode.children[0].children[1].children[0].innerText;

        // console.log(productTitle)
        const productNumber = callButton.parentNode.parentNode.children[0].children[2].children[0].innerText;
        const time = new Date().toLocaleTimeString();
        const historyContainer=getelement("history-container");
        const newCart = document.createElement("div");
        newCart.innerHTML=`
        <div class="gap-5 mr-3 mt-3 bg-slate-200 p-5 rounded-xl flex justify-between">
         <div>  
         <h1 class="font-bold">${productTitle}</h1>
            <p class="text-gray-400">${productNumber}</p>
        </div>
            <div>
            <p class="text-sm text-black">${time}</p>
        </div>
        </div>
        
        `
        historyContainer.append(newCart);
    })

}

let coinCount = 100;
const coinCounter = document.getElementById("coin");

const callButtons = document.querySelectorAll(".call-btn");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const serviceCard = btn.parentNode.parentNode;
 
    const serviceName = serviceCard.children[0].children[1].children[0].innerText;
    const serviceNumber = serviceCard.children[0].children[2].children[0].innerText;

    if (coinCount >= 20) {
      alert(`Calling ${serviceName} at ${serviceNumber}`);
      coinCount -= 20;
      coinCounter.innerText = coinCount;
    } else {
      alert("Not enough coins to make the call. You need 20 coins.");
    }
  });
}



const historyContainer = document.getElementById("history-container");
const clearBtn = document.getElementById("btn-clear");

clearBtn.addEventListener("click", function() {
  historyContainer.innerHTML = "";
});

let copyCount = 0;
const copyCounter = document.getElementById("add-copy");
const copyButtons = document.querySelectorAll(".copy-btn"); 

for (const copyBtn of copyButtons) {
  copyBtn.addEventListener("click", function () {
    const serviceCard = copyBtn.parentNode.parentNode;
    const number = serviceCard.children[0].children[2].children[0].innerText;

    navigator.clipboard.writeText(number).then(function () {
      alert(`Copied number: ${number}`);
      copyCount++;
      copyCounter.innerText = copyCount;
    });
  });
}


