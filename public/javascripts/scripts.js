var gender = '';
var age = '';
var height = '';
var weight = '';
var healthgoals = '';
var conditions = '';
var activity = '';
var preferences = '';
var intolallerg = '';

function toggle(e) {
    if (e.classList.contains("selected")) {
        e.classList.remove('selected');
        removeValues(e);
    } else {
        e.classList.add('selected');
        addValues(e);
    }
}

function addValues(e) {
    switch (e.parentElement.id) {
        case 'health-q':
            healthgoals = healthgoals.concat(', ', e.value);
        break;
        case 'conditions-q':
            conditions = conditions.concat(', ', e.value);
        break;
        case 'activity-q':
            activity = activity.concat(', ', e.value);
        break;
        case 'intolallerg-q':
            intolallerg = intolallerg.concat(', ', e.value);
        break;
    }
}

function removeValues(e) {
    switch (e.parentElement.id) {
        case 'health-q':
            healthgoals = healthgoals.replace(', ' + e.value, '');
        break;
        case 'conditions-q':
            conditions = conditions.replace(', ' + e.value, '');
        break;
        case 'activity-q':
            activity = activity.replace(', ' + e.value, '');
        break;
        case 'intolallerg-q':
            intolallerg = intolallerg.replace(', ' + e.value, '');
        break;
    }
}

function submitForm() {

    if (!document.getElementById("age").value) {
        no_input(document.getElementById("age"));
    } else if (!document.getElementById('height').value) {
        no_input(document.getElementById('height'));
    } else if (!document.getElementById('weight').value){
        no_input(document.getElementById('weight'));
    } else {
        if (check() == false) {
            alert_missing_vals();
        } else {

            gender = document.querySelector('input[name="gender"]:checked').value;
            age = document.getElementById('age').value;
            height = document.getElementById('height').value;
            weight = document.getElementById('weight').value;
            activity = document.querySelector('input[name="activity"]:checked').value;
            preferences = document.querySelector('input[name="diet"]:checked').value;

            healthgoals = healthgoals.concat(', ', document.querySelector('input[name="goals"]:checked').value);
            intolallerg = intolallerg.concat(', ', document.getElementById('health-condition-other').value);

            var prompt1 = 'Give me a detailed customized diet plan, with urls to online recipes, that includes 4 meals (breakfast, lunch, snacks, and dinner) for “gender= ' + gender + '”, “years=' + age + '”, “height=' + height + 'cm”, “weight=' + weight + 'kg”, “health goals=' + healthgoals + '”, , "known health conditions to manage= ' + conditions + '“activity level=' + activity + '”, “food preference=' + preferences + '”, “allergies=' + intolallerg + '”, “others=”. Include the calorie count for each meal. Also, mention the amount of daily calorie intake a person of that height and weight should consume.'
            var prompt2 = '"Hey there, I am a ' + age +'-year-old ' + gender + ' hoping to improve my overall health and achieve my health goals of' + healthgoals + '. I am ' + height + 'cm tall and currently weigh ' + weight + 'kgs. My daily activity level is ' + activity + '. I prefer ' + preferences + ' food and need to avoid ' + intolallerg + ' due to intolerance/allergies. Please create a personalized meal diet plan to fit my needs and preferences including calorie count and urls to recipes for each meal.'
            var prompt3 = 'Create a daily customized ' + preferences + ' and give urls for recipes. The person is a ' + age + ' year old, ' + gender + ', weighing ' + weight + 'kgs and ' + height + 'cm tall. The person should avoid ' + intolallerg + ' due to allergies. The meal plan should include five meals (breakfast, mid-morning snack, lunch, afternoon snack, and dinner) along with their respective calorie ranges. Please emphasize the importance of portion control and the need for a variety of fruits, vegetables, legumes, and seeds in the plan. Also, highlight the significance of staying well-hydrated by drinking at least 8 glasses (64 ounces) of water daily. Lastly, advise the person to consult with a healthcare professional or a registered dietitian if they have any specific dietary restrictions or medical conditions.'
            
            document.getElementById("questions").innerHTML = `<p>` + prompt2 + `</p>
            <button onclick="reload_questions()">Retry</button>`
        }
    }
    
}

function reload_questions() {
    location.reload();
}

function check(){
    var gender_checked = false;
    var goals_checked = false;
    var activity_checked = false;
    var diet_checked = false;
    var final_bool;

    var gender_radio = document.getElementsByName("gender");
    var goals_radio = document.getElementsByName("goals");
    var activity_radio = document.getElementsByName("activity");
    var diet_radio = document.getElementsByName("diet");

    for (var i = 0, len = gender_radio.length; i < len; i++) {
        if (gender_radio[i].checked) {
            gender_checked = true;
        }
    }

    for (var i = 0, len = goals_radio.length; i < len; i++) {
        if (goals_radio[i].checked) {
            goals_checked = true;

        }
    }

    for (var i = 0, len = activity_radio.length; i < len; i++) {
        if (activity_radio[i].checked) {
            activity_checked = true;
        }
    }

    for (var i = 0, len = diet_radio.length; i < len; i++) {
        if (diet_radio[i].checked) {
            diet_checked = true;
        } 
    } 

    if (!gender_checked) {
        turn_radio_red(gender_radio);
    } else { remove_red_border(gender_radio); }

    if (!goals_checked) {
        turn_radio_red(goals_radio);
    } else { remove_red_border(goals_radio); }

    if (!activity_checked) {
        turn_radio_red(activity_radio);
    } else { remove_red_border(activity_radio); }

    if (!diet_checked) {
        turn_radio_red(diet_radio);
    } else { remove_red_border(diet_radio); }

    final_bool = gender_checked && goals_checked && activity_checked && diet_checked;
    if (!final_bool) { alert_missing_vals(); }
    return final_bool;
}

function turn_radio_red(e) {
    e[0].parentElement.style.border = '1px solid #FF0000';
}

function remove_red_border(e) {
    e[0].parentElement.style.border = 'none';
}

function no_input(e) {
    e.classList.add('empty-input');
    alert_missing_vals();
}

function alert_missing_vals() {
    alert('Missing or incorrect input values have been highlighted in red. Please correct to proceed.');
}
