console.log("Script loaded successfully!");

const learnMoreButton = document.querySelector(".learnMore button");

learnMoreButton.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/yelllow_yelllow_art/";
    learnMoreButton.textContent = "Redirecting to Instagram...";
});
colors = ["#1e254f", "#5e67a0", "#d1aff9", "#ffffff", "#000000"];
colorIndex = 0;
window.setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.getElementById("colour-change").style.backgroundColor = colors[colorIndex];
}, 1000);

