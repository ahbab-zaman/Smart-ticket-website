// Row 1 buttons
let initialSeatNumber = 0;
let totalSeatNumber = getAllElementsId('total-seat').innerText;
const rowBtn1 = getAllElementsId("a1-btn");
rowBtn1.addEventListener("click", function () {
  const seatPrice1 = document.getElementById("seat-price");
  const div = document.createElement('div');
  const textSeat = getAllElementsId('text-seat');
  let totalSeat = getAllElementsId('total-seat')
  initialSeatNumber++;
  totalSeatNumber--;
  totalSeat.innerText = totalSeatNumber
 const seatNumber = getAllElementsId('seat-number');
 seatNumber.innerText = initialSeatNumber;
  div.innerHTML = `<div class = "flex justify-between items-center list-none space-y-1 p-2 border-b-2 border-dashed">

    <li class ="font-semibold text-gray-500">${rowBtn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden');
  seatPrice1.appendChild(div);

});

const rowBtn2 = getAllElementsId("a2-btn");
rowBtn2.addEventListener("click", function () {
  const seatPrice2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
  initialSeatNumber++;
  const seatNumber = getAllElementsId('seat-number');
  seatNumber.innerText = initialSeatNumber;
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${rowBtn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPrice2.appendChild(div);
});

const rowBtn3 = getAllElementsId("a3-btn");
rowBtn3.addEventListener("click", function () {
  const seatPrice3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
  initialSeatNumber++;
  const seatNumber = getAllElementsId('seat-number');
  seatNumber.innerText = initialSeatNumber;
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${rowBtn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPrice3.appendChild(div);
});

const rowBtn4 = getAllElementsId("a4-btn");
rowBtn4.addEventListener("click", function () {
  const seatPrice4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
  initialSeatNumber++;
  const seatNumber = getAllElementsId('seat-number');
  seatNumber.innerText = initialSeatNumber;
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${rowBtn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPrice4.appendChild(div);
});

// Row 2 buttons

const row2Btn1 = getAllElementsId('b1-btn')
row2Btn1.addEventListener('click', function(){
  const seatPriceB1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
  initialSeatNumber++;
  const seatNumber = getAllElementsId('seat-number');
  seatNumber.innerText = initialSeatNumber;
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row2Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceB1.appendChild(div);
})

const row2Btn2 = getAllElementsId('b2-btn')
row2Btn2.addEventListener('click', function(){
  const seatPriceB2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
  initialSeatNumber++;
  const seatNumber = getAllElementsId('seat-number');
  seatNumber.innerText = initialSeatNumber;
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row2Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceB2.appendChild(div);
})

const row2Btn3 = getAllElementsId('b3-btn')
row2Btn3.addEventListener('click', function(){
  const seatPriceB3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
  initialSeatNumber++;
  const seatNumber = getAllElementsId('seat-number');
  seatNumber.innerText = initialSeatNumber;
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row2Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceB3.appendChild(div);
})

const row2Btn4 = getAllElementsId('b4-btn')
row2Btn4.addEventListener('click', function(){
  const seatPriceB4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
  initialSeatNumber++;
  const seatNumber = getAllElementsId('seat-number');
  seatNumber.innerText = initialSeatNumber;
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row2Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceB4.appendChild(div);
})


// Row 3

const row3Btn1 = getAllElementsId('c1-btn');
row3Btn1.addEventListener('click', function(){
  const seatPriceC1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row3Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceC1.appendChild(div);
})


const row3Btn2 = getAllElementsId('c2-btn');
row3Btn2.addEventListener('click', function(){
  const seatPriceC2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row3Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceC2.appendChild(div);
})

const row3Btn3 = getAllElementsId('c3-btn');
row3Btn3.addEventListener('click', function(){
  const seatPriceC3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row3Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceC3.appendChild(div);
})

const row3Btn4 = getAllElementsId('c4-btn');
row3Btn4.addEventListener('click', function(){
  const seatPriceC4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row3Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceC4.appendChild(div);
})

// Row 4

const row4Btn1 = getAllElementsId('d1-btn');
row4Btn1.addEventListener('click', function(){
  const seatPriceD1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row4Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceD1.appendChild(div);
})


const row4Btn2 = getAllElementsId('d2-btn');
row4Btn2.addEventListener('click', function(){
  const seatPriceD2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row4Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceD2.appendChild(div);
})


const row4Btn3 = getAllElementsId('d3-btn');
row4Btn3.addEventListener('click', function(){
  const seatPriceD3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row4Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceD3.appendChild(div);
})


const row4Btn4 = getAllElementsId('d4-btn');
row4Btn4.addEventListener('click', function(){
  const seatPriceD4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row4Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceD4.appendChild(div);
})

// Row 5

const row5Btn1 = getAllElementsId('e1-btn');
row5Btn1.addEventListener('click', function(){
  const seatPriceE1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row5Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceE1.appendChild(div);
})

const row5Btn2 = getAllElementsId('e2-btn');
row5Btn2.addEventListener('click', function(){
  const seatPriceE2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row5Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceE2.appendChild(div);
})

const row5Btn3 = getAllElementsId('e3-btn');
row5Btn3.addEventListener('click', function(){
  const seatPriceE3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row5Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceE3.appendChild(div);
})

const row5Btn4 = getAllElementsId('e4-btn');
row5Btn4.addEventListener('click', function(){
  const seatPriceE4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row5Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceE4.appendChild(div);
})

// Row 6


const row6Btn1 = getAllElementsId('f1-btn');
row6Btn1.addEventListener('click', function(){
  const seatPriceF1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row6Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF1.appendChild(div);
})

const row6Btn2 = getAllElementsId('f2-btn');
row6Btn2.addEventListener('click', function(){
  const seatPriceF2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row6Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF2.appendChild(div);
})

const row6Btn3 = getAllElementsId('f3-btn');
row6Btn3.addEventListener('click', function(){
  const seatPriceF3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row6Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF3.appendChild(div);
})

const row6Btn4 = getAllElementsId('f4-btn');
row6Btn4.addEventListener('click', function(){
  const seatPriceF4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row6Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF4.appendChild(div);
})

// Row 7

const row7Btn1 = getAllElementsId('g1-btn');
row7Btn1.addEventListener('click', function(){
  const seatPriceG1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row7Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceG1.appendChild(div);
})

const row7Btn2 = getAllElementsId('g2-btn');
row7Btn2.addEventListener('click', function(){
  const seatPriceG2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row7Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceG2.appendChild(div);
})

const row7Btn3 = getAllElementsId('g3-btn');
row7Btn3.addEventListener('click', function(){
  const seatPriceG3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row7Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceG3.appendChild(div);
})

const row7Btn4 = getAllElementsId('g4-btn');
row7Btn4.addEventListener('click', function(){
  const seatPriceG4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row7Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceG4.appendChild(div);
})

// Row 8

const row8Btn1 = getAllElementsId('h1-btn');
row8Btn1.addEventListener('click', function(){
  const seatPriceF1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row8Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF1.appendChild(div);
})


const row8Btn2 = getAllElementsId('h2-btn');
row8Btn2.addEventListener('click', function(){
  const seatPriceF2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row8Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF2.appendChild(div);
})


const row8Btn3 = getAllElementsId('h3-btn');
row8Btn3.addEventListener('click', function(){
  const seatPriceF3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row8Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF3.appendChild(div);
})


const row8Btn4 = getAllElementsId('h4-btn');
row8Btn4.addEventListener('click', function(){
  const seatPriceF4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row8Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceF4.appendChild(div);
})

// Row 9

const row9Btn1 = getAllElementsId('i1-btn');
row9Btn1.addEventListener('click', function(){
  const seatPriceI1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row9Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceI1.appendChild(div);
})

const row9Btn2 = getAllElementsId('i2-btn');
row9Btn2.addEventListener('click', function(){
  const seatPriceI2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row9Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceI2.appendChild(div);
})

const row9Btn3 = getAllElementsId('i3-btn');
row9Btn3.addEventListener('click', function(){
  const seatPriceI3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row9Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceI3.appendChild(div);
})

const row9Btn4 = getAllElementsId('i4-btn');
row9Btn4.addEventListener('click', function(){
  const seatPriceI4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row9Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceI4.appendChild(div);
})

// Row 10


const row10Btn1 = getAllElementsId('j1-btn');
row10Btn1.addEventListener('click', function(){
  const seatPriceJ1 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row10Btn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceJ1.appendChild(div);
})

const row10Btn2 = getAllElementsId('j2-btn');
row10Btn2.addEventListener('click', function(){
  const seatPriceJ2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row10Btn2.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceJ2.appendChild(div);
})

const row10Btn3 = getAllElementsId('j3-btn');
row10Btn3.addEventListener('click', function(){
  const seatPriceJ3 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row10Btn3.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceJ3.appendChild(div);
})

const row10Btn4 = getAllElementsId('j4-btn');
row10Btn4.addEventListener('click', function(){
  const seatPriceJ4 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row10Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceJ4.appendChild(div);
})