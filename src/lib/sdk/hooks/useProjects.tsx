import useSWR from "swr";

import { CATEGORY_KEYS } from "../constants/keys";
import getProjects from "../methods/projects/get";

export default function useProjects(category: string) {
  const KEY = CATEGORY_KEYS[`${category.toUpperCase()}`];
  const { data, error } = useSWR([KEY, category], getProjects);

  return {
    projects: data,
    error: error,
    isLoading: !error && !data,
  };
}
