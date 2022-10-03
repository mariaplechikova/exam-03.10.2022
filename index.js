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

let id

const booksTable = document.querySelector('tbody')
console.log(booksTable)

for (let i = 0; i < books.length; i++) {
    booksTable.innerHTML += `
    <tr>
        <td>${books[i].id}</td>
        <td>${books[i].name}</td>
        <td>${books[i].author}</td>
        <td>${books[i].year}</td>
        <td>${books[i].nameOfPublish}</td>
        <td>${books[i].pages}</td>
        <td>${books[i].quantity}</td>
        <td id=${books[i].id}>
            <button class='edit'>Редактировать</button>
            <button class='remove'>Удалить</button>
        </td>
    </tr>`
}

document.addEventListener('click', function(event) {
    if (event.target.matches('.edit')) {
        const id = event.target.parentElement.getAttribute('id')
        console.log(id)
        deleteBook(id)
    }

    return id

})

function deleteBook(id) {
    
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === +id) {
            const newBooks = books.filter(books[i].id === +id)
            console.log(newBooks)
        }
    }
}