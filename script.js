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

  let result = [];





  // Our code here
  console.log(`Compare`, course);
  console.log(`Assignment Group`, ag);
  console.log('Submissions', submissions);



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

/* Testing out Try/Catch
function testErr() {
  try {
    const name = "Dave";
    name = "Joe";
  } catch (err) {
    console.error("Whoops! Looks like somthing happened:")
    console.error(err);
  }
}

testErr();
*/
console.log(isOverDue("2023-01-26", "2023-01-25"))
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







/*
try {
  let submitDate = new Date(submitted);
  let dueDate = new Date(due);
  let maxDate = new Date().getFullYear + 10;


  if (submitDate < dueDate) {
    console.log(`submitDate: ${submitDate} came before dueDate: ${dueDate}`);
  } else if (submitDate == dueDate) {
    console.log(`dueDate: ${dueDate} is the same as submitDate: ${submitDate}`);
  } else
    console.log(`dueDate: ${dueDate} came before submitDate: ${submitDate}`);

  if (maxDate >= submitDate || dueDate) {
    throw new RangeError("This due date is more than 10 years in the future! Please try again.");
  }



  console.log(submitDate)
  console.log(dueDate)

} catch (error) {
  if (error instanceof RangeError) {
    console.error("Range Error:", error.message);
  } else {
    console.error("Whoops! Looks like somthing happened:", error)
  }

}
*/
