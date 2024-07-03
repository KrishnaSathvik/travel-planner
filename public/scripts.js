document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        if (data[key]) {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });

    const response = await fetch('http://localhost:3000/api/user/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
        alert(result.message);
    } else {
        alert(`Error: ${result.message}`);
    }
});

document.getElementById('chatButton').addEventListener('click', function() {
    const chatContent = document.getElementById('chatContent');
    chatContent.classList.toggle('hidden');
});

