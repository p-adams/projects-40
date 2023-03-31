<script lang="ts">
  import composeStore from "./composeStore";
</script>

<section>
  <div class="profile">
    <img alt="User profile" />
    <div>username</div>
    <div>Darts</div>
    <div>Followers</div>
    <div>Following</div>
  </div>
  <div>
    <textarea
      on:change={(e) => composeStore.setContent(e.currentTarget.value)}
    />
  </div>
</section>
