const data = {
  labels: [
    "12am-3am",
    "3am-6pm",
    "6am-9am",
    "9am-12am",
    "12pm-3pm",
    "3pm-6pm",
    "6pm-9pm",
    "9am-12am"
  ],
  datasets: [
    {
      name: "Some Data",
      type: "bar",
      values: [25, 40, 30, 35, 8, 52, 17, -4]
    },
    {
      name: "Another Set",
      type: "line",
      values: [25, 50, -10, 15, 18, 32, 27, 14]
    }
  ]
};

const chart = new frappe.Chart("#chart", {
  // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "",
  data: data,
  type: "axis-mixed", // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 250,
  colors: ["#7cd6fd", "#743ee2"]
});
//----------------------------------------------------
//PARSING CSV

$(document).ready(function() {
  $("#load_data").click(function() {
    $.ajax({
      url:
        "https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
      dataType: "text",
      success: function(data) {
        var employee_data = data.split(/\r?\n|\r/);
        var table_data = '<table class="table table-bordered table-striped">';
        for (var count = 0; count < employee_data.length; count++) {
          var cell_data = employee_data[count].split(",");
          table_data += "<tr>";
          for (
            var cell_count = 0;
            cell_count < cell_data.length;
            cell_count++
          ) {
            if (count === 0) {
              table_data += "<th>" + cell_data[cell_count] + "</th>";
            } else {
              table_data += "<td>" + cell_data[cell_count] + "</td>";
            }
          }
          table_data += "</tr>";
        }
        table_data += "</table>";
        $("#employee_table").html(table_data);
      }
    });
  });
});
