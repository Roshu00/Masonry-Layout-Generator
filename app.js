// GENERATE RANDOM SENTENCE

var verbs, nouns, adjectives, adverbs, preposition;
nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
preposition = [
  "down",
  "into",
  "up",
  "on",
  "upon",
  "below",
  "above",
  "through",
  "across",
  "towards",
];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content =
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    " because some " +
    nouns[rand1] +
    " " +
    adverbs[rand1] +
    " " +
    verbs[rand1] +
    " " +
    preposition[rand1] +
    " a " +
    adjectives[rand2] +
    " " +
    nouns[rand5] +
    " which, became a " +
    adjectives[rand3] +
    ", " +
    adjectives[rand4] +
    " " +
    nouns[rand6] +
    ".";

  return content;
}

const actions = [
  { alt: "upvote", svg: "./upvote-svgrepo-com.svg" },
  { alt: "comment", svg: "./comment-svgrepo-com.svg" },
  { alt: "seen", svg: "./eye-svgrepo-com.svg" },
];

const actionItem = (a) => {
  const image = document.createElement("img");
  image.src = a.svg;
  image.alt = a.alt;

  return image;
};

const item = () => {
  const randomNumber = Math.floor(Math.random() * 150 + 200);
  const li = document.createElement("li");
  li.classList.add("item");
  const image = document.createElement("img");
  image.src = `https://source.unsplash.com/random/300x${randomNumber}`;
  const text = document.createElement("p");
  text.textContent = sentence();

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action-container");

  actions.forEach((a) => {
    const action = document.createElement("div");
    action.classList.add("action");

    action.append(actionItem(a));

    actionContainer.append(action);
  });

  console.log(actionContainer);

  li.append(image);
  li.append(text);
  li.append(actionContainer);

  return li;
};

const lists = document.querySelectorAll(".list");

// for (let i = 0; i < 3; i++) {
//   lists.forEach((list) => {
//     list.append(item());
//   });
// }

const onClick = () => {
  const input = document.querySelector("input");

  lists.forEach((list) => {
    list.innerHTML = "";
  });

  for (let i = 0; i < input.value; i++) {
    const listIndex = i % 4;
    lists[listIndex].append(item());
  }
};

const button = document.querySelector("button");

button.addEventListener("click", onClick);
