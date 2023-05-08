<script lang="ts">
  export let data: Lib.SurveyCategory;
</script>

<section>
  <h2>{data.name}</h2>
  <div>
    <h4>{data.description ?? ""}</h4>
  </div>
</section>
