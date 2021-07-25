const app = document.querySelector('.app');
const loadingEL = document.querySelector('.loading');

let loading = false;

const getDatabaseFromBackend = async () => {
  loading = true;
  const res = await fetch('http://localhost:5000/calendar');
  const date = await res.json();
  loading = false;
  return date;
}

const createElemDom = (date) => {
  const card = document.createElement('div'),
    cardBody = document.createElement('div'),
    cardHeader = document.createElement('div'),
    cardTitle = document.createElement('h5'),
    cardText = document.createElement('p'),
    badge = document.createElement('span'),
    cardFooter = document.createElement('div');

  let statusI = date.status === 'ПРОЙДЕННО' ? true : false;

  card.className = 'card mb-2';
  cardBody.className = 'card-body';
  cardHeader.className = 'card-header';
  cardTitle.className = 'card-title';
  cardText.className = 'card-text';
  cardFooter.className = 'card-footer';
  cardTitle.innerHTML = date.name;
  cardText.innerHTML = date.id;
  badge.innerHTML = date.status;
  cardFooter.innerHTML = `Дата занятия: ${date.date}`;
  !statusI ? badge.className = 'badge bg-danger' : badge.className = 'badge bg-success';
  card.setAttribute("style", "width: 100%;");
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  cardHeader.appendChild(cardTitle);
  cardHeader.appendChild(badge);
  cardBody.appendChild(cardText);

  app.appendChild(card);
  return card;

};

const addDateBase = async () => {
  const date = await getDatabaseFromBackend();
  if (!loading) {
    loadingEL.setAttribute('hidden', '');
  }
  date.forEach(elem => {
    console.log(elem.status);
    createElemDom(elem);
  });
}

addDateBase();