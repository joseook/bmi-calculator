document.addEventListener("DOMContentLoaded", () => {
    const formGet = document.getElementById("form");
    formGet.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("btn-calc").addEventListener("click", () => {
    
            const weightGet = parseFloat(document.getElementById("weight").value);
            const heightGet = parseFloat(document.getElementById("height").value);
        
            const valueGet = document.getElementById("value");
            let description = '';
            
            valueGet.classList.add("attention");

            if (isNaN(weightGet) || isNaN(heightGet) || weightGet === 0 || heightGet === 0) {
                alert('[ERROR] Coloque dados válidos nos campos designados (Apenas números)!.')
                return;
            }

            const bmi = (weightGet / (heightGet * heightGet)).toFixed(2);
            
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
                    valueGet.style.color = "green";
                    break;
                case bmi > 25 && bmi <= 35:
                    description = "Você está com sobrepeso";
                    document.getElementById("infos-result").classList.add("visible");
                    valueGet.classList.remove("attention");
                    valueGet.classList.add("warning");
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
