![char](images/char.jpg?raw=true 'char')

# アニメ「ベンチャー」公式サイト・Venture Anime Website

Official repository for venture anime promotional site. Live version can be found at https://venture-anime.jp or https://venture-anime.com.

## Installation

In order to work on your own version of this site, please fork this project.

You will need to perform the following on your development machine.

1. Install Node.js (v13.11.0 is recommended, although v12 has no issue) and NPM.
2. Clone your own fork of this repository.
3. Run `npm install` from the root folder to install the dependencies.
4. If you have a custom domain that you want to use for GH Pages or Firebase, replace `venture-anime.com` in the `CNAME` file with your own domain.
5. Run `npm run start` and you're good to go.

## Commands

| Command     | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| `start`     | Starts the development server. Accessible at `http://localhost:3000`. |
| `build`     | Builds the site.                                                      |
| `prettier`  | Runs prettier to automatically format your code.                      |
| `predeploy` | Builds the site and copy CNAME into build folder.                     |
| `deploy`    | Deploys to Firebase.                                                  |

## Folder structure

| Folder         | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `Assets`       | Where we store our assets such as images, audio and video files.    |
| `Components`   | Reusable components that is widely used.                            |
| `Constants`    | Constant values that rarely changes.                                |
| `Localisation` | Translation related folder.                                         |
| `Pages`        | The many pages of our site.                                         |
| `Styles`       | The place where we keep our reusable/non-component specific styles. |
