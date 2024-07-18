# Local environment setup

* You can use your preferred text editor/ide in order to follow through this tutorial
* Below you will see the steps for installing VsCode and node.js on your local machine
* VsCode installation
    - Go to: https://code.visualstudio.com/download
    - Select the installer for your platform (e.g Windows, Linux, MacOS)
    - Follow the guided installation
* Node.js/Npm installation
    - I recommend to always install the latest LTS version
    - If you are using Linux/MacOs I recommend to use the nvm application for managing the node/npm installation
        - For MacOS
            * Install Homebrew
                ```bash
                    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
                ```
            * Install nvm
                ```bash
                    brew install nvm
                ```
            * Add it to your shell profile (e.g ~/.zshrc) by adding the following line below 
                ```bash
                    source $(brew --prefix nvm)/nvm.sh

                ```
            * Install Node.js
                ```bash
                    nvm install node
                ```
            * See all available Node.js versions:
                ```bash
                    nvm ls-remote // but it is an overwhelming list
                ```
            * See installed versions:
                ```bash
                    nvm ls
                ```
            * Install a specific version:
                ```bash
                    nvm install v20.14.0
                ```
            * To use a specific version
                ```bash
                    nvm use v20.14.0
                ```
            * To make it the default version
                ```bash
                    nvm alias default v20.14.0
                ```
        * For Linux
            * Search on google according to your Linux Distribution
    * For Windows
        * Go to: https://nodejs.org/en/download/package-manager and follow the steps