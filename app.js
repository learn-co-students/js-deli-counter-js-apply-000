document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.getElementById("take-a-number");
  const btnRemove = document.getElementById("now-serving");
  const lineList = document.getElementById("line");
  const message = document.getElementById("message");

  // initialize line
  const line = [];
  const customers = ["Lydia", "Ian", "Blaise", "Duane"];

  updateLine();

  btnAdd.addEventListener("click", () => {
    // random customer
    const index = Math.floor(Math.random() * customers.length);
    const customer = customers.splice(index, 1)[0];

    // check for function
    message.innerHTML = takeANumber(line, customer);
    updateLine();
  });

  btnRemove.addEventListener("click", () => {
    // random customer
    message.innerHTML = nowServing(line);
    updateLine();
  });

  function updateLine() {
    lineList.innerHTML = currentLine(line);
  }
});
