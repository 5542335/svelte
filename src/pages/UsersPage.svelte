<script>
  import { onMount } from "svelte";
  import { users } from "../stores/users.js";
  import Card from "../components/Card.svelte";
  import { getMaxId } from "../utils/utils.js";

  let inputValue = "";
  let isLoading = false;

  onMount(() => {
    isLoading = true;
    getUsers()
      .then((data) => users.set(data))
      .finally(() => (isLoading = false));
  });

  async function getUsers() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      return await res.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  function handleDeleteUser(id) {
    const newUsers = $users.filter((user) => user.id !== id);
    users.set(newUsers);
  }

  function handleAddUser() {
    const newUser = {
      id: getMaxId($users) + 1 || 1,
      name: inputValue,
      phone: "11-22-33",
      email: "qwerty@gmail.com",
    };
    users.update((prevState) => [newUser, ...prevState]);
    inputValue = "";
  }
</script>

<form on:submit|preventDefault={handleAddUser}>
  <input type="text" bind:value={inputValue} placeholder="Type user name..." />
  <button type="submit" disabled={!inputValue.trim()}>Add</button>
</form>
{#if isLoading}
  <p>Loading...</p>
{:else}
  {#each $users as { id, name, phone, email } (id)}
    <Card {id} {name} {phone} {email} onDelete={handleDeleteUser} />
  {:else}
    <p>No users!</p>
  {/each}
{/if}

<style>
  form {
    margin-top: 10px;
  }
</style>
