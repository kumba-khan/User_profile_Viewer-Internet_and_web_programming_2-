async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        displayUserList(users);
    } catch (error) {
        console.error('Fetch Error: ', error);
    }
}

function displayUserList(users) {
    const userList = document.getElementById('userList'); users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = user.name;
        userElement.addEventListener('click', () => displayUserDetails(user));
        userList.appendChild(userElement);
    });
}
function displayUserDetails(user) {
    const userDetails = document.getElementById('userDetails');
    userDetails.innerHTML = `Name: ${user.name}<br>Email: ${user.email}<br>Address:
${user.address.street}, ${user.address.city}`;
}
// Initial fetch of users
fetchUsers();

