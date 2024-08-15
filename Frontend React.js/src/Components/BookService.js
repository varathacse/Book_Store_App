import axios from 'axios';

const apiURL = 'http://localhost:9090';

class BookService {

  userLogin(userData) {
    return axios.post(apiURL+'/login', userData,{withCredentials: true});
  }

  getBooks() {
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.get(apiURL + '/book', { headers});
  
  }
  getBookById(id){
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.get(apiURL + `/book/${id}`, { headers});

  }
  getSaveBook(book){
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.post(apiURL + `/book`,book, { headers});
  }
  getAuthors(){
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.get(apiURL + `/author`, { headers});
  }
  getUpdateBook(book){
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.put(apiURL + `/book`,book, { headers});
  }
  getAuthorById(id){
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.get(apiURL + `/author/${id}`, { headers});
  }
  deleteBookById(id){
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.delete(apiURL + `/book/${id}`, { headers});

  }
  updateAuthor(author){
    const token = localStorage.getItem('token');
    const headers = { Authorization: token, withCredentials: true  }; 
    return axios.put(apiURL + `/author`,author, { headers});
  }

}

const bookServices = new BookService();

export default bookServices;
