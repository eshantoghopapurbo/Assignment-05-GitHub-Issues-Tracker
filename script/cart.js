
const githubContainer =document.getElementById("githubContainer")
const count = document.getElementById("count")


let allCards = []
async function loadCards(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    allCards = (data.data);
    displayCards(allCards)
}    
function displayCards(cards){
  count.innerText = cards.length
  githubContainer.innerHTML = ""
    // console.log(cards);
 cards.forEach((item) =>{
   // change border color
    const statusColor =
      item.status === "open" ? "border-t-green-500" : "border-t-purple-500";
  
    console.log(item);
    const cardDiv =document.createElement("div")
    cardDiv.onclick = () => "loadWordDetail(${Word.id})"; 
    cardDiv.className =`card bg-white border-t-4  ${statusColor}  shadow-sm`;
    cardDiv.innerHTML =`<div class="mx-4 mt-4 ">
     <div onclick="my_modal_5.showModal()" class="flex justify-between gap-5 ">
     <img src="assets/Open-Status.png" alt="">
     <button class="bg-[#FEECEC] text-red-500 px-4 ">${item.priority}</button> 
     </div>
        </div>
        <div class="card-body ">
          <div class="">
        <h2 class="card-title font-semibold text-xl">${item.title}</h2>
        <p class="text-[#64748B] text-xl">${item.description}</p>
        </div>
        <div class="card-actions gap-2 my-3">
          <button class="btn bg-yellow-300 text-[red] h-8 rounded-2xl"><i class="fa-solid fa-bug"></i>${item.labels[0]}</button>
            <button class="btn bg-yellow-300 text-[red] h-8 px-4 rounded-2xl"><i class="fa-solid fa-circle-question"></i>${item.labels[1]}</button>
          </div>
          <hr class="my-3">
          <div>
            <p class="text-[#64748B]">${item.author}</p>
            <p class="text-[#64748B]">${item.createdAt}</p> 
          </div>
        </div>`
        githubContainer.appendChild(cardDiv);   
   
    });    
}
loadCards();

// 2.click btn kaj      
let currentTab ="all";
const tabActive =["bg-[#4A00FF]","border-white", "text-[#FFFFFF]"]; 
const tabInactive =["bg-white","text-black", "border-state-200"];
function allTab (tab){
  console.log(tab); 
   const tabs = ["all","open", "Closed" ];
   for (const toper of tabs){
    const tabName = document.getElementById("tab-" + toper)
    console.log(tabName);
    if(toper === tab){
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    }else{
      tabName.classList.add(...tabInactive);
      tabName.classList.remove(...tabActive);
    }
   }
} 

async function buttonClick () {
  document.getElementById("tab-all").addEventListener('click', function(){
    displayCards(allCards)
  })

  document.getElementById("tab-open").addEventListener('click', function(){
    const openCard = allCards.filter(item => item.status === "open");
    displayCards(openCard)
  })
  document.getElementById('tab-Closed').addEventListener('click', function(){
    const closeCard = allCards.filter(item => item.status === 'closed');
    displayCards(closeCard)
  })
}

buttonClick()
allTab(currentTab);  

