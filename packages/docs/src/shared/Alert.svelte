<script context="module">
  const icons = {
    info: 'information',
    danger: 'alert',
    warning: 'alert-octagram',
    success: 'check',
  };
</script>

<script>
  import { Alert, Icon } from 'svelte-materialify/src';

  export let type = 'info';
  const icon = icons[type];
</script>

<Alert class="{type}-text" border="left" coloredBorder>
  <div slot="icon">
    <Icon class="mdi mdi-{icon}" />
  </div>
  <slot />
</Alert>
