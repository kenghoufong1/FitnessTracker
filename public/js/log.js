var slider = document.getElementById("slider");
var emoji = document.getElementById("emoji");
const workouts = document.getElementById("workout-types")
const checkboxes = workouts.querySelectorAll('input[type="checkbox"]');
const checkedWorkouts = [];

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        checkedWorkouts.push(event.target.value);
      } else {
        const index = checkedWorkouts.indexOf(event.target.value);
        checkedWorkouts.splice(index, 1);
      }
    });
});

const logCreator = async (event) => {
    console.log(checkedWorkouts);
    event.preventDefault();
    const date = document.querySelector('#datepicker').value.trim();
    const workout_type = checkedWorkouts.toString();
    const workout_duration = document.querySelector('#workout-duration').value.trim();
    const hours_of_sleep = document.querySelector('#sleep').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const mood = document.querySelector('#slider').value.trim();
    const description = document.querySelector('#description').value.trim();

    const log = { date, workout_type, workout_duration, hours_of_sleep, weight, mood, description };

    console.log(workout_type);    
    const response = await fetch('/api/log', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        const errorResponse = await response.json();     
        console.log(errorResponse)
    }
}



document
    .querySelector('#save-log')
    .addEventListener('click', logCreator);

var emoticons = [ 
    "mood_bad", 
    "sentiment_very_dissatisfied", 
    "sentiment_satisfied",
    "sentiment_satisfied_alt", 
    "sentiment_very_satisfied"
    ];
    
slider.addEventListener('input', (event) => {
    event.preventDefault;
    emoji.innerHTML = emoticons[slider.value];
});

