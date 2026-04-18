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

  fetch("http://localhost:3000/saveData", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({mood, problem})
  });

  alert("Submitted!");
}

function sendMsg() {
  let msg = document.getElementById("msg").value;

  if(msg.includes("stress")) {
    document.getElementById("reply").innerText = "Try breathing exercises 🧘";
  } else {
    document.getElementById("reply").innerText = "You are doing great 💙";
  }
}