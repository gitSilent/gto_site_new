const screensList = document.querySelectorAll(".screenshot-gto");
const body = document.querySelector("body");

screensList.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target);
        const modal = document.createElement("div");
        modal.style = "position: fixed; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.519); z-index: 100;"
        modal.className = "modal"
        modal.innerHTML = `
        <div class="inner-modal">
            <img class="close-modal" src="../media/cross-icon.svg" alt="" style="position: absolute; right: 5%; top:5%; height: 10%; cursor: pointer; ">
            <img class="screenshot-gto" style="position: absolute; width: 90%; margin: 0 auto; left: 0; right: 0; top: 20%;;" src="${e.target.src}" alt="" />
        </div>    
        `;
        body.prepend(modal);

        const innerModal = document.querySelector(".inner-modal");
        const closeModalIcon = document.querySelector(".close-modal");

        modal.addEventListener("click", (ev) => {
            console.log(ev.target);
            if(ev.target.className === "modal"){
                modal.remove();
            }
        });
        closeModalIcon.addEventListener("click", () => {
            modal.remove();
        });
    });
});
