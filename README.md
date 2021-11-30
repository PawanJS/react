**REACT CONCEPTS**

1. **Don’t touch the Dom I’ll do it for you**.

React is based upon the principle of not touching the Dom directly. React does all changes to Dom on its own.

1. **Build website like Lego Design**

React uses components as building blocks for any application. One can use components that are pre build like UI libraries Material UI And Bootstrap just by searching like React Date picker component. The whole idea of this is to separate each component from each other so they can be used easily at every page or sections.

1. **Unidirectional Data flow**

React follows the approach of one-way data flow. In react data is flowed from its parents to child element. In essence it means child component are not able to update data that is coming from parent component. In react data which is coming from parent element is called props. React does not support bi-directional data flow to make assure you follow a clean data flow architecture. In react actions can update the state. The state change is passed to the view and to child components.

In react a state is always owned by one component. Any change made by this state can only affect the component below it, i.e., its children. Changing state on a component will never affect its parent and other siblings only the children is affected. That’s why state is often moved up in component tree so that it can be shared between the component that needs access to it.

1. I am just a UI library the rest is up to you.

React is just a UI library. It gives you all the necessary tools to build what you want. It follows same approach among devices. One can build apps for mobile, desktops, terminals and AR apps with the same concept. It is up to us what we build form this.
