document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById('header');
        fetch('header.html')
           .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
            })
});

document.addEventListener("DOMContentLoaded", function() {
    const footerPlaceholder = document.getElementById('footer');
        fetch('footer.html')
           .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
});

