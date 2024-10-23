$(document).ready(function () {
    // Маска для телефону
    $('#phone').mask('+38(000) 000-00-00', {
        placeholder: "+38(0__) ___--"
    });

    // Обробник події для форми
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        const name = $('#firstname').val();
        const surname = $('#lastname').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const gender = $('input[name="gender"]:checked').val();

        // Валідація
        if (!name) {
            showError('firstnameError', 'Введіть ім\'я');
            isValid = false;
        }
        if (!surname) {
            showError('lastnameError', 'Введіть прізвище');
            isValid = false;
        }
        if (!email) {
            showError('emailError', 'Введіть email');
            isValid = false;
        }
        
        // Валідація номеру телефону (тільки цифри)
        const phoneDigits = phone.replace(/\D/g, ''); // Видаляємо всі нецифрові символи
        if (phoneDigits.length !== 12) { // Перевірка на кількість цифр (12: +38 і номер)
            showError('phoneError', 'Номер телефону має містити 12 цифр');
            isValid = false;
        }
        
        if (!gender) {
            showError('genderError', 'Оберіть стать');
            isValid = false;
        }

        if (isValid) {
            // Додавання до таблиці
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

            // Показуємо таблицю і кнопки після першої відправки
            $('#dataTable, #deleteRows, #duplicateRows').show();

            // Очищення форми
            $('#registrationForm')[0].reset();
        }
    });

    // Видалення вибраних рядків
    $('#deleteRows').click(function () {
        $('.rowCheckbox:checked').closest('tr').remove();
    });

    // Дублювання вибраних рядків
    $('#duplicateRows').click(function () {
        $('.rowCheckbox:checked').each(function () {
            const clonedRow = $(this).closest('tr').clone();
            $('#dataTable tbody').append(clonedRow);
        });
    });
});

function showError(id, message) {
    $(`#${id}`).text(message).css('color', 'red');
}

function clearErrors() {
    $('.error-message').text('');
}
