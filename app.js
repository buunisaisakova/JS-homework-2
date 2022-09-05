//     ДЗ-1
const promisee = new Promise((resolve, reject) => {
    setTimeout(() => {
        const response = {
            status: 150,
            url: "https://example.com",
        };

        setTimeout(() => {
            const user = {
    userName:"userName",
    userAge:"22",
    hobbi:"Play Game",
  };

const JSONUser = JSON.stringify(user);
console.log(JSONUser);
const jsonscript = JSON.parse(JSONUser);
console.log(jsonscript)
        }, 1000);
    }, 1000);
    
});

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const response = {
            status: 200,
            url: "https://example.com",
        };

        setTimeout(() => {
            const user = {
                userName:"userName",
                userAge:"22",
                hobbi:"Play Game",
            };
            console.log("Client ...", user);
        }, 3000);
    }, 3000);
    
});
        
//    Доп.дз

 setTimeout(function() {
    console.log('Even loop')
 });
 