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
  numberRandom = Math.floor(Math.random() * 100);
}