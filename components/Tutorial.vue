<template>
  <div>
      <Navbar/>
      <div class="container mx-auto w-3/4">
          <h1>Créer un nouveau guide</h1>
        <h1 class="text-2xl font-semibold mb-6">Ajouter un guide</h1>
        <form @submit.prevent="addGuide" class="space-y-4">
              <div>
              
                  <div>
                      <label for="category" class="block text-sm font-medium text-gray-700">Catégorie :</label>
                      <select id="category" v-model="selectedCategory"  class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        <option v-for="category in categories" :key="category._id" :value="category._id">{{ category.name }}</option>
                      </select>
                    </div>
                    <div>
                      <label for="subcategory" class="block text-sm font-medium text-gray-700">Sous-catégorie :</label>
                      <select id="subcategory" v-model="selectedSubcategory" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        <option v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">{{ subcategory.name }}</option>
                      </select>
                    </div>
              <label for="image" class="block text-sm font-medium text-gray-700">Image :</label>
              <input
                type="file"
                id="image"
                @change="onFileSelected"
                class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Titre :</label>
            <input
              type="text"
              id="title"
              v-model="guide.title"
              required
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
              <label for="title" class="block text-sm font-medium text-gray-700">prix :</label>
              <input
                type="number"
                id="title"
                v-model="guide.price"
                required
                class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          <div>
              <label for="content" class="block text-sm font-medium text-gray-700">Contenu :</label>
              <textarea
                id="content"
                v-model="guide.description"
                required
                class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              ></textarea>
            </div>
          <button
            type="submit"
            class="py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
          >
            Ajouter le guide
          </button>
        </form>
      </div>
  </div>
    </template>
    
    <script>
    import Navbar from '~/components/Navbar.vue'
    export default {
      components: {
      Navbar  },
      data() {
        return {
          guide: {
            title: '',
            content: '',
            description:'',
            price: null,
          },
          imageFile: null,
          categories: [], 
          selectedCategory: null,
      selectedSubcategory: null
  
        };
      },
      computed: {
    subcategories() {
      if (!this.selectedCategory) return [];
      const category = this.categories.find(c => c._id === this.selectedCategory);
      return category.subcategories; 
    }
  },
  async created() {
    try {
      const { data } = await this.$axios.get('api/v1/categories');
      // Update the categories data structure
      this.categories = data.data.map(category => ({
        ...category,
        parentCategory: category.parentCategory,
        subcategories: category.subcategories || [],
      }));
      console.log('Fetched categories:', JSON.stringify(this.categories, null, 2));
    } catch (err) {
      console.error(err);
    }
  },
      methods: {
          onFileSelected(event) {
        this.imageFile = event.target.files[0];
      },
      async addGuide() {
    try {
  
      const formData = new FormData();
      formData.append('title', this.guide.title);
      formData.append('description', this.guide.description);
      formData.append('price', this.guide.price);
      formData.append('category', this.selectedCategory);
      console.log('Selected subcategory:', this.selectedSubcategory); 
          console.log('FormData:', formData);
          if (this.imageFile) {
            formData.append('image', this.imageFile);
          }
          for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
          const authToken = localStorage.getItem('token');
          const headers = { Authorization: `Bearer ${authToken}` };
          const response = await this.$axios.post('api/v1/guides', formData, {
            headers: {
              ...headers,
              'Content-Type': 'multipart/form-data',
            },
          });
          this.$toast.success('Guide ajouté avec succès');
  
        } catch (error) {
          console.error("Erreur lors de l'ajout du guide:", error);
        }
      },
    },
    };
    </script>