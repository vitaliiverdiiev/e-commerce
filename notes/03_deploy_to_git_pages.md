1. `npm i gh-pages`
2. In package.json:

   - before dependencies add `"homepage: "https//vitaliiverdiiev.github.io/<name-of-a-project>"`
   - then add scripts:
     - `"predeploy": "npm run build"`
     - `"deploy": "gh-pages -d build"`

3. Then in terminal run `npm run deploy` script

4. git add && git commit -m "comment" && git push origin master

5. On github go to settings > scroll to GitHub Pages and set src **gh-pages branch**
