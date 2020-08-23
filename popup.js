const copyButton = document.getElementById("copy")
const input = document.getElementById("hilite-url")

const onClick = () => {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, selection => {
        makeAndCopyURL(selection[0])
    })
}

const makeAndCopyURL = text => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let hiliteURL =  url + "#:~:text=" + encodeURIComponent(text.trim())
        input.setAttribute('value', hiliteURL);
        input.select();
        document.execCommand('copy');
    });
    
}

document.addEventListener("DOMContentLoaded", () => {
    // copyButton.addEventListener("click", onClick)
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, selection => {
        makeAndCopyURL(selection[0])
    })
})