// Row 1 buttons
const rowBtn1 = getAllElementsId("a1-btn");
rowBtn1.addEventListener("click", function () {
  const seatPrice1 = document.getElementById("seat-price");
  const div = document.createElement('div');
  const textSeat = getAllElementsId('text-seat');
  
  div.innerHTML = `<div class = "flex justify-between items-center list-none space-y-1 p-2 border-b-2 border-dashed">

    <li class ="font-semibold text-gray-500">${rowBtn1.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPrice1.appendChild(div);
});

const rowBtn2 = getAllElementsId("a2-btn");
rowBtn2.addEventListener("click", function () {
  const seatPrice2 = document.getElementById("seat-price");
  const textSeat = getAllElementsId('text-seat');
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
 const div = document.createElement('div')
  div.innerHTML = `<div class = "flex justify-between items-center space-y-1 list-none p-2 border-b-2 border-dashed">
    <li class ="font-semibold text-gray-500">${row2Btn4.innerText}</li>
    <li class ="font-semibold text-gray-500">Economy</li>
    <li class ="font-semibold text-gray-500">550</li>
  </div>`;
  textSeat.classList.add('hidden')
  seatPriceB4.appendChild(div);
})
