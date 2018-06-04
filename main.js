var totalCost = 0;
var eveningCost = 25;
var morningCost = 25;
var oneWayCost = 35;
var roundTripCost = 70;
var weekendCost = 35;
var oxygenCost = 14;
var hospitalDischargeCost = 25;
// date and clock function

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


// display features on item click
document.getElementById( "clockin" ).addEventListener( "click",
    function displayClock(){
        var displayItems = document.querySelectorAll( ".portfolio-item" ),
            i = 0,
            l = displayItems.length;

        for( i; i < l; i++ ){
            displayItems[i].style.display = "none";
        }
        document.getElementById( "header" ).textContent = "Clock in/out";
    }


);

document.getElementById( "trips" ).addEventListener( "click",
    function displayTrip(){
        var displayItems = document.querySelectorAll( ".portfolio-item" ),
            i = 0,
            l = displayItems.length;

        for( i; i < l; i++ ){
            displayItems[i].style.display = "none";
        }
        document.getElementById( "header" ).textContent = "Trip Manager";
    }


);

document.getElementById( "pricing" ).addEventListener( "click",
    function displayPrice(){
        var displayItems = document.querySelectorAll( ".portfolio-item" ),
            i = 0,
            l = displayItems.length;

        for( i; i < l; i++ ){
            displayItems[i].style.display = "none";
        }

        const priceDisplay = `

        <div id = "calculator">
          <h4> Enter your details below</h4>
            
                <div class="number">
                  Total Mileage <input type="number" id="mileage" min="0">
                </div>
                <div class="checkbox">
                  <input type="checkbox"  id="oneway">One-way?
                </div>
                    <div class="checkbox">
                      <input type="checkbox"  id="roundtrip">Round trip?
                    </div>
                <div class="checkbox">
                  <input type="checkbox"  id="morning">Before 7AM?
                </div>
                    <div class="checkbox">
                      <input type="checkbox"  id="evening">After 5PM?
                    </div>

                <div class="checkbox ">
                  <input type="checkbox"  id="weekend">Weekend?
                </div>
                <div class="checkbox ">
                  <input type="checkbox"  id="discharge">Hospital Discharge?
                </div>
                <div class="checkbox">
                  <input type="checkbox"  id="oxygen">Oxygen Used?
                </div>

            <div id="costarea">
              Total Cost:
              </div>
              <div id="costDisplay" min="0">
              ${totalCost}

              </div>
      `;

        document.getElementById( "header" ).textContent = "Price Calculator";
        document.getElementById( "newcontent" ).innerHTML = priceDisplay;

        document.getElementById( "oneway" ).addEventListener( "click",
            function disableEvening(){
                if( document.getElementById( "oneway" ).checked === true ){
                    document.getElementById( "roundtrip" ).disabled = true;
                    document.getElementById( "costDisplay" ).textContent = totalCost += oneWayCost;
                }
                else{
                    document.getElementById( "roundtrip" ).disabled = false;
                    document.getElementById( "costDisplay" ).textContent = totalCost -= oneWayCost ;
                }
            }
        );
        document.getElementById( "roundtrip" ).addEventListener( "click",
            function disableEvening(){
                if( document.getElementById( "roundtrip" ).checked === true ){
                    document.getElementById( "oneway" ).disabled = true;
                    document.getElementById( "discharge" ).disabled = true;
                    document.getElementById( "costDisplay" ).textContent = totalCost += roundTripCost ;
                }
                else{
                    document.getElementById( "oneway" ).disabled = false;
                    document.getElementById( "discharge" ).disabled = false;
                    document.getElementById( "costDisplay" ).textContent =  totalCost -= roundTripCost ;
                }
            }
        );


        document.getElementById( "morning" ).addEventListener( "click",
            function disableEvening(){
                if( document.getElementById( "morning" ).checked === true ){
                    document.getElementById( "evening" ).disabled = true;
                    document.getElementById( "costDisplay" ).textContent = totalCost += morningCost;
                }
                else{
                    document.getElementById( "evening" ).disabled = false;
                    document.getElementById( "costDisplay" ).textContent = totalCost -= morningCost ;
                }
            }
        );
        document.getElementById( "evening" ).addEventListener( "click",
            function disableEvening(){
                if( document.getElementById( "evening" ).checked === true ){
                    document.getElementById( "morning" ).disabled = true;
                    document.getElementById( "costDisplay" ).textContent = totalCost += eveningCost ;
                }
                else{
                    document.getElementById( "morning" ).disabled = false;
                    document.getElementById( "costDisplay" ).textContent =  totalCost -= eveningCost ;
                }
            }
        );
        document.getElementById( "weekend" ).addEventListener( "click",
            function weekendFee(){
                if( document.getElementById( "weekend" ).checked === true ){
                    document.getElementById( "costDisplay" ).textContent = totalCost += weekendCost ;
                }
                else{
                    document.getElementById( "costDisplay" ).textContent = totalCost -= weekendCost;
                }
            } );
        document.getElementById( "discharge" ).addEventListener( "click",
            function onewayFee(){
                if( document.getElementById( "discharge" ).checked === true ){
                    document.getElementById( "costDisplay" ).textContent = totalCost += hospitalDischargeCost ;
                }
                else{
                    document.getElementById( "costDisplay" ).textContent = totalCost -= hospitalDischargeCost ;
                }
            } );
        document.getElementById( "oxygen" ).addEventListener( "click",
            function oxygenFee(){
                if( document.getElementById( "oxygen" ).checked === true ){
                    document.getElementById( "costDisplay" ).textContent = totalCost += oxygenCost ;
                }
                else{
                    document.getElementById( "costDisplay" ).textContent = totalCost -= oxygenCost ;
                }
            } );
        document.getElementById( "mileage" ).addEventListener( "input",
            function mileageFee(){
                document.getElementById( "costDisplay" ).textContent = totalCost = ( document.getElementById( "mileage" ).value ) * 2.5 ;
                if( document.getElementById( "mileage" ).value > 50 ){
                    document.getElementById( "costDisplay" ).textContent = totalCost = ( document.getElementById( "mileage" ).value ) * 4 ;
                }
            } );
    } );


document.getElementById( "tutorials" ).addEventListener( "click",
    function displayClock(){
        var displayItems = document.querySelectorAll( ".portfolio-item" ),
            i = 0,
            l = displayItems.length;

        for( i; i < l; i++ ){
            displayItems[i].style.display = "none";
        }
        document.getElementById( "header" ).textContent = "Tutorials and Checklists";
    }


);
