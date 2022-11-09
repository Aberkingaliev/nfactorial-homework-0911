// Как найти?… 
// 1. Таблицу с `id="age-table"`
document.querySelector('#age-table')

// 2. Все элементы label внутри этой таблицы (их три).
document.querySelectorAll(`#age-list label`)

// 3. Первый td в этой таблице
document.querySelector('td')


// 4. Форму form с именем name="search".
document.querySelectorAll(`form[name='search']`)

// 5. Первый input в этой форме.
document.querySelector('input')

// 6. Последний инпут
document.querySelectorAll('input')[8] // lastChild че то не работало

// 7. Что выведет этот код
{/* <script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script> */}
// Возвращает body