import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(1); //useState is a hook in react react function start with use are react hooks
  const [isOpen, setIsOpen] = useState(true);
  // we can call hooks only inside top of function,not inside if function or loop
  // useState will return an array and we can destructure it
  // the first one is the argument and the second one is the function

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1); not recommended
      setStep((currentStep) => currentStep + 1);
      // currentStep: Represents the value of step at the exact moment the setStep callback is executed.
    }
  }
  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);
      setStep((currentStep) => currentStep - 1);
    }
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((curOpen) => !curOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// 1 HANDLING EVENTS THE REACT WAY
// In react we use onClick on the element to handle the events
// 2 STATE IN REACT: data that a component can hold over time, necessary for information that it needs to remember throughout the app's life cycle (COMPONENTS MEMORY)
// updating component state triggers react to re-render the component
// Most important concept in react
/*
In React, state is like a container that holds data that can change over time in your app. When the state changes, React automatically updates the part of your UI that depends on that state.
For example, imagine you have a button that changes its label when clicked. The label of the button is stored in the state, and when you click it, the state updates (e.g., from “Click me” to “You clicked me”). React then updates the button’s label in the UI based on the new state.
*/

// 3 CREATING A STATE VARIABLE WITH USESTATE
// 4 DON'T SET STATE MANUALLY, ALWAYS USE THE SETTER FUNCTION
// THE MECHANICS OF STATE IN REACT:
// In view/UI, when the user click the button, we can update the state using useState and it re-render the component which resulted in a updated view
// Framework like React exist to keep sync data with UI
// State is preserved throughout re-renders
// React remember the state even though we re render it
// 5 REACT DEVELOPER TOOLS
// Always treat state as immutable in react, that you can't change state directly but using state function
// 6 UPDATING STATE BASED ON CURRENT STATE: not recommended (setSetup(step+1)) Instead do this: (setSetup(curState)=>curState-1) pass a callback function which will receive a current state as an argument
// Each component has and managed its own state, no matter how many times we render the same component
// With state, we view UI as a reflection of data changing over time
// In vanilla Js we have to manually update the variable and DOM separately
// In react we have to just update the state and it will keep sync with the UI
