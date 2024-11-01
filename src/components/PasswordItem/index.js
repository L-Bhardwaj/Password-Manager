import './index.css'

const PasswordItem = props => {
  const {key, id, website, userName, showPassword, password, onDel} = props

  const del = () => {
    onDel(id)
  }

  return (
    <li key={key}>
      <div className="card">
        <div>
          <div className="icon">
            <h1>{website[0]}</h1>
          </div>
          <div>
            <p>{website}</p>
            <p>{userName}</p>
            <p>
              {showPassword ? (
                password
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  alt="stars"
                  className="stars"
                />
              )}
            </p>
          </div>
          <div>
            <button type="button" data-testid="delete" onClick={del}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
                className="delImg"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
