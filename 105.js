// IN THE WORKS

`
We have an application with 26 buttons labeled A through Z that
users can click on in any order they want and as many times as
they want. Each time a user clicks a button the action is logged
in a file/array. Unfortunately, for our app, it has been reported
that some users are encountering an error. In addition to resolving
the error we would like to provide our customer success team with a
list of users that encountered the error so we can send them some
we’re sorry swag. What we know is that the error is caused by a
sequence of button presses in exactly this order:

  - A press followed by B press followed by C press.
 
  Given a sorted list of logs (by time oldest to newest) of this
  form
 
    const logs = [{ userId, action }, ... , { userId, action }],
   
  please create me a function that will return a list of users
  that experienced the error e.g. [ 1, 2, … ]”
`

const inputLog = [
    {user: 1, action: 'A'}, // user 1 is on 'A' in the sequence
    {user: 10, action: 'Z'},
    {user: 1, action: 'B'},
    {user: 1, action: 'O'},
    {user: 3, action: 'B'},
    {user: 2, action: 'F'},
    {user: 1, action: 'P'},
];


// Search through and find A,B,C in order by one user

function findSeq(inputLog) {
    let userArr = []

    for(let i = 0; i<inputlog.length; i++){
        let user = inputLog[i].user;
        let action = inputLog[i].action;



    }

    return userArr
}

console.log(findSeq(inputLog));

// const errorLog = (arr) => arr.filter(user => user.userId == 1)