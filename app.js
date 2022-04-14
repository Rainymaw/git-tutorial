const validerForm = (e)=> {
    e.preventDefault();
    console.log(e);
    var nom = document.form.nom.value;
    if (nom ==="admin" ){
        alert('Veuillez utiliser vos droits admin')
    }else{
        alert(nom)
    }
    var motdepasse = document.form.password.value
    if (motdepasse.length <8){
        alert('votre mot de passe est trop faible')
    }else{
        alert('mot de passe accepté')
    }
    console.log(motdepasse)
}