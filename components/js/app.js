document.addEventListener("DOMContentLoaded", () => {
    const formGet = document.getElementById("form");
    formGet.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("btn-calc").addEventListener("click", () => {
    
            const weightGet = document.getElementById("weight").value;
            const heightGet = document.getElementById("height").value;
    
            const bmi = (weightGet / (heightGet * heightGet)).toFixed(2);
            
            const valueGet = document.getElementById("value");
            let description = '';
            
            valueGet.classList.add("attention");

            switch (true) {
                case bmi < 18.5:
                    description = "Cuidado! você está abaixo do peso";
                    document.getElementById("infos-result").classList.add("visible");
                    valueGet.classList.remove("attention");
                    valueGet.classList.add("warning");
                    break;
                case bmi >= 18.5 && bmi <= 25:
                    description = "Parabéns! você está no peso ideal";
                    document.getElementById("infos-result").classList.add("visible");
                    valueGet.classList.remove("attention");
                    valueGet.classList.remove("default");
                    break;
                case bmi > 25 && bmi <= 35:
                    description = "Você está com sobrepeso";
                    document.getElementById("infos-result").classList.add("visible");
                    valueGet.classList.remove("attention");
                    valueGet.classList.remove("warning");
                    break;
                case bmi > 35 && bmi <= 40:
                    description = "Você está com obesidade";
                    
                    document.getElementById("infos-result").classList.add("visible");
                    break;
                default:
                    description = "Você está com obesidade mórbida";
                    document.getElementById("infos-result").classList.add("visible");
            }

            valueGet.innerHTML = bmi.replace('.', ',');
            document.getElementById("description").innerHTML = description;
        });
    });
});
