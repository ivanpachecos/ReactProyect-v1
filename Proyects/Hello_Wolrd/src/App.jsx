import TwiterFollowCard from "./components/TwiterFollowCard"
import './App.css'

const App = () => {

  const users = [
    {
      name: 'Ivan Pacheco',
      userName: 'leo',
      email: 'ivanleonardo@gmail.com',
      isFollowing: true,
    },

    {
      name: 'Alex Francisco',
      userName: 'alex',
      email: 'alexZfrancisco@gmail.com',
      isFollowing: false,
    },

    {
      name: 'Steven Zambrano',
      userName: 'messi',
      email: 'stevenZambrano.com',
      isFollowing: true,
    },

    {
      name: 'Cristiano Palacios',
      userName: 'cristiano',
      email: 'cristiamp2322@gmail.com',
      isFollowing: false,
    },

  ]

  return (
    <section className="App">
      {
        users.map(({ name, userName, isFollowing }) => (
          <TwiterFollowCard 
          key={userName} 
          userName={userName} 
          isFollowing={isFollowing}>
            {name}
          </TwiterFollowCard>
        ))
      }
    </section>
  )
}

export default App
