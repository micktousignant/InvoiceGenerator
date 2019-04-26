function ChangeInvoiceNumber(event) {
  event.preventDefault();
  InvoiceNumber.innerHTML = event.target.InvoiceNumberText.value;
}

function ChangeInvoiceDate(event) {
  event.preventDefault();
  InvoiceDate.innerHTML = event.target.DateText.value;
}

function AddItemToInvoice(event) {
  event.preventDefault();
  let ItemTotalPrice = parseFloat(event.target.ItemPrice.value) * parseFloat(event.target.ItemQantity.value);
  console.log(InvoiceItemRows.innerHTML += "<tr class=\"item\"><td>" + event.target.ItemName.value +
                                           "</td><td>" + event.target.ItemType.value +
                                           "</td><td>" + event.target.ItemPrice.value + "$" +
                                           "</td><td>" + event.target.ItemQantity.value +
                                           "</td><td>" + (ItemTotalPrice).toFixed(2) + "$</td></tr>");
  SousTotalText.innerHTML = (parseFloat(SousTotalText.innerHTML) + ItemTotalPrice).toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
  let testerNumber = document.querySelector("#InvoiceNumberForm");
  testerNumber.addEventListener("submit", function(event) {
    ChangeInvoiceNumber(event);
  });
  let testerDate = document.querySelector("#InvoiceDateForm");
  testerDate.addEventListener("submit", function(event) {
    ChangeInvoiceDate(event);
  });
  let testerAddItem = document.querySelector("#AddItemForm");
  testerAddItem.addEventListener("submit", function(event) {
    AddItemToInvoice(event);
  });
});
