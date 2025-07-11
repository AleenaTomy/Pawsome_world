const quizForm = document.getElementById('quizForm');
  const resultDiv = document.getElementById('quizResult');

  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const answers = {
      q1: 'Greyhound',
      q2: 'Labrador Retriever',
      q3: '42',
      q4: 'Smell',
      q5: 'Chihuahua',
      q6: 'False',
      q7: 'Chow Chow',
      q8: '3',
      q9: 'False',
      q10: 'English Mastiff'
    };

    for (let q in answers) {
      if (quizForm[q].value === answers[q]) {
        score++;
      }
    }

    resultDiv.innerHTML = `<h3>🎉 You scored ${score}/10! 🐶</h3>`;

    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: quizForm.name.value,
        email: quizForm.email.value,
        score: score
      })
    }).then(response => {
      if (response.ok) {
        resultDiv.innerHTML += '<p>✔️ Your score has been sent to us!</p>';
      } else {
        resultDiv.innerHTML += '<p>⚠️ Error sending results. Please try again.</p>';
      }
    });
  });