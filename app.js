const container = document.getElementById("container");
const backToTopButton = document.getElementById("back-to-top");
const daysOneToFifteen = document.querySelectorAll("ul#days-1-to-15 li a");
const daysSixteenToThirty = document.querySelectorAll("ul#days-16-to-30 li a");

let startingAtSixteen = 16;

let strudelData;

document.addEventListener('DOMContentLoaded', () => {
    fetch("./strudelData.json")
    .then(response => response.json())
    .then(data => {
        data.map(strudel => {
            const {name, strudelLink, anchorName} = strudel;
            const strudelDiv = document.createElement('div');
            
            const title = document.createElement("h3");
            title.innerText = name;

            title.id = anchorName;

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

daysOneToFifteen.forEach((item, i) => {
    item.href = `#day${i + 1}`;  
})

daysSixteenToThirty.forEach((item, i) => {
    item.href = `#day${startingAtSixteen + i}`;
})

backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}