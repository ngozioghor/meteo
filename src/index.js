function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = docuument.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.quearySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
