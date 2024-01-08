var password;
var pass1 = "";

// Fetch the data from the JSON file
fetch('/json/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch words.json: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        pass1 = data.words.map(entry => entry.pw1);
    
        // Now that pass1 is set, prompt for password and check
        password = prompt('Please enter your password to view this page!', '');
    
        if (pass1.includes(password)) {
            alert('Password Correct! Click OK to enter!');
        } else {
            alert('Not Correct');
            window.location = 'ps.html';
        }
    })