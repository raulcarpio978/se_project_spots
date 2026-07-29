const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileAddBtn = document.querySelector(".profile__add-btn");
const closeBtn = document.querySelectorAll(".modal__close-btn");
const modals = document.querySelectorAll(".modal");
const closeEditProfileModal = closeBtn[0];
const closeNewPostModal = closeBtn[1];
const editProfileModal = modals[0];
const newPostModal = modals[1];

const allInputs = document.querySelectorAll(".modal__input");
const nameInput = allInputs[0];
const descriptionInput = allInputs[1];
const imageInput = allInputs[2];
const captionInput = allInputs[3];

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const allForms = document.querySelectorAll(".modal__form");
const profileFormElement = allForms[0];
const newPostFormElement = allForms[1];

profileEditBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

profileFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

closeEditProfileModal.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

profileAddBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

closeNewPostModal.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

// 1. Profile Edit Form Submission
profileFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

// 2. New Post Form Submission
newPostFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(imageInput.value);
  console.log(captionInput.value);
  newPostModal.classList.remove("modal_is-opened");
});

// 3. Modal Open / Close Buttons
profileEditBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

closeEditProfileModal.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

profileAddBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

closeNewPostModal.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
