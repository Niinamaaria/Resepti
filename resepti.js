function resepti() {

    let resepti1= "Kanakeitto";
    let resepti2= "Jauhelihavuoka";
    let resepti3= "Tofusalaatti"; 
    let out= "";

        if (document.getElementById("kana").checked == true && document.getElementById("normaali").checked == true)
        {
            out = resepti1;
        }
    
        if (document.getElementById("kasvis").checked == true && document.getElementById("helppo").checked == true) 
        {
            out = resepti3;
        }

        if (document.getElementById("liha").checked == true && document.getElementById("vaativa").checked == true)
        {
        out = resepti2;
        }

    document.getElementById("out").innerHTML = out;
}


