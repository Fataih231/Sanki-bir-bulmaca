let currentQuestion = 1;

document.getElementById("submit-answer").addEventListener("click", function() {
    let userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
    
    if (currentQuestion === 1) {
        if (userAnswer === "63") {
            alert("Tebrikler! Doğru cevabı verdin.");
            nextQuestion("Bir sayıyı 5 ile çarptığında 45 elde ediyorsun. Hangi sayıdır?");
            currentQuestion = 2;
        } else {
            alert("Yanlış cevap! Tekrar deneyin.");
        }
    } else if (currentQuestion === 2) {
        if (userAnswer === "9") {
            alert("Tebrikler! Doğru cevabı verdin.");
            nextQuestion("Yazıyı dikkatlice çözmelisin: 3 + 4 = 7, 7 + 2 = 9, 9 + 5 = ?");
            currentQuestion = 3;
        } else {
            alert("Yanlış cevap! Tekrar deneyin.");
        }
    } else if (currentQuestion === 3) {
        if (userAnswer === "14") {
            alert("Tebrikler! Doğru cevabı verdin.");
            nextQuestion("Bir kutu içerisindeki 5 nesne 3 kg, diğer kutu içerisindeki nesneler ise toplamda 10 kg. Kutulardan hangisindeki nesneler daha ağır ve neden?");
            currentQuestion = 4;
        } else {
            alert("Yanlış cevap! Tekrar deneyin.");
        }
    } else if (currentQuestion === 4) {
        if (userAnswer === "diğer kutu") {
            alert("Tebrikler! Son bulmacayı da geçtin! Hikaye burada bitiyor...");
        } else {
            alert("Yanlış cevap! Tekrar deneyin.");
        }
    }
});

function nextQuestion(questionText) {
    document.getElementById("question-text").innerText = questionText;
    document.getElementById("user-answer").value = ''; // Cevap kutusunu temizle
}