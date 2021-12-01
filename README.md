# REACT CONCEPTS

### Don’t touch the Dom I’ll do it for you Declartive approach

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
