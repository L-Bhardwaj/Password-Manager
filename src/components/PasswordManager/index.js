import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    userName: '',
    password: '',
    showPassword: false,
  }

  addDetail = event => {
    event.preventDefault()
    const {website, userName, password} = this.state

    const passItm = {id: uuidv4(), website, userName, password}

    if (website !== '' && userName !== '' && password !== '') {
      this.setState(prev => ({
        passwordList: [...prev.passwordList, passItm],
        website: '',
        userName: '',
        password: '',
      }))
    }
  }

  onDel = id => {
    const {passwordList} = this.state
    const resultList = passwordList.filter(each => each.id !== id)

    this.setState({passwordList: resultList})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUser = event => {
    this.setState({userName: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {passwordList, website, userName, password, showPassword} = this.state
    return (
      <div className="main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logoImg"
          alt="app logo"
        />
        <div className="Container">
          <div className="formContainer">
            <form onSubmit={this.addDetail}>
              <h1>Add New Password</h1>
              <div>
                <label htmlFor="website">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="icon"
                    alt="website"
                  />
                  <p>|</p>
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onChangeWebsite}
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="userName">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    className="icon"
                    alt="username"
                  />
                  <p>|</p>
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="Enter Username"
                  value={userName}
                  onChange={this.onChangeUser}
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="password">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    className="icon"
                    alt="password"
                  />
                  <p>|</p>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.onChangePass}
                  className="input"
                />
              </div>
              <div>
                <button type="submit" className="btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="img"
              alt="password manager"
            />
          </div>
        </div>

        <div>
          <div>
            <div>
              <h1>Your Passwords</h1>
              <p>{passwordList.length}</p>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="searchImg"
                alt="search"
              />
              <input type="search" className="SearchInput" />
            </div>
          </div>
          <hr />
          <div>
            <input
              type="checkbox"
              className="showPassword"
              id="showPassword"
              onChange={this.showPassword}
            />
            <label htmlFor="showPassword">Show passwords</label>
          </div>
          <div>
            {passwordList.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="bgImg"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul className="passwordsItm">
                {passwordList.map(each => (
                  <PasswordItem
                    key={each.id}
                    id={each.id}
                    website={each.website}
                    userName={each.userName}
                    password={each.password}
                    showPassword={showPassword}
                    onDel={this.onDel}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
