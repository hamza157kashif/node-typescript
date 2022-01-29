"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_1 = require("./invoice");
var list_1 = require("./list");
var payment_1 = require("./payment");
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// list template instance
var ul = document.querySelector('ul');
var list = new list_1.ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new invoice_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
