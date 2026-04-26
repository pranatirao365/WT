function qs(root, selector) {
  return root.querySelector(selector);
}

function getQueryParam(name) {
  var search = window.location.search || "";
  if (search.indexOf("?") === 0) search = search.substring(1);
  var parts = search.split("&");
  for (var i = 0; i < parts.length; i++) {
    var kv = parts[i].split("=");
    if (decodeURIComponent(kv[0] || "") === name) {
      return decodeURIComponent(kv[1] || "");
    }
  }
  return "";
}

function setMessage(container, type, text) {
  container.className = "msg msg--" + type;
  container.textContent = text;
  container.style.display = "block";
}

function clearMessage(container) {
  container.textContent = "";
  container.style.display = "none";
  container.className = "msg";
}

function isEmailValid(email) {
  // Simple, assignment-friendly validation.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPhoneValid(phone) {
  return /^\d{10}$/.test(phone);
}

function validatePasswordRules(password) {
  if (!password || password.length === 0) {
    return "Password should not be empty.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number.";
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return "Password must contain at least one special character.";
  }
  return "";
}

function storageKey(key) {
  return "wt_week3_" + key;
}

function getUsers() {
  try {
    var raw = localStorage.getItem(storageKey("users"));
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch (e) {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem(storageKey("users"), JSON.stringify(users || {}));
}

function ensureSeedUsers() {
  // Seed sample registered emails for forgot-password demo.
  var users = getUsers();
  if (window.KNOWN_EMAILS && window.KNOWN_EMAILS.length) {
    for (var i = 0; i < window.KNOWN_EMAILS.length; i++) {
      var email = String(window.KNOWN_EMAILS[i]).toLowerCase();
      if (!users[email]) {
        users[email] = {
          username: "demoUser",
          email: email,
          phone: "9999999999",
          password: "Password@123",
          createdAt: new Date().toISOString()
        };
      }
    }
    saveUsers(users);
  }
}

function setCurrentUserEmail(email) {
  if (!email) return;
  localStorage.setItem(storageKey("current_user"), String(email).toLowerCase());
}

function getCurrentUserEmail() {
  try {
    var raw = localStorage.getItem(storageKey("current_user"));
    if (!raw) return "";
    return String(raw).trim().toLowerCase();
  } catch (e) {
    return "";
  }
}

function clearCurrentUserEmail() {
  try {
    localStorage.removeItem(storageKey("current_user"));
  } catch (e) {
    // ignore
  }
}

function getCurrentUser() {
  var email = getCurrentUserEmail();
  if (!email) return null;
  var users = getUsers();
  return users[email] || null;
}

function isLoggedIn() {
  return !!getCurrentUserEmail();
}

function notifyNavAuthChanged() {
  try {
    if (!window.parent || window.parent === window) return;
    if (!window.parent.frames) return;
    var nav = window.parent.frames["navFrame"];
    if (nav && typeof nav.updateAuthUI === "function") {
      nav.updateAuthUI();
    }
  } catch (e) {
    // ignore
  }
}

function isSafeNextUrl(next) {
  if (!next) return "";
  var s = String(next);
  var lower = s.toLowerCase();
  if (s.indexOf("://") !== -1) return "";
  if (s.indexOf("\\") !== -1) return "";
  if (s.indexOf("..") !== -1) return "";
  if (s.charAt(0) === "/") return "";
  if (lower.indexOf(".html") === -1) return "";
  return s;
}

function redirectToLogin(next) {
  var safeNext = isSafeNextUrl(next);
  var url = "login.html";
  if (safeNext) url += "?next=" + encodeURIComponent(safeNext);
  window.location.href = url;
}

function renderProfileHtml(user) {
  if (!user) {
    return (
      '<div class="panel" style="margin-bottom:12px;">' +
      '  <div class="h2" style="margin-top:0;">User Profile</div>' +
      '  <div class="muted">Not logged in. Use <a href="login.html">Login</a> or <a href="register.html">Register</a>.</div>' +
      '</div>'
    );
  }

  return (
    '<div class="panel" style="margin-bottom:12px;">' +
    '  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">' +
    '    <div>' +
    '      <div class="h2" style="margin:0;">User Profile</div>' +
    '      <div class="muted small">Logged in</div>' +
    '    </div>' +
    '    <button class="btn btn--ghost" id="logoutBtn" type="button">Logout</button>' +
    '  </div>' +
    '  <table class="table" style="margin-top:10px;">' +
    '    <tr><td class="label">Username</td><td>' + escapeHtml(user.username || '') + '</td></tr>' +
    '    <tr><td class="label">Email</td><td>' + escapeHtml(user.email || '') + '</td></tr>' +
    '    <tr><td class="label">Phone</td><td>' + escapeHtml(user.phone || '') + '</td></tr>' +
    '  </table>' +
    '</div>'
  );
}

function getBookById(bookId) {
  if (!window.BOOKS) return null;
  for (var i = 0; i < window.BOOKS.length; i++) {
    if (window.BOOKS[i].id === bookId) return window.BOOKS[i];
  }
  return null;
}

function renderBookDetails(book) {
  if (!book) {
    return (
      "<div class=\"panel\">" +
      "<div class=\"h1\">Book Details</div>" +
      "<div class=\"msg msg--err\">Book not found.</div>" +
      "</div>"
    );
  }

  var badgeClass = "badge";
  if (book.availabilityType === "ok") badgeClass += " badge--ok";
  if (book.availabilityType === "warn") badgeClass += " badge--warn";

  return (
    "<div class=\"panel\">" +
    "<div class=\"h1\">Book Details</div>" +
    "<div style=\"display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:10px;\">" +
    "  <div class=\"h2\" style=\"margin:0;\">" + escapeHtml(book.title) + "</div>" +
    "  <span class=\"" + badgeClass + "\">" + escapeHtml(book.availability) + "</span>" +
    "</div>" +
    "<table class=\"table\">" +
    "  <tr><td class=\"label\">Author</td><td>" + escapeHtml(book.author) + "</td></tr>" +
    "  <tr><td class=\"label\">Category</td><td>" + escapeHtml(book.category) + "</td></tr>" +
    "  <tr><td class=\"label\">Price</td><td>" + escapeHtml(book.price) + "</td></tr>" +
    "</table>" +
    "<p class=\"muted\" style=\"margin-bottom:0;\">" + escapeHtml(book.description) + "</p>" +
    "</div>"
  );
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Exposed for nav frame to call dynamically.
window.renderBookById = function (bookId) {
  var root = document.getElementById("detailsRoot") || document.getElementById("contentRoot");
  if (!root) return false;

  if (!isLoggedIn()) {
    root.innerHTML =
      '<div class="panel">' +
      '  <div class="h1">Login Required</div>' +
      '  <div class="msg msg--warn">Please login to view book details.</div>' +
      '  <div class="muted small"><a href="login.html">Go to Login</a></div>' +
      '</div>';
    return true;
  }

  root.innerHTML = renderBookDetails(getBookById(bookId));
  return true;
};

function getUniqueCategories() {
  var seen = {};
  var categories = [];
  if (!window.BOOKS) return categories;
  for (var i = 0; i < window.BOOKS.length; i++) {
    var cat = window.BOOKS[i].category;
    if (!seen[cat]) {
      seen[cat] = true;
      categories.push(cat);
    }
  }
  categories.sort();
  return categories;
}

function filterBooks(books, query, category) {
  var q = (query || "").toLowerCase();
  var cat = category || "All";

  var result = [];
  for (var i = 0; i < books.length; i++) {
    var b = books[i];
    var matchesCategory = cat === "All" || b.category === cat;
    var matchesQuery = q.length === 0 || String(b.title).toLowerCase().indexOf(q) !== -1;
    if (matchesCategory && matchesQuery) result.push(b);
  }
  return result;
}

function renderBooksListHtml(books) {
  if (!books || books.length === 0) {
    return '<div class="muted">No books found.</div>';
  }

  var html = '';
  for (var i = 0; i < books.length; i++) {
    var b = books[i];
    html +=
      '<div class="book-card" data-book-id="' + escapeHtml(b.id) + '">' +
      '  <div class="book-title">' + escapeHtml(b.title) + '</div>' +
      '  <div class="muted small">' + escapeHtml(b.author) + ' • ' + escapeHtml(b.category) + '</div>' +
      '  <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center; gap:10px;">' +
      '    <span class="book-price">' + escapeHtml(b.price) + '</span>' +
      '    <span class="badge badge--' + (b.availabilityType === 'warn' ? 'warn' : 'ok') + '">' + escapeHtml(b.availability) + '</span>' +
      '  </div>' +
      '</div>';
  }
  return html;
}

window.initBooksPage = function () {
  var list = document.getElementById('booksList');
  var details = document.getElementById('detailsRoot');
  var profileRoot = document.getElementById('profileRoot');
  var categorySelect = document.getElementById('categoryFilter');
  var searchInput = document.getElementById('searchInput');

  if (!list || !details || !categorySelect || !searchInput) return;

  // Books should be visible only after login.
  if (!isLoggedIn()) {
    redirectToLogin('books.html' + (window.location.search || ''));
    return;
  }

  if (profileRoot) {
    profileRoot.innerHTML = renderProfileHtml(getCurrentUser());
    var logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        clearCurrentUserEmail();
        notifyNavAuthChanged();
        redirectToLogin('books.html');
      });
    }
  }

  // Populate category dropdown
  var categories = getUniqueCategories();
  categorySelect.innerHTML = '<option value="All">All</option>';
  for (var i = 0; i < categories.length; i++) {
    var opt = document.createElement('option');
    opt.value = categories[i];
    opt.textContent = categories[i];
    categorySelect.appendChild(opt);
  }

  function refresh() {
    var filtered = filterBooks(window.BOOKS || [], searchInput.value, categorySelect.value);
    list.innerHTML = renderBooksListHtml(filtered);
  }

  // Real-time search + filter
  searchInput.addEventListener('input', refresh);
  categorySelect.addEventListener('change', refresh);

  // Click a book card to show details
  list.addEventListener('click', function (e) {
    var node = e.target;
    while (node && node !== list) {
      if (node.getAttribute && node.getAttribute('data-book-id')) {
        window.renderBookById(node.getAttribute('data-book-id'));
        return;
      }
      node = node.parentNode;
    }
  });

  refresh();

  // If opened from nav with ?book=b1, show that book
  var bookId = getQueryParam('book');
  if (bookId) {
    window.renderBookById(bookId);
  } else {
    details.innerHTML = '<div class="panel"><div class="h1">Book Details</div><div class="muted">Select a book to view details.</div></div>';
  }
};

window.initRegistrationForm = function () {
  var form = document.getElementById("registrationForm");
  if (!form) return;

  var msg = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage(msg);

    ensureSeedUsers();

    var username = qs(form, "#username").value.trim();
    var email = qs(form, "#email").value.trim();
    var phone = qs(form, "#phone").value.trim();
    var password = qs(form, "#password").value;
    var confirmPassword = qs(form, "#confirmPassword").value;
    var terms = qs(form, "#terms").checked;

    if (username.length === 0) {
      return setMessage(msg, "err", "Username should not be empty.");
    }
    if (username.length < 5) {
      return setMessage(msg, "err", "Username must be at least 5 characters long.");
    }
    if (!isEmailValid(email)) {
      return setMessage(msg, "err", "Email must follow a valid format.");
    }
    if (!isPhoneValid(phone)) {
      return setMessage(msg, "err", "Phone number must be exactly 10 digits.");
    }

    var passwordError = validatePasswordRules(password);
    if (passwordError) {
      return setMessage(msg, "err", passwordError);
    }
    if (confirmPassword !== password) {
      return setMessage(msg, "err", "Confirm Password must match the entered password.");
    }
    if (!terms) {
      return setMessage(msg, "err", "You must accept terms and conditions.");
    }

    var users = getUsers();
    var key = email.toLowerCase();

    if (users[key]) {
      setMessage(msg, "warn", "Account already exists. Please login.");
      setTimeout(function () {
        window.location.href = "login.html?next=" + encodeURIComponent("books.html");
      }, 700);
      return;
    }

    users[key] = {
      username: username,
      email: email,
      phone: phone,
      password: password,
      createdAt: new Date().toISOString()
    };
    saveUsers(users);

    setCurrentUserEmail(email);
    notifyNavAuthChanged();
    setMessage(msg, "ok", "Registration successful. Redirecting to books...");
    setTimeout(function () {
      window.location.href = "books.html";
    }, 700);
  });
};

window.initLoginForm = function () {
  var form = document.getElementById('loginForm');
  if (!form) return;

  var msg = document.getElementById('loginMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearMessage(msg);

    ensureSeedUsers();

    var email = qs(form, '#email').value.trim();
    var password = qs(form, '#password').value;

    if (!isEmailValid(email)) {
      return setMessage(msg, 'err', 'Email Address should be a valid email format.');
    }
    if (!password || password.length === 0) {
      return setMessage(msg, 'err', 'Password should not be empty.');
    }

    var users = getUsers();
    var key = email.toLowerCase();
    if (!users[key]) {
      return setMessage(msg, 'warn', 'Account not found. Please register first.');
    }

    if (users[key].password !== password) {
      return setMessage(msg, 'err', 'Incorrect password.');
    }

    setCurrentUserEmail(email);
    notifyNavAuthChanged();
    setMessage(msg, 'ok', 'Login successful. Redirecting to books...');
    setTimeout(function () {
      var next = isSafeNextUrl(getQueryParam('next'));
      window.location.href = next || 'books.html';
    }, 600);
  });
};

window.initForgotForm = function () {
  var form = document.getElementById("forgotForm");
  if (!form) return;

  var msg = document.getElementById("forgotMessage");
  var resetSection = document.getElementById("resetSection");
  var verifiedEmailInput = document.getElementById("verifiedEmail");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage(msg);

    ensureSeedUsers();

    var users = getUsers();

    var email = qs(form, "#email").value.trim();
    if (!isEmailValid(email)) {
      return setMessage(msg, "err", "Email Address should be a valid email format.");
    }

    var key = email.toLowerCase();
    var user = users[key];

    // Step 1: verify email exists
    if (resetSection && resetSection.style.display === "none") {
      if (!user) {
        return setMessage(msg, "warn", "This email address is not associated with any account.");
      }
      if (verifiedEmailInput) verifiedEmailInput.value = email;
      resetSection.style.display = "block";
      return setMessage(msg, "ok", "Email verified. Enter a new password below.");
    }

    // Step 2: reset password
    var verifiedEmail = (verifiedEmailInput && verifiedEmailInput.value) ? verifiedEmailInput.value.trim() : email;
    var verifiedKey = verifiedEmail.toLowerCase();
    if (!users[verifiedKey]) {
      return setMessage(msg, "warn", "This email address is not associated with any account.");
    }

    var newPassword = qs(form, "#newPassword").value;
    var confirmNewPassword = qs(form, "#confirmNewPassword").value;

    var newPasswordError = validatePasswordRules(newPassword);
    if (newPasswordError) {
      return setMessage(msg, "err", newPasswordError);
    }
    if (confirmNewPassword !== newPassword) {
      return setMessage(msg, "err", "Confirm new password must match the entered password.");
    }

    users[verifiedKey].password = newPassword;
    saveUsers(users);

    if (resetSection) resetSection.style.display = "none";
    if (verifiedEmailInput) verifiedEmailInput.value = "";

    setMessage(msg, "ok", "Password reset successful.");
    form.reset();
  });

  // default state
  if (resetSection) resetSection.style.display = "none";
};
