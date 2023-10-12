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
    let emailUser = document.querySelector('input').value = '';
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
        bgTextAlert = 'alert-success';
        text = `<h2 class = 'display-2 fw-bold'>Benvenuto!</h2>`;
    } else{
        bgTextAlert = 'alert-danger';
        text = `<h2 class ='display-2 fw-bold'>Non puoi accedere!</h2>`;
    }
    userText.innerHTML = text;
    userText.classList.add(bgTextAlert);
    userText.classList.remove('d-none');
    
    
})


