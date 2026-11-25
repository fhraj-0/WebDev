const countInput = document.querySelector("#init-N");
const countDisplay = document.querySelector(".count-N h1");
const increaseButton = document.querySelector(".increase-btn");
const decreaseButton = document.querySelector(".decrease-btn");
const countMax = document.querySelector("#init-Max");
const myBar = document.querySelector("#my-bar");


function createCounter(init) {
    let count = init;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}

const initial = Number(countInput.value);
let counter = createCounter(initial);
let currentVal = initial;
rander(currentVal);


function rander(currentCount) {
    countDisplay.textContent = currentCount;

    const maxValue = Number(countMax.value);
    const percentage = maxValue > 0 ? (currentCount / maxValue) * 100 : 0;
    myBar.style.width = `${percentage}%`;
    countDisplay.classList.toggle("max-r",
        maxValue > 0 && currentCount >= maxValue
    );
};

countInput.addEventListener("input", () => {
    currentVal = Number(countInput.value);
    counter = createCounter(currentVal);
    rander(currentVal);
});

countMax.addEventListener("input", () => {
    rander(currentVal);
});

increaseButton.addEventListener("click", () => {
    currentVal = counter.increment();
    rander(currentVal);
});

decreaseButton.addEventListener("click", () => {
    currentVal = counter.decrement();
    rander(currentVal);
});



