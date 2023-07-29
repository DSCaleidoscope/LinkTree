function clear(){g("bbody").innerHTML = '';}
function parse(t){branches = t;console.log(branches);}

function fill(k){
  clear();
  readTextFile(k);
  setTimeout("parse(allText)", 1000);
}

function readTextFile(file){
  var rawFile = new XMLHttpRequest();
  allText = "";
  var n = 0;

  stp = 0;

  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function (){
    if(rawFile.readyState === 4){
      if(rawFile.status === 200 || rawFile.status == 0){
        allText = rawFile.responseText;
        stp = 1;
      }
    }
  }

  rawFile.send(null);

  return null;
}
