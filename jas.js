let randx = 0
let randy = 0

const mybut = document.getElementById('but')
const anim = document.getElementById('snake')


let speedx=0
let speedy=0

document.addEventListener('keydown', function(event) {
    
    if (event.key === 'ArrowRight') { 
      speedx = 1
      speedy=0
    }
    else if (event.key === 'ArrowLeft') { 
        speedx = -1
        speedy=0
      }
    else if (event.key === 'ArrowUp') { 
        speedx = 0
        speedy=-1
      }
    else if (event.key === 'ArrowDown') { 
        speedx = 0
        speedy=1
      }
  });

var newDiv = document.getElementById('div');

let IDS = 0

var snek_arr = [anim]

function startX(){
    let timer = null 
    let x = 0
    let y = 0
    timer = setInterval(frame,100)

    function frame(){
        if(Math.abs(Math.round(x)-randx)<=0 && Math.abs(Math.round(y)-randy)<=0){
            bigen()
            IDS+=1
            
            var snek1 = document.createElement('div')
            snek1.style.backgroundColor='green'
            snek1.style.height='20px'
            snek1.style.width='20px'
            snek1.style.position='absolute'
            snek1.style.border='1px solid black'
            snek1.id=IDS
            document.body.appendChild(snek1);
            snek_arr.push(snek1)
        }
        if(x>=25||x<0||y>=25||y<0){
            clearInterval(timer)
            window.alert('game over')
        }
        else{
            
            
            for(let i = snek_arr.length-1; i > 0; i-=1){
                let coordx1 = parseInt(snek_arr[i-1].style.left,10)+speedx*20/IDS+'px'
                let coordy1 = parseInt(snek_arr[i-1].style.top,10)+speedy*20/IDS+'px'
                if(i>1){
                    coordx1 = snek_arr[i-1].style.left
                    coordy1 = snek_arr[i-1].style.top
                }
                
                if(speedx==1){
                    snek_arr[i].style.left = coordx1
                    snek_arr[i].style.top = coordy1
                }
                if(speedy==1){
                    snek_arr[i].style.top = coordy1
                    snek_arr[i].style.left = coordx1
                }
                if(speedx==-1){
                    snek_arr[i].style.left = coordx1
                    snek_arr[i].style.top = coordy1
                }
                if(speedy==-1){
                    snek_arr[i].style.top = coordy1
                    snek_arr[i].style.left = coordx1
                }
                
                let distx = parseInt(snek_arr[i-1].style.left,10)-parseInt(anim.style.left,10)
                let disty = parseInt(snek_arr[i-1].style.top,10)-parseInt(anim.style.top,10)

                if (Math.abs(distx)<8 && Math.abs(disty)<8 && i>2){
                    clearInterval(timer)
                    window.alert('game over')
                }
            
            x+=speedx/IDS
            anim.style.left = 8+20*x+'px';
    
            y+=speedy/IDS
            anim.style.top = 8+20*y+'px';
                
            }
        }
    }
}

startX()

function bigen(){
    randx = Math.floor(Math.random()*25)
    randy = Math.floor(Math.random()*25)

    newDiv.style.position = "relative";
    newDiv.style.top = `${20*randy-36}px`;
    newDiv.style.left = `${20*randx}px`;
    document.body.appendChild(newDiv);
}

document.getElementById('but').onclick = bigen

