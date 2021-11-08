class Api {
  // BASE_URL = "http://localhost:8080/api/todos"
  authToken?: String
  constructor(authToken?: string) {
    this.authToken = authToken;
  }


  createHeaders() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return this.authToken ? {
      ...headers,
      'Authorization': 'Bearer ' + this.authToken
    } : headers;
  }

  // async create(toDo: ToDo) {
  //     return await fetch(this.BASE_URL, {
  //       method: 'POST',
  //       headers: this.createHeaders(),
  //       body: JSON.stringify(toDo)
  //     });
  //   }

  // async updateToDo(toDo: ToDo) {
  //     const toDoId = toDo.id;
  //     return await fetch(`${this.BASE_URL}/${toDoId}`, {
  //         method: 'PUT',
  //         headers: this.createHeaders(),
  //         body: JSON.stringify(toDo)
  //     });
  // }

  async delete(toDoId: number) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    try {
      return await fetch(`http://localhost:8080/api/todos/${toDoId}`, {
        method: 'DELETE',
        headers: headers
      });
    } catch (e) {
      console.error("Something went wrong: ", e);
    }
  }


  async getAllToDos() {
    try {
      return await fetch("http://localhost:8080/api/todos", {
        method: 'GET',
        headers: this.createHeaders()
      });
    } catch (e) {
      console.error("Something went wrong: ", e);
    }
  }

}

export default Api;