import { faker } from '@faker-js/faker';

class UserApi{

    static register(){
        return cy.request({
        url:"/api/v1/users/register",
        method: "POST",
        body:{
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            password: faker.internet.password()
        },

    });

    }

}
export default UserApi;