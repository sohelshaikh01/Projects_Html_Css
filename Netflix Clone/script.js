let questions = document.querySelectorAll(".question");

questions.forEach(question => {
    const icon = document.querySelector(".plus-icon");
    const answer = document.querySelector(".answer");

    // This is not working for all only for first
    // question.addEventListener('click', () => {

        // if(svg.classList.contains('active')) {
        //     svg.classList.remove('active');
        //     answer.style.maxHeight = null;
        // }
        // else {
        //     svg.classList.add('active');
        //     answer.style.maxHeight = answer.scrollHeight + 'px';
        // }

    // });

         question.addEventListener('click', () => {
                icon.classList.toggle('active');
                answer.classList.toggle('active');
            });

});