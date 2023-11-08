describe('e2e Покупка рандомного аватара', function () {
   it('e2e Покупка рандомного аватара', function () {

      // Перейти на сайт, форма ввода логина/пароля
      cy.visit('https://pokemonbattle.me/'); // Переход по url
      cy.wait(2000); // подождать 2сек

      //Авторизоваться используя валидные данные зарегестированного пользователя
      cy.get(':nth-child(1) > .auth__input').type('flapsya@ya.ru'); // Ввод email
      cy.get('#password').type('JzVCBs4KBq2D8Ph'); // Ввод pass
      cy.get('.auth__button').click() // Нажать на кнопку "Войти"

      // Переход в магазин, выбор рандомного аватара для покупки
      cy.wait(2000); // подождать 2сек
      cy.get('.header__btns > [href="/shop"]').click() // Нажать на кнопку "Магазин", перейти в меню выбора покупки аватаров

      // Находим в дереве, класс shop__list (неупорядоченный список) >> обращаемся к списку li >>
      // далее исключаем, элемент списка с классом .feature-empty (это аватар, который сейчас установлен)
      cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').then(buttons => {
         const randomIndex = Cypress._.random(0, buttons.length - 1); // Получаем случайный индекс используя метод рандом
         const randomButton = buttons.eq(randomIndex); // Выбираем случайную кнопку
         cy.wrap(randomButton).click(); // Нажимаем на случайно кнопку
         });

      // Ввод данных тестовой банковской карты
      cy.wait(1000); // подождать 1сек
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2268618717491981'); // Ввод номера карты
      cy.get(':nth-child(1) > .pay_base-input-v2').type('0224'); // Ввод срока дейсвтия карты
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввод CVV
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VLADISLAV DIMA'); // Ввод имени держателя карты
      cy.wait(3000); // подождать 3сек
      cy.get('.pay-btn').click(); // Нажать на кнопку "Оплатить"

      // Подверждение покупки
      cy.wait(2000); // подождать 2сек
      cy.get('#cardnumber').type('56456'); // Ввод СМС-кода
      cy.get('.payment__submit-button').click(); // Нажать на кнопку "Отправить"

      // Покупка прошла успешно, возвращаемся в магазин
      cy.wait(2000); // подождать 2сек
      cy.get('.payment__adv').click(); // Нажать на кнопку "Вернуться в магазин"
   })
})