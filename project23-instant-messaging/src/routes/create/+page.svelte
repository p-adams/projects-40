<form method="POST">
  <label>
    Username
    <input type="text" name="username" />
  </label>
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <div class="Create--outer">
    <button>Create</button>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    outline: 1px solid gray;
    padding: 10px;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 10px;
  }
  .Create--outer {
    display: flex;
    justify-content: end;
  }

  .Create--outer button {
    width: 60px;
  }
</style>
