<div class="feed-card">
  <div>
    <img
      src="https://via.placeholder.com/75"
      alt={`user-${feedItem.username}`}
    />
  </div>
  <div class="content">
    <div class="top-content">
      <a href={`/profile/${feedItem.username}`}>{feedItem.username}</a>
      <div>{feedItem.date.toLocaleString()}</div>
    </div>
    <div class="main-content">{feedItem.text}</div>
  </div>
</div>
