let val=0, val1=0;
let color_val = localStorage.getItem('color_val');

let colors = ['red', 'blue', 'beige', 'mint', 'yellow'];
console.log(colors[color_val]);

function updateHeading1(){
    document.getElementById("head1").innerText = "Update " + val;
    console.log(val);
    val++;
}

function updateHeading2(){
    document.getElementById("head2").innerText = "Update Heading " + val1;
    // console.log(val1);
    val1++;
}

console.log(1);
// window.setTimeout(10000);
console.log(2);

function activate(){
    setInterval(updateHeading1, 1000);
    setInterval(updateHeading2, 1000);
}
    
function toggle_color(){
    document.getElementById('head1').style.color = colors[color_val % 5];
    window.localStorage.setItem('color_val', color_val++);
    // color_val++;
}


let element = document.getElementById('btn1');
element.addEventListener("mouseenter", toggle_color, true);