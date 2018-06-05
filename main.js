var totalCost = 0;
var eveningCost = 25;
var morningCost = 25;
var oneWayCost = 35;
var roundTripCost = 70;
var weekendCost = 35;
var oxygenCost = 14;
var hospitalDischargeCost = 25;
var frequentLocations = [
    "106 Four Seasons Shopping Center",
    "Barnes Jewish - Central West End",
    "Barnes Jewish - St. Peters",
    "Breeze Park",
    "Delmar Gardens - Chesterfield",
    "Delmar Gardens - O'Fallon",
    "Friendship Village - Chesterfield",
    "Mason Pointe",
    "Meramec Bluffs",
    "Mercy Hospital - St. Louis",
    "Missouri Baptist Medical Center",
    "Parc Provence",
    "Sherbrooke Village",
    "St. Anthony's Medical Center",
    "St. Luke's Hospital - Chesterfield",
    "Sunrise - Des Peres",
    "Villages of St. Peters",
];


// date and clock function


// display features on item click
document.getElementById( "trips" ).addEventListener( "click",
    function displayTrip(){
        var displayItems = document.querySelectorAll( ".portfolio-item" ),
            i = 0,
            l = displayItems.length;

        for( i; i < l; i++ ){
            displayItems[i].style.display = "none";
        }
        document.getElementById( "header" ).textContent = "Trip Planner";


        const mapDisplay = `
            <div id="addressSelector">
            <h4 id="freqhead"> Frequently Visited Locations </h4>
            <select id="dropdown-menu"></select>
            </div>
        <div id="searchbar">
      <h6>  Search for an address to update the map in real-time </h6>

          <input type="text" name="searchaddress" id="search" value="" placeholder="Enter Address" data-role="none">
          </div>
        <div id="mapouter">
          <div id="gmap_canvas">
            <iframe width="500" height="410" id="gmap_canvas_display" src="https://maps.google.com/maps?q=106 four seasons shopping center&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>

          </div>
            <style>.mapouter{text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
            </style>
        </div>


      `;

        document.getElementById( "newcontent" ).innerHTML = mapDisplay;
        var dropdown = document.getElementById( "dropdown-menu" );


        for( let x = 0; x < frequentLocations.length; x++ ){
            var frequent = frequentLocations[x];

            dropdown.innerHTML += "<option value=\"" + frequent + "\">" + frequent + "</option>" ;
        }
        document.getElementById( "dropdown-menu" ).addEventListener( "change",
            function changeMapDisplay(){
                var dropdownValue = document.getElementById( "dropdown-menu" ).value;

                document.getElementById( "gmap_canvas_display" ).src = "https://maps.google.com/maps?q=" + dropdownValue + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
            } );
        document.getElementById( "searchbar" ).addEventListener( "input",
            function searchMapDisplay(){
                var addressSearch = document.getElementById( "search" ).value;

                document.getElementById( "gmap_canvas_display" ).src = "https://maps.google.com/maps?q=" + addressSearch + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
            } );
    } );

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
          <h5> Enter your details below</h5>

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
