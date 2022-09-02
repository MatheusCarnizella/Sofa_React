interface UserLogin {
    id?: number |null;
    nome?: string| null;
    email: string| null;
    senha?: string| null;
    token?: string| null;
}

export default UserLogin;