document.addEventListener("DOMContentLoaded", function () {
  // --- Login form handling ---
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const error = document.getElementById("error");

      const validUsername = "styleme";
      const validPassword = "fashion123";

      if (username === validUsername && password === validPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        error.textContent = "Invalid username or password.";
      }
    });
  }

  // --- Index page access control ---
  const isIndexPage = window.location.pathname.includes("index.html");
  if (isIndexPage) {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    if (!loggedIn) {
      window.location.href = "login.html";
    }
  }

  // --- Logout modal logic ---
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutModal = document.getElementById("logoutModal");
  const confirmBtn = logoutModal?.querySelector(".confirm-btn");
  const cancelBtn = logoutModal?.querySelector(".cancel-btn");

  if (logoutBtn && logoutModal && confirmBtn && cancelBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutModal.style.display = "flex";
    });

    cancelBtn.addEventListener("click", () => {
      logoutModal.style.display = "none";
    });

    confirmBtn.addEventListener("click", () => {
      localStorage.setItem("loggedIn", "false");
      logoutModal.style.display = "none";
      window.location.href = "login.html";
    });
  }

  // --- Password visibility toggle ---
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";
    });
  }

  const container = document.getElementById("itemsContainer");
  if (container) {
    let itemsHTML = '';
    for (let i = 1; i <= 30; i++) {
      itemsHTML += `
        <div class="item-card">
          <img src="assets/dresses/dress${i}.jpg" alt="Dress ${i}" />
          <p>Dress ${i}</p>
        </div>
      `;
    }
    container.innerHTML = itemsHTML;
  }
  
  // --- Search bar filtering ---
  const searchInput = document.querySelector(".search-bar input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase();
      const items = document.querySelectorAll(".item-card");

      items.forEach(item => {
        const label = item.querySelector("p").textContent.toLowerCase();
        const matches = label.includes(term);
        item.style.display = matches ? "block" : "none";
      });
    });
  }
});
