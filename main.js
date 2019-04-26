function ChangeInvoiceNumber(event) {
  event.preventDefault();
  InvoiceNumber.innerHTML = event.target.InvoiceNumberText.value;
}

function ChangeInvoiceDate(event) {
  event.preventDefault();
  InvoiceDate.innerHTML = event.target.DateText.value;
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
});
