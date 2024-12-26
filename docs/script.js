GUILD_URL = 'https://discord.com/api/v9/invites/ErNJwsqzVu?with_counts=true&with_expiration=true';
GUILD_WIDGET_URL = 'https://discord.com/api/guilds/422346423321886730/widget.json';

// Функция для переключения описания
function toggleDescription(id, triggerElement) {
  var desc = document.getElementById(id);
  var currentlyActive = document.querySelector('.rp-item.active');

  // Скрываем предыдущее активное описание, если оно есть и отличается от текущего
  if (currentlyActive && currentlyActive !== triggerElement) {
    currentlyActive.classList.remove('active');
    var prevDesc = document.getElementById(currentlyActive.getAttribute('data-description-id'));
    if (prevDesc) {
      prevDesc.style.opacity = 0;
      setTimeout(function() {
        prevDesc.style.display = 'none';
      }, 300);
    }
  }

  // Переключаем состояние текущего элемента
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
    setTimeout(function() {
      desc.style.opacity = 1;
    }, 10);
    triggerElement.classList.add('active');
  } else {
    desc.style.opacity = 0;
    setTimeout(function() {
      desc.style.display = "none";
    }, 300);
    triggerElement.classList.remove('active');
  }
}

// Пример добавления обработчиков событий для всех элементов списка
document.querySelectorAll('.rp-item').forEach(function(item) {
  item.addEventListener('click', function() {
    var descriptionId = item.getAttribute('data-description-id'); // Атрибут с ID описания
    toggleDescription(descriptionId, item);
  });
});

// DISCORD API

// Функция для получения и отображения данных о онлайн-игроках с сервера Discord
function fetchDiscordWidget() {
  const onlineUsersList = document.querySelector('.online-users-list'); // Получаем контейнер для списка
  const onlineUsersDiv = document.getElementById('online-users'); // Получаем контейнер для всего блока
  const header = onlineUsersDiv.querySelector('h3'); // Заголовок для обновления текста
  const totalMembersCount = document.querySelector('.total-members-count'); // Получаем элемент для отображения общего числа участников
  
  onlineUsersList.innerHTML = "<li>Загрузка...</li>"; // Показываем индикатор загрузки

  // Обращение к API Discord с помощью invite-ссылки
  fetch(GUILD_URL)
    .then(response => response.json())
    .then(data => {
      // Получение всех участников сервера, несмотря на их сетевой статус и роли
      // возвращаем значение в следующий then в качестве аргумента totalMembers
      return data.approximate_member_count;
    })
    .then((totalMembers) => {
      return fetch(GUILD_WIDGET_URL)
      .then(response => response.json())
      .then(data => {
        const onlineMembers = data.members.filter(member => member.status === 'online' || member.status === 'idle' || member.status === 'dnd');
        console.log(onlineMembers)
  
        // Обновляем общее количество участников
        if (totalMembersCount) {
          totalMembersCount.innerHTML = `Всего участников: ${totalMembers}`;
        }
  
        if (onlineMembers.length > 0) {
          const onlineList = onlineMembers.map(member => `<li>${member.username}</li>`).join('');
          onlineUsersList.innerHTML = onlineList;
          
          // Обновляем заголовок с количеством онлайн-игроков
          header.innerHTML = `Онлайн (${onlineMembers.length})`;
        } else {
          onlineUsersList.innerHTML = "<li>Нет игроков в сети</li>";
          
          // Если нет игроков, заголовок будет "Онлайн (0)"
          header.innerHTML = "Онлайн (0)";
        }
      })
      .catch(error => {
        console.error('Ошибка при получении данных: ', error);
        onlineUsersList.innerHTML = "<li>Не удалось загрузить данные о сервере Discord.</li>";
        
        // Если ошибка, также обновляем заголовок
        header.innerHTML = "Онлайн (0)";
        
        // Также обновляем количество участников в случае ошибки
        if (totalMembersCount) {
          totalMembersCount.innerHTML = "Всего участников: 0";
        }
      });
    });  
}

// Вызов функции для загрузки виджета при загрузке страницы
document.addEventListener('DOMContentLoaded', fetchDiscordWidget);


