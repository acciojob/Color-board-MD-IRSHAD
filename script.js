//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const colorBoard = document.getElementById("colorBoard");

  // Function to generate boxes and add them to the board
  function generateBoxes() {
    const totalBoxes = 800;

    for (let i = 0; i < totalBoxes; i++) {
      const box = document.createElement("div");
      box.className = "box";
      colorBoard.appendChild(box);
    }
  }

  generateBoxes();
});
