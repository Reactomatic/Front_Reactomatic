import { create } from 'zustand';
import axios from '@/lib/axiosInstance';
import {} from '@/types/types';

const useConfigurationStore = create((set) => ({

  createConfiguration: async (name: string, componentIds: String[]) => {
    try {
      const response = await axios.post('/configurations', { name, componentIds: componentIds});
      const { configuration } = response.data;

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchConfigurations failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  fetchConfigurationsAll: async () => {
    try {
      const response = await axios.get('/configurations');

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchConfigurations failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  fetchConfigurationsUser: async () => {
    try {
      const response = await axios.get(`/configurations/me`);

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchConfigurations failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  fetchConfigurationById: async (id: string) => {
    try {
      const response = await axios.get(`/configurations/${id}`);

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchConfigurations failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  updateConfigurationUser: async (id: string, name: string, componentIds: String[]) => {
    try {
      const response = await axios.put(`/configurations/me/${id}`, { name, componentIds: componentIds});
      const { configuration } = response.data;

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchConfigurations failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  deleteConfiguration: async (id: string) => {
    try {
      const response = await axios.delete(`/configurations/me/${id}`);

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchConfigurations failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  }

}));

export default useConfigurationStore;