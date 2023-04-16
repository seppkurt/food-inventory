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
<!--
	<form method="POST">
		<label>
			Was neues? :
			<input
				name="amount"
				autocomplete="off"
			/>
			<input
				name="name"
				autocomplete="off"
			/>
			<input
				name="storage_place"
				autocomplete="off"
			/>
			<input
				name="due_date"
				autocomplete="off"
			/>
		</label>
	</form>-->