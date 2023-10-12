const button = document.querySelector('.btn-light');
const deleteButton = document.querySelector('.btn-warning');
const userText = document.getElementById('user-text');
const accessList = [
    'pincopallino@gmail.com',
    'gigetto@gmail.com',
    'oraziogrinzosi@gmail.com',
    'pietrosmusi@gmail.com',
    'luigidegliasciugamani@gmail.com',
    'dadalatartaruga@gmail.com',
    'ginoilgattino@gmail.com',
    'moncherinoilpiccione@gmail.com',
];

deleteButton.addEventListener('click', function(){
    document.querySelector('input').value = '';
    userText.className = 'd-none alert text-center' 
})

button.addEventListener('click', function(){
    userText.className = 'd-none alert text-center'
    let emailUser = document.querySelector('input').value; 
    let trovato = false
    let text, bgTextAlert;
    // console.log(emailUser);
    for(let i = 0; i < accessList.length; i++){
        let currentEmail = accessList[i];
        // console.log(currentEmail);
        
        if(currentEmail === emailUser){
            trovato = true;
        }
    }
    if(trovato === true){
        let userNameEmail = emailUser.substring(0, emailUser.indexOf("@"));
        bgTextAlert = 'alert-success';
        text = `<h2 class = 'display-2 fw-bold'>Benvenuto ${userNameEmail} !</h2>`;
    } else{
        bgTextAlert = 'alert-danger';
        text = `<h2 class ='display-2 fw-bold'>Non puoi accedere!</h2>`;
    }
    userText.innerHTML = text;
    userText.classList.add(bgTextAlert);
    userText.classList.remove('d-none');
    
    
})


const throwDices = document.querySelector('.btn-dark');
const deleteDices = document.querySelector('.btn-danger');
const diceResult = document.getElementById('dice-result');

deleteDices.addEventListener('click', function(){
    diceResult.classList.add('d-none');
})

throwDices.addEventListener('click', function(){
    let userNumber = getRandomInt(1, 6);
    let computerNumber = getRandomInt(1, 6);
    let textDices;
    console.log(userNumber, computerNumber)
    if(userNumber > computerNumber){
        textDices = `<h2 class ='display-2 fw-bold text-success'>Hai vinto!</h2>`
    }else if(userNumber < computerNumber){
        textDices = `<h2 class ='display-2 fw-bold text-danger'>Hai perso!</h2>`
    } else{
        textDices = `<h2 class ='display-2 fw-bold'>Pareggio</h2>`
    }
    diceResult.innerHTML =`<h3 class='text-dark'> All'utente esce il numero ${userNumber}</h3>
    <h3 class='text-dark'> Mentre al computer esce il numero ${computerNumber}</h3>
    ${textDices}` ;
    diceResult.classList.remove('d-none');
})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  