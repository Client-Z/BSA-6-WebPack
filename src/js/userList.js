let _ = require('lodash');
import avatar from '../img/ava.png';


function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    

    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement('div');

            // Добавляем дефолтный аватар каждому юзеру
            let ava = new Image();
            ava.src = avatar;
            div.appendChild(ava);

            div.append(user.name + ' ' + user.age);
            container.appendChild(div);
        });
    };
}

module.exports = userList;