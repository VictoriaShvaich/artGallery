## Описание проекта

Данный проект создан для практического освоения методов `setTimeout` и `setInterval` в JavaScript при разработке веб-страниц.

## Основные возможности

1. **Автоматический слайдер**  
   Слайдер последовательно отображает изображения.

2. **Настраиваемый интервал показа**  
   Пользователь может задать временной промежуток между сменой картинок через текстовое поле.

3. **Управление воспроизведением**  
   - Кнопка для запуска или возобновления работы слайдера.  
   - Кнопка для остановки показа.

4. **Финальное сообщение**  
   По окончании показа всех изображений на весь экран выводится сообщение о завершении работы слайдера.

## Технические особенности

### Таймеры и callback-функции  
Используются методы `setTimeout` и `setInterval` для организации отложенного выполнения кода.  
Callback-функции запускаются через заданный интервал времени, что позволяет синхронизировать показ слайдов.
