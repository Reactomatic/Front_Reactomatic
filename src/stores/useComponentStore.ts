import { create } from 'zustand';
import axios from '@/lib/axiosInstance';
import { Component, ComponentType } from '@/type';

const useComponentStore = create((set) => ({
  componentList: null,

  fetchComponents: async () => {
    try {
      // const response = await axios.get('/component/list');
      // const { components } = response.data;
      const jsonMock: Component[] = [
        {
          id: '1',
          name: 'Component 1',
          price: 1000,
          description: 'Description 1',
          pricesByProvider: [
            {
              provider: 'Provider 1',
              price: 1000,
            },
            {
              provider: 'Provider 2',
              price: 2000,
            },
          ],
        },
        {
          id: '2',
          name: 'Component 2',
          price: 2000,
          description: 'Description 2',
          pricesByProvider: [
            {
              provider: 'Provider 1',
              price: 2000,
            },
            {
              provider: 'Provider 2',
              price: 3000,
            },
          ],
        },
        {
          id: '3',
          name: 'Component 3',
          price: 3000,
          description: 'Description 3',
          pricesByProvider: [
            {
              provider: 'Provider 1',
              price: 3000,
            },
            {
              provider: 'Provider 2',
              price: 4000,
            },
          ],
        },

      ]
      const components = jsonMock;

      set({
        componentList: components,
      });

      return components
    } catch (error) {
      console.error('fetchComponents failed:', error);
    }
  },

  createComponent: async (name: string, type: ComponentType) => {
    try {
      const response = await axios.post('/component/create', { name, type });
      const { component } = response.data;

      return component
    } catch (error) {
      console.error('createComponent failed:', error);
    }
  },

  deleteComponent: async (id: string) => {
    try {
      await axios.delete(`/component/${id}`);
    } catch (error) {
      console.error('deleteComponent failed:', error);
    }
  },

  updateComponent: async (id: string, name: string, type: ComponentType) => {
    try {
      await axios.put(`/component/${id}`, { name, type });
    } catch (error) {
      console.error('updateComponent failed:', error);
    }
  }
}));
