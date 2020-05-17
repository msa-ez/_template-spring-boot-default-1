forEach: Aggregate
fileName: {{namePascalCase}}List.vue
path: frontend/src/components
---

<template>

  <{{nameCamelCase}} v-for='(element, index) in elements' @change="update" @remove="remove"></{{nameCamelCase}}>

  <h2>Add New {{name}}</h2>
  <course v-model="newElement" isEditable=true isNew=true @add="add"></course>

</template>

<script>
  export default {
    name: '{{nameCamelCase}}-list',

    data() {
      return {
        elements: [],
        newElement: {
          //titleField: 'New Course'
        }
      }
    },
    created() {
      var me = this;
      $.ajax(
        {
          url: window.backendHost + '/{{namePlural}}',
          success: function(result){
            me.elements = result._embedded.{{namePlural}};
          }
        }
      )

    },

    computed: {
      
    },

    watch: {
      
    },

    data: () => ({

     
    }),

    methods: {
      update(element){
        $.ajax({
          url: element._links.self.href,
          method: 'PUT',
          contentType: "application/json",
          data: JSON.stringify(element),
          success:
            function(result){
             alert('Successfully Updated!');
           },
        })
      },

       add(element){
          var me = this;
          $.ajax({
            url: window.backendHost + "/{{namePlural}}",
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify(element),
            success:
              function(result){
               me.courses.push(result);

               me.newElement = {title: 'New Course'};

               alert('Successfully Added!');
             },
          })
       },

       remove(element){
        var me = this;
        $.ajax({
          url: element._links.self.href,
          method: 'DELETE',
          success:
            function(result){
              var index = me.elements.indexOf(element);
              me.elements.splice(index, 1);
            },
        })
       }
    }
  }
</script>
