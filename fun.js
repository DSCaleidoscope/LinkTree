function g(id){return document.getElementById(id);}
function clear(){g("bbody").innerHTML = '';}
function add(t){g("bbody").innerHTML += t;}
function parse(t){branches = JSON.parse(t);console.log(branches);}

function fill(k){
  clear();
  readTextFile(k);
  setTimeout("parse(allText)", 1000);
  addElements();
}

function addElements(){
  let i = 0;
  let x = branches.length;

  for(;i < x;i++){
    add("<div id='' class='branch'><div class='title'>" + branches[i].getContent() + "</div></div>");
  }
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


branch.getContent = function(){
  if(this.type === "email"){
    console.log("email");
    return "<a href='" + this.value + "'>" + this.title + "</a>";
  }else if(this.type === "link"){
    console.log("link");
    return "<a href='" + this.value + "'>" + this.title + "</a>";
  }else{
    console.log("Unknown type: " + this.type);
    return "";
  }
}
