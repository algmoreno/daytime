var todaysDate = function() {
    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDate); 
}

var hourList = [
    {
        id: "0",
        hour: "9:00",
        time: "09",
        meridiem: "am",
        toDo: ""
    },
    {
        id: "1",
        hour: "10:00",
        time: "10",
        meridiem: "am",
        toDo: ""
    },
    {
        id: "2",
        hour: "11:00",
        time: "11",
        meridiem: "am",
        toDo: ""
    },
    {
        id: "3",
        hour: "12:00",
        time: "12",
        meridiem: "pm",
        toDo: ""
    },
    {
        id: "4",
        hour: "1:00",
        time: "13",
        meridiem: "pm",
        toDo: ""
    },
    {
        id: "5",
        hour: "2:00",
        time: "14",
        meridiem: "pm",
        toDo: ""
    },
    {
        id: "6",
        hour: "3:00",
        time: "15",
        meridiem: "pm",
        toDo: ""
    },
    {
        id: "7",
        hour: "4:00",
        time: "16",
        meridiem: "pm",
        toDo: ""
    },
    {
        id: "8",
        hour: "5:00",
        time: "17",
        meridiem: "pm",
        toDo: ""
    },
    
]

  
hourList.forEach(function(thisHour) {

    var timeRow = $("<form>").attr({
        "class": "row"
    })
    $(".container").append(timeRow); 

    var hourEl = $("<div>") 
    .text(`${thisHour.hour}${thisHour.meridiem}`)
    .attr({
        "class": "col-md-1 hour"
    })

    var reminderArea = $("<div>")
    .attr({
        "class": "col-md-9 description"
    })

    var textArea = $("<textarea>")
    .attr({
        "class": "col-md-12 reminder-text"
    })
    reminderArea.append(textArea)

    var saveArea = $("<div>")
    .attr({
        "class": "col-md-2 saveArea"
    })

    var saveButton = $("<button>")
    .attr({
        "class": "btn btn-outline-warning saveBtn"
    })

    var addSign = $("<span>")
    .attr({
        "class": "oi oi-plus"
    })
    
    saveButton.append(addSign)
    saveArea.append(saveButton)
        

    timeRow.append(hourEl, reminderArea, saveArea);

})

todaysDate(); 