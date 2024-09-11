import { create } from 'zustand';
import axios from '@/lib/axiosInstance';

const useUserStore = create(() => ({
  // RUD

  // READ ALL
  fetchUsers: async () => {
    try {
      const response = await axios.get('/users');

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchUsers failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  // READ
  fetchUser: async (id: number) => {
    try {
      const response = await axios.get('/users/' + id);

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('fetchUser failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  //UPDATE
  updateUser: async (userData: any) => {
    try {
      const response = await axios.patch(`/users/${userData.id}`, userData);

      return { status: response.status, data: response.data };
    } catch (error:any) {
      console.error('updateUser failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  //DELETE
  deleteUser: async (id: string) => {
    try {
      const response = await axios.delete(`/users/${id}`);

      return { status: response.status, data: response.data };

    } catch (error: any) {
      console.error('deleteUser failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

}));

export default useUserStore;