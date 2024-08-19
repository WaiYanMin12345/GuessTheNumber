let message1 = document.querySelector('.msg1');
let message2 = document.querySelector('.msg2');
let message3 = document.querySelector('.msg3');
let div = document.getElementById('border-color');
let chance = 10;
let guessed_num = [];
let btnGuess = document.querySelector('.btn_guess');

message2.textContent = ('Number of chance to guess : ' + chance );

let computer_num = Math.floor(Math.random() * 51);



function guess(){
   if(chance === 0){
      document.querySelector('.btn-guess').disabled = true;
      message1.textContent = "Your chances is running out. Please restart the game!!"
      
   };

   let guess_num = Number(document.getElementById('answer').value);
   if(guess_num < 1 || guess_num >50){
      alert("Guess Number Should Have Between 1-50")
   }else{
      if(computer_num >  guess_num){
         div.classList.add('false');
         message1.textContent = "Your Answer is too Low!!"
         chance --;
         message2.textContent = ('Number of chance to guess : ' + chance );
         guessed_num.push(guess_num);
         message3.textContent = ('Guessed numbers are : ' + guessed_num);
         document.getElementById('answer').value = "";
         
        }else if(computer_num <  guess_num){
         div.classList.add('false');
         message1.textContent = "Your Answer is too High!!"
         chance --;
         message2.textContent = ('Number of chance to guess : ' + chance );
         guessed_num.push(guess_num);
         message3.textContent = ('Guessed numbers are : ' + guessed_num);
         document.getElementById('answer').value = "";

        }else if(computer_num ===  guess_num){
         div.classList.add('true');
         message1.textContent = "Congratulation You Win!!";
         document.getElementById('answer').value = "";
         document.querySelector('.btn-guess').disabled = true;
         }
   }
   
}

function restart(){
   chance = 10;
   message2.textContent = ('Number of chance to guess : ' + chance);
   guessed_num = [];
   message3.textContent = ('Guessed numbers are : ');
   div.classList.remove('false');
   div.classList.remove('true');
   message1.textContent = "Game is successfully restarted !!";
   computer_num = Math.floor(Math.random() * 51);
   document.querySelector('.btn-guess').disabled = false;
   

}