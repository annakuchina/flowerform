import { dropRight } from "lodash"

class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events() {
        // listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal());
        
        // pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    openTheModal() {
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
    <div class="modal__inner">
    <picture>
        <img class="modal__picture" srcset="assets/images/chilli-plant.png 640w, assets/images/chilli-plant.png 1280w" alt="Red and orange chilli design with a light green stem">
    </picture>
      <h2 class="section-title section-title--modal section-title--orange section-title--no-margin">Get in touch</h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>

      <div class="modal__icons">
        <a href="mailto:flowerform1@gmail.com" target="_blank">
        <i class="fa-solid fa-envelope modal__icon"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100084763996687" target="_blank">
        <i class="fa-brands fa-facebook modal__icon"></i></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
        `)
    }
    
}

export default Modal