//Abaixa um pouco mais quando estiver navegando
document.addEventListener('DOMContentLoaded', () => {
    const headerOffset = document.querySelector('nav').offsetHeight
    const links = document.querySelectorAll('nav a')

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()

            const targetId = link.getAttribute('href').substring(1)
            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        })
    })
})