import NewTodoPage from "./newTodoPage"

 class TodoPage{
get welcomeMessage(){
   return cy.get('[data-testid="welcome"]') 
}
welcomeMessageShouldBeVisible(){
    this.welcomeMessage.should('be.visible')
}

get addButton(){
    return cy.get('[data-testid="add"]')
}
load(){
    cy.visit('/todo')
    return this
}

clickOnAddButton(){
    this.addButton.click();
    return new NewTodoPage()
}

get firstTodoItem(){
    return cy.get('[data-testid="todo-item"]').eq(0)
  
}

firstItemShouldHaveText(text){
    this.firstTodoItem.should("have.text", text)
    return this
}

get firstTodoCheckBox(){
    return cy.get('[data-testid="complete-task"]').eq(0)
}
markFirstTodoAsCompleted(){
    this.firstTodoCheckBox.click();
    return this;
}

firstItemShouldHaveBackgroundColor(color){
    this.firstTodoItem.should("have.css", "background-color", color);
    return this;
}

}

export default TodoPage;