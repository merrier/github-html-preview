(function() {

    // https://stackoverflow.com/questions/24641592/injecting-iframe-into-page-with-restrictive-content-security-policy/24649134#24649134

    if (window.location.href.indexOf('.html') !== -1) {
        var previewBtn = document.getElementById('previewBtn');
        if (previewBtn === null) {
            previewBtn = document.createElement('a');
            previewBtn.setAttribute('class', 'btn btn-sm BtnGroup-item');
            previewBtn.setAttribute('id', 'previewBtn');
            previewBtn.setAttribute('target', '_blank');
            previewBtn.setAttribute('rel', 'noopener noreferrer');
            previewBtn.setAttribute('href', 'https://htmlpreview.github.com/?' + window.location.href);
            previewBtn.innerText = 'HTML Preview';
            document.querySelector('.BtnGroup').appendChild(previewBtn);
        }

        var frameBtn = document.getElementById('frameBtn');

        if (frameBtn === null) {


            frameBtn = document.createElement('a');
            frameBtn.setAttribute('class', 'btn btn-sm BtnGroup-item');
            frameBtn.setAttribute('id', 'frameBtn');
            // frameBtn.setAttribute('target', '_blank');
            // frameBtn.setAttribute('rel', 'noopener noreferrer');
            // frameBtn.setAttribute('href', 'https://htmlpreview.github.com/?' + window.location.href);
            frameBtn.innerText = 'Preview';
            document.querySelector('.file-actions').firstElementChild.appendChild(frameBtn);

            frameBtn.onclick = function() {

                var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
                if (!location.ancestorOrigins.contains(extensionOrigin)) {
                    var iframe = document.createElement('iframe');
                    // Must be declared at web_accessible_resources in manifest.json
                    iframe.src = chrome.runtime.getURL('frame.html');

                    // Some styles for a fancy sidebar
                    iframe.style.cssText = 'position:fixed;top:0;left:0;display:block;' +
                                        'width:300px;height:100%;z-index:1000;';
                    document.body.appendChild(iframe);
                }

                // let url = "https://htmlpreview.github.com/?https://github.com/noahlam/practice-truth/blob/master/guidance/index.html";
                // let iframe = document.createElement('iframe');
                // iframe.src = url;

                // iframe.id = 'github-chat-box-iframe-inner'
                // iframe.style.width = '100%'
                // iframe.style.height = '350px'
                // iframe.style.border = '0px'

                // document.body.appendChild(iframe)
            }
        }
    }
})();
