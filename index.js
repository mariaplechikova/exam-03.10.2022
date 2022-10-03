const books = [
    {
        id: 1,
        name: 'Над пропастью во ржи',
        author: 'Сэлинджер',
        year: 1999,
        nameOfPublish: 'Дрофа',
        pages: 253,
        quantity: 3
      },

    {
        id: 2,
        name: 'Преступление и наказание',
        author: 'Достоевский',
        year: 2005,
        nameOfPublish: 'ЭКСМО',
        pages: 350,
        quantity: 2
      },

    {
        id: 3,
        name: 'Мастер и Маргарита',
        author: 'Булгакова',
        year: 1990,
        nameOfPublish: 'РООССА',
        pages: 200,
        quantity: 6
      },
      
]

const booksTable = document.querySelector('.books')
console.log(booksTable)

booksTable.innerHTML += '
<table>
    <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Автор</th>
            <th>Год издательства</th>
            <th>Название издательства</th>
            <th>Количество страниц</th>
            <th>Количество экземпляров в библиотеке</th>
          </tr>
    </thead>
</table>'