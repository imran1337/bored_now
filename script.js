function storeActivity() {
  fetch(`https://www.boredapi.com/api/activity`)
    .then((res) => res.json())
    .then((data) => localStorage.setItem("activity", JSON.stringify(data)))
    .catch((err) => console.log(err));
    showData();
}

// show data
function showData() {
  const activityDetails = JSON.parse(localStorage.getItem("activity"));
  if(activityDetails) {
  const activityType = document.getElementById("activity_type");
  const activityBody = document.getElementById("activity_text");
  activityType.innerText = activityDetails.type;
  activityBody.innerText = activityDetails.activity;
  //   link show
  learnLink(activityDetails.link);
  } else{
    console.log('local storage no data');
  }
}

// link
function learnLink(link) {
  const learnLink = document.createElement("p");
  if (link) {
    learnLink.innerHTML = `<a href=${link} target=__black>Learn here</a>`;
    document.getElementById("activity_text").appendChild(learnLink);
  } else {
    console.log("not link");
  }
}

showData(); // <-- default call for refresh to activity show
document.getElementById("nextActivity").addEventListener("click", storeActivity);