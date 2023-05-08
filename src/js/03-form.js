const runForm = function() {
    const input = document.getElementById("email");
    const text = document.getElementById("text");


    //

        const previousData = JSON.parse(localStorage.getItem("contact"));
        if (previousData) {
            console.log(previousData.email);
            console.log(previousData.message);
        }
    //


    let inputContent, textContent;

    input.addEventListener("input", (event) => {
        inputContent = event.currentTarget.value;
        console.log(inputContent);
    });

    text.addEventListener("input", (event) => {
        textContent = event.currentTarget.value;
        console.log(textContent);
    })

    const feedbackFormState = {
        email: inputContent,
        message: textContent
    }
    
    localStorage.setItem("contact", JSON.stringify(feedbackFormState));

}

module.exports = runForm;