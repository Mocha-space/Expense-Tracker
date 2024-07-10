let totalAmount = 0;
let expenses = [];

const categorySelect = document.getElementById('categorySelect');
const amountInput = document.getElementById('amountInput');
const dateInput = document.getElementById('dateInput');
const addButton = document.getElementById('addButton');
const expenseTableBody = document.getElementById('expenseTableBody');
const totalAmountCell = document.getElementById('totalAmount');

addButton.addEventListener('click', () => {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('You MUST select a category!');
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert('You MUST put a valid amount!');
        return;
    }

    if (date === '') {
        alert('You MUST select a date!');
        return;
    }

    const expense = { category, amount, date };
    expenses.push(expense);

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount.toFixed(2);
    dateCell.textContent = expense.date;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');

    deleteButton.addEventListener('click', () => {
        expenses.splice(expenses.indexOf(expense), 1);
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount.toFixed(2);
        expenseTableBody.removeChild(newRow);
    });

    deleteCell.appendChild(deleteButton);

    
    amountInput.value = '';
    dateInput.value = '';
    categorySelect.value = '';
});


function initializeRows() {
    for (const expense of expenses) {
        const newRow = expenseTableBody.insertRow();

        const categoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();

        categoryCell.textContent = expense.category;
        amountCell.textContent = expense.amount.toFixed(2);
        dateCell.textContent = expense.date;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');

        deleteButton.addEventListener('click', () => {
            expenses.splice(expenses.indexOf(expense), 1);
            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalAmount.toFixed(2);
            expenseTableBody.removeChild(newRow);
        });

        deleteCell.appendChild(deleteButton);
    }
}
