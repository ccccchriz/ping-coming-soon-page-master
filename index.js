const form = document.getElementById("card-form");

const hint = form.querySelector("p");
const input = form.querySelector("input");

const wrongInput = (message) => {
  hint.textContent = message;
  input.setAttribute("aria-invalid", "true");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  hint.textContent = "";
  input.removeAttribute("aria-invalid");
  if (value == "") {
    wrongInput("It looks like you forgot to add your email");
  } else if (!/^\S+@\S+\.\S+$/.test(value)) {
    wrongInput("Please provide a valid email address");
  } else {
    setTimeout(() => form.reset(), 500);
  }
});
