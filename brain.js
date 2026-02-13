const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const menu = document.getElementById('contextMenu');

// Функция создания папки с твоим лимитом
function createNewFolder() {
    let name = prompt("Введите название папки:");
    if (name.length > 93050) {
        alert("ОШИБКА: Превышен лимит 93050 символов!");
        return;
    }
    console.log("Создаем папку на Google Диске: " + name);
}

// Показ меню
function openMenu(e, fileName) {
    e.preventDefault();
    menu.style.display = 'block';
    menu.style.top = (isMobile ? '40%' : e.pageY + 'px');
    menu.style.left = (isMobile ? '10%' : e.pageX + 'px');
    if(isMobile) menu.style.width = "80%";
}

// Закрыть меню при клике в другое место
window.onclick = () => menu.style.display = 'none';

// Эмуляция загрузки файлов (для примера)
const files = ["Документ.pdf", "Видео_на_канал.mp4", "План_работы.txt"];
const list = document.getElementById('fileList');

files.forEach(f => {
    let div = document.createElement('div');
    div.className = 'file-item';
    div.innerHTML = `
        <span>📄 ${f}</span>
        <button class="dots-btn" onclick="openMenu(event, '${f}')">⋮</button>
    `;
    
    // Правый клик для ПК
    if(!isMobile) {
        div.oncontextmenu = (e) => openMenu(e, f);
    }
    list.appendChild(div);
});

function action(type) {
    alert("Действие: " + type);
}

