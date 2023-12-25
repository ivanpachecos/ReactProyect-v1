
const TwiterFollowCard = ({ name, userName, isFollow }) => {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar" 
        src={`https://unavatar.io/${userName}`} 
        alt="" />
        <div className="tw-followCard-info ">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{userName}</span>
        </div>
        <aside>
          <button className="tw-followCard-button">
            Me gusta
          </button>
        </aside>
      </header>
    </article>
  )
}

export default TwiterFollowCard