class User{
    
    constructor(name, username,email, password, password_confirm){
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.password_confirm = password_confirm;
    }
}

export default User;