(() => {
  const loginForm = document.getElementById('loginForm');
  const loginButton = document.querySelector('#loginForm .btn');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginMessage = document.getElementById('loginMessage');

  if (!loginForm) return;

  function showMessage(text, type) {
    loginMessage.textContent = text;
    loginMessage.className = 'message ' + type;
    loginMessage.style.display = 'block';

    if (type === 'error') {
      setTimeout(() => { loginMessage.style.display = 'none'; }, 5000);
    }
  }

  function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      showMessage('Login successful! Redirecting...', 'success');
      localStorage.setItem('currentUser', JSON.stringify(user));
      setTimeout(() => { window.location.href = '../amazon.html'; }, 1000);
    } else {
      showMessage('Invalid email or password', 'error');
      passwordInput.value = '';
    }
  }

  function handleLogin(e) {
    if (e) e.preventDefault();
    // to get the input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      showMessage('Please fill in all fields', 'error');
      return;
    }

    if (password.length < 6) {
      showMessage('Password must be at least 6 characters', 'error');
      return;
    }

    loginUser(email, password);
  }

  // Submit and click handlers call the same logic
  loginForm.addEventListener('submit', handleLogin);
  // Button click is redundant if type="submit" and inside form, but keeping it safe (prevent double flush if needed)
  if (loginButton) loginButton.addEventListener('click', (e) => {
    // If button is submit type, it triggers form submit. 
    // check if default prevented? 
    // actually, just letting form submit handle it is cleaner, but keeping existing logic structure
    handleLogin(e);
  });

  // Clear messages on focus
  [emailInput, passwordInput].forEach(inp => {
    if (inp) inp.addEventListener('focus', () => { loginMessage.style.display = 'none'; });
  });

  // Google Sign-In Handler
  const googleSignInBtn = document.getElementById('googleSignInBtn');

  if (googleSignInBtn) {
    googleSignInBtn.addEventListener('click', async () => {
      try {
        // Check if Firebase is loaded
        if (!window.firebaseAuth || !window.googleProvider || !window.signInWithPopup) {
          showMessage('Google Sign-In is not configured. Please check Firebase setup.', 'error');
          return;
        }

        // Show loading state
        googleSignInBtn.disabled = true;
        googleSignInBtn.textContent = 'Signing in...';

        // Sign in with Google popup
        const result = await window.signInWithPopup(window.firebaseAuth, window.googleProvider);
        const user = result.user;

        // Create user object
        const googleUser = {
          email: user.email,
          name: user.displayName || user.email.split('@')[0],
          photoURL: user.photoURL || '',
          uid: user.uid,
          provider: 'google'
        };

        // Store user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(googleUser));

        // Also add to users array if not exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(u => u.email === googleUser.email);

        if (!existingUser) {
          users.push(googleUser);
          localStorage.setItem('users', JSON.stringify(users));
        }

        showMessage('Google Sign-In successful! Redirecting...', 'success');
        setTimeout(() => { window.location.href = '../amazon.html'; }, 1000);

      } catch (error) {
        console.error('Google Sign-In Error:', error);

        // Reset button state
        googleSignInBtn.disabled = false;
        googleSignInBtn.innerHTML = `
          <svg class="google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        `;

        // Handle specific errors
        if (error.code === 'auth/popup-closed-by-user') {
          showMessage('Sign-in cancelled', 'error');
        } else if (error.code === 'auth/popup-blocked') {
          showMessage('Popup blocked. Please allow popups for this site.', 'error');
        } else {
          showMessage('Google Sign-In failed. Please try again.', 'error');
        }
      }
    });
  }
})();
