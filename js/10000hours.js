const startBtn = document.querySelector(".start_btn");
const modalBtn = document.querySelector(".modal_btn");
const shareBtn = document.querySelector(".share_btn");
const closeBtn = document.querySelector(".close_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator() {
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if (fieldValue.value == "") {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if (timeValue.value == "") {
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if (timeValue.value > 24) {
        alert('잘못된 값입니다. 24 이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        result.style.display = "flex";
        loading.style.display = "none";
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000 / timeValue_int), 10);
    }, 1800);
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    /* 이전 코드 ; exexCommand가 더 이상 사용 xxx
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert('URL이 복사되었습니다.');
    */
   const url = window.location.href;

   navigator.clipboard.writeText(url).then(() => {
       alert('URL이 복사되었습니다.');
   });
}

startBtn.addEventListener("click", calculator);
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
shareBtn.addEventListener("click", copyUrl);