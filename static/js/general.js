let counter = 1;

function clickFirstButton() {
    counter++;
    document.getElementById("secondButton").innerHTML = "Alert Count: " + counter;
    alert('您点击了按钮，干得好。现在您可以点击“确定/关闭”');
}

function clickSecondButton() {
    alert("Number: " + counter);
}

function getAge() {
    const today = new Date();
    const birthYear = 2014;
    let age = today.getFullYear() - birthYear;
    return age;
}

document.addEventListener("DOMContentLoaded", function() {
    const age = getAge();
    document.getElementById("age").innerText = age;
});