function coloreRandom(){
    let caratteri = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let rgb = '#';
    for(let i = 0; i<6; i++){
        rgb += caratteri[Math.trunc(Math.random()*caratteri.length)];
    }
    return rgb;
}

function assegnaColoreTitolo(){
    let target = document.getElementById('titolo');
}