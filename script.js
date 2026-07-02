function welcomeVisitor() {
  let visitor = prompt("Please enter your name:");
  if (visitor) {
    let message = "Welcome, " + visitor + "! I’m Waniya, a student at Seerat Educational System School, aspiring to become a Web Developer.";
    alert(message);
    document.getElementById("welcomeMessage").innerText = message;
  }
}

function showBestSkill() {
  let message = "My strongest skill is JavaScript — it allows me to create dynamic, modern, and interactive websites.";
  alert(message);
  document.getElementById("skillMessage").innerText = message;
}

function findProject() {
  let choice = document.getElementById("projectSelect").value;
  let message = "";
  if (choice === "web") {
    message = "Web Design Project: Crafted with HTML and CSS for a clean, modern layout.";
  } else if (choice === "data") {
    message = "Data Work Project: Organized and analyzed using Excel.";
  } else if (choice === "coding") {
    message = "Coding Project: Built with JavaScript to add interactivity.";
  }
  alert(message);
  document.getElementById("projectMessage").innerText = message;
}

function contactReply() {
  let name = document.getElementById("visitorName").value;
  let reason = document.getElementById("visitorReason").value;
  if (!name || !reason) {
    alert("Please complete all fields before submitting.");
    return false;
  }
  let reply = "Thank you, " + name + ". I’ll respond soon regarding: " + reason;
  alert(reply);
  document.getElementById("contactMessage").innerText = reply;
  return false;
}
