function scuberGreetingForFeet(ride){
  // Write your code here!
  let result;
  if(ride <= 400){
    result =  "This one is on me!";
  } else if(ride <= 2000){
    result = "That will be twenty bucks.";
  } else if(ride <= 2500){
    result = "I will gladly take your thirty bucks.";
  } else if(ride > 2500){
    result = "No can do.";
  } return result;
}

function ternaryCheckCity(city){
  // Write your code here! 
  let message;
  return city ==='NYC' ? message = "Ok, sounds good." : 
         message = "No go.";
  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  let message;
  switch(tip){
    case 'generous':
      message = "Thank you so much.";
      break;
    case 'not as generous':
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
      break;
  } return message;

}