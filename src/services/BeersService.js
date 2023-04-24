import { ref } from "vue";
import axios from "axios";

class BeersService {
  beers;
  url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

  constructor() {
    this.beers = ref([]);
  }

  getBeers() {
    return this.beers.value;
  }

  async fetchAllBeers() {
    try {
      const response = await axios.get(this.url);
      this.beers.value = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default BeersService;