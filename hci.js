function showFact() {
    const fact = document.getElementById("dynamic-text");
    if (fact.classList.contains("hidden")) {
      fact.innerText = "Fun Fact: The term 'Information Technology' was first used in a 1958 article in the Harvard Business Review!";
      fact.classList.remove("hidden");
    } else {
      fact.classList.add("hidden");
    }
  }