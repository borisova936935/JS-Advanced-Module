function colorize() {
    let rows = document.querySelectorAll('tr')
    for (let i = 0; i < rows.length; i++) {
        if (i % 2 == !0) {
            rows[i].style.backgroundColor = 'Teal'
        }
    }
} 