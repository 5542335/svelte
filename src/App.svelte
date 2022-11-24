<script>
  import { Link, Route, Router } from "svelte-navigator";
  import UsersPage from "./pages/UsersPage.svelte";
  import HomePage from "./pages/HomePage.svelte";
</script>

<Router>
  <header>
    <h1>Svelte example</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="users">Users</Link>
    </nav>
  </header>
  <main>
    <Route path="/">
      <HomePage />
    </Route>
    <Route primary={false} path="users">
      <UsersPage />
    </Route>
  </main>
</Router>

<style>
    header {
        border-bottom: 1px solid lightgray;
    }

    h1 {
        margin: 0;
    }
</style>
