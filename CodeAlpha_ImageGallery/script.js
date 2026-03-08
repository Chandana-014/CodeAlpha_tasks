let images = document.querySelectorAll(".gallery-item")
let lightbox = document.getElementById("lightbox")
let lightboxImg = document.getElementById("lightbox-img")
let closeBtn = document.querySelector(".close")

let current = 0

images.forEach((img,index)=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex"
lightboxImg.src = img.src
current = index
})
})

closeBtn.onclick = ()=>{
lightbox.style.display="none"
}

document.getElementById("next").onclick = ()=>{
current++
if(current>=images.length) current=0
lightboxImg.src = images[current].src
}

document.getElementById("prev").onclick = ()=>{
current--
if(current<0) current=images.length-1
lightboxImg.src = images[current].src
}

function filterSelection(category){
let items=document.querySelectorAll(".gallery-item")

items.forEach(item=>{
if(category=="all" || item.classList.contains(category))
item.style.display="block"
else
item.style.display="none"
})
}