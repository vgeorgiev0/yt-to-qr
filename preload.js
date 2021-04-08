window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }
    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }

    const button = document.querySelector('#test');
    const clickHandler = () => {
        console.log('Clicked!');
    }
    button.addEventListener('click', clickHandler);
    
});

