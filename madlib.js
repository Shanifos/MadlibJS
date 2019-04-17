// var name1 = document.getElementById('name1').value;
function createStory(){
  
   var name1 = document.getElementById('name1').value;
   var name2 = document.getElementById('name2').value;
   var adjective1 = document.getElementById('adject1').value;
   var adjective2 = document.getElementById('adject2').value;
   var adjective3 = document.getElementById('adject3').value;
   var adjective4 = document.getElementById('adject4').value;
   var adjective5 = document.getElementById('adject5').value; 
   var number = document.getElementById('number').value;
   var place1 = document.getElementById('place1').value;
   var place2 = document.getElementById('place2').value;
   var place3 = document.getElementById('place3').value;
   var noun1 = document.getElementById('noun1').value;
   var noun2 = document.getElementById('noun2').value;
   var noun3 = document.getElementById('noun3').value;
   var noun4 = document.getElementById('noun4').value;
   var feeling1 = document.getElementById('feeling1').value;
   var verb1 = document.getElementById('verb1').value;
   var verb2 = document.getElementById('verb2').value;
   var verb3 = document.getElementById('verb3').value;
   var verb4 = document.getElementById('verb4').value;
   var verb5 = document.getElementById('verb5').value;
   
  document.getElementById('story').innerHTML =
  `Once upon a time, there was a little girl named ${name1}.
      She was a ${adjective1} ${noun1}. One day she was ${verb1} to the ${place1} and 
      she ${adjective2} into her friend ${name2} who was a ${adjective3} ${noun2}.
      She ask her if she wanted to go to the ${place1} with her. ${name2} said yes she will go. 
      But first they needed to stop by ${place2} to buy some ${noun3}. They walked and it started to ${verb2}. 
      They started to ${adjective4} to the ${place2}. They made it ${adjective5}. They pick up the ${noun4} and begin ${verb2} to ${place1}.
      They ${verb3}at the ${place1} at ${number} pm. She ${verb3} inside but everything was gone.
      She was ${feeling1} but ${name2} told her dont ${verb4} will be just fine. Lets go to ${place3} to ${verb5}.`;
}
