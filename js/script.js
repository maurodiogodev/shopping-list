const itemForm = document.querySelector("#itemForm")
const itemInput = document.querySelector("#itemInput")
const itemInputValidationLabel = document.querySelector("#itemInputValidationLabel")
const itemsList = document.querySelector("#itemsList")
const allRemoveItemButton = document.querySelectorAll("#removeItemButton")
const removedItemAlert = document.querySelector("#removedItemAlert")

itemForm.onsubmit = (event) => {
    event.preventDefault()

    if (itemInput.value) {

        removedItemAlert.classList.remove('show-removed-item-alert')
        itemInputValidationLabel.classList.remove("show-validation-alert")

        const newItem = document.createElement("li")

        newItem.innerHTML = `
                <div>
                    <div class="checkbox-image"></div>
                    <input type="checkbox" id="check">
                    <span>${itemInput.value}</span>
                </div>
                <svg id="removeItemButton" class="remove-item-button" width="32" height="33" viewBox="0 0 32 33" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21 12.1667L20.5869 18.8501C20.4813 20.5576 20.4285 21.4114 20.0005 22.0253C19.7889 22.3287 19.5165 22.5849 19.2005 22.7773C18.5614 23.1667 17.706 23.1667 15.9951 23.1667C14.2821 23.1667 13.4255 23.1667 12.786 22.7766C12.4699 22.5838 12.1973 22.3272 11.9858 22.0232C11.5579 21.4084 11.5063 20.5534 11.4031 18.8435L11 12.1667"
                        stroke="#6B6671" stroke-linecap="round" />
                    <path
                        d="M10 12.1667H22M18.7038 12.1667L18.2487 11.2278C17.9464 10.6042 17.7952 10.2924 17.5345 10.0979C17.4767 10.0547 17.4154 10.0164 17.3513 9.98314C17.0626 9.83334 16.7161 9.83334 16.023 9.83334C15.3125 9.83334 14.9573 9.83334 14.6638 9.98942C14.5987 10.024 14.5367 10.0639 14.4782 10.1088C14.2144 10.3111 14.0671 10.6344 13.7724 11.2809L13.3686 12.1667"
                        stroke="#6B6671" stroke-linecap="round" />
                    <path d="M14.3334 19.5V15.5" stroke="#6B6671" stroke-linecap="round" />
                    <path d="M17.6666 19.5V15.5" stroke="#6B6671" stroke-linecap="round" />
                </svg>
        `

        itemsList.prepend(newItem)
    } else {
        itemInputValidationLabel.classList.add("show-validation-alert")
    }
}

itemsList.addEventListener('click', event => {
    if (event.target.classList.contains('remove-item-button')) {
        const itemToRemove = event.target.closest("li")

        removeItem(itemToRemove)
    }
})

function removeItem(itemToRemove) {
    itemsList.removeChild(itemToRemove)

    removedItemAlert.classList.add('show-removed-item-alert')
    setInterval(() => {
        removedItemAlert.classList.remove('show-removed-item-alert')
    }, 5000);
}