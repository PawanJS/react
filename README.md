# REACT CONCEPTS

### Don’t touch the Dom I’ll do it for you Declarative approach

React is based upon the principle of not touching the Dom directly. React does all changes to Dom on its own. React is a Declarative paradigm. Instead of directly telling our app what to do we simply give it components and states that are built with JSX and these components receive properties which are props. We give all that information a giant javascript object in a declarative way. which creates a virtual Dom and that Virtual Dom is used by React library to update the Dom for us.

### Build website like Lego Design

React uses components as building blocks for any application. One can use components that are pre build like UI libraries Material UI And Bootstrap just by searching like React Date picker component. The whole idea of this is to separate each component from each other so they can be used easily at every page or sections.

### Unidirectional Data flow

React follows the approach of one-way data flow. In react data is flowed from its parents to child element. In essence it means child component are not able to update data that is coming from parent component. In react data which is coming from parent element is called props. React does not support bi-directional data flow to make assure you follow a clean data flow architecture. In react actions can update the state. The state change is passed to the view and to child components.

In react a state is always owned by one component. Any change made by this state can only affect the component below it, i.e., its children. Changing state on a component will never affect its parent and other siblings only the children is affected. That’s why state is often moved up in component tree so that it can be shared between the component that needs access to it.

### I am just a UI library the rest is up to you

React is just a UI library. It gives you all the necessary tools to build what you want. It follows same approach among devices. One can build apps for mobile, desktops, terminals and AR apps with the same concept. It is up to us what we build form this.

# Become a Great React Developer

### Decide on components

Decide on which component to make and how to randers them properly. Decide how much a component should be broken down further. How do we build these reusable piece of components. Decide on how to breakdown the app into different components.

### Decide the state and where it lives

Decide where to place the state in out App. How to use it properly in virtual DOM. Placing state in a appropriate component is a crucial decision.

### What changes when state changes

Based on this javascript object called state is changed we have to decide what to rerender. Based on this state which part of our DOM is need to rerender.

# React Basics

### Create React app

-create App

```sh
npx create-react-app monster-rolodex
```

#### index.js

index.js is the entry point in react application. It uses React and React DOM to render elements. It includes the App.js file which have all the relevant components inside it.

#### react-scripts start

When we run start its just taking out app code and pushing it through our local port 3000 and our browser is accessing it directly. It is not accessing any internet at all.
It's all local so it is incredibly fast. If we want anybody to access it then we need to leverage the internet.

#### react-scripts build

When we run build it create a optimized build of our code in the build folder. It removes all of our comments and extra spaces. It complies all of our related javascript in a optimized and fastest version that can be sent over internet.

#### react-scripts test

The test script test the app for if it is working properly or not. Create react app includes some test codes inside app.test.js and setupTest.js which help in testing our code functionality.

### react-scripts eject

The React code in build command is compiled using the powers of Babel and webpack. These two helps in building a optimized version of code of our app. They have configuration settings that can be tweaked to get optimized result. Most of our browser does not understand this funky looking React syntax. So Babel compile them into legacy code that every browser can easily understand. Webpack builds chunks for JS files so that our code is divided into small modules. If a user is accessing homepage JS related to that is sent to his browser. This will help in better performance.

Facebook has done a very good job in optimizing Babel and webpack configuration. So most of time we don't need to run eject script.

### Life Cycle Methods

Life cycle methods are is they are essentially methods that get called at different stages of when this component get rendered.

These are Mounting, Updating and Unmounting.

### Class Components

### Functional Component

### State

The state is an updatable structure that is used to contain data of information about the component and can change over time. The change in state can happen as a response to user actions or system events. It is the heart of react component which determine the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state and information. It can only be accessed or modified inside the component or by the component directly.

### Props

Props are read only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to another components. It is similar to function arguments and can be passed to the component the same way as arguments passed in the function. Props are immutable so we cannot modify the props from inside of the component.

### Difference between State and Props

| _SN_ | _Props_ | _State_ |
| 1. | Props are read-only. | State changes can be asynchronous. |

| 2. | Props are immutable. | State is mutable. |
| 3. | Props allow you to pass data from one component to other components as an argument. | State holds information about the components. |
| 4. | Props can be accessed by the child component. | State cannot be accessed by child components. |
| 5. | Props are used to communicate between components. | States can be used for rendering dynamic changes with the component. |
| 6. | Stateless component can have Props. | Stateless components cannot have State. |
| 7. | Props make components reusable. | State cannot make components reusable. |
| 8. | Props are external and controlled by whatever renders the component. | The State is internal and controlled by the React Component itself. |

##### The below table will guide you about the changing in props and state.

##### The component State and Props share some common similarities. They are given in the below table.
