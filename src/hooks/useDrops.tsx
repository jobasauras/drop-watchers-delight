import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type DropCategory = Database["public"]["Enums"]["drop_category"];

export const useDrops = (category?: string) => {
  return useQuery({
    queryKey: ["drops", category],
    queryFn: async () => {
      let query = supabase
        .from("drops")
        .select("*")
        .order("created_at", { ascending: false });

      if (category && category !== "all") {
        query = query.eq("category", category as DropCategory);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data;
    },
  });
};
