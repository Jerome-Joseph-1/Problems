var boxes = document.getElementsByClassName("topic-name")

Array.from(boxes).forEach(element => {
    horizontal_scroll(element)
});

function horizontal_scroll(element){
    let isValid = false
    let initalX;
    let position;

    element.addEventListener("mousedown", (e)=>{
        isValid = true;
        initalX = e.pageX - element.offsetLeft;    
        position = element.scrollLeft;
    })    

    element.addEventListener("mouseup", (e)=>{
        isValid = false;    
    })    
    element.addEventListener("mousemove", (e)=>{
        if (!isValid) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - initalX) * 1.5;
        element.scrollLeft = position - walk;
    })    
    element.addEventListener("mouseleave", (e)=>{
        isValid = false;
    }) 
}
function replace(t, j ,v, c){
    setTimeout(()=>{
        if(!v)
            t.innerText = t.innerText.substring(0, j) + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + t.innerText.substring(j+1, t.innerText.length)
        else
            t.innerText = t.innerText.substring(0, j) + c + t.innerText.substring(j+1, t.innerText.length)
    }, 250 + j*100)    
}
function start_change(){

    let t = document.querySelector("#refrence");
    let random = "UP FOR A CHALLENGE ?"
    let n = t.innerText.length // dont move down 
    let actual = t.innerText
    t.innerText = random


    let count = 100
    for(let i = 0; i < count; i++)
        for(let j = 0; j < n; j++){
            if(actual[i] == ' ') continue
            setTimeout(()=>{
                if(i+1 < count)
                    replace(t, j, false, '');
                else 
                    replace(t, j, true, actual[j])
            }, 500 + i*10)
        }

}

start_change()
