window.onload=function(){
  let str = "";
  let scr = document.getElementsByClassName("input")[0];
  let on="off";
  [...document.getElementsByClassName("btn")].forEach(function(item){
    item.addEventListener("click",function(){
      let val = this.value;
      if(val === "on"){
        document.getElementById("screen").style.background= "rgb(151, 224, 224)";
        on = val;
      }
      else if(val==="off"){
        document.getElementById("screen").style.background= "rgb(217, 251, 252)";
        on = val;
        scr.innerHTML = "";
      }
      else if(on=== "on"){
        if(val==="cls"){
          str = "";
          scr.innerHTML = "";
        }
        else if(val ==="="){
          str = eval(str);
          str+='';
          scr.innerHTML = str;
        }
        else if(val=="<-"){
          str+='';
          str = str.substring(0,str.length-1)
          if(str.length == 0)
            scr.innerHTML = "";
          else
            scr.innerHTML = str;
        }
        else{
          let value = this.value;
          str += value;
          scr.innerHTML += value;
        }
      }
    })
  })
}
