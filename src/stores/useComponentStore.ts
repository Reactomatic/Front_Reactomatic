import { create } from 'zustand';
import axios from '@/lib/axiosInstance';
import { ComponentData } from '@/types/types';

const useComponentStore = create((set) => ({
  componentList: null,

  // CRUD

  // CREATE
  createComponent: async (componentData: ComponentData) => {
    try {
      const response = await axios.post('/components', componentData);

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('createComponent failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },
  // READ
  fetchComponents: async () => {
    try {
      const response = await axios.get('/components');

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchComponents failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  //UPDATE
  updateComponent: async (componentData: ComponentData) => {
    try {
      const response = await axios.patch(`/components/${componentData.id}`, componentData);

      return { status: response.status, data: response.data };
    } catch (error:any) {
      console.error('updateComponent failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  //DELETE
  deleteComponent: async (id: string) => {
    try {
      const response = await axios.delete(`/components/${id}`);

      return { status: response.status, data: response.data };

    } catch (error: any) {
      console.error('deleteComponent failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

}));

export default useComponentStore;