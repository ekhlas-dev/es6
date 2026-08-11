// Problem 1 — Student Introduction Generator

function studentIntroduction(student) {
  if (
    typeof student !== "object" ||
    student === null ||
    !("name" in student) ||
    !("age" in student) ||
    !("course" in student)
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

// console.log(studentIntroduction("student"));

// My name is Rafi. I am 18 years old. I am learning JavaScript.

// Problem 2 — Active User Filter

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  for (let user of users) {
    if (!("isActive" in user)) {
      return "Invalid";
    }
  }

  return users.filter((user) => user.isActive === true);
}

// console.log(filterActiveUsers("users"));

// [{name:"A", isActive:true}]

// Problem 3 —Trending Hashtag Counter

function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");

  let hashtagCount = 0;
  let longestTag = "";

  for (let word of words) {
    if (word.startsWith("#")) {
      hashtagCount++;

      const tag = word.slice(1);

      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }

  return {
    hashtagCount,
    longestTag,
  };
}

// console.log(countHashtags(["#fun"]));

// Problem 4 — Bonus Score Calculator

const bonusScore = (scores) => {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  if (!scores.every((score) => typeof score === "number")) {
    return "Invalid";
  }

  const updatedScores = scores.map((score) => score + 10);

  return updatedScores.reduce((total, score) => total + score, 0);
};

// Problem 5 — Debugging Challenge: AI Leaderboard Generator

const generateLeaderboard = (students) => {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
    return "Invalid";
  }

  for (let student of students) {
    if (
      !("name" in student) ||
      !("score" in student) ||
      typeof student.score !== "number"
    ) {
      return "Invalid";
    }
  }

  const qualified = students.filter((student) => student.score >= 70);

  const names = qualified.map(({ name }) => name.toUpperCase());

  return names.slice(0, 3);
};
// console.log(
//   generateLeaderboard([
//     { name: "Rafi", score: 90 },
//     { name: "Sadia", score: 65 },
//     { name: "Karim", score: 85 },
//     { name: "Nafis", score: 75 },
//   ]),
// );
console.log(generateLeaderboard([{name:"A",score:70},{name:"B",score:71}]))
console.log(generateLeaderboard([]))
console.log(generateLeaderboard("student"))
console.log(generateLeaderboard([{name:"Rafi"}]))
console.log(generateLeaderboard([{name:"Rafi",score:"90"}]
))
// console.log(generateLeaderboard())
