1. Instal heroku

   - `curl https://cli-assets.heroku.com/install-ubuntu.sh | sh`
   - `sudo npm install -g heroku`
   - check if installed `heroku --version`

2. Login first in terminal `heroku login`

3. From the folder build heroku project with `heroku create <PROJECT NAME> --buildpack https://github.com/mars/create-react-app-buildpack,git`

### MAKE SURE THAT YOU DELETE YARN FILE OR PACKAGE-LOCK.JSON

4. `git push heroku master`
