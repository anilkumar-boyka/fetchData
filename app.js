let data;
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=11');
    data = await response.json();
    const totalButtons = Math.round(data.length / 2);
    addPaginationButtons(totalButtons);

}
getData();

function addPaginationButtons(totalButtons) {
    const buttonDiv = document.getElementById('paginationButtons');
    for (let i = 1; i <= totalButtons; i++) {
        const createButton = document.createElement('button');
        createButton.id = i;
        const buttonText = document.createTextNode(i);
        createButton.appendChild(buttonText);
        buttonDiv.appendChild(createButton);
    }
    showDataOnPage(totalButtons);
}

function showDataOnPage(totalButtons) {
    let dataToShow;
    for (let i = 1; i <= totalButtons; i++) {
        document.getElementById(i).addEventListener('click', (e) => {
            const selectedButton = e.target.id;
            dataToShow = data.slice(selectedButton * 2 - 2, selectedButton * 2);
            let liTags = document.getElementsByTagName('li');
            if (liTags.length) {
                for (k = 0; k < liTags.length; i++)
                    liTags[k].remove();
            }
            const ulTag = document.getElementById('data');
            for (let j = 0; j < dataToShow.length; j++) {
                const createLi = document.createElement('li');
                createLi.innerText = dataToShow[j].title;
                ulTag.appendChild(createLi);
            }
        });
    }
}