// Utility to load text from a file and set it to an element by ID, preserving newlines
function loadText(id, file, callback) {
    fetch(file)
        .then(res => res.ok ? res.text() : '')
        .then(text => {
            // Replace newlines with <br>
            const html = text.trim().replace(/\r?\n/g, '<br>');
            document.getElementById(id).innerHTML = html;
            if (callback) callback(text.trim());
        });
}

// Load main texts
loadText('name', 'name.txt');
loadText('intro', 'intro.txt');

// Email (as a clickable link)
loadText('email-link', 'email.txt', function(email) {
    var el = document.getElementById('email-link');
    el.textContent = email;
    el.href = 'mailto:' + email;
});

// Phone
loadText('phone-link', 'phone.txt', function(phone) {
    var el = document.getElementById('phone-link');
    el.textContent = phone;
    el.href = 'tel:' + phone.replace(/[^0-9+]/g, '');
});
