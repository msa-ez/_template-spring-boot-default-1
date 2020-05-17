forEach: Aggregate
fileName: {{namePascalCase}}.vue
path: frontend/src/components
---

<template>

  <v-card
      class="mx-auto"
      max-width="344"
      outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{name}}</div>
        <v-list-item-title class="headline mb-1">Name field</v-list-item-title>
        <v-list-item-subtitle>description field</v-list-item-subtitle>


        <v-form v-model="valid">

        {{#aggregateRoot.fieldDescriptors}}
          
            <v-text-field
              v-model="value.{{nameCamelCase}}"
              :counter="10"
              label="{{name}}"
              readyonly="!isEditable"
            ></v-text-field>

        {{/aggregateRoot.fieldDescriptors}}

        </v-form>


      </v-list-item-content>

    </v-list-item>



    <v-card-actions v-if="isEditable">
      <v-btn text v-if="isNew" @click="add">Add</v-btn>
      <v-btn text v-else  @click="update">Update</v-btn>
      <v-btn text v-if="!isNew" @click="remove">Delete</v-btn>
    </v-card-actions>
    <v-card-actions v-else>
      <v-btn @click="isEditable = true">Edit</v-btn >
    </v-card-actions>
    
  </v-card>

</template>

<script>
  export default {
    name: '{{nameCamelCase}}',

    props: {
      value: Object,
      isEditable: Boolean,
      isNew: Boolean
    },
    
    created: function(){
    },

    computed: {
      
    },

    watch: {
      
    },

    data: () => ({

     
    }),

    methods: {
      update(){
        this.$emit('input', this.value);
        this.$emit('change', this.value);
      },
      remove(){
        this.$emit('input', this.value);
        this.$emit('remove', this.value);
      },
      add(){
        this.$emit('input', this.value);
        this.$emit('add', this.value);
      },
    }
  }
</script>
