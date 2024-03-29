const registerFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // document.location.replace('/');
      window.location.href = '/homepage';
    } else {
      alert('Failed to log in from registration operation!');
    }
  }
};




document
  .querySelector('.register-form')
  .addEventListener('submit', registerFormHandler);



  // const loginFormHandler = async (event) => {
  //   // Stop the browser from submitting the form so we can do so with JavaScript
  //   event.preventDefault();
  
  //   // Gather the data from the form elements on the page
  //   const email = document.querySelector('#email-login').value.trim();
  //   const password = document.querySelector('#password-login').value.trim();
  
  //   if (email && password) {
  //     // Send the e-mail and password to the server
  //     const response = await fetch('/login', {
  //       method: 'POST',
  //       body: JSON.stringify({ email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to log in from login form!');
  //     }
  //     console.log()
  //   }
  // };
  
  
  
  
  // document
  //   .querySelector('.login-form')
  //   .addEventListener('submit', loginFormHandler);  