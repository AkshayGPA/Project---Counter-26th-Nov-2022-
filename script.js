// var countNumber = document.getElementById('num')
// // console.log(num.innerText);

// var button = document.getElementById('increment');

// function increment(){
//     console.log('increment');
// }

// button.onclick = increment();

let count = 0;

document.getElementById('decrement').onclick = function(){
    if (count <= 0){
        alert('Error : Cannot go below 0')
    }
    else{
        count -= 1;
        document.getElementById('num').innerHTML = count;
    }
}

document.getElementById('increment').onclick = function(){
    count += 1;
    document.getElementById('num').innerHTML = count;
}

document.getElementById('reset').onclick = function(){
    count = 0;
    document.getElementById('num').innerHTML = count;
}

function error(){

}