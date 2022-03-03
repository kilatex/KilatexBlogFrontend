class User{
    
    constructor(name, username,email, password, password_confirmation){
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.password_confirmation = password_confirmation;
    }
}

export default User;