1. Instal React Router `yarn add react-router-dom`;

   > if we have problems with minor versions we need to add:

   ```
   "resolutions": {
       "babel-jest": "24.7.1" // it indicates that exactly this version is required no matter what
   },
   ```

   > before "scripts in package.json;

2. In **index.js** we need to `import { BrowserRouter } from "react-router-dom`;
3. Wrap <App /> with <BrowserRouter>;
4. In **App.js** need to `import { Route, Switch } from "react-router-dom`;

   > Route has 3 params _exact_ _path_ _component_:
   > _component_ is a component we want to render, i.e. ={HomePage};
   > _path_ is an pathname to the component, i.e. ="/";
   > _exact_ true/false goes to exact path;

   <Route exact path="/" component={HomePage} />

5. Wrap all routes with <Switch>. As long as Switch sees smth matches the path it just renders that route;

6. In a file where you need to use, i.e. **menu-item.component.jsx** `import { withRouter } from "react-router-dom`;

   > withRouter is a HOC (higher Order Component). It take a component as an argument and returns a modified one;

7. Wrap export with withRouter, i.e. `export default withRouter(MenuItem)`;

> > > In order not to pass a whole bunch of properties we can pass 1 and add ...otherProps. In a component that gets props we need to do it like {...otherProps};

8.
