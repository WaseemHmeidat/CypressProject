
class TodoApi{
    static add(token){
        return cy.request({
       url:"/api/v1/tasks",
       method: "POST",
       body:{
        isCompleted: false,
        item: "Learn Cypress"
       },
       auth: {
        bearer: token
       }
        
            
    });
    }

}

export default TodoApi