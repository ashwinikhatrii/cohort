const profiles = [
  {
    name: "Angel Priya",
    age: 22,
    city: "Mumbai",
    bio: "Coffee lover ☕ | Dreamer ✨",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=80",
  },
  {
    name: "Sophia",
    age: 24,
    city: "Delhi",
    bio: "Travel, music and sunsets 🌅",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=80",
  },
  {
    name: "Ava Sharma",
    age: 23,
    city: "Bangalore",
    bio: "Artist 🎨 | Foodie 🍕",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop&q=80",
  },
  {
    name: "Emma",
    age: 21,
    city: "Pune",
    bio: "Living life one day at a time 🌸",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format&fit=crop&q=80",
  },
];

const container = document.getElementById("cardContainer");
const passBtn = document.getElementById("passBtn");
const likeBtn = document.getElementById("likeBtn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const actionButtons = document.getElementById("actionButtons");

let currentIndex = 0;
let startX = 0;
let startY = 0;
let dragging = false;
let activeCard = null;
let isAnimating = false;

function renderCard() {
  container.innerHTML = "";

  if (currentIndex >= profiles.length) {
    message.textContent = "You've seen everyone! 🎉";
    actionButtons.hidden = true;
    restartBtn.hidden = false;
    return;
  }

  actionButtons.hidden = false;
  restartBtn.hidden = true;

  const profile = profiles[currentIndex];
  const card = document.createElement("div");
  card.className = "profile-card";

  const img = document.createElement("img");
  img.src = profile.image;
  img.alt = profile.name;
  img.draggable = false;

  const info = document.createElement("div");
  info.className = "profile-info";

  const name = document.createElement("h2");
  name.textContent = `${profile.name}, ${profile.age}`;

  const location = document.createElement("p");
  location.textContent = `📍 ${profile.city}`;

  const bio = document.createElement("p");
  bio.textContent = profile.bio;

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = "✦ Discover";

  info.append(name, location, bio, tag);

  const likeStamp = document.createElement("div");
  likeStamp.className = "stamp like-stamp";
  likeStamp.textContent = "LIKE";

  const passStamp = document.createElement("div");
  passStamp.className = "stamp pass-stamp";
  passStamp.textContent = "PASS";

  card.append(img, info, likeStamp, passStamp);
  container.appendChild(card);

  activeCard = card;
  message.textContent = "Discover someone new ✨";

  card.addEventListener("pointerdown", onPointerDown);
  card.addEventListener("pointermove", onPointerMove);
  card.addEventListener("pointerup", onPointerUp);
  card.addEventListener("pointercancel", onPointerUp);
}

function onPointerDown(event) {
  if (isAnimating || event.button !== 0) return;

  dragging = true;
  startX = event.clientX;
  startY = event.clientY;

  activeCard.style.transition = "none";
  activeCard.setPointerCapture(event.pointerId);
}

function onPointerMove(event) {
  if (!dragging || !activeCard) return;

  const dx = event.clientX - startX;
  const dy = event.clientY - startY;
  const rotation = dx * 0.08;

  activeCard.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotation}deg)`;

  const likeStamp = activeCard.querySelector(".like-stamp");
  const passStamp = activeCard.querySelector(".pass-stamp");

  likeStamp.style.opacity = Math.max(0, Math.min(dx / 100, 1));
  passStamp.style.opacity = Math.max(0, Math.min(-dx / 100, 1));
}

function onPointerUp(event) {
  if (!dragging || !activeCard) return;

  dragging = false;

  const dx = event.clientX - startX;
  const dy = event.clientY - startY;

  if (Math.abs(dx) > 100 && Math.abs(dx) > Math.abs(dy)) {
    swipe(dx > 0 ? "right" : "left");
  } else {
    activeCard.style.transition = "transform 0.3s ease";
    activeCard.style.transform = "";
    activeCard.querySelector(".like-stamp").style.opacity = 0;
    activeCard.querySelector(".pass-stamp").style.opacity = 0;
  }
}

function swipe(direction) {
  if (isAnimating || !activeCard) return;

  isAnimating = true;
  const card = activeCard;
  const liked = direction === "right";

  message.textContent = liked
    ? `You liked ${profiles[currentIndex].name} ❤️`
    : `Passed ${profiles[currentIndex].name} ✕`;

  card.style.transition = "transform 0.4s ease, opacity 0.4s ease";
  card.style.transform = `translate(${liked ? 700 : -700}px, 40px) rotate(${liked ? 30 : -30}deg)`;
  card.style.opacity = "0";

  currentIndex++;

  setTimeout(() => {
    isAnimating = false;
    renderCard();
  }, 400);
}

passBtn.addEventListener("click", () => swipe("left"));
likeBtn.addEventListener("click", () => swipe("right"));

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  renderCard();
});

renderCard();
