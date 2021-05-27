export class VaultController {
    constructor () {
        this._img = document.querySelector("#vault-inside")
        this._hatch = document.querySelector("#escotilha-2")
        this._hatch2 = document.querySelector("#escotilha-1")
        this._leftDoor = document.querySelector("#porta-e")
        this._rightDoor = document.querySelector("#porta-d")
    }

    Open() {
        this._hatch.classList.add("rotate")

        setTimeout(() => {
            this._leftDoor.classList.add("openLeft")
            this._rightDoor.classList.add("openRight")
            this._hatch.classList.add("openRight")
            this._hatch2.classList.add("openRight")
        }, 5000);
    }

    SetPicture(imgStorageLocal) {
        this._img.src = imgStorageLocal
    }

    Closer() {
        this._leftDoor.classList.remove("openLeft")
        this._rightDoor.classList.remove("openRight")
        this._hatch.classList.remove("openRight")
        this._hatch2.classList.remove("openRight")

        setTimeout(() => {
            this._hatch.classList.remove("rotate")
        }, 5000);
    }
} 