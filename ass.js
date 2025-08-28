
// Simple interactive behaviors: mobile menu, smooth scroll, modal, subscribe
const hamb = document.getElementById('hambBtn');
hamb.addEventListener('click', ()=> {
  const nav = document.querySelector('nav ul');
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.background = 'transparent';
  nav.style.position = 'absolute';
  nav.style.right = '24px';
  nav.style.top = '72px';
  nav.style.padding = '12px';
  nav.style.borderRadius = '10px';
  nav.style.boxShadow = '0 14px 36px rgba(2,6,23,0.6)';
});

function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth',block:'start'});
}

// modal logic
function openModal(type){
  document.getElementById('modal').style.display = 'flex';
  // (could vary by type)
}
function closeModal(){
  document.getElementById('modal').style.display = 'none';
}
function sendRequest(){
  const name = document.getElementById('nameField').value || '—';
  const email = document.getElementById('emailField').value || '—';
  const msg = document.getElementById('msgField').value || '—';
  closeModal();
  // demo behavior
  alert('Запрос отправлен\\n' + 'Имя: ' + name + '\\nEmail: ' + email + '\\nСообщение: ' + msg);
}

// subscribe
function subscribe(){
  const email = document.getElementById('emailInput').value.trim();
  if(!email || !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)){
    alert('Пожалуйста, введите корректный email');
    return;
  }
  // demo action
  alert('Спасибо! Подписка оформлена для: ' + email);
  document.getElementById('emailInput').value = '';
}

// small accessibility: close modal on esc
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeModal();
});

// simple client-side content placeholders: replace with real content or fetch from API
