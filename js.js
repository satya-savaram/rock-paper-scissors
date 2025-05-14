function startgame(){
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');

}




let roundcount;
function play(){
    document.getElementById('section2').classList.add('hidden');
    document.getElementById('section3').classList.remove('hidden');
    roundcount = parseInt(document.getElementById('round').value);
    if(isNaN(roundcount) || roundcount<=0){
        document.getElementById('head').innerHTML="enter number greater then 0";
        document.getElementById('section3').classList.add('hidden');
        document.getElementById('section4').classList.remove('hidden');

    }
}


let userscore=0;
let computerscore=0;
let iteration=0;
function maingame(userchoice){
    document.getElementById('num').innerText = ` ${iteration + 1} of ${roundcount}`;
    let computerchoice=getcomputer();
    document.getElementById('userans').innerHTML=userchoice;
    let result=win(userchoice,computerchoice);
    if(result==='user'){
        userscore++;
        document.getElementById('user').innerHTML=userscore;
        document.getElementById('roundwinner').innerHTML='USER';
    }
    else if(result==='computer'){
        computerscore++;
        document.getElementById('computer').innerHTML=computerscore;
        document.getElementById('roundwinner').innerHTML='COMPUTER';

    }
    else{
        document.getElementById('roundwinner').innerHTML='TIE';

    }
    iteration++;
    if(iteration===roundcount){
        finalwinner();
    }
}

function getcomputer(){
    let list=['rock','paper','scissors'];
    let c=list[Math.floor(Math.random()*3)];
    document.getElementById('computerans').innerHTML=c;;
    return c
}

function win(userchoice,computerchoice){
    if(userchoice===computerchoice){
        return 'draw';
    }
    else if((userchoice==='rock' && computerchoice==='paper')||
            (userchoice==='paper' && computerchoice==='scissors') || 
            (userchoice==='scissors' && computerchoice==='rock')){
        return 'computer';
    }
    else{
        return 'user';
    }
}

function finalwinner(){
    document.getElementById('section3').classList.add('hidden');
    document.getElementById('section4').classList.remove('hidden');
    if(userscore>computerscore){
        let name=document.getElementById("name").value;
        document.getElementById("winnerofgame").innerHTML=name;
    }
    else if(userscore<computerscore){
        document.getElementById("winnerofgame").innerHTML='COMPUTER';

    }
    else{
        document.getElementById("winnerofgame").innerHTML='TIE';

    }

}
 function restart(){
        userscore = 0;
        computerscore = 0;
        iteration = 0;
        document.getElementById('user').innerHTML = '0';
        document.getElementById('computer').innerHTML = '0';
        document.getElementById('userans').innerHTML = '';
        document.getElementById('computerans').innerHTML = '';
        document.getElementById('roundwinner').innerHTML = '';
        document.getElementById('winnerofgame').innerHTML = '';
        document.getElementById('section4').classList.add('hidden');
        document.getElementById('section1').classList.remove('hidden');
        document.getElementById('round').value = '';
        document.getElementById('num').innerHTML = '';
        document.getElementById('name').value = '';

 }