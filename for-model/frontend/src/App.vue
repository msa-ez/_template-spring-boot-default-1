<template>
  <v-app>

    <v-content>
{{#boundedContexts}}
{{#aggregates}}
      <{{nameCamelCase}}List v-model="value"/>
{{/aggregates}}
{{/boundedContexts}}
    </v-content>
  </v-app>
</template>

<script>


{{#boundedContexts}}
{{#aggregates}}
import {{nameCamelCase}}List from './components/{{namePascalCase}}List';
{{/aggregates}}
{{/boundedContexts}}

export default {
  name: 'App',

  components: {
{{#boundedContexts}}
{{#aggregates}}
    {{nameCamelCase}}List,
{{/aggregates}}
{{/boundedContexts}}
  },

  data: () => ({
    value: {}
  }),
};
</script>
