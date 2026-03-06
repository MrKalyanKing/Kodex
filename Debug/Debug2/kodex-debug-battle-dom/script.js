// Helper Selector
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// DOM Elements
const balance = $('#total-balance');
const income = $('#total-income');
const expense = $('#total-expense');
const list = $('#transaction-list');
const form = $('#transaction-form');
const text = $('#text');
const amount = $('#amount');
const modal = $('#modalOverlay');
const openModalBtn = $('#openModal');
const closeModalBtn = $('#closeModal');
const searchInput = $('#search-input');
const filterBtns = $$('.filter-btn');

const categoryIcons = {
    salary: '💰',
    food: '🍔',
    entertainment: '🎬',
    shopping: '🛍️',
    utilities: '⚡',
    other: '📦'
};

// Initial State
let transactions = [];
let currentFilter = 'all';

try {
    const saved = JSON.parse(localStorage.getItem('transactions'));
    transactions = Array.isArray(saved) ? saved : [];
} catch {
    transactions = [];
}




function addTransaction(e) {
    e.preventDefault();
    const rawText = text.value.trim();
    const amountValue = Number(amount.value);

    const type = $('input[name="transaction-type"]:checked').value;

    const category = $('#category').value;
    const signedAmount = type === 'expense' ? -Math.abs(amountValue) : Math.abs(amountValue);

    if (!rawText || Number.isNaN(amountValue) || amountValue === 0) {
        return;
    }

    const transaction = {
        id: Math.floor(Math.random() * 100000000),
        text: rawText,
        amount: signedAmount,
        type: type,
        category: category,
        date: new Date().toLocaleDateString()
    };

    
    transactions.push(transaction);
    updateLocalStorage();
    init();

    form.reset();
    modal.classList.remove('active');
}

function removeTransaction(id) {
    const targetId = Number(id);
    transactions = transactions.filter(t => t.id !== targetId);
    updateLocalStorage();
    init();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Calculate Totals
function updateValues() {
    let total = 0;
    let inc = 0;
    let exp = 0;

    for (let i = 0; i < transactions.length; i++) {
        const amt = Number(transactions[i].amount);
        if (Number.isNaN(amt)) continue;
        total += amt;
        if (amt > 0) inc += amt;
        else exp += amt;
    }

    balance.innerText = `$${total.toFixed(2)}`;
    income.innerText = `$${inc.toFixed(2)}`;
    expense.innerText = `$${Math.abs(exp).toFixed(2)}`;
}

// Render Transactions
function renderTransactions() {
    list.innerHTML = '';

    let filtered = transactions;

    // Filter Search
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        filtered = filtered.filter(t => t.text.toLowerCase().includes(query));
    }

    if (currentFilter !== 'all') {
        filtered = filtered.filter(t => t.type === currentFilter);
    }

    filtered.forEach(transaction => {
        const sign = transaction.amount < 0 ? '-' : '+';
        const itemClass = transaction.amount < 0 ? 'amount-expense' : 'amount-income';
        const item = document.createElement('li');

        item.classList.add('transaction-item');
        item.innerHTML = `
            <div class="item-icon">${categoryIcons[transaction.category] || '📦'}</div>
            <div class="item-details">
                <p>${transaction.text}</p>
                <span>${transaction.date}</span>
            </div>
            <div class="item-amount ${itemClass}">
                ${sign}$${Math.abs(transaction.amount).toFixed(2)}
            </div>
            <button class="delete-btn" onclick="removeTransaction(${transaction.id})">
                🗑️
            </button>
        `;

        list.appendChild(item);
    });
}

function init() {
    renderTransactions();
    updateValues();
}

openModalBtn.addEventListener('click', () => modal.classList.add('active'));
closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
form.addEventListener('submit', addTransaction);

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

searchInput.addEventListener('input', renderTransactions);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTransactions();
    });
});

init();
