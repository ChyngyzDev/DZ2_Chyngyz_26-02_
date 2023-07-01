let box = document.querySelector('#child');

let positionY = 0
let positionX = 0

const move = () => {
  if(positionX < 400 && positionY === 0 ) {
    positionX += 16
    box.style.left = `${positionX}px`
    setTimeout(move, 100)
  }else if(positionX >= 400 && positionY < 400){
    positionY +=16
    box.style.top = `${positionY}px`
    setTimeout(move, 100)
  }else if(positionX >= 0 && positionY >= 400){
    positionX -=16
    box.style.left = `${positionX}px`
    setTimeout(move, 100)
  }
  else if(positionX <= 0 && positionY >= 0){
    positionY -=16
    box.style.top = `${positionY}px`
    setTimeout(move, 100)
  }
}
move()