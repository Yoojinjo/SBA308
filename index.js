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

// get course info
CourseInfo.id;
console.log(CourseInfo.id);

// get learner id

// get learner id in array
let Learner = [];
for (let item of LearnerSubmissions) {
    Learner.push(item.learner_id);
}
console.log(Learner);

// WEIGHTED AVERAGE

// if the learner ID is the same, then add the score together
let TotalScore = {};
// Iterate through the items array
LearnerSubmissions.forEach((item) => {
    // Check if the Learner_id already exists 
    if (TotalScore[item.learner_id]) {
        // If it exists, add the value to the existing value
        TotalScore[item.learner_id] += item.submission.score;
    } else {
        // If it does not exist, create it and set the initial value
        TotalScore[item.learner_id] = item.submission.score;
    }
});
console.log(TotalScore);

// count the number of submissions by user

// 
let TotalSubmissions = {};
// Iterate through the items array
LearnerSubmissions.forEach((item) => {
    // Check if the Learner_id already exists 
    if (TotalSubmissions[item.learner_id]) {
        // If it exists, add the value to the existing value
        TotalSubmissions[item.learner_id] ++;
    } else {
        // If it does not exist, create it and set the initial value
        TotalSubmissions[item.learner_id] =1;
    }
});
console.log(TotalSubmissions);






// Seperate user submissions by learner_id?




// function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [{}];

//     return result;
// }

//const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
