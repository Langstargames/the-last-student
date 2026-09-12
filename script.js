// Put your Roblox game URL between the quotes below.
const robloxGameUrl = "";

document.getElementById("playButton").addEventListener("click", function (event) {
  if (!robloxGameUrl) {
    event.preventDefault();
    alert("The Roblox game link hasn't been added yet!");
    return;
  }

  this.href = robloxGameUrl;
});
