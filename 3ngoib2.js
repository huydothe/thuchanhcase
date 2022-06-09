let a=prompt('Nhập vào');
let message= (a=='Employee') ? 'Hello' : (a=='director') ? 'Greetings' : (a== '') ? 'No Login' : '';
alert(message);