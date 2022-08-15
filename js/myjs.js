
window.onload=function(){
  
  let startBTN = document.getElementById("bbBtn");
  let bblwrap = document.getElementById("bubble-wrapper");
  let toggle = true;

  /****** FUNCTION TO SHOW BUBBLES AND START/PAUSE FLOATING ******/
  function clickBtn(){  
  
    if(toggle == true ){
    
      bblwrap.style.visibility = 'visible';
      bblwrap.style.animationPlayState = "running";
      
      let bubbles = bblwrap.getElementsByClassName("bubble");
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].style.animationPlayState="running";
      }
      toggle = false;
    } else{
    
      bblwrap.style.animationPlayState = "paused";

      let bubbles = bblwrap.getElementsByClassName("bubble");
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].style.animationPlayState = "paused";
      }
      toggle = true;
    }
    
  }startBTN.onclick = clickBtn;


  /****** FUNTION FOR CURSOR ******/

  $(document).mousemove(function(e){
    $(".bbl-mouse").css({left:e.pageX, top:e.pageY});
  });

  }

