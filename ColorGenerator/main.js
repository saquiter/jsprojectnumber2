(function(){
    let btnSwitch = document.getElementById("btnSwitch");

    btnSwitch.onclick = () =>{
            let color = "#";
            let letters = "ABCDEF0123456789";
            for(let i = 0; i < 6;++i){
                color+=
                letters[Math.floor(Math.random() * letters.length)];
            }
        document.body.style.backgroundColor = color;
        document.getElementById("res").innerHTML = color;
        document.getElementById("res").onclick = () =>{
            const text = document.createElement("textarea");
            text.value = document.getElementById("res").textContent;
            document.body.appendChild(text);
            text.select();
            document.execCommand('copy');
            document.body.removeChild(text);
            
        }
    }
})();