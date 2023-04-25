export const Modal = {

    wrapper: document.querySelector(".modal-wrapper"), 
    message: document.querySelector(".modal .title span"),
    buttonClose:document.querySelector(".modal .close"),

    open() {
        Modal.wrapper.classList.add("open");
    },

    close() {
        Modal.wrapper.classList.remove("open");
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
}

// windown.onkeydown (you can use it, but if you use it in another time in the same file, this one will not work)

window.addEventListener('keydown', handleKeydown);
function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close();
    }
}