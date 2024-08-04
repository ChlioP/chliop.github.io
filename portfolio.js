document.getElementById('MenuB').addEventListener('click', function() {
    var menu = document.getElementById('Menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});