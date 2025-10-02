const onChangeQuestion1 = event => {
    const answer = event.target.value;
    if (answer === "crumbl") {
        document.getElementById("divClue1").classList.remove("d-none");
    } else {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

const onInputClue1 = event => {
    const answer = event.target.value;
    if (answer.toLowerCase() === "forever") {
        document.getElementById("divQuestion2").classList.remove("d-none");
    }
}

const onChangeQuestion2 = event => {
    const answer = event.target.value;
    if (answer === "dentist") {
        document.getElementById("divClue2").classList.remove("d-none");
    } else {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

const onInputClue2 = event => {
    const answer = event.target.value;
    if (answer.toLowerCase() === "in love") {
        document.getElementById("divQuestion3").classList.remove("d-none");
    }
}

const onChangeQuestion3 = event => {
    const answer = event.target.value;
    if (answer === "skywest") {
        document.getElementById("divClue3").classList.remove("d-none");
    } else {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

const onInputClue3 = event => {
    const answer = event.target.value;
    if (answer.toLowerCase() === "444") {
        document.getElementById("divQuestion4").classList.remove("d-none");
    }
}

const onChangeQuestion4 = event => {
    const answer = event.target.value;
    if (answer === "kbbq") {
        document.getElementById("divClue4").classList.remove("d-none");
    } else {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

const onInputClue4 = event => {
    const answer = event.target.value;
    if (answer.toLowerCase() === "30") {
        document.getElementById("divQuestion5").classList.remove("d-none");
    }
}

const onChangeQuestion5 = event => {
    const answer = event.target.value;
    if (answer === "dutch") {
        document.getElementById("divClue5").classList.remove("d-none");
    } else {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

const onInputClue5 = event => {
    const answer = event.target.value;
    if (answer.toLowerCase() === "doggo") {
        document.getElementById("divClueFinal").classList.remove("d-none");
    }
}

window.onload = () => {
    document.querySelectorAll("input[name='treat']").forEach(radio => {
        radio.addEventListener("change", event => onChangeQuestion1(event));
    });
    document.getElementById("clue1").addEventListener("input", event => onInputClue1(event));
    document.querySelectorAll("input[name='passion']").forEach(radio => {
        radio.addEventListener("change", event => onChangeQuestion2(event));
    });
    document.getElementById("clue2").addEventListener("input", event => onInputClue2(event));
    document.querySelectorAll("input[name='origin']").forEach(radio => {
        radio.addEventListener("change", event => onChangeQuestion3(event));
    });
    document.getElementById("clue3").addEventListener("input", event => onInputClue3(event));
    document.querySelectorAll("input[name='eating']").forEach(radio => {
        radio.addEventListener("change", event => onChangeQuestion4(event));
    });
    document.getElementById("clue4").addEventListener("input", event => onInputClue4(event));
    document.querySelectorAll("input[name='bev']").forEach(radio => {
        radio.addEventListener("change", event => onChangeQuestion5(event));
    });
    document.getElementById("clue5").addEventListener("input", event => onInputClue5(event));
}