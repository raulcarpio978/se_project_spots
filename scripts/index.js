const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileAddBtn = document.querySelector(".profile__add-btn");
const closeBtn = document.querySelectorAll(".modal__close-btn");
const modals = document.querySelectorAll(".modal");
const closeEditProfileModal = closeBtn[0];
const closeNewPostModal = closeBtn[1];
const editProfileModal = modals[0];
const newPostModal = modals[1];

profileEditBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
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
