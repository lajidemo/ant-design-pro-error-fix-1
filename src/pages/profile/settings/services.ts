import type { AddressData } from './types';
import { request } from '@umijs/max';

// 获取省份列表
export const fetchProvinces = async (): Promise<AddressData[]> => {
  const response = await request('/api/provinces');
  return response.data || [];
};

// 根据省份ID获取城市列表
export const fetchCities = async (
  provinceId: string,
): Promise<AddressData[]> => {
  const response = await request('/api/cities', {
    method: 'GET',
    params: { provinceId },
  });
  return response.data || [];
};

// 根据城市ID获取区县列表
export const fetchDistricts = async (
  cityId: string,
): Promise<AddressData[]> => {
  const response = await request('/api/districts', {
    method: 'GET',
    params: { cityId },
  });
  return response.data || [];
};
