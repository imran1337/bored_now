function handleActivity() {
  fetch(`https://www.boredapi.com/api/activity`)
    .then((res) => res.json())
    .then((data) => localStorage.setItem("activity", JSON.stringify(data)))
    .catch((err) => console.log(err));
  //show activity
  const activityDetails = JSON.parse(localStorage.getItem("activity"));
  const activityType = document.getElementById("activity_type");
  const activityBody = document.getElementById("activity_text");
  activityType.innerText = activityDetails.type;
  activityBody.innerText = activityDetails.activity;
//   link show
  learnLink(activityDetails.link)
}

// link
function learnLink(link) {
    const learnLink = document.createElement("p");
  if(link) {
    learnLink.innerHTML = `<a href=${link} target=__black>Learn here</a>`;
    document.getElementById("activity_text").appendChild(learnLink);
  } else{
      console.log("not link");
  }
}

// handleActivity(); // <-- default call for refresh to activity show
document.getElementById("nextActivity").addEventListener("click", handleActivity);
