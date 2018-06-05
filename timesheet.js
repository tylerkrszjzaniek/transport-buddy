function startTime(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    ap = ( hr < 12 ) ? "<span>AM</span>" : "<span>PM</span>";
    hr = ( hr == 0 ) ? 12 : hr;
    hr = ( hr > 12 ) ? hr - 12 : hr;
    // Add a zero in front of numbers<10
    hr = checkTime( hr );
    min = checkTime( min );
    sec = checkTime( sec );
    document.getElementById( "clock" ).innerHTML = hr + ":" + min + ":" + sec + " " + ap;

    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;

    document.getElementById( "date" ).innerHTML = date;

    var time = setTimeout( function(){
        startTime();
    }, 500 );
}
function checkTime( i ){
    if( i < 10 ){
        i = "0" + i;
    }

    return i;
}


document.getElementById( "clockin" ).addEventListener( "click",
    function displayClock(){
        var displayItems = document.querySelectorAll( ".portfolio-item" ),
            i = 0,
            l = displayItems.length;

        for( i; i < l; i++ ){
            displayItems[i].style.display = "none";
        }
        document.getElementById( "header" ).textContent = "Clock in/out";


        const timesheetDisplay = `
      <div id="timesheet">
        <div class="divTable" style="border: 2px solid #000;">
        <div class="divTableBody">
        <div class="divTableRow">
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;Time Started</div>
          <div class="divTableCell">&nbsp;Time Finished</div>
          <div class="divTableCell">&nbsp;Total Hours</div>
        </div>
      <div class="divTableRow">
        <div class="divTableCell" >Monday</div>
        <div class="divTableCell" id="mondayStart">&nbsp;</div>
        <div class="divTableCell" id="mondayEnd">&nbsp;</div>
        <div class="divTableCell" id="mondayTotal">&nbsp;</div>
      </div>
        <div class="divTableRow">
          <div class="divTableCell">Tuesday</div>
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;</div>
        </div>
      <div class="divTableRow">
        <div class="divTableCell">Wednesday</div>
        <div class="divTableCell">&nbsp;</div>
        <div class="divTableCell">&nbsp;</div>
        <div class="divTableCell">&nbsp;</div>
      </div>
        <div class="divTableRow">
          <div class="divTableCell">Thursday</div>
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;</div>
        </div>
      <div class="divTableRow">
        <div class="divTableCell">Friday</div>
        <div class="divTableCell">&nbsp;</div>
        <div class="divTableCell">&nbsp;</div>
        <div class="divTableCell">&nbsp;</div>
      </div>
        <div class="divTableRow">
          <div class="divTableCell">Saturday</div>
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;</div>
          </div>
      <div class="divTableRow">
        <div class="divTableCell">Sunday</div>
        <div class="divTableCell">&nbsp;</div>
        <div class="divTableCell">&nbsp;</div>
        <div class="divTableCell">&nbsp;</div>
      </div>
      </div>
      </div>
      <div id="buttonBar">
        <button id="clockinbutton"> Clock in </button>
        <button id="clockoutbutton"> Clock out </button>
        <button id="cleartimesheet"> Clear Timesheet </button>
      </div>

    `;

        document.getElementById( "newcontent" ).innerHTML = timesheetDisplay;
        document.getElementById( "clockinbutton" ).addEventListener( "click",
            function clockinUpdate(){
                var shift = new Date();
                var shiftHour = shift.getHours();
                var shiftMinute = shift.getMinutes();
                var shiftSecond = shift.getSeconds();

                var ap = ( shiftHour < 12 ) ? "<span>AM</span>" : "<span>PM</span>";

                shiftHour = ( shiftHour == 0 ) ? 12 : shiftHour;
                shiftHour = ( shiftHour > 12 ) ? shiftHour - 12 : shiftHour;
                // Add a zero in front of numbers<10
                shiftHour = checkTime( shiftHour );
                shiftMinute = checkTime( shiftMinute );
                shiftSecond = checkTime( shiftSecond );

                document.getElementById( "mondayStart" ).innerHTML = shiftHour + ":" + shiftMinute + ":" + shiftSecond + " " + ap;
                if( document.getElementById( "mondayStart" ).innerHTML !== "" ){
                    document.getElementById( "clockinbutton" ).disabled = true;
                }
                else{
                    document.getElementById( "clockinbutton" ).disabled = false;
                }
            } );
        document.getElementById( "clockoutbutton" ).addEventListener( "click",
            function clockoutUpdate(){
                var shift = new Date();
                var shiftHour = shift.getHours();
                var shiftMinute = shift.getMinutes();
                var shiftSecond = shift.getSeconds();

                var ap = ( shiftHour < 12 ) ? "<span>AM</span>" : "<span>PM</span>";

                shiftHour = ( shiftHour == 0 ) ? 12 : shiftHour;
                shiftHour = ( shiftHour > 12 ) ? shiftHour - 12 : shiftHour;
                // Add a zero in front of numbers<10
                shiftHour = checkTime( shiftHour );
                shiftMinute = checkTime( shiftMinute );
                shiftSecond = checkTime( shiftSecond );

                document.getElementById( "mondayEnd" ).innerHTML = shiftHour + ":" + shiftMinute + ":" + shiftSecond + " " + ap;
                var startingTime = parseFloat( document.getElementById( "mondayStart" ).textContent );
                var endingTime = parseFloat( document.getElementById( "mondayEnd" ).textContent );

                if( document.getElementById( "mondayEnd" ).innerHTML !== "" ){
                    document.getElementById( "clockoutbutton" ).disabled = true;
                    document.getElementById( "mondayTotal" ).innerHTML = endingTime - startingTime;
                }
                else{
                    document.getElementById( "clockoutbutton" ).disabled = false;
                }
            }
        );
    }

);
