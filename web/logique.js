console.log('logique.js chargé');

fetch('https://randomuser.me/api/?results=100')
  .then(res => res.json())
  .then(data => {
    const users = data.results;
    const listeDiv = document.getElementById('liste');
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <p>Nom: ${user.name.first}</p>
        <p>Prénom: ${user.name.last}</p>
        <p>Téléphone: ${user.phone}</p>
        <img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}">
      `;
      userList.appendChild(listItem);
    });

    listeDiv.appendChild(userList);
  });


function getRandom(){
  
  // Vérifier s'il y a des données d'utilisateurs disponibles
  if (usersData.length > 0) {
    const randomIndex = Math.floor(Math.random() * usersData.length);
    const randomUser = usersData[randomIndex];
    
    const randomSpot = document.getElementById('randomSpot');
    randomSpot.innerHTML = `
      <p>Nom: ${randomUser.name.first}</p>
      <p>Prénom: ${randomUser.name.last}</p>
      <p>Téléphone: ${randomUser.phone}</p>
      <img src="${randomUser.picture.thumbnail}" alt="${randomUser.name.first} ${randomUser.name.last}">
    `;
    randomSpot.classList.remove('hidden');
    randomSpot.classList.add('shown');
  } else {
    alert('Veuillez attendre que les données des utilisateurs soient chargées.');
  }

  // afficher la div
  document.getElementById('randomSpot').classList.remove('hidden');
  document.getElementById('randomSpot').classList.add('shown');
  
}