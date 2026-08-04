const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileAddBtn = document.querySelector(".profile__add-btn");
const closeBtns = document.querySelectorAll(".modal__close-btn");
const modals = document.querySelectorAll(".modal");

const editProfileModal = modals[0];
const newPostModal = modals[1];

const closeEditProfileModal = closeBtns[0];
const closeNewPostModal = closeBtns[1];

// Profile Elements & Scoped Inputs/Forms
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const profileFormElement = editProfileModal.querySelector(".modal__form");
const editModalInputs = editProfileModal.querySelectorAll(".modal__input");
const nameInput = editModalInputs[0];
const descriptionInput = editModalInputs[1];

const newPostFormElement = newPostModal.querySelector(".modal__form");
const postModalInputs = newPostModal.querySelectorAll(".modal__input");
const imageInput = postModalInputs[0];
const captionInput = postModalInputs[1];

// Centralized Modal Helpers
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Profile Edit Modal Open
profileEditBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

// Profile Edit Form Submission
profileFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfileModal);
});

// Profile Edit Close Button
closeEditProfileModal.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// New Post Modal Open
profileAddBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

// New Post Form Submission
newPostFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(imageInput.value);
  console.log(captionInput.value);
  newPostFormElement.reset();
  closeModal(newPostModal);
});

// New Post Close Button
closeNewPostModal.addEventListener("click", function () {
  closeModal(newPostModal);
});
