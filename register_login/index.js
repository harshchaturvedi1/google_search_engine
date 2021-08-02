//register new user
function Register(e) {
    e.preventDefault();
    // collecting user data for registering
    let formData = {
        name: document.getElementById('inp1').value,
        email: document.getElementById('inp2').value,
        password: document.getElementById('inp3').value,
        username: document.getElementById('inp4').value,
        mobile: document.getElementById('inp5').value,
        description: document.getElementById('inp6').value,
        /*
                    Name: 
        treeBoy_you
         Email: 
        heyther@how.com
         Password: 
        secret
         Username: 
        partboy_tree
         Mobile: 
        9669926459
         Description: 
        hey there
         */
    }

    formData = JSON.stringify(formData)
    // console.log(formData);

    fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method: 'POST',
        body: formData,

        // additional not imp but good thing
        headers: {
            'Content-Type': "application/json",
        },
    })
        //a chained promise is returned so resoolving it
        .then((res) => {
            return res.json();
        })
        // resolving returned promise
        .then((res) => {
            console.log(res);
        })
        // catching error
        .catch((err) => {
            console.log('err', err)
        })
}

// login system 
function Login(e) {

    e.preventDefault();

    let formData = {
        username: document.getElementById('inp7').value,
        password: document.getElementById('inp8').value,
    }

    let body = JSON.stringify(formData);

    fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
        method: 'POST',
        body: body,

        // additional not imp but good thing
        headers: {
            'Content-Type': "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            // this is authentification token recieved on successfull response from server/backend
            window.location.href = '../homePage/home.html';
        })
        .catch((err) => {
            console.log('err-login', err)
        })
}

