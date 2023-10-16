import projectModel from "../../models/project";
import supabase from "../../utility/supabase";

export default async function getProjects(...props: string[]) {
  const [key, category] = props;

  const columns = projectModel(key);

  const { data, error } = await supabase
    .from("projects")
    .select(columns)
    .eq("category", category)
    .limit(20)
    .order("id", { ascending: false });
  if (error) {
    throw error;
  }
  return data;
}
