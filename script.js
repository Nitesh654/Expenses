function addExpense() {
    var type = document.getElementById('expense-type').value;
    var description = document.getElementById('expense-description').value;
    var category = document.getElementById('expense-category').value;

    var expense = {
        type: type,
        description: description,
        category: category
    };

    if (localStorage.getItem('expenses') === null) {
        var expenses = [];
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    } else {
        var expenses = JSON.parse(localStorage.getItem('expenses'));
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    displayExpenses();
}

function displayExpenses() {
    var expenses = JSON.parse(localStorage.getItem('expenses'));
    var expensesList = document.getElementById('expenses-list');
    expensesList.innerHTML = '';

    for (var i = 0; i < expenses.length; i++) {
        var expense = expenses[i];
        var listItem = document.createElement('div');
        listItem.innerHTML = `
            <div>
                <strong>Type:</strong> ${expense.type}<br>
                <strong>Description:</strong> ${expense.description}<br>
                <strong>Category:</strong> ${expense.category}<br>
                <button onclick="editExpense(${i})">Edit</button>
                <button onclick="deleteExpense(${i})">Delete</button>
            </div>
            <hr>
        `;
        expensesList.appendChild(listItem);
    }
}

function editExpense(index) {
    var expenses = JSON.parse(localStorage.getItem('expenses'));
    var expense = expenses[index];

    document.getElementById('expense-type').value = expense.type;
    document.getElementById('expense-description').value = expense.description;
    document.getElementById('expense-category').value = expense.category;

    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    displayExpenses();
}

function deleteExpense(index) {
    var expenses = JSON.parse(localStorage.getItem('expenses'));
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}
displayExpenses();