document.addEventListener('DOMContentLoaded', () => {
    let currentQuestion = 1;
    const totalQuestions = 20;
    
    // Show the first question
    document.getElementById(`question-${currentQuestion}`).style.display = 'block';
    
    document.getElementById('next-button').addEventListener('click', () => {
        if (currentQuestion < totalQuestions) {
            document.getElementById(`question-${currentQuestion}`).style.display = 'none';
            currentQuestion++;
            document.getElementById(`question-${currentQuestion}`).style.display = 'block';

            if (currentQuestion === totalQuestions) {
                document.getElementById('next-button').style.display = 'none';
                document.getElementById('submit-button').style.display = 'block';
            }
            if (currentQuestion > 1) {
                document.getElementById('prev-button').style.display = 'block';
            }
        }
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        if (currentQuestion > 1) {
            document.getElementById(`question-${currentQuestion}`).style.display = 'none';
            currentQuestion--;
            document.getElementById(`question-${currentQuestion}`).style.display = 'block';

            if (currentQuestion < totalQuestions) {
                document.getElementById('next-button').style.display = 'block';
                document.getElementById('submit-button').style.display = 'none';
            }
            if (currentQuestion === 1) {
                document.getElementById('prev-button').style.display = 'none';
            }
        }
    });
});
