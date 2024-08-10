// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50,
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150,
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500,
        },
    ],
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47,
        },
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150,
        },
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400,
        },
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39,
        },
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140,
        },
    },
];

// IGNORE EVERYTHING COMMENTED OUT HERE
// const Date = 2024-8-1
// // INITIALIZE A WORKING FILE
// let WIP = {
//     "id": "",
//     "average": "",

// }
// console.log(WIP)

// //NEW IDEA for loop instead
//     // ITERATE THRU LEARNER_SUBMISsIONS

// for (i=0; i<LearnerSubmissions.length; i++) {
//          // CHECK IF THE LEARNER ID IS IN THE WIP FILE, if not then write it into the WIP file
//     if (LearnerSubmissions[i].learner_id != WIP.id) {
// WIP.id = LearnerSubmissions[i].learner_id

// // get the assignment id,
// let HW = LearnerSubmissions[i].assignment_id



// console.log(WIP) nope doesn't work the way i want

// // get learner id in array
// let Learner = [];
// for (let item of LearnerSubmissions) {
//     Learner.push(item.learner_id);
// }
// console.log(Learner);
// //remove duplicates
// let uniqueLearner = Array.from(new Set(Learner))

// // build result object
// let data = [{uniqueLearner}]

// // FILTERED DATA SETS
// let StudentData = LearnerSubmissions.filter(data => data.learner_id === uniqueLearner[0])
// console.log(StudentData)

// WEIGHTED AVERAGE doesn't work

// // if the learner ID is the same, then add the score together
// let StudentTotalScore = {};
// let TotalPointsPossible = {};
// // // Iterate through the items array
// LearnerSubmissions.forEach((item) => {
//     // Check if the Learner_id already exists
//     if (StudentTotalScore[item.learner_id]) {
//         // If it exists, add the value to the existing value
//         StudentTotalScore[item.learner_id] += item.submission.score;
//             } else {
//         // If it does not exist, create it and set the initial value
//         StudentTotalScore[item.learner_id] = item.submission.score;
//     }
// });
// console.log(StudentTotalScore);

// Total points_possible
// get assignment_id from LearnerSubmissions
//
// use that to get the points_possible from AssignmentGroup

// but it must be separated per each StudentTotalScore
// so do this in the loop of total score?
//  or pre sort LearnerSubmissions by learner_id?

// count the number of submissions by user
// let TotalSubmissions = {};
// // Iterate through the items array
// LearnerSubmissions.forEach((item) => {
//     // Check if the Learner_id already exists
//     if (TotalSubmissions[item.learner_id]) {
//         // If it exists, add the value to the existing value
//         TotalSubmissions[item.learner_id] ++;
//     } else {
//         // If it does not exist, create it and set the initial value
//         TotalSubmissions[item.learner_id] =1;
//     }
// });
// console.log(TotalSubmissions); // DOESN'T WORK

// let AverageScore = TotalScore / TotalPoints
// Doesn't work
// console.log(StudentTotalScore[125]/TotalSubmissions[125])

// Separate user submissions by learner_id? nope, bad idea

// //NEW IDEA for loop instead
// // Iterate through the items array
// let results = [{}];
// for (i = 0; i < LearnerSubmissions.length; i++) {
//     // Check if the Learner_id already exists
//     results.push([LearnerSubmissions[i].learner_id]);
//     if (LearnerSubmissions[i].learner_id) {
//     }
// }

// console.log(results)

//------------------------------
//------------------------------
//------------------------------
//------------------------------
//------------------------------




 // CHECK COURSE INFO
    CourseInfo.id;
    console.log(CourseInfo.id);
    // COMPARE COURSE INFO, IF DOESN"T MATCH< THROW AN ALERT
    if (AssignmentGroup.course_id !== CourseInfo.id) {
        alert("AssignmentGroup does not match CourseInfo!");
// -----------------------MAIN FUNCTION
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
   

        // here, we would process this data to achieve the desired result.
        // const result = [{}];

        // return result;
    }
}
// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// ----------PLAN - for each LearnerSubmission
//1 create array with student id's
//2 create an object for each id

// make a simpler array with only relevant data?
// AssignmentGroup.assignments.forEach((assignment) => {
//     let agID = assignment.id;
//     let dueDate = assignment.due_at;
//     let pointsPossible = assignment.points_possible;

// }); // Im not sure how to access this data later...
// // Create a new array of objects with selected data from the original array
// const AssignmentGroupSimple = AssignmentGroup.assignments.map(({ id, due_at, points_possible}) => ({
//     ID: id,
//     dueDate: due_at,
//     maxPoints: points_possible
// }));
// console.log(AssignmentGroupSimple);
// //Remove if due date is greater than current date
// // array.splice(start, deleteCount, item1, ..., itemX);
// for (let i=0; i<AssignmentGroupSimple.length; i++){
//     if (AssignmentGroupSimple[i].dueDate > new Date()) {
//         AssignmentGroupSimple.splice(i,1);
//         i--;
//     }
// }
// console.log(AssignmentGroupSimple);

// // pass it into a function to return corresponding due_at
// // Function to retrieve the date based on the 'id'
// function getdateByHW(HW) {
//     const date = AssignmentGroup.assignments.find(a => a.id === HW);
//     return date ? date.due_at : null; // Return null if item not found
//   }

// }}

// console.log(AssignmentGroup.assignments[0].due_at)

// cross-check it against the submitted date
// if assignment is due, add the assignment
// if (LearnerSubmissions[i].submission.submitted_at <= AssignmentGroup.assignments.due_at) {
//     new_obj = { ...WIP, 1:64}
//     }  // no doesn't work

//3 first check if the assignment is due
// look at assignment_id use it to reference AssignmentGroup.assignments

// if it is late, don't add
// if it is not late proceed
//4 check if it is late  eg. (Date.now) is current timestamp
//6 if late deduct points
//5 add the assignment where id is key and value is score

//7 calculate the assignment average
//8 add the average to the object
//9 calculate the total average from the assignments
//10 add the total average (property) to the object
// add some error catching.  ###did the wrong course info already###

//1 trying to using array.forEAch instead
//1 get learner ID, wITH NO REPEATS
let LearnerID = [];
// loop thru each learner submissions
LearnerSubmissions.forEach((submission) => {
    // check if ID is present in LearnerID, does not exist by default
    let isThere = false;
    LearnerID.forEach((LD) => {
        // if ID does exist in LearnerID, switch isTHere to true
        if (LD === submission.learner_id) {
            isThere = true;
        }
    });
    // if IsThere is still false, then can push the learner id into LearnerID.
    if (!isThere) {
        LearnerID.push(submission.learner_id);
    } // Loop will now reset (isTHere becomes false at loop top.)
});
console.log(LearnerID); // [125, 132]

//2 create an object for each id
let results = LearnerID.map((element) => ({ ID: element }));
console.log(results);

//3 add the assignment where id is key and value is score


