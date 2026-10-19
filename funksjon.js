
const emailInput = document.getElementById('email');
const subscribeBtn = document.getElementById('subscribe');
const msg = document.getElementById('msg');

function subscribe() {
  const value = emailInput.value.trim();
  const valid = /^\S+@\S+\.\S+$/.test(value);
  if (valid) {
   
    msg.textContent = 'Thank you. You are on the list.';
    emailInput.value = '';
  } else {
    msg.textContent = 'Enter a valid email address, for example name@mail.com.';
  }
}

subscribeBtn.addEventListener('click', subscribe);
emailInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') subscribe();
});


document.getElementById('year').textContent = new Date().getFullYear();