const arr = ['app', 'apple', 'stick', 'public', 'property', 'append'];
inp = 'app'

arr.forEach(c =>{
    if(c.startsWith(inp)){
        console.log(c);
        document.getElementById('content').innerHTML += c + "<br>";
    }
})