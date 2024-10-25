$(document).ready(function () {

    $('#phone').mask('+38(000) 000-00-00', {
        placeholder: "+38(0__) ___--"
    }).on('input', validatePhone);

    $('#firstname').on('input', validateFirstName);
    $('#password').on('input', validatePassword);
    $('#lastname').on('input', validateLastName);
    $('#email').on('input', validateEmail);
    $('#middlename').on('input', validateMiddleName);
    $('input[name="gender"]').on('change', validateGender);

    $('#registrationForm').on('submit', function (event) {
        event.preventDefault();
        clearErrors();

        let isValid = validateFirstName() & validatePassword() & validateLastName() & validateMiddleName() & validateEmail() & validatePhone() & validateGender();

        if (isValid) {

            const name = $('#firstname').val();
            const surname = $('#lastname').val();
            const email = $('#email').val();
            const phone = $('#phone').val();
            const gender = $('input[name="gender"]:checked').val();

            const newRow = `
                <tr>
                    <td><input type="checkbox" class="rowCheckbox"></td>
                    <td>${name}</td>
                    <td>${surname}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${gender}</td>
                </tr>`;
            $('#dataTable tbody').append(newRow);

            $('#dataTable, #deleteRows, #duplicateRows').show();

            $('#registrationForm')[0].reset();
        }
    });

    $('#deleteRows').click(function () {
        $('.rowCheckbox:checked').closest('tr').remove();
    });

    $('#duplicateRows').click(function () {
        $('.rowCheckbox:checked').each(function () {
            const clonedRow = $(this).closest('tr').clone();
            $('#dataTable tbody').append(clonedRow);
        });
    });
});

const noDigitsRegex = /^\D+$/;

function validateFirstName() {
    const name = $('#firstname').val();
    if (!name) {
        showError('firstnameError', 'Введіть ім\'я');
        return false;
    } else if (!noDigitsRegex.test(name)) {
        showError('firstnameError', 'Ім\'я не повинно містити цифри');
        return false;
    }
    clearError('firstnameError');
    return true;
}

function validateLastName() {
    const surname = $('#lastname').val();
    if (!surname) {
        showError('lastnameError', 'Введіть прізвище');
        return false;
    } else if (!noDigitsRegex.test(surname)) {
        showError('lastnameError', 'Прізвище не повинно містити цифри');
        return false;
    }
    clearError('lastnameError');
    return true;
}

function validatePassword() {
    const password = $('#password').val();
    if (!password) {
        showError('passwordError', 'Введіть пароль');
        return false;
    }
    clearError('passwordError');
    return true;
}

function validateMiddleName() {
    const middlename = $('#middlename').val();
    if (!middlename) {
        showError('middlenameError', 'Введіть по-батькові');
        return false;
    } else if (!noDigitsRegex.test(middlename)) {
        showError('middlenameError', 'По-батькові не повинно містити цифри');
        return false;
    }
    clearError('lastnameError');
    return true;
}

function validateEmail() {
    const email = $('#email').val();
    if (!email) {
        showError('emailError', 'Введіть email');
        return false;
    }
    clearError('emailError');
    return true;
}

function validatePhone() {
    const phone = $('#phone').val();
    const phoneDigits = phone.replace(/\D/g, ''); // Видаляємо всі нецифрові символи
    if (phoneDigits.length !== 12) { // Перевірка на кількість цифр (12: +38 і номер)
        showError('phoneError', 'Номер телефону має містити 12 цифр');
        return false;
    }
    clearError('phoneError');
    return true;
}

function validateGender() {
    const gender = $('input[name="gender"]:checked').val();
    if (!gender) {
        showError('genderError', 'Оберіть стать');
        return false;
    }
    clearError('genderError');
    return true;
}

function showError(id, message) {
    $(`#${id}`).text(message).css('color', 'red');
}

function clearError(id) {
    $(`#${id}`).text('');
}

function clearErrors() {
    $('.error-message').text('');
}
