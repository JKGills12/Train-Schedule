// 1) Initialize Firebase
// 2) Create button for adding new train - then update html & update database
// 3) Create a way to retrieve 
// 4) Create a way to determine train arrival time
// 5) Determine the frequency of arrivals
// 

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD_I_QgCTn5LL3zh1GqRv_JGmI_cFQ8xWU",
    authDomain: "jk-train-schedule.firebaseapp.com",
    databaseURL: "https://jk-train-schedule.firebaseio.com",
    projectId: "jk-train-schedule",
    storageBucket: "",
    messagingSenderId: "247418734176",
    appId: "1:247418734176:web:ce03218b176667e1"
};

firebase.initializeApp(config);

var database = firebase.database();

// Button for adding train
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

// Time is 2:30 AM
var firstTime = "2:30";



// Takes user input

    // Logs train name
    var trainName = $("#train-name-input").val().trim();

    // Logs train destination
    var trainDestination = $("#destination-input").val().trim();

    // Train arrives every 5 minutes
    var trainFrequency = 5; 

    // Logs train arrival time in military time
    var militaryTime = moment(firstTime, "HH:mm");
    console.log(militaryTime);


    // console.log("Hello");

    // Uploads new train data to the database
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        frequency: trainFrequency,
        arrival: trainArrival,
        distance: distAway
    };

    // Upload new train data to database
    database.ref().push(newTrain);
   

})