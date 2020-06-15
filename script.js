$(document).ready(function () {
  console.log("ready");
});

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
function createTime() {
  for (var t = 0; t < workHours.length; t++) {
    $("#current-time").attr(workHours[t]);
  }
  console.log(createTime);
}

function createRows(index) {
  /*     var storageEl = "input" + index;
  var inputText = localStorage.getItems(storageEl) */
  $("#main-column").append(
    $(` <div class="card">
    <div class="card-body">
      <div class="form-row">
        <div class="col">
          <p id="current-time"></p>
        </div>
        <div class="col-7">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only"></label>
            <input
              class="form-control"
              type="text"
              placeholder="Add Event"
            />
          </div>
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary mb-2">
            Save Button
          </button>
        </div>
      </div>
    </div>
  </div>`)
  );
}
for (var i = 0; i < 10; i++) {
  createTime();
  createRows(i);
}

var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#current-date").append(currentDate);
console.log(currentDate);

var currentTime = moment().format("h:mm:ss a");
console.log(currentTime);
