<template>
    <div>
        <Navbar/>
        <div class="container w-3/4 mx-auto">
            <h1>Créer un nouveau guide</h1>
          <h1 class="mb-6 text-2xl font-semibold">Ajouter un guide</h1>
          <form @submit.prevent="addGuide" class="space-y-4">
                <div>
                    <div>
                        <label for="parentCategory" class="block text-sm font-medium text-gray-700">Catégorie parente :</label>
                        <select id="parentCategory" v-model="selectedParentCategory"  class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md">
                          <option v-for="parentCategory in parentCategories" :key="parentCategory._id" :value="parentCategory._id">{{ parentCategory.name }}</option>
                        </select>
                    </div>
                    <div>
                        <label for="category" class="block text-sm font-medium text-gray-700">Catégorie :</label>
                        <select id="category" v-model="selectedCategory"  class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md">
                          <option v-for="category in categories" :key="category._id" :value="category._id">{{ category.name }}</option>
                        </select>
                      </div>
                <label for="image" class="block text-sm font-medium text-gray-700">Image :</label>
                <input
                  type="file"
                  id="image"
                  @change="onFileSelected"
                  class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md"
                />
              </div>
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700">Titre :</label>
              <input
                type="text"
                id="title"
                v-model="guide.title"
                required
                class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md"
              />
            </div>
        
            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description :</label>
                <textarea
                  id="description"
                  v-model="guide.description"
                  required
                  class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
            <button
              type="submit"
              class="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
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
        Navbar,
      },
      data() {
        return {
          guide: {
            title: '',
            description: '',
          },
          imageFile: null,
          parentCategories: [],
          categories: [],
          selectedParentCategory: null,
          selectedCategory: null,
        }
      },
      async created() {
        try {
          const { data } = await this.$axios.get('api/v1/categories')
          this.parentCategories = data.data.map((category) => ({
            ...category,
            subcategories: category.subcategories || [],
          }))
          console.log('Fetched parent categories:', JSON.stringify(this.parentCategories, null, 2))
        } catch (err) {
          console.error(err)
        }
      },
      watch: {
        selectedParentCategory() {
          const parentCategory = this.parentCategories.find((c) => c._id === this.selectedParentCategory)
          this.categories = parentCategory ? parentCategory.subcategories : []
        },
      },
      methods: {
        onFileSelected(event) {
          this.imageFile = event.target.files[0]
        },
        async addGuide() {
          try {
            const formData = new FormData()
            formData.append('title', this.guide.title)
            formData.append('description', this.guide.description)
            formData.append('parentCategory', this.selectedParentCategory)
            formData.append('category', this.selectedCategory)
            if (this.imageFile) {
              formData.append('image', this.imageFile, this.imageFile.name)
            }
    
            const { data } = await this.$axios.post('api/v1/guides', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            console.log('Guide ajouté avec succès:', data)
            this.$router.push('/guidesList')
          } catch (err) {
            console.error(err)
          }
        },
      },
    }
    </script>
    
    <style scoped>
    .container {
      margin-top: 2rem;
    }
    </style>