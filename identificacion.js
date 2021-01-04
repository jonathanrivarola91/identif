function identif(user, password){
    switch (true) {
        case user=="" && password=="":
            console.log("Debe ingresar los datos requeridos");
            break;
        case user=="admin" && password!="1234":
            console.log("Contraseña incorrecta");
            break;
        case user!="admin" && password=="1234":
            console.log("usuario incorrecto");
            break;
        case user!="admin" && password!="1234":
            console.log("usuario y contraseña incorrectos");
            break;    
        default:
            console.log("Bienvenido a nuestro sitio!");
            break;
    }
}
identif("admin","1234")