const container = document.getElementById("container");

let strudelData;

document.addEventListener('DOMContentLoaded', () => {
    fetch("./strudelData.json")
    .then(response => response.json())
    .then(data => {
        data.map(strudel => {
            const {name, strudelLink } = strudel;
            const strudelDiv = document.createElement('div');
            
            const title = document.createElement("h3");
            title.innerText = name;

            const strudelCode = document.createElement("iframe");
            strudelCode.src = strudelLink;
            strudelCode.width = 1000;
            strudelCode.height = 600;
            strudelCode.allowFullscreen = true;
            
            strudelDiv.appendChild(title);
            strudelDiv.appendChild(strudelCode);
            container.appendChild(strudelDiv);
        })
    })
    .catch(error => console.error('Error fetching strudel data:', error));


});