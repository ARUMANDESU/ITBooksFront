import {observable, action, configure, makeObservable, makeAutoObservable} from "mobx";
import axios from "axios";
import {url} from "../models/types";
import book from "../components/Book";
configure({ enforceActions: "observed" });
class BookStore {
     books: any[] = [];
     title: string = "";
     subtitle: string = ""  ;
     bookId: string = "";
     editing: boolean = false;
    constructor() {
        makeAutoObservable(this)

    }

    async getBooks(limit:number=50) {
        const url1 = `${url}/book/?limit=${limit}`
        await axios.get(url1).then(res=>{
            this.books=res.data
        });
    }

     async addBook(e: any) {
        e.preventDefault();
        const newBook = {
            title: this.title,
            subtitle: this.subtitle,
        };
        await axios.post(`${url}/book`, newBook);
        this.getBooks();
        this.title = "";
        this.subtitle = "";
    }

     async editBook(id:string) {
        const res = await axios.get(`${url}/book/${id}`);
        this.title = res.data.title;
        this.subtitle = res.data.subtitle;
        this.bookId = id;
        this.editing = true;
    }

     async updateBook(e: any) {
        e.preventDefault();
        const updatedBook = {
            title: this.title,
            subtitle: this.subtitle,
        };
        await axios.put(`${url}/book/${this.bookId}`, updatedBook);
        this.getBooks();
        this.title = "";
        this.subtitle = "";
        this.bookId = "";
        this.editing = false;
    }

     async deleteBook(id:string) {
        await axios.delete(`${url}/book/${id}`);
        this.getBooks();
    }
}

const bookStore = new BookStore();
export default bookStore;
