"use strict";

/*
  WHAT IF JEEVIKA
  A seven-stage romantic rescue adventure.

  CUSTOMIZATION:
  Edit the question, answers, clue, and story in the STAGES array.
  Add multiple accepted answers to make answer checking flexible.
*/

const STAGES = [
  {
    title: "The Missing Signal",
    chapter: "CHAPTER ONE",
    heading: "A message from nowhere.",
    symbol: "☾",
    caption: "THE NIGHT RITYAA DISAPPEARED",
    type: "THE FIRST MEMORY",
    icon: "✉",
    story:
      "At exactly midnight, every light in JEEVIKA's room goes out. " +
      "Her phone lights up with a message from RITYAA.\n\n" +
      "\"If you're reading this, I've disappeared. Don't trust this world. " +
      "The first key is something only you would remember. Find me, Jeevika.\"",
    memory:
      "His last message ends with three words: \"You know us.\"",
    question:
      "What special name or nickname does RITYAA use for JEEVIKA?",
    detail:
      "Think about the name he uses when he is being especially sweet.",
    answers: ["PRINCESS"],
    hint:
      "Think of the name he calls you in your chats.",
    placeholder: "Enter the nickname...",
    success:
      "The phone glows pink. A secret doorway opens in the darkness.",
    nextTitle: "The Forgotten Memory",
    ending: false
  },
  {
    title: "The Forgotten Memory",
    chapter: "CHAPTER TWO",
    heading: "A memory hidden in the stars.",
    symbol: "✧",
    caption: "WHERE YOUR STORY BEGAN",
    type: "THE MEMORY ARCHIVE",
    icon: "✦",
    story:
      "JEEVIKA steps into a floating library. Every book contains a " +
      "conversation she once had with RITYAA. Most pages are blank.\n\n" +
      "One book opens by itself. A glowing sentence appears: " +
      "\"The past remembers what the world forgets.\"",
    memory:
      "Somewhere in your chats is a little detail that started something special.",
    question:
      "Name of RITYYAA'S FIRST EVER E-BOOK(kahi pe dekhke cheating ni krni princess)?",
    detail:
      "Enter the E-book name without looking into the phone.",
    answers: ["My Dear Panda"],
    hint:
      "Remember the first time jb tu bacho jaise khush hui thi.",
    placeholder: "Recall the beginning...",
    success:
      "The book bursts into starlight. A map appears between the pages.",
    nextTitle: "The Silent World",
    ending: false
  },
  {
    title: "The Silent World",
    chapter: "CHAPTER THREE",
    heading: "Where words have disappeared.",
    symbol: "♫",
    caption: "THE WORLD OF UNSENT WORDS",
    type: "THE ECHO CHAMBER",
    icon: "♫",
    story:
      "A strange world stretches before her. No one can speak. Even " +
      "the wind is silent. Then JEEVIKA finds a crystal containing " +
      "fragments of old messages from RITYAA.\n\n" +
      "One fragment shines brighter than the rest. The world waits " +
      "for her to remember.",
    memory:
      "Your conversations are not just messages. They are pieces of a world only you two know.",
    question:
      "RITYAAA KI FAVOURITE DISHH NOWADAYSS(COME ON YAAR ITS EASYYY)?",
    detail:
      "ISKE LIYE TOH ROZ DAANT KHATA HU MAIN.",
    answers: ["CHICKEN RICE"],
    hint:
      "Iske liye bhi hint chahiye ky tuzhe ab baapreyyyyy.",
    placeholder: "Name the memory...",
    success:
      "The crystal sings for the first time. A bridge forms across the void.",
    nextTitle: "The Broken Promise",
    ending: false
  },
  {
    title: "The Broken Promise",
    chapter: "CHAPTER FOUR",
    heading: "A promise buried in time.",
    symbol: "⌘",
    caption: "THE BRIDGE OF PROMISES",
    type: "THE PROMISE SEAL",
    icon: "♡",
    story:
      "Beyond the bridge stands a giant locked door. Seven words are " +
      "engraved across its surface, but only one promise can open it.\n\n" +
      "JEEVIKA remembers that even when RITYAA is far away, promises " +
      "are supposed to bring two people closer.",
    memory:
      "A promise matters because it belongs to the people who made it.",
    question:
      "What is one important promise you and RITYAA made to each other?",
    detail:
      "Enter the key phrase or central idea of that promise.",
    answers: ["Hamara forever hai naa"],
    hint:
      "Har baar ka hamara promise jo hum kalesh ke time use krte hai i know difficult hai lekin tu kr legi it starts with hamara and ends naa and it contains 4 words in total.",
    placeholder: "Recall your promise...",
    success:
      "The door opens. Beyond it, a thousand false versions of RITYAA appear.",
    nextTitle: "The Illusion",
    ending: false
  },
  {
    title: "The Illusion",
    chapter: "CHAPTER FIVE",
    heading: "Not every memory is real.",
    symbol: "◇",
    caption: "THE HALL OF FALSE MEMORIES",
    type: "THE TRUTH TEST",
    icon: "◇",
    story:
      "The hall is filled with illusions. Each one claims to know RITYAA. " +
      "One says he loves the mountains. Another says he dreams of the sea.\n\n" +
      "JEEVIKA knows the truth cannot be found by guessing. It must " +
      "come from a real moment they shared.",
    memory:
      "Anyone can invent a story. Only you two know what actually happened.",
    question:
      "What is one thing that Rityaa keeeps telling you every single day?",
    detail:
      "Enter the key phrase, person's name, or memorable detail from that conversation.",
    answers: ["I love you Jeevika"],
    hint:
      "babyy iskaaa hint toh naa de rhaa mainnn.",
    placeholder: "Tell the truth...",
    success:
      "Every illusion shatters. One tiny light remains, pointing toward RITYAA.",
    nextTitle: "The Last Signal",
    ending: false
  },
  {
    title: "The Last Signal",
    chapter: "CHAPTER SIX",
    heading: "One last message.",
    symbol: "⌁",
    caption: "THE EDGE OF THE UNKNOWN",
    type: "THE FINAL TRANSMISSION",
    icon: "⌁",
    story:
      "JEEVIKA reaches the edge of the universe. Her phone has one " +
      "percent battery left. A final voice message begins playing.\n\n" +
      "\"Jeevika, if you have made it this far, you already know me " +
      "better than this world ever could. One last memory. Then come find me.\"",
    memory:
      "Remember something small that has a huge meaning in your relationship.",
    question:
      "One nickname which you have given to Rityaa that he likes the most?",
    detail:
      "Enter a specific thing associated with him in your conversations.",
    answers: ["Guddu"],
    hint:
      "Ik it's hard lekin maine teko ek baar ek website pe batayaa tha i guess.",
    placeholder: "Identify RITYAA...",
    success:
      "The final signal locks onto a location. The last gate begins to open.",
    nextTitle: "Find RITYAA",
    ending: false
  },
  {
    title: "Find RITYAA",
    chapter: "CHAPTER SEVEN",
    heading: "The place beyond every world.",
    symbol: "♥",
    caption: "WHERE TWO WORLDS BECOME ONE",
    type: "THE FINAL KEY",
    icon: "♥",
    story:
      "There he is. Behind the final gate, RITYAA is waiting in a world " +
      "made of stars, memories, and all the words you never got to say.\n\n" +
      "But the gate will not open until JEEVIKA answers the last question. " +
      "This is not about solving a puzzle. It is about remembering why " +
      "she crossed six worlds to reach him.",
    memory:
      "The final key is something personal. Make it a phrase that means everything to you two.",
    question:
      "One thing Rityaa wants to do with you?",
    detail:
      "This is the final secret. Enter the exact answer you have configured for this stage.",
    answers: ["Marriage"],
    hint:
      "hardest one to guess yet the easiest one yk.",
    placeholder: "Open the final gate...",
    success:
      "The final gate opens. RITYAA is finally in front of her.",
    nextTitle: "",
    ending: true
  }
];

// PERSONALIZE THE GAME
// Replace each sample answer above with a real answer.
// Multiple answers are allowed, for example:
// answers: ["my sunshine", "sunshine", "sun shine"]

const FINAL_MESSAGE =
  "Jeevika, you crossed seven worlds to find me. " +
  "Every memory brought you closer, every challenge proved that " +
  "our story is worth remembering. i love so muchhh, " +
  "Meko laga ni tha game finish kr payegi, well done babygirll. " +
  "congratulationss and celebrationsss jaaanuuu  " +
  "separate us, this story will always bring us back to each other. " +
  "With love, Rityaa. ♥";

const ELEMENTS = {
  intro: document.getElementById("introScreen"),
  game: document.getElementById("gameScreen"),
  ending: document.getElementById("endingScreen"),
  start: document.getElementById("startButton"),
  title: document.getElementById("stageTitle"),
  number: document.getElementById("stageNumber"),
  progress: document.getElementById("progressFill"),
  dots: document.getElementById("stageDots"),
  symbol: document.getElementById("sceneSymbol"),
  caption: document.getElementById("sceneCaption"),
  chapter: document.getElementById("chapterLabel"),
  heading: document.getElementById("storyHeading"),
  story: document.getElementById("storyText"),
  memory: document.getElementById("memoryText"),
  question: document.getElementById("questionText"),
  detail: document.getElementById("questionDetail"),
  type: document.getElementById("challengeType"),
  icon: document.getElementById("challengeIcon"),
  input: document.getElementById("answerInput"),
  form: document.getElementById("answerForm"),
  hintButton: document.getElementById("hintButton"),
  hint: document.getElementById("hintText"),
  feedback: document.getElementById("feedback"),
  restart: document.getElementById("restartButton"),
  playAgain: document.getElementById("playAgainButton"),
  finalMessage: document.getElementById("finalMessage"),
  toast: document.getElementById("toast"),
  stars: document.getElementById("stars"),
  storyCard: document.getElementById("storyCard"),
  endingStory: document.getElementById("endingStory")
};

let currentStage = 0;
let isTransitioning = false;
let transitionTimer = null;
let toastTimer = null;

// Normalize answers so capitalization and punctuation do not matter.
function normalizeAnswer(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function isCorrectAnswer(value, acceptedAnswers) {
  const submitted = normalizeAnswer(value);

  if (!submitted) {
    return false;
  }

  return acceptedAnswers.some(function (answer) {
    return normalizeAnswer(answer) === submitted;
  });
}

function showScreen(screen) {
  [ELEMENTS.intro, ELEMENTS.game, ELEMENTS.ending].forEach(
    function (element) {
      element.classList.remove("active");
    }
  );

  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function createStars() {
  const symbols = ["✦", "✧", "·", "⋆"];
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 55; i += 1) {
    const star = document.createElement("span");
    star.className = "star-particle";
    star.textContent = symbols[i % symbols.length];
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = 7 + Math.random() * 12 + "px";
    star.style.setProperty("--duration", 2.5 + Math.random() * 5 + "s");
    star.style.setProperty("--delay", Math.random() * -7 + "s");
    fragment.appendChild(star);
  }

  ELEMENTS.stars.appendChild(fragment);
}

function renderStageDots() {
  ELEMENTS.dots.replaceChildren();

  STAGES.forEach(function (_, index) {
    const dot = document.createElement("span");
    dot.className = "stage-dot";

    if (index < currentStage) {
      dot.classList.add("completed");
    } else if (index === currentStage) {
      dot.classList.add("current");
    }

    dot.setAttribute("aria-label", "Stage " + (index + 1));
    ELEMENTS.dots.appendChild(dot);
  });
}

function renderStage() {
  const stage = STAGES[currentStage];

  if (!stage) {
    return;
  }

  isTransitioning = false;
  ELEMENTS.input.disabled = false;
  ELEMENTS.form.querySelector("button").disabled = false;
  ELEMENTS.hintButton.disabled = false;
  ELEMENTS.restart.disabled = false;
  
  ELEMENTS.title.textContent = stage.title;
  ELEMENTS.number.textContent = String(currentStage + 1).padStart(2, "0");
  ELEMENTS.progress.style.width =
    (currentStage / STAGES.length) * 100 + "%";

  ELEMENTS.symbol.textContent = stage.symbol;
  ELEMENTS.caption.textContent = stage.caption;
  ELEMENTS.chapter.textContent = stage.chapter;
  ELEMENTS.heading.textContent = stage.heading;
  ELEMENTS.story.textContent = stage.story;
  ELEMENTS.memory.textContent = stage.memory;
  ELEMENTS.type.textContent = stage.type;
  ELEMENTS.icon.textContent = stage.icon;
  ELEMENTS.question.textContent = stage.question;
  ELEMENTS.detail.textContent = stage.detail;
  ELEMENTS.input.placeholder = stage.placeholder;

  ELEMENTS.input.value = "";
  ELEMENTS.hint.hidden = true;
  ELEMENTS.hint.textContent = "";
  ELEMENTS.hintButton.disabled = false;
  ELEMENTS.feedback.textContent = "";
  ELEMENTS.feedback.className = "feedback";

  renderStageDots();

  showScreen(ELEMENTS.game);
  ELEMENTS.input.focus({ preventScroll: true });
}

function showToast(message) {
  clearTimeout(toastTimer);
  ELEMENTS.toast.textContent = message;
  ELEMENTS.toast.classList.add("show");

  toastTimer = setTimeout(function () {
    ELEMENTS.toast.classList.remove("show");
  }, 2400);
}

function showFeedback(message, type) {
  ELEMENTS.feedback.textContent = message;
  ELEMENTS.feedback.className = "feedback " + type;
}

function shakeScreen() {
  ELEMENTS.game.classList.remove("shake");

  // Restart the animation without adding a second event listener.
  void ELEMENTS.game.offsetWidth;
  ELEMENTS.game.classList.add("shake");

  setTimeout(function () {
    ELEMENTS.game.classList.remove("shake");
  }, 400);
}

function handleWrongAnswer() {
  showFeedback(
    "That memory does not unlock the gate. Think again, JEEVIKA. " +
    "The story is waiting for the right answer.",
    "error"
  );

  shakeScreen();

  // Reset the answer attempt, not the entire adventure.
  ELEMENTS.input.value = "";
  ELEMENTS.input.focus();
}

function handleCorrectAnswer() {
  if (isTransitioning) {
    return;
  }

  isTransitioning = true;

  const stage = STAGES[currentStage];

  showFeedback(stage.success, "success");
  ELEMENTS.progress.style.width =
    ((currentStage + 1) / STAGES.length) * 100 + "%";

  renderStageDots();

  ELEMENTS.input.disabled = true;
  ELEMENTS.form.querySelector("button").disabled = true;
  ELEMENTS.hintButton.disabled = true;
  ELEMENTS.restart.disabled = true;

  showToast("MEMORY UNLOCKED ♥");

  transitionTimer = setTimeout(function () {
    currentStage += 1;

    if (stage.ending) {
      showEnding();
      return;
    }

    renderStage();
  }, 1500);
}

function submitAnswer(event) {
  event.preventDefault();

  if (isTransitioning) {
    return;
  }

  const stage = STAGES[currentStage];
  const answer = ELEMENTS.input.value;

  if (!answer.trim()) {
    showFeedback("Enter your answer before unlocking the gate.", "neutral");
    ELEMENTS.input.focus();
    return;
  }

  if (isCorrectAnswer(answer, stage.answers)) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }
}

function revealHint() {
  if (isTransitioning) {
    return;
  }

  const stage = STAGES[currentStage];

  ELEMENTS.hint.textContent = stage.hint;
  ELEMENTS.hint.hidden = false;
  ELEMENTS.hintButton.disabled = true;
  showFeedback("A clue has been revealed. Your journey continues.", "neutral");
}

function restartCurrentStage() {
  if (isTransitioning) {
    return;
  }

  renderStage();
  showToast("Stage reset. Try again, JEEVIKA.");
}

function showEnding() {
  clearTimeout(transitionTimer);
  ELEMENTS.progress.style.width = "100%";
  ELEMENTS.number.textContent = "07";
  ELEMENTS.finalMessage.textContent = FINAL_MESSAGE;
  ELEMENTS.endingStory.textContent =
    "Seven stages. Seven memories. One person worth finding. " +
    "JEEVIKA crossed every world, broke every illusion, and finally " +
    "found her RITYAA. This is where their story meets again.";

  renderStageDots();
  showScreen(ELEMENTS.ending);
  showToast("RITYAA HAS BEEN FOUND ♥");
  createHeartBurst();
}

function createHeartBurst() {
  const container = document.createElement("div");
  container.setAttribute("aria-hidden", "true");
  Object.assign(container.style, {
    position: "fixed",
    inset: "0",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: "10"
  });

  document.body.appendChild(container);

  const symbols = ["♥", "✦", "♡", "✧"];

  for (let i = 0; i < 35; i += 1) {
    const particle = document.createElement("span");
    particle.textContent = symbols[i % symbols.length];

    Object.assign(particle.style, {
      position: "absolute",
      left: Math.random() * 100 + "%",
      top: "-30px",
      color: i % 2 ? "#ff8fc8" : "#c4a8ff",
      fontSize: 12 + Math.random() * 18 + "px",
      opacity: "0.9",
      transition: "transform 3s ease-in, opacity 3s ease-in"
    });

    container.appendChild(particle);

    requestAnimationFrame(function () {
      particle.style.transform =
        "translateY(" +
        (window.innerHeight + 80) +
        "px) rotate(" +
        Math.random() * 480 +
        "deg)";
      particle.style.opacity = "0";
    });
  }

  setTimeout(function () {
    container.remove();
  }, 3300);
}

function startGame() {
  clearTimeout(transitionTimer);
  currentStage = 0;
  isTransitioning = false;
  ELEMENTS.input.disabled = false;
  ELEMENTS.form.querySelector("button").disabled = false;
  ELEMENTS.restart.disabled = false;
  renderStage();
}

function returnToIntro() {
  clearTimeout(transitionTimer);
  currentStage = 0;
  isTransitioning = false;
  ELEMENTS.input.disabled = false;
  ELEMENTS.form.querySelector("button").disabled = false;
  ELEMENTS.restart.disabled = false;
  showScreen(ELEMENTS.intro);
}

ELEMENTS.start.addEventListener("click", startGame);
ELEMENTS.form.addEventListener("submit", submitAnswer);
ELEMENTS.hintButton.addEventListener("click", revealHint);
ELEMENTS.restart.addEventListener("click", restartCurrentStage);
ELEMENTS.playAgain.addEventListener("click", returnToIntro);

createStars();
ELEMENTS.finalMessage.textContent = FINAL_MESSAGE;