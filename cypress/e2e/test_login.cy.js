describe('Форма логин-пароль', function () {
   it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Переход по url
        cy.wait(1000); // подождать 1сек
        cy.get('#loginButton').should('be.disabled'); // Проверка кнопки (не активна)
        cy.get('#mail').type('german@dolnikov.ru'); // Ввод email
        cy.get('#loginButton').should('be.disabled') // Проверка кнопки (не активна)
        cy.get('#pass').type('iLoveqastudio1'); // Ввод pass
        cy.get('#loginButton').should('be.enabled'); // Проверка кнопки (активна)
        cy.get('#loginButton').click(); // Нажатие на кнопку "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка на содержание текста
        cy.get('#exitMessageButton > .exitIcon').should('be.exist').should('be.visible'); // Проверка крестика        
   })

   it('Восстановление пароля по email зарегистрированного пользователя', function () {
        cy.visit('https://login.qa.studio/'); // Переход по url
        cy.wait(1000); // подождать 1сек
        cy.get('#forgotEmailButton').click(); // Нажать на кнопку "Забыли пароль?"
        cy.wait(1000); // подождать 1сек
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввод email
        cy.get('#restoreEmailButton').click(); // Нажать на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка на содержание текста
        cy.get('#exitMessageButton > .exitIcon').should('be.exist').should('be.visible'); // Проверка крестика
   })

   it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Переход по url
        cy.wait(1000); // подождать 1сек
        cy.get('#loginButton').should('be.disabled'); // Проверка кнопки (не активна)
        cy.get('#mail').type('german@dolnikov.ru'); // Ввод email
        cy.get('#loginButton').should('be.disabled') // Проверка кнопки (не активна)
        cy.get('#pass').type('123iLoveqastudio1123'); // Ввод pass 
        cy.get('#loginButton').should('be.enabled'); // Проверка кнопки (активна)
        cy.get('#loginButton').click(); // Нажатие на кнопку "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка на содержание текста
        cy.get('#exitMessageButton').should('be.exist').should('be.visible'); // Проверка крестика         
   })

   it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Переход по url
        cy.wait(1000); // подождать 1сек
        cy.get('#loginButton').should('be.disabled'); // Проверка кнопки (не активна)
        cy.get('#mail').type('german@dolnikov.com'); // Ввод email
        cy.get('#loginButton').should('be.disabled') // Проверка кнопки (не активна)
        cy.get('#pass').type('iLoveqastudio1'); // Ввод pass 
        cy.get('#loginButton').should('be.enabled'); // Проверка кнопки (активна)
        cy.get('#loginButton').click(); // Нажатие на кнопку "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка на содержание текста
        cy.get('#exitMessageButton').should('be.exist').should('be.visible'); // Проверка крестика         
   })

   it('Проверка валидации поля email (без @)', function () {
        cy.visit('https://login.qa.studio/'); // Переход по url
        cy.wait(1000); // подождать 1сек
        cy.get('#loginButton').should('be.disabled'); // Проверка кнопки (не активна)
        cy.get('#mail').type('germandolnikov.com'); // Ввод email
        cy.get('#loginButton').should('be.disabled') // Проверка кнопки (не активна)
        cy.get('#pass').type('iLoveqastudio1'); // Ввод pass 
        cy.get('#loginButton').should('be.enabled'); // Проверка кнопки (активна)
        cy.get('#loginButton').click(); // Нажатие на кнопку "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка на содержание текста
        cy.get('#exitMessageButton').should('be.exist').should('be.visible'); // Проверка крестика
   })      

   it('Приведение к строчным буквам поля email', function () {
        cy.visit('https://login.qa.studio/'); // Переход по url
        cy.wait(1000); // подождать 1сек
        cy.get('#loginButton').should('be.disabled'); // Проверка кнопки (не активна)
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввод email
        cy.get('#loginButton').should('be.disabled') // Проверка кнопки (не активна)
        cy.get('#pass').type('iLoveqastudio1'); // Ввод pass 
        cy.get('#loginButton').should('be.enabled'); // Проверка кнопки (активна)
        cy.get('#loginButton').click(); // Нажатие на кнопку "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка на содержание текста
        cy.get('#exitMessageButton > .exitIcon').should('be.exist').should('be.visible'); // Проверка крестика
   })

})



