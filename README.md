Concevoir et développer une application Web/Mobile pour contrôler à
distance un modèle de maison intelligente avec sept services.
Cette application est basé sur ReactJS et Ant Design en front end

<h1>What to install after cloning the project :</h1>
install node<br>
npm install -g yarn<br><br>
npm i react-router-dom<br>
<br>
cd smarthome<br>
<br>
<h3>Install Ant Design files :</h3>
yarn add antd<br>
yarn add react-app-rewired customize-cra<br><br>
You will need to change some lines : <br>
/* package.json */<br>
"scripts": {<br>
-   "start": "react-scripts start",<br>
-   "build": "react-scripts build",<br>
-   "test": "react-scripts test",<br>
+   "start": "react-app-rewired start",<br>
+   "build": "react-app-rewired build",<br>
+   "test": "react-app-rewired test",<br>
}
<br>
<br>
<i>Then create a <code>config-overrides.js</code> at root directory of your project for further overriding.</i>
Inside this code :<br>
<code>
const { override, fixBabelImports } = require('customize-cra');<br>
<br>
module.exports = override(<br>
       fixBabelImports('antd', {<br>
         libraryDirectory: 'es',<br>
         style: 'css',<br>
       }),<br>
);<br>
</code>

<br> yarn add babel-plugin-import<br>
npm install react-sticky<br>
<br>
<h3>Then run the project :</h3>
npm start<br>
