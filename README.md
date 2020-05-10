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
<code>"scripts": {</code><br>
-   <code>"start": "react-scripts start",</code><br>
-   <code>"build": "react-scripts build",</code><br>
-   <code>"test": "react-scripts test",</code><br>
+   <code>"start": "react-app-rewired start",</code><br>
+   <code>"build": "react-app-rewired build",</code><br>
+   <code>"test": "react-app-rewired test",</code><br>
<code>}
<br>
<br>
<i>Then create a <code>config-overrides.js</code> at root directory of your project for further overriding.</i>
Inside this code :<br> <br>

<code>const { override, fixBabelImports } = require('customize-cra');</code>

<br>
<code>module.exports = override(</code><br>
       <code>fixBabelImports('antd', {</code><br>
         <code>libraryDirectory: 'es',</code><br>
         <code>style: 'css',</code><br>
       <code>}),</code><br>
<code>);</code><br>


<br> yarn add babel-plugin-import<br>
npm install react-sticky<br>
<br>
<h3>Then run the project :</h3>
npm start<br>
