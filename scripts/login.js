const LoginProfile = document.querySelector('#login-profile');
LoginProfile.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = new FormData(LoginProfile);
    console.log(
        login.get('username-email'),
        login.get('password')
    );

});
