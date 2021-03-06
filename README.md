# "Max-test"

Тестовое задание.

## О приложениии

Демо [Max-test](https://maximal-test.web.app).

* Приложение выводит на страницу результат поискового запроса - список "hot" постов с сайта [reddit.com](https://www.reddit.com) с указанием темы в виде ссылки на пост, автора и даты публикации.
* На страницу выводится по 6 записей. Настройка количества `public/setting.json`.
* Кнопки пагинации блокируются при достижении первой/последней страницы.
* Хранение в `Local Storage` последнего запроса. При загрузке проверка storage, и при наличии запрос на сайт и вывод текущего результата.
* В заголовок выводится информация о запросе. При первом запуске или отсутствии в `Local Storage` об отсутствии результатов. Об ошибке в случа ошибочного запроса.

## Стек технологий

* ReactHooks, StyledComponents, ContentProvider;
* Адаптивная кроссбраузерная верстка Flex и медиазапросы, SASS/SCSS;
* Сборка с помощью [Create React App](https://github.com/facebook/create-react-app);
* Дополнительно установлены пакеты [StyledComponents](https://styled-components.com) и [Node-SASS](https://www.npmjs.com/package/node-sass);
* Деплой готовой сборки на [Firebase Hosting](https://firebase.google.com);
* Используется LocalStorage.

## Как установить?

* Скопировать содержимое репозитория в рабочую папку
* В терминале выполнить команду `npm install`
* После установки модулей запустить development mode командой `npm start`
* В случае некоррктной работы сборщика проверить соответствие версий `NodeJS` и `node-sass` в [документации](https://www.npmjs.com/package/node-sass)
* Возможно дополнительно установить [StyledComponents](https://styled-components.com) командой `npm install styled-components`
* Открыть [http://localhost:3000](http://localhost:3000) для просмотра в браузере
* Для сборки приложения команда `npm run build`. Готовая сбока для хостинга будет в папке `build` рабочей директории