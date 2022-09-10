const chat = document.querySelector('.chat-widget');
const sideWidget = document.querySelector('.chat-widget__side');
const chatInput = document.getElementById('chat-widget__input');

const robotAnswers = [
  'Мне все равно что Вы хотите',
  'Уходите, я Вас не звал!',
  'Кто здесь?',
  'Каждый вопрос - 10 рублей. Продолжим?',
  'Nicht verstehen'
];

sideWidget.addEventListener('click', () => {
  chat.classList.toggle('chat-widget_active');
});

chatInput.addEventListener('keydown', (e) => {
  let time = new Date();
  let currentTime = time.getHours() + ':' + time.getMinutes();

  if (e.key === 'Enter') {
    if (!chatInput.value) {
      alert('Сообщение не может быть пустым');
    }
    const messages = document.querySelector( '.chat-widget__messages' );
    messages.innerHTML += `
      <div class="message_client">
        <div class="message__time">` + currentTime + `</div>
        <div class="message__text">` + chatInput.value  + `</div>
      </div>
    `;
    chatInput.value = '';

    setTimeout(() => {
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">` + currentTime + `</div>
          <div class="message__text">` + robotAnswers[Math.floor((Math.random() * (robotAnswers.length - 0)) + 0)] + `</div>
        </div>
      `;
    }, 2000);
  };
});