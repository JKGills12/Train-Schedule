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

firebase.initialize(config);

var database = firebase.database();

