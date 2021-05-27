import {VaultController} from "./VaultController.js"
import {imgs} from "../VaultImg.js"

export class PasswordBoxController {
    constructor() {
        this._enter = document.querySelector("#enter")
        this._closer = document.querySelector("#close")
        this._del = document.querySelector("#del")
        this._btns = document.querySelectorAll(".num")
        this._bar = document.querySelector(".value")
        this.vaultController = new VaultController()
        this._vaultimgs = imgs
        this.init()
    }

    init() {
        this._enter.addEventListener("click", () => this.vaultOpen())
        this._closer.addEventListener("click", () => this.vaultController.Closer())
    }

    vaultOpen() {
        if(!this.passwordCheck()) return;
        this.vaultController.Open()
    }

    passwordCheck() {
        let test
        this._vaultimgs.forEach((img) => {
            if (this._bar.value == img.password) {
                this.barRight()
                this.vaultController.SetPicture(img.imgLocal)
                test = true
            }
        })
        
        if (test !== true) {
            this.barError()
            test = false
        }

        return test
        
    }

    barError() {
        this._bar.value = ""
        this._bar.placeholder = "ErRoR 404"
        
        this._bar.classList.add("value-error")

        let btn = this._btns
        btn = [].concat(...btn)
        btn.push(document.querySelector("#del"))


        btn.forEach(element => {
            element.addEventListener("click", (event) => {
                this._bar.classList.remove("value-error")
                this._bar.placeholder = "Enter Code"
            })
        })
    }

    barRight() {
        this._bar.value = ""
        const block = document.querySelector(".block")

        block.classList.remove("hidden")
        this._bar.classList.add("value-right")
        this._bar.placeholder = "Valid Code"

        this._closer.addEventListener("click", (event) => {
            setTimeout(() => {
                this._bar.classList.remove("value-right")
                this._bar.placeholder = "Enter Code"
                block.classList.add("hidden")
            }, 10000);
        })
    }

}