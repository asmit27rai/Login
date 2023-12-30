document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username === '@ashu95' && password === 'As2371') {
      alert('Login Successful');
      document.getElementById('loginUsername').value = null;
      document.getElementById('loginPassword').value = null;
    } else {
      alert('Invalid username or password');
      document.getElementById('loginUsername').value = null;
      document.getElementById('loginPassword').value = null;
    }
});