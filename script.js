$(document).ready(function () {
  var workHours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  function createRows(index) {
      $('input[type="text"]').each(function () {
        var id = $(this).attr("class");
        var value = localStorage.getItem(id);

        $(this).val(value);
      });
    $("#main-column").append(
      $(` <div class="card">
    <div class="card-body">
      <div class="form-row">
        <div class="col-time">
          <div id="current-time"></div>
        </div>
        <div class="col-7">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only"></label>
            <input
              class="form-control"
              type="text"
              id="get-info"
              placeholder="Add Event"
              
            />
          </div>
        </div>
        <div class="col">
        
          <button type="submit" class="btn btn-primary mb-2">
          <svg class="bi bi-calendar-plus-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm8.5 3.5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5V8.5z"/>
          </svg>
          </button>
        </div>
      </div>
    </div>
  </div>`)
    );
  }
  /*   for (var t = 0; t < workHours.length; t++) {
    var getHours = $('<p>');
    console.log(workHours[t]);
    getHours.text(workHours[t]); 
    $(".form-row").text(workHours[t]);
  } */

  for (var i = 0; i < 9; i++) {
    createRows(i);
  }
  for (var t = 0; t < workHours.length; t++) {
    var newTime = $("<p>");
    newTime.text(workHours[t]);
    $(".col-time").append(newTime[t]);
  }

  var currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#current-date").append(currentDate);
  console.log(currentDate);

  var currentTime = moment().format("h:mm:ss a");
  console.log(currentTime);

  /*   $(".btn").on("submit", function () {
    var inputEl = $(".form-control").val();
    console.log(inputEl);
  });

  $(".card").on("submit", function (event) {
    event.preventDefault();
    var storeEvent = "input" + $(this).attr("data-id");
    localStorage.setItem(storeEvent, $(this).find("input").val());
  }); */
  $(".btn").on("click", function () {
    $('input[type="text"]').each(function () {
      var id = $(this).attr("id");
      var value = $(this).val();
      localStorage.setItem(id, value);
    });
  });
});
