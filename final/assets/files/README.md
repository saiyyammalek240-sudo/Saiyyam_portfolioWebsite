Add your resume PDF here

To make the "Resume" button on the homepage download your CV, place your PDF at the following path relative to the project root:

assets/files/Saiyyam_Resume.pdf

You can rename the file to that exact filename, or update the href/download attribute in `home.html` to match a different filename.

Notes:
- Browsers will download the file when the button is clicked if the file exists.
- If you're testing locally by opening the HTML file directly (file://), some browsers may block downloads from local files; run a simple local server if needed (for example, in PowerShell run: `python -m http.server` in the project folder and open http://localhost:8000).
