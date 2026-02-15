import TodoPage from "./todoPage"

class NewTodoPage {

get newTodoInput(){
    return cy.get('[data-testid="new-todo"]')
}
get submitNewTodoButton(){
    return cy.get('[data-testid="submit-newTask"]')
}

addNewTodo(item){
    this.newTodoInput.type(item)
    this.submitNewTodoButton.click()
    return new TodoPage()
}

load(){
    cy.visit("/todo/new")
    return this;
}
}

export default NewTodoPage;