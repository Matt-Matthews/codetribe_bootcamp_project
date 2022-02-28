function myFunction(a) { //the "a" specify the clicked button
    var dropdowns = document.getElementsByClassName("dDContent");
    var selected = a.parentNode.getElementsByClassName("dDContent")[0]; //select button
    var arrows = document.getElementsByClassName("arrow");
    var arrow = a.parentNode.getElementsByClassName("arrow")[0]; //selected button arrow
    var btns = document.getElementsByClassName("dbtn");
    var btn = a.parentNode.getElementsByClassName("dbtn")[0];
    var i;
    if(!selected.classList.contains("show") || !arrow.classList.contains('rotate')){ // default
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            var openarrow = arrows[i];
            var c = btns[i];
            if (openDropdown.classList.contains('show') || openarrow.classList.contains('rotate')) {
            openDropdown.classList.remove('show');
            openarrow.classList.remove('rotate');
              c.classList.remove('clicked');
            
            }
        }
        selected.classList.toggle("show"); //open the drop down menu
        arrow.classList.toggle('rotate'); // rotate the arrow
        btn.classList.toggle('clicked');

    }else{
        selected.classList.remove("show"); //reset to defaul
        btn.classList.remove('clicked');
        arrow.classList.remove('rotate');    //reset to defaul
    }
  }
  
  // Close the drop down menu when clicking outside it
  window.onclick = function(event) {
    if (!event.target.matches('.dbtn')) {
      var dropdowns = document.getElementsByClassName("dDContent");
      var dropbtns = document.getElementsByClassName('dbtn');
      var arrs = document.getElementsByClassName("arrow");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var arr = arrs[i];
        var b = dropbtns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
            b.classList.remove('clicked');
          arr.classList.remove('rotate');
        }
      }
    }
  }
window.onscroll = function(){ // remove the dropdown on scroll but does not work due to (overflow-x: hidden) in css
  
  if(document.body.scrollTop > 20|| document.documentElement.scrollTop > 20){
  
  var d = document.getElementsByClassName("dDContent");
  var db = document.getElementsByClassName('dbtn');
  var ar = document.getElementsByClassName("arrow");
  var i;
  for (i = 0; i < d.length; i++) {
    var open = d[i];
    var arr = ar[i];
    var b = db[i];
    if (open.classList.contains('show')) {
      open.classList.remove('show');
        b.classList.remove('clicked');
      arr.classList.remove('rotate');
    }
    }
  }
}

  
  //text renderings
//index.html
var heading = 'A modern publishing platform';
var indexP1 = 'Grow your audience and build your online brand';
var heading2 = 'Designed for the future';
var heading3 = 'Introducing an extensible editor';
var indexp2 = '';

document.getElementById('indexH1').innerHTML = heading;
document.getElementById('indexP1').innerHTML = indexP1;
document.getElementById('indexH2').innerHTML = heading2;
document.getElementById('indexH3').innerHTML = heading3;





