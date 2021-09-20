/*let descText = "<p>Ettor</p><p>Tvåor</p><p>Treor</p><p>Fyror</p><p>Femmor</p><p>Sexor</p><p>Bonus</p><p>Par</p><p>2 Par</p><p>Tretal</p><p>Fyrtal</p>Kåk<p>Liten</p><p>Stor</p><p>Chans</p><p>Yatzy</p>"

let descriptions = document.getElementsByClassName("description");
console.log(descriptions.length);
function assignNames(descriptions){
    descriptions.forEach(e => {
            e.innerHTML = descText;
            
    });
    
}

assignNames(descriptions);*/
let die1 = 0;
let die2 = 0;
let die3 = 0;
let die4 = 0;
let die5 = 0;
let dies = [0,0,0,0,0];
function calcScore(target){
        console.log(target)
        if (target == "Ettor"){
                console.log("true")
                let sum = 0;
                dies.forEach(e => {
                        e == 1 ? sum += 1 : sum += 0;
                        console.log(e)
                });
                return sum;
        }
        if (target == "Tvåor"){
                console.log("true")
                let sum = 0;
                dies.forEach(e => {
                        e == 2 ? sum += 2 : sum += 0;
                        console.log(e)
                });
                return sum;
        }
        if (target == "Treor"){
                console.log("true")
                let sum = 0;
                dies.forEach(e => {
                        e == 3 ? sum += 3 : sum += 0;
                        console.log(e)
                });
                return sum;
        }
        if (target == "Fyror"){
                console.log("true")
                let sum = 0;
                dies.forEach(e => {
                        e == 4 ? sum += 4 : sum += 0;
                        console.log(e)
                });
                return sum;
        }
        if (target == "Femmor"){
                console.log("true")
                let sum = 0;
                dies.forEach(e => {
                        e == 5 ? sum += 5 : sum += 0;
                        console.log(e)
                });
                return sum;
        }
        if (target == "Sexor"){
                console.log("true")
                let sum = 0;
                dies.forEach(e => {
                        e == 6 ? sum += 6 : sum += 0;
                        console.log(e)
                });
                return sum;
        }
        if (target == "Par"){
                let sum = 0;
                let arr = dies;
                arr.sort().reverse();
                let counter = 0;
                for (let i = 0; i < arr.length - 1; i++){
                        if (arr[i] == arr[i+1]){
                                sum += (arr[i] + arr[i+1]);
                                counter += 1;
                        }
                        if (counter > 0) return sum;
                }
                return sum;
        }
        if (target == "2 Par"){
                let sum = 0;
                let num = 0;
                let taken = true;
                let arr = dies;
                arr.sort().reverse();
                let counter = 0;
                for (let i = 0; i < arr.length - 1; i++){
                        if (arr[i] == arr[i+1] && arr[i] != num){
                                sum += (arr[i] + arr[i+1]);
                                counter += 1;
                        }
                        if (counter == 1 && taken){
                                num = arr[i];
                                taken = false;
                        }
                        if (counter > 1) return sum;
                }
                return 0;
        }
        if (target == "Tretal"){
                let sum = 0;
                let arr = dies;
                arr.sort().reverse();
                let counter = 0;
                if (arr[0] == arr[1] && arr[1] == arr[2]){
                        sum = arr[0] * 3;
                } else if (arr[1] == arr[2] && arr[2] == arr[3]){
                        sum = arr[1] * 3;
                } else if (arr[2] == arr[3] && arr[3] == arr[4]){
                        sum = arr[2] * 3;
                }
                return sum;
        }
        if (target == "Fyrtal"){
                let sum = 0;
                let arr = dies;
                arr.sort().reverse();
                let counter = 0;
                if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3]){
                        sum = arr[0] * 4;
                } else if (arr[1] == arr[2] && arr[2] == arr[3] && arr[3] == arr[4]){
                        sum = arr[1] * 4;
                }
                return sum;
        }
        if (target == "Kåk"){
                let sum = 0;
                let arr = dies;
                arr.sort().reverse();
                if ((arr[0] == arr[1] && arr[1] == arr[2] && arr[3] == arr[4]) || (arr[0] == arr[1] && arr[2] == arr[3] && arr[3] == arr[4])){
                        sum = arr.reduce((a, b) => a + b, 0);
                }

                return sum;

        }
        if (target == "Liten"){
                let sum = 0;
                let arr = dies;
                arr.sort().reverse();
                if (arr[0] == 5 && arr[1] == 4 && arr[2] == 3 && arr[3] == 2 && arr[4] == 1){
                        sum = 15;
                }
                return sum;
        }
        if (target == "Stor"){
                let sum = 0;
                let arr = dies;
                arr.sort().reverse();
                if (arr[0] == 6 && arr[1] == 5 && arr[2] == 4 && arr[3] == 3 && arr[4] == 2){
                        sum = 20;
                }
                return sum;
        }
        if (target == "Chans"){
                let arr = dies;
                return arr.reduce((a, b) => a + b, 0)

        }
        if (target == "Yatzy"){
                let sum = 0;
                let arr = dies;
                arr.sort().reverse();
                if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3] && arr[3] == arr[4]){
                        sum = 50;
                }
                return sum;
        }
        if (target == "undefined"){
                return 0;
        }
}

let fBut = document.getElementById("p1But");
let sBut = document.getElementById("p2But");
let tBut = document.getElementById("p3But");
fBut.addEventListener('click', () => {
        let feldus = document.querySelectorAll("p");
        let sum = 0;
        for (let i = 0; i < 16; i++){
                sum += parseInt(feldus[i].innerText);
        }
        document.getElementById('p1Sum').innerText = sum;
})
sBut.addEventListener('click', () => {
        let feldus = document.querySelectorAll("p");
        let sum = 0;
        for (let i = 16; i < 32; i++){
                sum += parseInt(feldus[i].innerText);
        }
        document.getElementById('p2Sum').innerText = sum;
})
tBut.addEventListener('click', () => {
        let feldus = document.querySelectorAll("p");
        let sum = 0;
        for (let i = 32; i < 48; i++){
                sum += parseInt(feldus[i].innerText);
        }
        document.getElementById('p3Sum').innerText = sum;
})

let fields = document.querySelectorAll("p");
fields.forEach(e => {
        e.addEventListener('click', () => {
                if (e.innerText == "Bonus"){
                        let sum = 0;
                        for (let i = 0; i < 6; i++){
                                sum += parseInt(e.parentElement.children[i].innerText);
                        }
                        sum >= 63 ? e.innerText = "50" : e.innerText = "0";
                        
                } else {
                        e.innerText = calcScore(e.innerText);
                }
                dies = [0,0,0,0,0];
                first.innerHTML = '<img src="images/diceRoll.png">'
                second.innerHTML = '<img src="images/diceRoll.png">'
                third.innerHTML = '<img src="images/diceRoll.png">'
                fourth.innerHTML = '<img src="images/diceRoll.png">'
                fifth.innerHTML = '<img src="images/diceRoll.png">'


        })
});



let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');

first.addEventListener('click', () => {
        let randnum = Math.floor((Math.random()*6))+1;
        console.log(randnum)
        dies[0]=randnum;
        first.innerHTML = '<img src="images/diceRoll.png">'
        setTimeout(function(){ 
                first.innerHTML = `<img src="images/dice${randnum}.png"></img>`;
        }, 700);
})
second.addEventListener('click', () => {
        let randnum = Math.floor((Math.random()*6))+1;
        console.log(randnum)
        dies[1]=randnum;
        second.innerHTML = '<img src="images/diceRoll.png">'
        setTimeout(function(){ 
                second.innerHTML = `<img src="images/dice${randnum}.png"></img>`;
        }, 700);
})
third.addEventListener('click', () => {
        let randnum = Math.floor((Math.random()*6))+1;
        console.log(randnum)
        dies[2]=randnum;
        third.innerHTML = '<img src="images/diceRoll.png">'
        setTimeout(function(){ 
                third.innerHTML = `<img src="images/dice${randnum}.png"></img>`;
        }, 700);
})
fourth.addEventListener('click', () => {
        let randnum = Math.floor((Math.random()*6))+1;
        console.log(randnum)
        dies[3]=randnum;
        fourth.innerHTML = '<img src="images/diceRoll.png">'
        setTimeout(function(){ 
                fourth.innerHTML = `<img src="images/dice${randnum}.png"></img>`;
        }, 700);
})
fifth.addEventListener('click', () => {
        let randnum = Math.floor((Math.random()*6))+1;
        console.log(randnum)
        dies[4]=randnum;
        fifth.innerHTML = '<img src="images/diceRoll.png">'
        setTimeout(function(){ 
                fifth.innerHTML = `<img src="images/dice${randnum}.png"></img>`;
        }, 700);
})