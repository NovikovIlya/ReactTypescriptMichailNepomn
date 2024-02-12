import { useState } from 'react';
import { Container } from './components/Container';
import { Search } from './components/Search';
import { TheHeader } from './components/TheHeader';
import { UserCard } from './components/UserCard';
// import { defaultUser } from './mock';
import { GithubError, GithubUser } from './types';
import { isGithubUser } from './utils/typeguards';
import { extractLocalUser } from './utils/extract-local-user';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<any>();

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
