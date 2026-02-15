/// <reference types="cypress" />

import todoApi from "../api/todoApi";
import UserApi from "../api/userApi";
import TodoPage from "../pages/todoPage";

describe("todo test cases", ()=>{
let token;
beforeEach(()=>{

    UserApi.register().then((response)=>{
        token = response.body.access_token;
    });
});


it("should be able to add a todo", ()=> {
new TodoPage()
.load()
.clickOnAddButton()
.addNewTodo("Learn Cypress")
.firstItemShouldHaveText("Learn Cypress")


});

it("should be able to mark a todo as completed", ()=> {
       
todoApi.add(token);

new TodoPage()
    .load()
    .markFirstTodoAsCompleted()
    .firstItemShouldHaveBackgroundColor("rgb(33, 76, 97)")

});

})
