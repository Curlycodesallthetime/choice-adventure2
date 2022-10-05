// Save the value of the user types into the prompt to the variable name
 let animal = prompt("Lets play a game. Type 'snake' or 'frog' ")
 console.log(animal);

// alert - pop up message without the input field
//  alert("Hello!" + userName)

// console.log(userName);
// start with a prompt, use an if statement to show different messages based on what user enters in the prompt.
if (animal === 'frog') {
    alert("Good choice. ")
  }
   else if (animal === 'snake') {
    alert("Poor choice.")
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    alert("Try again.")
    
    //  block of code to be executed if the condition1 is false and condition2 is false
  }

  let choice = prompt(" How many legs do frogs have? Type '2' or '4'. ")
  console.log(choice);
 
  
  if (choice === '4') {
    alert("You are correct.")
  }
   else if (choice === '2') {
    alert("You are incorrect.")
  } else {
    
  }
  let alternative = prompt("Make a selection: 'blue frog' or 'green frog'")
  console.log(alternative);
  
  if (alternative === 'blue frog') {
    alert("You are a froggy winner! ")
  }
   else if (alternative === 'green frog') {
    alert("You have failed. Try again.")
  } else {
    
    
  }