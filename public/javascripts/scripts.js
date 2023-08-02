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
    document.getElementById('test').innerHTML = healthgoals;
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
        case 'preferences-q':
            preferences = preferences.concat(', ', e.value);
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
        case 'preferences-q':
            preferences = preferences.replace(', ' + e.value, '');
        break;
        case 'intolallerg-q':
            intolallerg = intolallerg.replace(', ' + e.value, '');
        break;
    }
}

function submitForm() {
    age = document.getElementById('age').value;
    height = document.getElementById('height').value;
    weight = document.getElementById('weight').value;

    var prompt = 'Give me a detailed customized diet plan, with urls to online recipes, that includes 4 meals (breakfast, lunch, snacks, and dinner) for “gender=male”, “years=' + age + '”, “height=' + height + 'cm”, “weight=' + weight + 'kg”, “health goals=' + healthgoals + '”, “activity level=' + activity + '”, “food preference=' + preferences + '”, “allergies=' + intolallerg + '”, “others=”. Include the calorie count for each meal. Also, mention the amount of daily calorie intake a person of that height and weight should consume.'
    document.getElementById("questions").innerHTML = `<p>` + prompt + `</p>
    <button onclick="reload_questions()">Retry</button>`
}

function reload_questions() {
    location.reload();
}
