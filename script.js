let reactionResult = document.querySelector("#reaction-result");
let memoryResult = document.querySelector("#memory-result");
let verbalResult = document.querySelector("#verbal-result");
let visualResult = document.querySelector("#visual-result");

let overallScore = document.querySelector("#overall-score");

let scoresArr = [];

function average(nums) {
  let average = nums.reduce((a, b) => a + b, 0);
  return Math.round(average / nums.length);
}

async function request() {
  const response = await fetch("./data.json");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    switch (data[i].category) {
      case "Reaction":
        reactionResult.textContent = data[i].score;
      case "Memory":
        memoryResult.textContent = data[i].score;
      case "Verbal":
        verbalResult.textContent = data[i].score;
      case "Visual":
        visualResult.textContent = data[i].score;
    }
  }

  scoresArr.push(
    parseInt(reactionResult.textContent),
    parseInt(memoryResult.textContent),
    parseInt(verbalResult.textContent),
    parseInt(visualResult.textContent)
  );

  overallScore.textContent = average(scoresArr);
  console.log(overallScore.textContent);
}

request();
