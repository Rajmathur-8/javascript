// document.getElementById('owl').onclick = function(){
//     alert("Owl Clicked")
// }
// document.getElementById('owl').addEventListener('click',function(){
//     alert("Owl")
//     },false)    
//M3 -> attachEvent()
// M4 -> jQuery - on

// document.getElementById('owl').addEventListener('click',function(e){
// console.log(e);
// },false)

// Events --> type, timestamp , defaultPrevented
//            target,toElement,srcElement,currentTarget
//            clientX,clientY, screenY, screenX
//            altKey, ctrlKey, shiftKey, keyCode

// document.getElementById('images').addEventListener('click',function(e){
//     console.log("clicked inside the ul");
// },false)


// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("Owl clicked");
//     e.stopPropagation();
// },false)
// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault()
//     console.log("google clicked");
// },false)

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    // removeIt.parentNode.removeChild(removeIt)
},false)
