const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let rawText = `It was 94 fahrenheit outside, so :insertx: went for a walk. 
When they got to :inserty:, they stared in horror for a few moments, then :insertz:. 
Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

const xValueArray = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const yValueArray = ['the soup kitchen', 'Disneyland', 'the White House'];
const zValueArray = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
    
randomize.addEventListener('click', result);

function result() {  
    displayText = rawText
    displayText = displayText.replaceAll(':insertx:', randomValueFromArray(xValueArray));
    displayText = displayText.replaceAll(':inserty:', randomValueFromArray(yValueArray));
    displayText = displayText.replaceAll(':insertz:', randomValueFromArray(zValueArray));    

    if(customName.value !== '') {
      const name = customName.value;
      displayText = displayText.replaceAll('Bob', name);
    } 
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300 / 2.205) + ' kg';
      const temperature =  Math.round((94-32) / 1.8) + ' celsius';
      displayText = displayText.replaceAll('300 pounds', weight);
      displayText = displayText.replaceAll('94 fahrenheit', temperature);
    }
  
    story.textContent = displayText;
    story.style.visibility = 'visible';
}



