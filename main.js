function ChangeInvoiceNumber(event) {
  event.preventDefault();
  InvoiceNumber.innerHTML = event.target.InvoiceNumberText.value;
}

function ChangeInvoiceDate(event) {
  event.preventDefault();
  InvoiceDate.innerHTML = event.target.DateText.value;
}

function ChangeInvoiceDescription(event) {
  event.preventDefault();
  InvoiceDescription.innerHTML = event.target.DescriptionText.value;
}

function AddItemToInvoice(event) {
  event.preventDefault();
  let ItemTotalPrice = parseFloat(event.target.ItemPrice.value) * parseFloat(event.target.ItemQantity.value);
  let SousTotal = parseFloat(SousTotalText.innerHTML);
  let TPSamount = 0.0;
  let TVQamount = 0.0;
  let Shipping = parseFloat(ShippingText.innerHTML);
  let GrandTotal = 0.0;
  console.log(InvoiceItemRows.innerHTML += "<tr class=\"item\"><td>" + event.target.ItemName.value +
                                           "</td><td>" + event.target.ItemType.value +
                                           "</td><td>" + event.target.ItemPrice.value + "$" +
                                           "</td><td>" + event.target.ItemQantity.value +
                                           "</td><td>" + (ItemTotalPrice).toFixed(2) + "$</td></tr>");
  SousTotal += ItemTotalPrice;
  SousTotalText.innerHTML = SousTotal.toFixed(2) + "$";
  TPSamount = SousTotal * 0.05;
  TPSText.innerHTML = TPSamount.toFixed(2) + "$";
  TVQamount = SousTotal * 0.09975;
  TVQText.innerHTML = TVQamount.toFixed(2) + "$";
  GrandTotal = SousTotal + TPSamount + TVQamount + Shipping;
  GrandTotalText.innerHTML = GrandTotal.toFixed(2) + "$";
}

function ChangeInvoiceClient(event) {
  event.preventDefault();
  ClientInfo.innerHTML = "<b>Facturé à</b><br>" + event.target.ClientName.value +
                         "<br>" + event.target.ClientAddress.value +
                         "<br>" + event.target.ClientCity.value + ", " + event.target.ClientProv.value +
                         "<br>" + event.target.ClientZip.value + "<br>"
}

function ToPrintView(event) {
  event.preventDefault();
  document.getElementById("InvoiceMenu").style.display = 'none';
}

function AddShipping(event) {
  event.preventDefault();
  let ShippingCost = parseFloat(event.target.ShippingAmount.value);
  let SousTotal = parseFloat(SousTotalText.innerHTML);
  let TPSamount = parseFloat(TPSText.innerHTML);
  let TVQamount = parseFloat(TVQText.innerHTML);
  let GrandTotal = 0.0;
  ShippingText.innerHTML = ShippingCost.toFixed(2) + "$";
  GrandTotal = SousTotal + TPSamount + TVQamount + ShippingCost;
  GrandTotalText.innerHTML = GrandTotal.toFixed(2) + "$";
  document.getElementById( "ShippingRow" ).style.display = 'table-row';
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
  let testerDescription = document.querySelector("#InvoiceDescriptionForm");
  testerDescription.addEventListener("submit", function(event) {
    ChangeInvoiceDescription(event);
  });
  let testerAddItem = document.querySelector("#AddItemForm");
  testerAddItem.addEventListener("submit", function(event) {
    AddItemToInvoice(event);
  });
  let testerChangeClient = document.querySelector("#ChangeClientForm");
  testerChangeClient.addEventListener("submit", function(event) {
    ChangeInvoiceClient(event);
  });
  let testerPrint = document.querySelector("#PrintViewForm");
  testerPrint.addEventListener("submit", function(event) {
    ToPrintView(event);
  });
  let testerAddShipping = document.querySelector("#AddShippingForm");
  testerAddShipping.addEventListener("submit", function(event) {
    AddShipping(event);
  });
});
