const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileAddBtn = document.querySelector(".profile__add-btn");

// Modals
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

// Close Buttons
const closeEditProfileModal =
  editProfileModal.querySelector(".modal__close-btn");
const closeNewPostModal = newPostModal.querySelector(".modal__close-btn");

// Profile Elements
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Forms and Scoped Inputs
const profileFormElement = editProfileModal.querySelector(".modal__form");
const profileInputs = profileFormElement.querySelectorAll(".modal__input");
const nameInput = profileInputs[0];
const descriptionInput = profileInputs[1];

const newPostFormElement = newPostModal.querySelector(".modal__form");
const newPostInputs = newPostFormElement.querySelectorAll(".modal__input");
const imageInput = newPostInputs[0];
const captionInput = newPostInputs[1];

// Centralized helper functions for modals
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
  closeModal(newPostModal);
});

// New Post Close Button
closeNewPostModal.addEventListener("click", function () {
  closeModal(newPostModal);
});
