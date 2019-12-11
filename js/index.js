





const user = {
  id: 456,
  name: 'Charles Babbage',
  img: 'img/456.jpg'
}

const messages = [
  {
     id: 1,
     from: {
        id: 123,
        name: 'Anderson Jacker',
        img: 'img/123.jpg'
     },
     time: {
        date: 1,
        month: 8,
        year: 1843,
        hour: 14,
        minute: 59
     },
     text: `You should check out this little script I just wrote. 😂 lol`
  },
]

document.getElementById(`btnOthers`).addEventListener('click', event => {
  document.getElementById(`others`).classList.toggle('open');
});


function getOtherAsHtml(user){
  return`<ul>
  <li><img src=${user.img}alt="shoe"></li>
  <li><p>${user.img}></p></li>
  <li><p>${user.id}</p></li>
  </ul>`;
}



function getMessageAsHtml(msg) {
  return `
  <article class ="messages">
  <h2> ${msg.from.name}</h2>
  <p> from ${msg.id}</p>
  <p> sent : ${msg.time.date} ${msg.time.month} ${msg.time.year}
  <p> message sent ${msg.time.hour} ${msg.time.minute} </p>
  <p>yo</p>

</article> `;
}
 

  
function renderOtherContact(other){
  document.getElementById('others').innerHTML = other.map(getOtherAsHtml).join(`\n`);
}

function renderConversation(arr) {
 
  document.getElementById('messages').innerHTML = arr.map(getMessageAsHtml).join('');
}




function sendMessage(event, msgs) {
  event.preventDefault();

  const id = (msgs.reduce((highest, m) => (m.id > highest) ? m.id : highest, 0)) + 1; // Unique id

  const now = Date.now(); // The current date and time
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const text = event.target.elements.message.value.trim(); // The text

  // 1. Create a new `message` Object here with the data above

  // 2. push() the object onto the parameter `msgs` here
 
  renderConversation(msgs);  // Re-render the messages
};


renderConversation(messages);
renderOtherContacts(user);
//document.getElementById('newMsg').addEventListener('submit', e => sendMessage(e, messages))

