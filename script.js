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
    console.log("Hello we are here to display");
    displayExpenses();
    console.log("I hope it displayed");
}

    async function displayExpenses() {
        try {
            console.log("Hello we entered");
            const response = await fetch('http://localhost:5000/');
            console.log("Are you able to see");
            // if (!response.ok) {
            //     throw new Error('Failed to fetch products');
            // }
            const products = await response.json();
    
            // Now you can use the products data to display on your page
            console.log(products);
    
            // Update the UI with the fetched data
        //     const productsNode = document.getElementById('products');
        //     products.forEach(product => {
        //         const childElement = document.createElement('li');
        //         childElement.textContent = product.title;
        //         productsNode.appendChild(childElement);
        //     });
        } catch (error) {
            console.error('errorrrrr:', error);
        }
    
    
        
    //     const productNode = document.getElementById('products');
    //     products.data.forEach(product => {
    //         const childelement = document.createElement('li');
    //         childelement.innerHTML = product.title;
    //         productNode.appendChild(childelement)
    //     })
    // var expenses = JSON.parse(localStorage.getItem('expenses'));
    // var expensesList = document.getElementById('expenses-list');
    // expensesList.innerHTML = '';

    // for (var i = 0; i < expenses.length; i++) {
    //     var expense = expenses[i];
    //     var listItem = document.createElement('div');
    //     listItem.innerHTML = `
    //         <div>
    //             <strong>Type:</strong> ${expense.type}<br>
    //             <strong>Description:</strong> ${expense.description}<br>
    //             <strong>Category:</strong> ${expense.category}<br>
    //             <button onclick="editExpense(${i})">Edit</button>
    //             <button onclick="deleteExpense(${i})">Delete</button>
    //         </div>
    //         <hr>
    //     `;
    //     expensesList.appendChild(listItem);
    // }
};

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
