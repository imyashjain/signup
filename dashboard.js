const searchString = window.location.search; // ?id=<id>

const queryParams = new URLSearchParams(searchString);

const userId = queryParams.get('id');

if (userId === null) {
    window.location.href = './signin.html';
}

const userData = sessionStorage.get('userData');
const users = userData === null ? [] : JSON.parse(userData);

const filteredUser = users.filter(user => user.id === userId);

if (filteredUser && filteredUser.length > 0) {
    alert('invalid page');
    window.location.href = './signin.html';
}

