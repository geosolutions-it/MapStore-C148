Photomap
==========

Quick Start
------------

Clone the repository with the --recursive option to automatically clone submodules:

`git clone --recursive https://github.com/geosolutions-it/MapStore-C148`

Install NodeJS >= 7.10.0 , if needed, from [here](https://nodejs.org/en/download/releases/).

Start the development application locally, run:

`npm install`

followed by    

`npm start`

The application runs at `http://localhost:8081` afterwards.

Read more on the [wiki](https://github.com/geosolutions-it/MapStore-C148/wiki).

Themes
------------
This project support two themes, i.e default and surveye theme, which differ only on `localConfig.json` file and the build processes. During development, you can quickly run the instance with surveye theme by appending `localConfigSurveye.json` in the URL like this [http://localhost:8081/?localConfig=localConfigSurveye#/](http://localhost:8081/?localConfig=localConfigSurveye#/) and you can build with different themes as described in [build section](#Build)


Build
----------------

We use maven as the build tool, and `build.sh` script to automate the build process. To build with default theme run;     

`sh build.sh`     

To build with **surveye theme**, run;   

`sh build theme="surveye"`

In addition to themes, You can also configure mapstore
version to be used during the build by providing `version` argument to the build script as follows;

`sh build version='SNAPSHOT-2019'`