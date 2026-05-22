
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

const users=
[
  {
    email: "JoaoPestana@gmail.com",
    senha: "12345"
  },
  {
    email: "ManoChaba@gmail.com",
    senha: "54321"
  },
  {
    email: "PaiNatal@gmail.com",
    senha: "45123"
  }
];

function login(){
  const user=document.getElementById('emailtxt').value;
  const psswrd=document.getElementById('passtxt').value;
  const usuario=users.find(u=>(u.email==user)) && users.find(u=>(u.senha==psswrd));
 
  if(usuario){
    window.location.href = "https://agrolotus.vercel.app/";
    alert('Login realizado com sucesso');
}
}

function register(){
  const new_email=document.getElementById('newEmail').value;
  const new_pass=document.getElementById('newPass').value;
  const verify=document.getElementById('verify').value;
  const userExists=users.find(u=>(u.email==new_email));
  if(new_pass!=verify){
    alert('As senhas não coincidem');
  }
  else{
  if(userExists){
    alert('Já existe');
    return;
  }
  else{
    users.push({email: new_email, senha: new_pass});
    window.location.href="https://agrolotus.vercel.app/";
    alert('Usuário criado');
    
    
    
  }
}
}



