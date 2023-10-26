document.addEventListener("DOMContentLoaded", function () {
  const faqTitleInput = document.getElementById("faqTitle");
  const faqTextInput = document.getElementById("faqText");
  const submitButton = document.getElementById("submitBtn");
  const faqContainer = document.querySelector(".faq-container");

  // Function to add event listeners to a FAQ card
  function addEventListenersToCard(card) {
    card.addEventListener("click", () => {
      // Toggle the 'active' class for the clicked card
      card.classList.toggle("active");
    });

    // Add click event listener to the 'faq-toggle' button within each card
    const toggleButton = card.querySelector(".faq-toggle");
    toggleButton.addEventListener("click", (event) => {
      // Prevent the card from being clicked when the button is clicked
      event.stopPropagation();

      // Remove the 'active' class from the card when the button is clicked
      card.classList.remove("active");
    });
  }

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", function () {
    // Get the values from the input fields
    const title = faqTitleInput.value;
    const text = faqTextInput.value;

    // Create a new FAQ card
    const newCard = document.createElement("div");
    newCard.classList.add("faq");
    newCard.innerHTML = `
        <h3 class="faq-title">${title}</h3>
        <p class="faq-text">${text}</p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      `;

    // Append the new card to the FAQ container
    faqContainer.appendChild(newCard);

    // Add event listeners to the newly created FAQ card
    addEventListenersToCard(newCard);

    // Clear the input fields
    faqTitleInput.value = "";
    faqTextInput.value = "";
  });

  // Add event listeners to the existing FAQ cards
  const faqCards = document.querySelectorAll(".faq");
  faqCards.forEach((card) => {
    addEventListenersToCard(card);
  });
});
