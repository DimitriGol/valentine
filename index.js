document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const responses = [
      "Are you sure?",
      "Are you REALLY REALLY sure?",
      "Cmon! Don't be like that.",
      "Ya motha",
      "No! Please i was kidding",
      "Cmonn nooooooOOOOOAAAAA",
      "You playing too much...",
      "Cmon!!! Not like this...",
      "I AINT GONNA ASK AGAIN!!",
      "Ok im asking again.. :)",
      "pleassseeeeeeee",
      "cmon sonnnnnnn dont do me like thatttttttttt",
      "PLEASE PLEASE PLEASE PLEASE PLEASE",
      "All it takes is to click that shiny green button on the left",
      "You doing me so dirty...",
      "JUST CLICK YES ALREADYYYYYYYY",
      "WAAHH WAHH WAHHH",
      "don't make me give you no choice now..."
      // Add more responses as needed
    ];
    let responseIndex = 0; // Initialize the index

    // Function to handle click on 'no-btn'
    function handleNoButtonClick() {
        // Use the current response and then increment the index
        noBtn.textContent = responses[responseIndex];
        responseIndex = (responseIndex + 1) % responses.length; // Loop back to the beginning if reached the end


        const currentFontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
        const newFontSize = currentFontSize * 1.2; // You can adjust the multiplier as needed
        yesBtn.style.fontSize = newFontSize + "px";
        
        // Reset the font size and height of the 'yes-btn' to their initial values
        noBtn.style.fontSize = "15px";
        noBtn.style.padding = "10px";  
    }
  
    // Function to handle click on 'yes-btn'
    function handleYesButtonClick() {
      window.location.href = "yes.html"; // Redirect to yes.html
    }
  
    // Attach click event listeners to the buttons
    noBtn.addEventListener("click", handleNoButtonClick);
    yesBtn.addEventListener("click", handleYesButtonClick);
  });
  