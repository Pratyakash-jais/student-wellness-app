function goStudent() {
  window.location.href = "student.html";
}

function goCounsellor() {
  window.location.href = "counsellor.html";
}

function goChat() {
  window.location.href = "chat.html";
}

function submitData() {
  let mood = document.getElementById("mood").value;
  let problem = document.getElementById("problem").value;

  fetch("https://wellness-backend-rts9.onrender.com/saveData", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({mood, problem})
  });

  alert("Submitted!");
}

function sendMsg() {
  let msg = document.getElementById("msg").value.toLowerCase();
  let reply = "";

  if (msg.includes("stress") || msg.includes("pressure")) {
    reply = "Try deep breathing and take short breaks 🧘";
  } 
  else if (msg.includes("sad") || msg.includes("depressed")) {
    reply = "You are not alone 💙 Talk to someone you trust.";
  } 
  else if (msg.includes("anxiety")) {
    reply = "Focus on slow breathing and grounding techniques 🌿";
  } 
  else if (msg.includes("exam")) {
    reply = "Make a study plan and take breaks. You’ve got this 📚";
  } 
  else if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hello! How can I help you today 😊";
  } 
  else {
    reply = "I'm here for you. Can you tell me more?";
  }

  document.getElementById("reply").innerText = reply;
}