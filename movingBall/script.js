const ball = document.getElementById('ball');

var counter1=0, counter2=0;

document.addEventListener('keydown', function(val){
    const key = val.key;
    console.log(counter2);
    if(key=='w') {
        counter1-=3;
        ball.style.transform = `translate(${counter2}px, ${counter1}px)`;
    } else if (key=='s') {
        counter1+=3;
        ball.style.transform = `translate(${counter2}px, ${counter1}px)`;
    } else if (key=='a') {
        counter2-=3;
        ball.style.transform = `translate(${counter2}px, ${counter1}px)`;
    } else if(key=='d') {
        counter2+=3;
        ball.style.transform = `translate(${counter2}px, ${counter1}px)`;
    }
});

// ball.style.transform = `translateX(100px)`;