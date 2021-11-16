export type CreateToDo = {
  userId: number,
  description: string,
  done: boolean
}
// test 2
class Api {
  private BASE_URL = "http://localhost:8080/api/todos"
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

  async create(toDo: CreateToDo) {
    console.log("creating!!!");
      return await fetch(this.BASE_URL, {
        method: 'POST',
        headers: this.createHeaders(),
        body: JSON.stringify(toDo)
      });
    }

  // async updateToDo(toDo: ToDo) {
  //     const toDoId = toDo.id;
  //     return await fetch(`${this.BASE_URL}/${toDoId}`, {
  //         method: 'PUT',
  //         headers: this.createHeaders(),
  //         body: JSON.stringify(toDo)
  //     });
  // }

  async delete(toDoId: number) {
    try {
      return await fetch(`${this.BASE_URL}/${toDoId}`, {
        method: 'DELETE',
        headers: this.createHeaders()
      });
    } catch (e) {
      console.error("Something went wrong: ", e);
    }
  }


  async getAllToDos() {
    try {
      return await fetch(this.BASE_URL, {
        method: 'GET',
        headers: this.createHeaders()
      });
    } catch (e) {
      console.error("Something went wrong: ", e);
    }
  }

}

export default Api;