//date and clock function
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


//display features on item click
document.getElementById('clockin').addEventListener("click",
    function displayClock(){
      var displayItems = document.querySelectorAll(".portfolio-item"),
          i=0,
          l = displayItems.length;
      for(i; i< l; i++){
        displayItems[i].style.display = "none";
      }
      document.getElementById("header").textContent = "Clock in/out";
}


);

document.getElementById('trips').addEventListener("click",
    function displayTrip(){
      var displayItems = document.querySelectorAll(".portfolio-item"),
          i=0,
          l = displayItems.length;
      for(i; i< l; i++){
        displayItems[i].style.display = "none";
      }
      document.getElementById("header").textContent = "Trip Manager";
}


);

document.getElementById('pricing').addEventListener("click",
    function displayPrice(){
      var displayItems = document.querySelectorAll(".portfolio-item"),
          i=0,
          l = displayItems.length;
      for(i; i< l; i++){
        displayItems[i].style.display = "none";
      }

      const priceDisplay = `
        <div id = "calculator">
          <h4> Enter your details below</h4>
            <p>  </p>
              <form action="" method="post">
                <fieldset>
                <legend></legend>
   
                </fieldset>
<div class="number ">
  <label><input type="number" value="" ></label>
</div>
<div class="checkbox">
  <label><input type="checkbox" value="">After 5PM?</label>
</div>
<div class="checkbox">
  <label><input type="checkbox" value="">Before 7AM?</label>
</div>
<div class="checkbox ">
  <label><input type="checkbox" value="" >Weekend?</label>
</div>
<div class="checkbox ">
  <label><input type="checkbox" value="" >Hospital Discharge or one-way?</label>
</div>
<div id="checkboxO2">
  <label><input type="checkbox" value="" >Oxygen Used?</label>
</div>
              </form>
            </div>
      `

      document.getElementById("header").textContent = "Price Calculator";
      document.getElementById("newcontent").innerHTML = priceDisplay;
if(document.getElementById('checkboxO2').checked){

}

}


);



document.getElementById('tutorials').addEventListener("click",
    function displayClock(){
      var displayItems = document.querySelectorAll(".portfolio-item"),
          i=0,
          l = displayItems.length;
      for(i; i< l; i++){
        displayItems[i].style.display = "none";
      }
document.getElementById("header").textContent = "Tutorials and Checklists";
}


);
