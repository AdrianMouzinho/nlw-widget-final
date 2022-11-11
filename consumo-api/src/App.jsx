import { useEffect, useState } from "react"


export function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://api.github.com/users/AdrianMouzinho')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err))
  }, []);
  

  return (
    <div>
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  )
}
