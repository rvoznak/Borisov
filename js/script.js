function CheckPhoneNum() {
    let phone = document.getElementById('phone').value;
    let regex = /^[0-9]{3}-[0-9]{3}-[0-9]{2}[0-9]{2}$/

    if (regex.test(phone)) {
        document.getElementById('color_button').style.backgroundColor = 'rgb(233, 186, 46)';
        document.getElementById('color_button').style.pointerEvents = 'all';
        document.getElementById('CheckPhoneNum').textContent = ''
        return true;
    } else {
        document.getElementById('color_button').style.backgroundColor = 'red';
        document.getElementById('color_button').style.pointerEvents = 'none';
        document.getElementById('CheckPhoneNum').textContent = 'Incorrect phone!'
        document.getElementById('CheckPhoneNum').style.color = 'red'
        return false;
    }
}

function CheckName() {
    let firstname = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').values;
    let patronymic = document.getElementById('patronymic').values;
    let regex = /^[a-zA-Zфа-яА-Я]*$/

    if (regex.test(firstname) && regex.test(lastName) && regex.test(patronymic) && lastName !== '' && firstname !== '' && patronymic !== '') {
        document.getElementById('color_button').style.backgroundColor = 'rgb(233, 186, 46)';
        document.getElementById('CheckName').textContent = ''
        document.getElementById('color_button').style.pointerEvents = 'all';
        return true;
    } else {
        document.getElementById('color_button').style.backgroundColor = 'red';
        document.getElementById('CheckName').textContent = 'Incorrect firstname, lastname or patronymic!'
        document.getElementById('CheckName').style.color = 'red'
        document.getElementById('color_button').style.pointerEvents = 'none';
        return false;
    }
}

