import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,
  }

  handleChange = (e) => {
    //console.log(e.target.type);
    //console.log(e.target.name);

    const name = e.target.name;
    const type = e.target.type;
    console.log(this.state.accept);
    if(type === 'text' || type === 'password' || type === 'email'){
      const value = e.target.value;
      this.setState({
        [name]: value
    })
    } else if(type === 'checkbox') {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      })
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('it works');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor='user'>Your name: 
            <input type='text' 
                   id='user' 
                   name='username'
                   value={this.state.username}
                   onChange={this.handleChange} />
          </label>

          <label htmlFor='email'>Your email:
            <input type='email' 
                   id='email' 
                   name='email'
                   value={this.state.email}
                   onChange={this.handleChange} />
          </label>

          <label htmlFor='password'>Your password: 
            <input type='password' 
                   id='password' 
                   name='pass'
                   value={this.state.pass}
                   onChange={this.handleChange} />
          </label>

          <label htmlFor='accept'>
            <input type='checkbox' 
                   id='accept' 
                   name='accept' 
                   checked={this.state.accept} 
                   onChange={this.handleChange} />I agree
          </label>

          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default App;
