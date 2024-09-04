import { create } from 'zustand';
import axios from '@/lib/axiosInstance';
import { Configuration } from '@/type';

const useConfigurationStore = create((set) => ({
  configurationList: null,

  fetchConfigurations: async () => {
    try {
      // const response = await axios.get('/configuration/list');
      // const { configurations } = response.data;

      // i want a list of configurations
      const jsonMock: Configuration[] = [
        {
          id: '1',
          name: 'Config 1',
          price: 1000,
        },
        {
          id: '2',
          name: 'Config 2',
          price: 2000,
        },
        {
          id: '3',
          name: 'Config 3',
          price: 3000,
        },

      ]
      const configurations = jsonMock;

      set({
        configurationList: configurations,
      });

      return configurations
    } catch (error) {
      console.error('fetchConfigurations failed:', error);
    }
  },

  createConfiguration: async (name: string) => {
    try {
      const response = await axios.post('/configuration/create', { name });
      const { configuration } = response.data;

      return configuration
    } catch (error) {
      console.error('createConfiguration failed:', error);
    }
  },

  deleteConfiguration: async (id: string) => {
    try {
      await axios.delete(`/configuration/${id}`);
    } catch (error) {
      console.error('deleteConfiguration failed:', error);
    }
  }

}));

export default useConfigurationStore;