const btn = document.querySelector("form button"); 
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const dropdownSelect = document.querySelectorAll(".dropdown select");
const msg = document.querySelector(".msg");

for (let select of dropdownSelect) {
    for (let code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if (select.name === "from" && code === "USD") {
            newOption.selected = "selected"
        }
        if (select.name === "to" && code === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}


const updateFlag = async (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newScr = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newScr;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelectorAll(".amount input")[0];
    let amtVal = amount.value;
    if (amtVal === "" || amtVal <= 0) {
        amtVal = 1;
        amount.value = "1";
    }
    console.log(amtVal);
    console.log(fromCurr.value, toCurr.value);
    makeTheExchange(amtVal);
});


const fetchData = async () => {
    const url = `https://exchange-rate-api1.p.rapidapi.com/latest?base=${fromCurr.value}`;
    const options = {
        method: 'GET',
        headers: {
            // 'X-RapidAPI-Key': '198e0d5268mshbe42bedcd486db5p1495f8jsn566c4cb33802',
            'X-RapidAPI-Key': '8b1641633fmsh9b436e858c5def3p12aebfjsn96f504b75ac1',
            'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let rate = result.rates[toCurr.value];

        console.log(rate);
        return rate;
    } 
    catch (error) {
        console.error(error);
    }
};

const makeTheExchange = (value) => {
    rate = fetchData();
    ans = value * rate;
    msg.innerText = `${value} ${fromCurr.value} = ${ans} ${toCurr.value}`;
}

makeTheExchange(1);
