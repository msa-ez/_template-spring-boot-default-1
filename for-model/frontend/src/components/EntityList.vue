forEach: Aggregate
fileName: {{namePascalCase}}List.vue
path: frontend/src/components
---

<template>

  <div>
    <{{nameCamelCase}} v-bind:key="element.id" v-model="elements[index]" v-for='(element, index) in elements' @change="update" @remove="remove"></{{nameCamelCase}}>

    <h2>Add New {{name}}</h2>
    <{{nameCamelCase}} v-model="newElement" isEditable=true isNew=true @add="add"></{{nameCamelCase}}>
  </div>

</template>

<script>
  import $ from "jquery";
  import {{nameCamelCase}} from './{{namePascalCase}}';

  export default {
    name: '{{nameCamelCase}}List',
    components: {
      {{nameCamelCase}}
    },

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

      try{
        $.ajax(
          {
            url: window.withBackend('/{{namePlural}}'),
            success: function(result){
              me.elements = result._embedded.{{namePlural}};
            },
            fail: function(jqXHR, textStatus, errorThrown){
              console.log(jqXHR)
              alert(textStatus+ " : \n" + errorThrown)
            }
          }
        )
      }catch(e){
        alert(e);
      }

    },

    computed: {
      
    },

    watch: {
      
    },

    methods: {

      update(element){
        try{
          $.ajax({
            url: window.withBackend(element._links.self.href),
            method: 'PUT',
            contentType: "application/json",
            data: JSON.stringify(element),
            success:
              function(){
              alert('Successfully Updated!');
            },
            fail: function(jqXHR, textStatus, errorThrown){
              console.log(jqXHR)
              alert(textStatus+ " : \n" + errorThrown)
            }
          })
        }catch(e){
          alert(e);
        }

      },

       add(element){
          var me = this;

          try{
            $.ajax({
              url: window.withBackend("/{{namePlural}}"),
              method: 'POST',
              contentType: "application/json",
              data: JSON.stringify(element),
              success:
                function(result){
                me.elements.push(result);

                me.newElement = {};

                alert('Successfully Added!');
              },
              fail: function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR)
                alert(textStatus+ " : \n" + errorThrown)
              }
            })
          }catch(e){
            alert(e);
          }

       },

       remove(element){
        var me = this;
        
        try{
          $.ajax({
            url: window.withBackend(element._links.self.href),
            method: 'DELETE',
            success:
              function(){
                var index = me.elements.indexOf(element);
                me.elements.splice(index, 1);
              },
              fail: function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR)
                alert(textStatus+ " : \n" + errorThrown)
              }
          })

        }catch(e){
          alert(e);
        }


       }
    }
  }
</script>
