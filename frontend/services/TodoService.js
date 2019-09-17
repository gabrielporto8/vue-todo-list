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

    static createTodo(todoItem) {
        return axios.post(url, {
            title: todoItem.title,
            doing: todoItem.doing,
            completed: todoItem.completed,
            showCommentary: todoItem.showCommentary,
            commentaries: todoItem.commentaries
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
            completed: todoItem.completed,
            showCommentary: todoItem.showCommentary,
            commentaries: todoItem.commentaries
        })
    }
}

export default TodoService