import axios from 'axios'

const url = "http://localhost:3334/todo";

class TodoService {
    static getTodo() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(todo => ({
                        ...todo
                    }))
                );
            } catch(err) {
                reject(err)
            }
        })
    }

    static createTodo(newTodo) {
        return axios.post(url, {
            title: newTodo.title,
            doing: newTodo.doing,
            completed: newTodo.completed
        });
    }

    static deleteTodo(id) {
        return axios.delete(`${url}/${id}`)
    }

    static updateTodo(todoItem) {
        return axios.put(url, {
            _id: todoItem._id,
            title: todoItem.title,
            doing: todoItem.doing,
            completed: todoItem.completed
        })
    }
}

export default TodoService