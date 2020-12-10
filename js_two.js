/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // function adjustStyle(width) {
  //   width = parseInt(width);
  //   if (width < 701) {
  //     $("#size-stylesheet").attr("href", "css/narrow.css");
  //   } else if (width < 900) {
  //     $("#size-stylesheet").attr("href", "css/medium.css");
  //   } else {
  //      $("#size-stylesheet").attr("href", "css/wide.css"); 
  //   }
  // }
  
  // $(function() {
  //   adjustStyle($(this).width());
  //   $(window).resize(function() {
  //     adjustStyle($(this).width());
  //   });
  // });