<script>
  export let id = "";
  export let name = "";
  export let email = "";
  export let phone = "";
  export let onDelete = () => null;
</script>

<div class="card">
  <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>{phone}</p>
  </div>
  <button on:click={() => onDelete(id)}>Delete</button>
</div>

<style>
    .card {
        display: flex;
        width: fit-content;
        border: 1px solid blanchedalmond;
        padding: 10px;
        margin-top: 10px;
    }

    button {
        height: fit-content;
    }

    p {
        background-color: beige;
        margin-right: 10px;
    }
</style>