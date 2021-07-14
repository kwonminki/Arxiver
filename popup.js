// document.getElementById("path").value = "./"

chrome.storage.sync.get(["save"], function(items){
    chrome.extension.getBackgroundPage().console.log( items )
    chrome.extension.getBackgroundPage().console.log(items["save"])
    if (items["save"]){
        document.getElementById("on").style.display = 'block'
        document.getElementById("off").style.display = 'none'
        document.getElementById("toggle").checked = true
        }
    else{
        document.getElementById("on").style.display = 'none'
        document.getElementById("off").style.display = 'block'
        document.getElementById("toggle").checked = false
    }
});

function hello() {

    if (document.getElementById("off").style.display == 'block'){
    document.getElementById("on").style.display = 'block'
    document.getElementById("off").style.display = 'none'
    }
    else{
        document.getElementById("on").style.display = 'none'
        document.getElementById("off").style.display = 'block'
    }
    // chrome.extension.getBackgroundPage().console.log(document.getElementById("on").style.display)
    var messageFromForm = document.getElementById("on").style.display;
    chrome.runtime.getBackgroundPage((background) => background.setBadgeToMessage(messageFromForm));
    
  }

document.getElementById('toggle').addEventListener('click', hello);