let clickCount = 0;
let count = 1;
let badgeCount = 1;
let ticketPrice = 550;
let totalPrice = 0;
let grandPrice = 0;
let appliedCouponPrice = 0
let green = '#1DD100';

// ==========================================================================================

function selectedSeat(id) {

    const seatButton = document.getElementById(id);
    const couponCode = document.getElementById("coupon-code");


    seatButton.addEventListener('keyup', function(e){
        console.log(e.target.innerText);
    })

    console.log(seatButton.id);


    if (clickCount == 4) {

        seatButton.setAttribute('disabled', 'true');
        alert("You reach your limit!")

        return;
    }


    seatButton.style.backgroundColor = green;
    seatButton.style.color = 'white';
    

    if (seatButton.style.backgroundColor === "#1DD100" && seatButton.id === seatButton.innerText) {
        seatButton.setAttribute("disabled", "true");
        return;
    }

    clickCount++;
    seatCount(count);
    seatDetails(id);

    seatButton.addEventListener("click", function (event) {

        console.log('Key pressed:', event.key);
        console.log('Target:', event.target);
        console.log('Value:', event.target.value);
        seatButtonId = seatButton.id;

        console.log(seatButton.id)

    })


    if (clickCount >= 4) {

        couponCode.removeAttribute('disabled', 'false');
        couponBtn.removeAttribute('disabled', 'false');

        return;
    }

    activateBtn();

}



// ==========================================================================================


function seatCount(param) {

    let totalSeatString = document.getElementById("seatCount").innerText;
    let totalSeat = parseInt(totalSeatString);
    let leftSeat = totalSeat - param;
    document.getElementById("seatCount").innerText = leftSeat;

}


// ==========================================================================================


function seatDetails(param) {

    let seatNumber = document.getElementById(param).innerText;
    let seatBooked = document.getElementById("seat-booked");
    const p = document.createElement('p');
    p.innerText = seatNumber;
    seatBooked.appendChild(p);


    let seatBadgeStr = document.getElementById("seat-badge").innerText;
    let seatBadge = parseInt(seatBadgeStr);
    let totalBadge = seatBadge + badgeCount;
    document.getElementById("seat-badge").innerText = totalBadge;


    let seatClass = document.getElementById("seat-class");
    const p1 = document.createElement("p");
    p1.innerText = 'Economy Class';
    seatClass.appendChild(p1);


    let seatPriceStr = document.getElementById("seat-price");
    const p2 = document.createElement("p");
    p2.innerText = ticketPrice;
    seatPriceStr.appendChild(p2);


    let totalCost = document.getElementById('total-cost');
    totalPrice = totalPrice + ticketPrice;
    totalCost.innerText = totalPrice;


    const couponCode = document.getElementById("coupon-code");
    let coupon = couponCode.value;
    console.log(coupon)



    const phoneNumber = document.getElementById("phone-number").value;

    if (phoneNumber != "") {
        nextBtn.removeAttribute('disabled', 'false');
    }





    grandCost(totalPrice);


}


// ==========================================================================================


let total = 0
function grandCost(param) {

    total = param;
    return total;

}


// ===========================================================================================


const couponBtn = document.getElementById("coupon-btn");


function applyCoupon() {

    const couponCode = document.getElementById("coupon-code");
    let coupon = couponCode.value;
    let grandTotal = document.getElementById('grand-total');
    grandPrice = total;


    if (coupon == "NEW15") {

        totalPrice = totalPrice + ticketPrice;

        let discount = (grandPrice * 15) / 100
        appliedCouponPrice = grandPrice - discount;
        grandTotal.innerText = appliedCouponPrice;

        couponCode.setAttribute('disabled', 'true');
        couponBtn.setAttribute('disabled', 'true');

        return;

    } else if (coupon == "Couple 20") {

        totalPrice = totalPrice + ticketPrice;

        let discount = (grandPrice * 20) / 100
        appliedCouponPrice = grandPrice - discount;
        grandTotal.innerText = appliedCouponPrice;

        couponCode.setAttribute('disabled', 'true');
        couponBtn.setAttribute('disabled', 'true');

        return;

    } else {

        grandTotal.innerText = total;
        alert("Invalid Coupon");
        return;
    }

}

// ==========================================================================================


function activateBtn() {

    document.getElementById("phone-number").addEventListener("keyup", function () {

        let nextBtn = document.getElementById("next-btn");

        let phoneNumber = document.getElementById("phone-number").value;
        console.log(phoneNumber)

        if (clickCount >= 1 && phoneNumber !== "") {
            nextBtn.removeAttribute('disabled')
        }

    })


}


function nextBtn() {

    clickCount = 0;
    count = 1;
    badgeCount = 1;
    ticketPrice = 550;
    totalPrice = 0;
    grandPrice = 0;
    appliedCouponPrice = 0



}