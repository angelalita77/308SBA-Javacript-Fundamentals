// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
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
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  // Check to make sure the course is within the Assignment Group
isCourseInAssignmentGroup(course, ag);

  let result = [];

  // Need the following information from objects:
  // LearnersID
  // Score
  // Points Possible
  // Due_at
  // Submission Date
  // Assignment ID

  // Need to create the object for finalGrades
  const finalGrades = {};
  // Gather the necessary data for output
  const gatherData = {};



  // Get learnerID, assignmentID and submission to put in an object sub
  for (let learner of submissions) {
    // grab the learnerID, assignmentID, and submission information out of the array into an object called learner
    const { learner_id, assignment_id, submission } = learner;
    console.log(learner);

    // Find the assignment details that are under the same assigment id found in Leser
    const assignment = ag.assignments.find(a => a.id === assignment_id);
    console.log(assignment);

    //If there is no id found then it will create a object using the learnerID
    if (!gatherData[learner_id] || !gatherData[assignment_id]) {
      gatherData[learner_id] = { id: learner_id, assignment_id, totalScore: 0, totalPossible: 0 }
    }

    let score = submission.score;

    if (isOverDue(submission.submitted_at, assignment.due_at)) {
      score = score - score * 0.1;
      console.log(score);
    } else {
      console.log(`Submitted In Time!`);
    }

    let percentage = score / assignment.points_possible;
    gatherData[learner_id].totalScore += score;

    console.log(percentage);

    console.log(gatherData);



  }









  // Our code here
  // console.log(`Compare`, course);
  // console.log(CourseInfo.id);
  // console.log(`Assignment Group`, ag);
  // console.log('Submissions', submissions);



  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);



// ------------------ Helper Functions ------------------

/* isOverDue(submitted, due)
This function will compare the submitted and due date to determine
if the assigment is over dued.
Parametters:
submitted = Date submitted by learner in "YYYY-MM-DD" format
due = Due date in "YYYY-MM-DD" format
output => Returns True or False
*/
function isOverDue(submitted, due) {

  let submitDate = new Date(submitted);
  let dueDate = new Date(due);
  let maxDate = new Date();
  maxDate.getFullYear() + 10;

  try {
    if (typeof submitted !== 'string') {
      throw new TypeError("The submitted date must be a string")
    } else if (typeof due !== 'string') {
      throw new TypeError("The due date must be a string")
    } else if (dueDate >= maxDate) {
      throw new RangeError("The due date is over 10 years! Please check the date again.")
    }

    // Insert function's code
    if (submitDate <= dueDate) {
      return false;
    } else {
      return true;
    }
    // End of function's code



  } catch (error) {
    if (error instanceof RangeError) {
      console.error("Range Error:", error.message);
    } else if (error instanceof TypeError) {
      console.error("Datatype Error:", error.message);
    } else
      throw error;
  }


}


/* isCourseInAssignmentGroup(course, assignGroup) 
This function will check if the ID of the course is in assignment group
*/
function isCourseInAssignmentGroup(course, assignGroup) {
  try {
        if (course.id != assignGroup.course_id) {
          throw new Error ("This course is not part of the assignment group!")
          return false;
        } else
          return true;

  } catch (error) {
    console.error("CourseID Error:", error.message)
  }
}


