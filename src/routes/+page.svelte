  <script>
    export let data;
    let { items } = data;
    $: ({ items } = data);
  </script>

  <ul>
    {#each items as item}
      <li>{item.amount} {item.name} in {item.storage_place} due {item.due_date}</li>
    {/each}
  </ul>