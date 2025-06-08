document.addEventListener("DOMContentLoaded", function () {

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

  const isIndexPage = window.location.pathname.includes("index.html");
  if (isIndexPage) {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    if (!loggedIn) {
      window.location.href = "login.html";
    }
  }

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

  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";
    });
  }

  const labelData = {
   "dress1": ["maxi", "v-neck", "off-the-shoulder", "flutter sleeve", "solid", "flowy", "green"],
   "dress2": ["midi", "v-neck", "spaghetti strap", "solid", "fitted", "yellow"],
   "dress3": ["mini", "v-neck", "spaghetti strap", "solid", "relaxed", "green"],
   "dress4": ["cocktail", "tea-length", "halter neck", "sleeveless", "embroidered", "a-line", "beige"],
   "dress5": ["party", "mini", "high neck", "long sleeve", "solid", "fitted", "red"],
   "dress6": ["midi", "v-neck", "spaghetti strap", "solid", "flowy", "yellow"],
   "dress7": ["cocktail", "knee-length", "sweetheart", "spaghetti strap", "embroidered", "a-line", "black"],
   "dress8": ["sweater", "long sleeve", "relaxed", "purple", "skirt", "midi", "striped", "flowy", "black", "purple", "green"],
   "dress9": ["work/office", "midi", "high neck", "long sleeve", "solid", "a-line", "green"],
   "dress10": ["cocktail", "knee-length", "round neck", "long sleeve", "floral", "embroidered", "a-line", "black"],
   "dress11": ["off-the-shoulder", "short sleeve", "floral", "white", "red", "midi", "flowy", "blue", "skirt"],
   "dress12": ["casual", "mini", "v-neck", "puff sleeve", "solid", "loose", "white"],
   "dress13": ["casual", "knee-length", "round neck", "long sleeve", "bell sleeve", "abstract", "geometric", "loose", "blue"],
   "dress14": ["daytime", "maxi", "high neck", "3/4 sleeve", "floral", "flowy", "blue"],
   "dress15": ["casual", "midi", "v-neck", "short sleeve", "floral", "flowy", "green", "white"],
   "dress16": ["casual", "maxi", "sweetheart", "spaghetti strap", "floral", "abstract", "flowy", "multicolor"],
   "dress17": ["work/office", "top", "v-neck", "long sleeve", "solid", "fitted", "black", "skirt", "knee-length", "striped", "straight", "grey"],
   "dress18": ["casual", "daytime", "round neck", "flutter sleeve", "striped", "flowy", "blue", "white"],
   "dress19": ["party", "maxi", "sweetheart", "sleeveless", "paisley", "flowy", "blue"],
   "dress20": ["casual", "maxi", "square neck", "sleeveless", "floral", "flowy", "red", "pink"],
   "dress21": ["casual", "midi", "square neck", "cap sleeve", "abstract", "flowy", "white"],
   "dress22": ["cocktail", "knee-length", "square neck", "sleeveless", "solid", "bodycon", "blue"],
   "dress23": ["casual", "mini", "square neck", "puff sleeve", "floral", "flowy", "white", "black"],
   "dress24": ["casual", "knee-length", "v-neck", "short sleeve", "striped", "relaxed", "pink", "white"],
   "dress25": ["daytime", "maxi", "round neck", "short sleeve", "floral", "a-line", "black", "beige"],
   "dress26": ["party", "evening", "maxi", "square neck", "3/4 sleeve", "flutter sleeve", "solid", "floral", "fitted", "flowy", "blue", "white", "pink"],
   "dress27": ["work/office", "semi-formal", "daytime", "midi", "tea-length", "round neck", "sleeveless", "solid", "a-line", "black", "top", "3/4 sleeve", "relaxed", "white"],
   "dress28": ["casual", "daytime", "top", "round neck", "3/4 sleeve", "solid", "loose", "pink", "pants", "geometric", "blue", "white"],
   "dress29": ["casual", "daytime", "knee-length", "v-neck", "cap sleeve", "striped", "a-line", "blue", "white"],
   "dress30": ["party", "cocktail", "midi", "halter neck", "sleeveless", "solid", "flowy", "black", "white"],
   "dress31": ["casual", "daytime", "top", "square neck", "puff sleeve", "abstract", "fitted", "white", "skirt", "midi", "solid", "a-line", "purple"],
   "dress32": ["casual", "daytime", "top", "round neck", "short sleeve", "solid", "relaxed", "purple", "skirt", "midi", "floral", "flowy", "purple"],
   "dress33": ["casual", "daytime", "midi", "square neck", "sleeveless", "solid", "flowy", "green"],
   "dress34": ["casual", "daytime", "midi", "round neck", "puff sleeve", "solid", "geometric", "fitted", "a-line", "black", "white"],
   "dress35": ["bridal", "formal", "evening", "floor-length", "scoop neck", "sleeveless", "solid", "embroidered", "floral", "fitted", "flowy", "a-line", "white"],
   "dress36": ["formal", "evening", "party", "wedding guest", "bridal", "floor-length", "round neck", "long sleeve", "embroidered", "geometric", "fitted", "flowy", "a-line", "red", "green", "gold"],
   "dress37": ["formal", "evening", "party", "wedding guest", "saree", "floor-length", "sweetheart", "short sleeve", "solid", "embroidered", "fitted", "flowy", "red", "gold"],
   "dress38": ["formal", "party", "evening", "wedding guest", "saree", "floor-length", "round neck", "sleeveless", "solid", "embroidered", "fitted", "flowy", "green", "white"],
   "dress39": ["party", "evening", "wedding guest", "saree", "floor-length", "v-neck", "spaghetti strap", "sleeveless", "solid", "embroidered", "fitted", "flowy", "blue"],
   "dress40": ["casual", "daytime", "beach/resort", "midi", "sweetheart", "spaghetti strap", "sleeveless", "solid", "fitted", "flowy", "blue"],
   "dress41": ["casual", "daytime", "midi", "square neck", "puff sleeve", "solid", "a-line", "blue"],
   "dress42": ["casual", "daytime", "mini", "square neck", "spaghetti strap", "sleeveless", "solid", "fitted", "a-line", "blue"],
   "dress43": ["casual", "daytime", "semi-formal", "midi", "v-neck", "sleeveless", "solid", "fitted", "flowy", "a-line", "red"],
   "dress44": ["casual", "daytime", "beach/resort", "midi", "round neck", "sleeveless", "solid", "fitted", "flowy", "blue"],
   "dress45": ["casual", "daytime", "midi", "v-neck", "sleeveless", "solid", "embroidered", "fitted", "flowy", "green"],
   "dress46": ["casual", "daytime", "mini", "sweetheart", "spaghetti strap", "sleeveless", "striped", "fitted", "flowy", "pink", "white"],
   "dress47": ["work/office", "daytime", "semi-formal", "midi", "round neck", "long sleeve", "puff sleeve", "floral", "solid", "fitted", "flowy", "black", "multicolor"],
   "dress48": ["casual", "daytime", "mini", "square neck", "sleeveless", "solid", "loose", "red", "top", "long sleeve", "embroidered", "relaxed"],
   "dress49": ["casual", "daytime", "mini", "shirt dress", "v-neck", "long sleeve", "solid", "loose", "pink", "top", "embroidered"],
   "dress50": ["casual", "daytime", "work/office", "midi", "v-neck", "sleeveless", "solid", "fitted", "flowy", "red"],
   "dress51": ["casual", "daytime", "mini", "v-neck", "puff sleeve", "solid", "fitted", "flowy", "black"],
   "dress52": ["casual", "daytime", "mini", "square neck", "puff sleeve", "solid", "fitted", "flowy", "pink"],
   "dress53": ["casual", "daytime", "midi", "square neck", "puff sleeve", "solid", "fitted", "flowy", "blue"],
   "dress54": ["party", "cocktail", "evening", "semi-formal", "mini", "v-neck", "long sleeve", "polka dot", "fitted", "flowy", "black", "white"],
   "dress55": ["daytime", "semi-formal", "work/office", "cocktail", "party", "midi", "round neck", "short sleeve", "solid", "embroidered", "loose", "relaxed", "fitted", "flowy", "black"],
   "dress56": ["semi-formal", "cocktail", "mini", "round neck", "3/4 sleeve", "solid", "fitted", "black"],
   "dress57": ["casual", "daytime", "midi", "round neck", "sleeveless", "floral", "fitted", "flowy", "white", "multicolor"],
   "dress58": ["casual", "daytime", "mini", "square neck", "flutter sleeve", "sleeveless", "abstract", "fitted", "flowy", "black", "white"],
   "dress59": ["casual", "daytime", "work/office", "midi", "shirt dress", "v-neck", "short sleeve", "striped", "relaxed", "a-line", "blue", "white"],
   "dress60": ["party", "cocktail", "evening", "maxi", "one-shoulder", "long sleeve", "abstract", "floral", "flowy", "blue", "black"],
   "dress61": ["semi-formal", "cocktail", "midi", "v-neck", "spaghetti strap", "sleeveless", "ruffle", "solid", "flowy", "lime green"],
   "dress62": ["casual", "daytime", "mini", "square neck", "spaghetti strap", "sleeveless", "solid", "fitted", "black", "pink"],
   "dress63": ["casual", "daytime", "mini", "square neck", "puff sleeve", "short sleeve", "solid", "fitted", "a-line", "red"],
   "dress64": ["casual", "daytime", "mini", "square neck", "spaghetti strap", "sleeveless", "solid", "fitted", "a-line", "green"],
   "dress65": ["work/office", "semi-formal", "midi", "v-neck", "sleeveless", "solid", "relaxed", "a-line", "blue"],
   "dress66": ["casual", "daytime", "mini", "v-neck", "spaghetti strap", "sleeveless", "solid", "loose", "white", "black"],
   "dress67": ["casual", "daytime", "mini", "round neck", "sleeveless", "solid", "fitted", "brown"],
   "dress68": ["party", "cocktail", "evening", "mini", "sweetheart", "off-the-shoulder", "long sleeve", "solid", "bodycon", "red"],
   "dress69": ["party", "cocktail", "evening", "maxi", "halter neck", "sleeveless", "floral", "flowy", "black", "multicolor"],
   "dress70": ["casual", "daytime", "mini", "v-neck", "sleeveless", "solid", "flowy", "blue"],
   "dress71": ["party", "cocktail", "evening", "midi", "v-neck", "long sleeve", "sheer", "metallic", "ruffle", "flowy", "blue", "gold"],
   "dress72": ["casual", "daytime", "beach/resort", "maxi", "square neck", "spaghetti strap", "sleeveless", "embroidered", "solid", "flowy", "white"],
   "dress73": ["casual", "daytime", "midi", "square neck", "spaghetti strap", "sleeveless", "floral", "fitted", "flowy", "orange", "blue"],
   "dress74": ["casual", "daytime", "midi", "square neck", "sleeveless", "solid", "fitted", "a-line", "red"],
   "dress75": ["casual", "daytime", "mini", "sweetheart", "puff sleeve", "short sleeve", "striped", "flowy", "pink"],
   "dress76": ["casual", "daytime", "mini", "v-neck", "sleeveless", "floral", "flowy", "blue", "white"],
   "dress77": ["casual", "daytime", "midi", "square neck", "sleeveless", "solid", "flowy", "white"],
   "dress78": ["casual", "daytime", "mini", "round neck", "short sleeve", "floral", "flowy", "white"],
   "dress79": ["casual", "daytime", "mini", "square neck", "sleeveless", "solid", "flowy", "loose", "a-line","red"],
   "dress80": ["casual", "daytime", "knee-length", "v-neck", "long sleeve", "floral", "fitted", "shirt dress", "pink", "black", "purple"],
   "dress81": ["casual", "daytime", "midi", "square neck", "sleeveless", "solid", "flowy", "a-line", "blue"],
   "dress82": ["casual", "daytime", "midi", "v-neck", "halter neck", "sleeveless", "solid", "flowy", "a-line", "green"],
   "dress83": ["party", "cocktail", "mini", "sweetheart", "sleeveless", "solid", "fitted", "a-line", "black"],
   "dress84": ["semi-formal", "work/office", "mini", "high neck", "long sleeve", "plaid", "fitted", "shirt dress", "grey", "blue", "white", "tie neck"],
   "dress85": ["party", "evening", "mini", "sweetheart", "sleeveless", "solid", "fitted", "red"],
   "dress86": ["casual", "daytime", "mini", "sweetheart", "puff sleeve", "short sleeve", "checked", "flowy", "lavender", "white"],
   "dress87": ["casual", "daytime", "midi", "square neckline", "short sleeve", "eyelet", "elastic waist", "royal blue", "flowy", "tiered skirt"],
   "dress88": ["casual", "sleeveless", "mini", "spaghetti straps", "square neckline", "layered", "fit-and-flare", "red", "summer dress", "solid color"],
   "dress89": ["casual", "daytime", "midi", "square neck", "spaghetti strap", "sleeveless", "solid", "flowy", "a-line", "brown"],
   "dress90": ["party", "semi-formal", "daytime", "midi", "v-neck", "tie neck", "3/4 sleeve", "cut-out", "plaid", "a-line", "blue"],
   "dress91": ["casual", "party", "daytime", "mini", "sweetheart", "sleeveless", "cut-out", "plaid", "fitted", "blue"],
   "dress92": ["semi-formal", "evening", "daytime", "midi", "v-neck", "sleeveless", "solid", "a-line", "navy blue"],
   "dress93": ["casual", "daytime", "mini", "v-neck", "short sleeve", "puff sleeve", "solid", "a-line", "orange"],
   "dress94": ["casual", "daytime", "mini", "v-neck", "sleeveless", "solid", "fitted", "button-down", "navy blue"],
   "dress95": ["party", "cocktail", "evening", "mini", "off-the-shoulder", "spaghetti strap", "bell sleeve", "solid", "bodycon", "pink"],
   "dress96": ["casual", "daytime", "knee-length", "sweetheart", "spaghetti strap", "floral", "a-line", "yellow"],
   "dress97": ["pink", "mini", "puff sleeves", "square neckline", "button front", "printed", "feminine", "casual"],
   "dress98": ["kurta", "printed", "three-quarter sleeves", "v-neck", "relaxed fit", "boho", "ethnic", "maroon"],
   "dress99": ["semi-formal", "party", "daytime", "wedding guest", "maxi", "sweetheart", "sleeveless", "floral", "fitted", "a-line", "top", "skirt", "black", "multicolor"],
   "dress100": ["casual", "work/office", "daytime", "long sleeve", "solid", "fitted", "straight", "top", "pants", "brown", "beige"]
  };
  const container = document.getElementById("itemsContainer");
  if (container) {
    let itemsHTML = '';
    for (let i = 1; i <= 100; i++) {
      const labels = labelData[`dress${i}`] ? labelData[`dress${i}`].join(" ") : "";
      itemsHTML += `
        <div class="item-card" data-labels="${labels}">
          <img src="assets/dresses/dress${i}.jpg" alt="Dress ${i}" />
        </div>
      `;
    }
    container.innerHTML = itemsHTML;
  }
  
  const searchInput = document.querySelector(".search-bar input");
  const placeholders = [
    "Search for floral",
    "Search your color",
    "Search for party",
    "Search for casual",
    "Search for summer",
    "Search for office"
  ];
  let currentIndex = 0;
  function cyclePlaceholder() {
    searchInput.placeholder = placeholders[currentIndex];
    currentIndex = (currentIndex + 1) % placeholders.length;
  }

  cyclePlaceholder();
  setInterval(cyclePlaceholder, 3500);
  
  const noResultsMessage = document.getElementById("noResultsMessage");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
    const rawTerms = searchInput.value
      .toLowerCase()
      .split(",")
      .map(term => term.trim())
      .filter(term => term.length > 0);

    const items = document.querySelectorAll(".item-card");
    let anyMatch = false;


    items.forEach(item => {
      const labels = item.getAttribute("data-labels").toLowerCase();
      const matches = rawTerms.length === 0 || rawTerms.some(term => labels.includes(term));
      item.style.display = matches ? "block" : "none";
      if (matches) anyMatch = true;
      container.style.minHeight = anyMatch ? "" : "30px";
    });
    noResultsMessage.style.display = anyMatch ? "none" : "block";
  });
  }
});

document.querySelector(".upload-icon").addEventListener("click", function() {
  document.getElementById("uploadModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("uploadModal").style.display = "none";
});

document.getElementById("fileInput").addEventListener("change", function() {
  const file = this.files[0];
  
  if (file && ['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'image/avif'].includes(file.type)) {
    document.getElementById("generateRecommendations").disabled = false;
  } else {
    document.getElementById("generateRecommendations").disabled = true;
    alert("Please upload a valid image (JPG, JPEG, PNG, WEBP, AVIF).");
  }
});

document.getElementById("generateRecommendations").addEventListener("click", function() {
  const file = document.getElementById("fileInput").files[0];

  const generateButton = document.getElementById("generateRecommendations");
  generateButton.disabled = true;
  generateButton.innerText = "Generating...";

  if (file) {
    const formData = new FormData();
    formData.append("image", file);
    fetch("https://excellent-michaella-other6842-49bafa82.koyeb.app/api/classify_dress", {
    // fetch("http://127.0.0.1:5000/api/classify_dress", {  
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      document.getElementById("uploadModal").style.display = "none";
      const responseText = data.response.split("\n");

      const searchInput = document.querySelector(".search-bar input");

      if (responseText[0] === "no") {
        document.getElementById("noResultsMessage").style.display = "block";
        
        document.getElementById("itemsContainer").innerHTML = "";
        
      } else if (responseText[0] === "yes") {
        let labelsArray;
    try {
        labelsArray = JSON.parse(responseText[1]);
    } catch (e) {
        const arrayMatch = responseText[1].match(/\[(.*?)\]/);
        if (arrayMatch) {
            labelsArray = arrayMatch[1].split(',').map(item => 
                item.trim().replace(/['"]/g, '')
            );
        } else {
            labelsArray = [responseText[1]];
        }
    }
    
    const labels = labelsArray.join(", ");

    searchInput.placeholder = `Search for ${labels}`;
    document.getElementById("noResultsMessage").style.display = "none";
    searchInput.value = labels;
    searchInput.dispatchEvent(new Event("input"));
      }
      generateButton.disabled = false;
      generateButton.innerText = "Generate Recommendations";
    })

    .catch(error => {
      console.error("Error uploading file:", error);
      generateButton.disabled = false;
      generateButton.innerText = "Generate Recommendations";
    });
  }
});