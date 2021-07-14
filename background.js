var title= Array();
var pdfurl;
var issave = true

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      // read changeInfo data and do something with it
      // like send the new url to contentscripts.js
      
      if (changeInfo.url) {
        if (changeInfo.url.includes("arxiv.org/abs")){
            chrome.tabs.executeScript({
                code:'document.getElementsByClassName("title mathjax")[0].innerText'
            }, function(result){
                title = Array()
                for (i = 0; i < result[0].length; i++)
                title[i] = result[0][i];
            })
            pdfurl = changeInfo.url
            pdfurl = pdfurl.toString().replace("abs", "pdf")
            pdfurl = pdfurl + ".pdf"
        }
        if (changeInfo.url.includes("arxiv.org/pdf")){
            if (changeInfo.url.toString() == pdfurl){
                var title_ = title.join('') //255
                console.log(title_)
                var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
                if (special_pattern.test(title_)){
                    title_ = title_.replace(special_pattern, "_");
                }
                if (title_.length>252){
                    title_ = title_.substr(0, 250) + ".."
                }

                console.log(title_ + ".pdf")
                chrome.downloads.download({
                    url: changeInfo.url,
                    filename: title_ + ".pdf",
                    saveAs:   issave
                });
            }
        }
      }
    }
  );

function setBadgeToMessage(msg){
    if(msg=='block'){
        issave = true
    }
    else{
        issave = false
    }
    chrome.storage.sync.set({ "save": issave }, function(){
        //  A data saved callback omg so fancy
    });
  }