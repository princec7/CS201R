var cities = ["Alpine", "Altamont", "Alton", "Altonah"];
    function showHints(str) {
        console.log("I'm here");
        var list="<ul>";
        for (i=0; i<cities.length; i++) {
            if(cities[i].indexOf(str)===0) {
                list+="<li> "+cities[i]+"</li>";
            }
        }
        list+="</ul>";
        document.getElementById("sug").innerHTML=list;
    }
    
  