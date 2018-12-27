(function() {
    if (window.location.href.indexOf('.html') !== -1) {
        var previewBtn = document.getElementById('previewBtn');
        if (previewBtn === null) {
            previewBtn = document.createElement('a');
            previewBtn.setAttribute('class', 'button minibutton ');
            previewBtn.setAttribute('id', 'previewBtn');
            previewBtn.setAttribute('href', window.location.href+'#files');
            previewBtn.innerText = 'HTML Preview';
            document.querySelector('.button-group').appendChild(previewBtn);
            newTabBtn = document.createElement('a');
            newTabBtn.setAttribute('class', 'button minibutton ');
            newTabBtn.setAttribute('id', 'newTabBtn');
            newTabBtn.setAttribute('href', 'http://htmlpreview.github.com/?' + window.location.href);
            newTabBtn.innerHTML = '<img style="width:13px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjMxQkZBQjk3NzA0MTFFMTg0RERBNUY2QTJFRTZBRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjMxQkZBQkE3NzA0MTFFMTg0RERBNUY2QTJFRTZBRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMTA2MTk0MDc2NzExMUUxODREREE1RjZBMkVFNkFFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMzFCRkFCODc3MDQxMUUxODREREE1RjZBMkVFNkFFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXzIh0AAAFeSURBVHjaxJY9TsMwFMfjNgNjxypTR8ZIuUBzA45AT1B6AugJyshGVia4gcMBIuUI2TLCyAZ/o2fJSp34+ZWIJ1lOlPf88/uKrRKmFEWxxaQTmbRLrmbf912WZRs85gLQWsVawLNnTLexdkoSBwlMeRZZTYSna5qmI71XTDdcUOosfk+7XI3ofmKUpG82so3yiCA6kORfCLxpCaInNuSVBXkyK8R69OEYthgHLFp7cieGWNC3817OATkDAaLmgNgchWQvgNQS0CYSskNkTBtUsaD3SEhFadi5MA7okaqRBaG+TIawIAjK9o/QMiF6YG9gJcejEGwIyT329YIbfAd2pKp6o76zeZj8jaUx5USwh5HP+aV99CfyPyC6gEhO3KBdSseArf0TjA4C1mlwrHhBpmrunITqC6NUjYXuyOx81v2N1juTJe5rX7ivveD5CuOa5lgx4Xqi5vWG7keAAQAI+4fDvDIMHwAAAABJRU5ErkJggg==">';
            newTabBtn.setAttribute('target', '_blank');
            document.querySelector('.button-group').appendChild(newTabBtn);
        }

        previewBtn.onclick = function() {
            if (this.style.color === '') {
                var previewFrame = document.getElementById('previewFrame');
                if (previewFrame === null) {
                    previewFrame = document.createElement('iframe');
                    var src = 'http://htmlpreview.github.com/?' + window.location.href;
                    previewFrame.setAttribute('src', src);
                    previewFrame.setAttribute('id', 'previewFrame');
                    previewFrame.style.width = '100%';
                    previewFrame.style.border = 'none';
                    previewFrame.style.height = '1000px';
                    document.querySelector('.file').appendChild(previewFrame);
                }
                previewFrame.style.display = 'block';
                document.querySelector('.data').style.display = 'none';
                previewBtn.style.color = '#fff';
                previewBtn.style.backgroundImage = 'linear-gradient(#599bcd, #3072b3)';
                previewBtn.style.backgroundRepeat = 'repeat-x';
                previewBtn.style.borderColor = '#2a65a0';
                previewBtn.style.textDecoration = 'none';
                previewBtn.style.textShadow = '0 -1px 0 rgba(0,0,0,0.25)';
                previewBtn.style.backgroundColor = '#3072b3';
            }else {
                document.getElementById('previewFrame').style.display = 'none';
                document.querySelector('.data').style.display = 'block';
                previewBtn.style.color = '';
                previewBtn.style.backgroundImage = '';
                previewBtn.style.backgroundRepeat = '';
                previewBtn.style.borderColor = '';
                previewBtn.style.textDecoration = '';
                previewBtn.style.textShadow = '';
                previewBtn.style.backgroundColor = '';
            }

        };
    }
    document.querySelector('#wrapper').addEventListener('click', attachLinkEvent, false);
    function attachLinkEvent(e) {
        if (!!document.querySelector('.tree-browser') && e.target.parentElement.className==='content' && e.target.tagName === 'A' && e.target.href.indexOf('.html') !== -1) {
            var src = 'http://htmlpreview.github.com/?' + e.target.href;
            var checkTime = 0;
            var check = setInterval(function() {
                if (document.querySelector('.info') !== null) {
                    clearInterval(check);
                    var previewBtn = document.getElementById('previewBtn');
                    if (previewBtn === null) {
                        previewBtn = document.createElement('a');
                        previewBtn.setAttribute('class', 'button minibutton ');
                        previewBtn.setAttribute('id', 'previewBtn');
                        previewBtn.setAttribute('href', window.location.href+'#files');
                        previewBtn.innerText = 'HTML Preview';
                        document.querySelector('.button-group').appendChild(previewBtn);
                        newTabBtn = document.createElement('a');
                        newTabBtn.setAttribute('class', 'button minibutton ');
                        newTabBtn.setAttribute('id', 'newTabBtn');
                        newTabBtn.setAttribute('href', 'http://htmlpreview.github.com/?' + window.location.href);
                        newTabBtn.innerHTML = '<img style="width:13px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjMxQkZBQjk3NzA0MTFFMTg0RERBNUY2QTJFRTZBRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjMxQkZBQkE3NzA0MTFFMTg0RERBNUY2QTJFRTZBRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMTA2MTk0MDc2NzExMUUxODREREE1RjZBMkVFNkFFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMzFCRkFCODc3MDQxMUUxODREREE1RjZBMkVFNkFFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXzIh0AAAFeSURBVHjaxJY9TsMwFMfjNgNjxypTR8ZIuUBzA45AT1B6AugJyshGVia4gcMBIuUI2TLCyAZ/o2fJSp34+ZWIJ1lOlPf88/uKrRKmFEWxxaQTmbRLrmbf912WZRs85gLQWsVawLNnTLexdkoSBwlMeRZZTYSna5qmI71XTDdcUOosfk+7XI3ofmKUpG82so3yiCA6kORfCLxpCaInNuSVBXkyK8R69OEYthgHLFp7cieGWNC3817OATkDAaLmgNgchWQvgNQS0CYSskNkTBtUsaD3SEhFadi5MA7okaqRBaG+TIawIAjK9o/QMiF6YG9gJcejEGwIyT329YIbfAd2pKp6o76zeZj8jaUx5USwh5HP+aV99CfyPyC6gEhO3KBdSseArf0TjA4C1mlwrHhBpmrunITqC6NUjYXuyOx81v2N1juTJe5rX7ivveD5CuOa5lgx4Xqi5vWG7keAAQAI+4fDvDIMHwAAAABJRU5ErkJggg==">';
                        newTabBtn.setAttribute('target', '_blank');
                        document.querySelector('.button-group').appendChild(newTabBtn);
                    }

                    previewBtn.onclick = function() {
                        if (this.style.color === '') {
                            var previewFrame = document.getElementById('previewFrame');
                            if (previewFrame === null) {
                                previewFrame = document.createElement('iframe');
                                previewFrame.setAttribute('src', src);
                                previewFrame.setAttribute('id', 'previewFrame');
                                previewFrame.style.width = '100%';
                                previewFrame.style.border = 'none';
                                previewFrame.style.height = '1000px';
                                document.querySelector('.file').appendChild(previewFrame);
                            }
                            previewFrame.style.display = 'block';
                            document.querySelector('.data').style.display = 'none';
                            previewBtn.style.color = '#fff';
                            previewBtn.style.backgroundImage = 'linear-gradient(#599bcd, #3072b3)';
                            previewBtn.style.backgroundRepeat = 'repeat-x';
                            previewBtn.style.borderColor = '#2a65a0';
                            previewBtn.style.textDecoration = 'none';
                            previewBtn.style.textShadow = '0 -1px 0 rgba(0,0,0,0.25)';
                            previewBtn.style.backgroundColor = '#3072b3';
                        }else {
                            document.getElementById('previewFrame').style.display = 'none';
                            document.querySelector('.data').style.display = 'block';
                            previewBtn.style.color = '';
                            previewBtn.style.backgroundImage = '';
                            previewBtn.style.backgroundRepeat = '';
                            previewBtn.style.borderColor = '';
                            previewBtn.style.textDecoration = '';
                            previewBtn.style.textShadow = '';
                            previewBtn.style.backgroundColor = '';
                        }

                    };
                }else {
                    checkTime += 100;
                    if (checkTime > 10000) {
                        clearInterval(check);
                    }
                }
            }, 100);
        }
    }
})();
