(() => {
    document.addEventListener('DOMContentLoaded', (event) => {
        const menu = {
            target: document.querySelector('#mobile-menu-target'),
            menu: document.querySelector('#mobile-menu'),
            toggle: function (e) {
                e.preventDefault()
                this.target.classList.toggle('active')
                this.target.classList.toggle('bg-white')
                this.target.classList.toggle('text-black')
                this.menu.classList.toggle('active')
            }
        }

        menu.target.addEventListener('click', e => {
            menu.toggle(e)
        })
    })
})()