      function openBlankPageWithCode() {
            // Open a new window or tab with about:blank
            var newWindow = window.open('about:blank', '_blank');

            // Check if the new window is successfully opened
            if (newWindow) {
                // Write custom code to the new window
                newWindow.document.write('<html><head> <link rel="icon" type="image/png" href="/imresizer-1706741917427.jpg"/><title>Khan Academy | Free Online Courses, Lessons &amp; Practice</title></head><link rel="shortcut icon" href="https://cdn.kastatic.org/images/favicon.ico?logo"><body>');
                newWindow.document.write('<iframe allowfullscreen src="https://you-are-too-slow.onrender.com/" style="position:absolute; top:0px; left:0px; width:100%; height:100%; border: none; overflow: hidden;"></iframe>');
                newWindow.document.write('');
                newWindow.document.close(); // Close the document for writing
            } else {
                alert('Unable to open a new window. Turn on popups.');
            }
        }
