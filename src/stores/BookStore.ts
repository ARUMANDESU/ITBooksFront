import {
    observable,
    action,
    configure,
    makeObservable,
    makeAutoObservable,
} from "mobx";
import axios from "axios";
import { IBook, url } from "../models/types";
import book from "../components/BookHomeComp";
configure({ enforceActions: "observed" });
class BookStore {
    books: IBook[] = [];
    _id: string = "";
    title: string = "";
    ISBN: string = "";
    subtitle: string = "";
    image: string = "";
    url: string = "";
    editing: boolean = false;
    description: string = "";
    author: string = "";
    publisher: string = "";
    published: number = 0;
    pages: number = 0;
    language: string = "";
    constructor() {
        makeAutoObservable(this);
    }

    async getBooks(limit: number = 50) {
        await axios.get(`${url}/book/?limit=${limit}`).then((res) => {
            this.books = res.data;
        });
    }

    async getOneBookByID(id: string) {
        await axios.get(`${url}/book/${id}`).then((res) => {
            this.setAll(res.data);
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
    }
    resetFields() {
        this._id = "";
        this.ISBN = "";
        this.title = "";
        this.image = "";
        this.subtitle = "";
        this.description = "";
        this.author = "";
        this.publisher = "";
        this.published = 0;
        this.pages = 0;
        this.language = "";
    }

    async editBook(id: string) {
        const res = await axios.get(`${url}/book/${id}`);
        this.title = res.data.title;
        this.subtitle = res.data.subtitle;
        this._id = id;
        this.editing = true;
    }

    async updateBook(e: any) {
        e.preventDefault();
        const updatedBook = {
            title: this.title,
            subtitle: this.subtitle,
        };
        await axios.put(`${url}/book/${this._id}`, updatedBook);
        this.getBooks();
        this.title = "";
        this.subtitle = "";
        this._id = "";
        this.editing = false;
    }

    async deleteBook(id: string) {
        await axios.delete(`${url}/book/${id}`);
        this.getBooks();
    }

    setAll(data: IBook) {
        this._id = data._id;
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.ISBN = data.ISBN;
        this.image = data.image;
        this.url = data.url;
        this.description = data.description;
        this.author = data.author;
        this.publisher = data.publisher;
        this.published = data.published;
        this.pages = data.pages;
        this.language = data.language;
    }
}

const bookStore = new BookStore();
export default bookStore;
