(() => {
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');
  const loginLoader = document.getElementById('loginLoader');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginMessage = document.getElementById('loginMessage');
  const togglePassword = document.getElementById('togglePassword');
  const rememberMe = document.getElementById('rememberMe');

  if (!loginForm) return;

  // Load remembered email
  const savedEmail = localStorage.getItem('rememberedEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMe.checked = true;
  }

  function showMessage(text, type) {
    loginMessage.textContent = text;
    loginMessage.className = `message ${type}`;
    loginMessage.style.display = 'block';

    if (type === 'error') {
      // Shake effect for card on error
      const card = document.querySelector('.login-card');
      card.style.animation = 'shake 0.4s ease-in-out';
      setTimeout(() => { card.style.animation = ''; }, 400);

      setTimeout(() => {
        loginMessage.style.display = 'none';
      }, 5000);
    }
  }

  // Toggle Password Visibility
  if (togglePassword) {
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.classList.toggle('fa-eye');
      togglePassword.classList.toggle('fa-eye-slash');
    });
  }

  function setLoader(loading) {
    if (loading) {
      loginBtn.disabled = true;
      loginBtn.querySelector('span').style.display = 'none';
      loginLoader.style.display = 'block';
    } else {
      loginBtn.disabled = false;
      loginBtn.querySelector('span').style.display = 'block';
      loginLoader.style.display = 'none';
    }
  }

  async function handleLogin(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      showMessage('Please enter both email and password.', 'error');
      return;
    }

    setLoader(true);

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        if (rememberMe.checked) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        showMessage('Login successful! Redirecting...', 'success');
        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUser', JSON.stringify(data.user));

        setTimeout(() => {
          if (data.user.role === 'admin') {
            window.location.href = '../admin_dashboard.html';
          } else {
            window.location.href = '../user_dashboard.html';
          }
        }, 1000);
      } else {
        setLoader(false);
        showMessage(data.message || 'Invalid email or password. Please try again.', 'error');
        passwordInput.value = '';
      }
    } catch (error) {
      console.error('Error:', error);
      setLoader(false);
      showMessage('An error occurred. Please make sure the server is running.', 'error');
    }
  }

  loginForm.addEventListener('submit', handleLogin);

  // Google Sign-In Handler
  const googleSignInBtn = document.getElementById('googleSignInBtn');

  if (googleSignInBtn) {
    googleSignInBtn.addEventListener('click', async () => {
      try {
        if (
          !window.firebaseAuth ||
          !window.googleProvider ||
          !window.signInWithPopup ||
          !window.GoogleAuthProvider
        ) {
          showMessage('Google Sign-In is temporarily unavailable.', 'error');
          return;
        }

        googleSignInBtn.disabled = true;
        googleSignInBtn.querySelector('span').textContent = 'Signing in...';

        const result = await window.signInWithPopup(window.firebaseAuth, window.googleProvider);
        const credential = window.GoogleAuthProvider.credentialFromResult(result);
        const idToken = credential?.idToken;

        if (!idToken) {
          throw new Error('Google ID token was not returned.');
        }

        const response = await fetch('http://localhost:3000/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ idToken })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Google Sign-In failed.');
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUser', JSON.stringify(data.user));

        showMessage('Google Sign-In successful! Redirecting...', 'success');
        setTimeout(() => {
          if (data.user.role === 'admin') {
            window.location.href = '../admin_dashboard.html';
          } else {
            window.location.href = '../user_dashboard.html';
          }
        }, 1000);

      } catch (error) {
        console.error('Google Sign-In Error:', error);
        googleSignInBtn.disabled = false;
        googleSignInBtn.querySelector('span').textContent = 'Continue with Google';

        if (error.code === 'auth/popup-closed-by-user') {
          showMessage('Sign-in cancelled.', 'error');
        } else {
          showMessage(error.message || 'Google Sign-In failed. Please try again.', 'error');
        }
      }
    });
  }

  // Add Shake Animation Style
  const style = document.createElement('style');
  style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
  document.head.appendChild(style);
})();
