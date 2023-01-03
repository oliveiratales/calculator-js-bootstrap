function calculate (type, value) {

    if (type === 'action') {

        if (value === 'c'){
            document.getElementById('result').value = ''
        }

        if (value === '+' || value === '-' || value === '/' || value === '*' || value === '.') {
            document.getElementById('result').value += value
        }

        if (value === '='){
            var value_display = document.getElementById('result').value
            document.getElementById('result').value = eval(value_display)       
        }

    } else if (type === 'value') {
        document.getElementById('result').value += value
    }
}