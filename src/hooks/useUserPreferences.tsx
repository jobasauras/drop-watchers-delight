import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";
import { toast } from "sonner";

type DropCategory = Database["public"]["Enums"]["drop_category"];

export const useUserPreferences = (userId?: string) => {
  const queryClient = useQueryClient();

  const { data: preferences, isLoading } = useQuery({
    queryKey: ["user-preferences", userId],
    queryFn: async () => {
      if (!userId) return [];
      
      const { data, error } = await supabase
        .from("user_preferences")
        .select("*")
        .eq("user_id", userId);

      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  const togglePreference = useMutation({
    mutationFn: async ({ category, enabled }: { category: string; enabled: boolean }) => {
      if (!userId) throw new Error("User not authenticated");

      if (enabled) {
        const { error } = await supabase
          .from("user_preferences")
          .insert([{ 
            user_id: userId, 
            category: category as DropCategory, 
            email_notifications: true 
          }]);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("user_preferences")
          .delete()
          .eq("user_id", userId)
          .eq("category", category as DropCategory);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-preferences", userId] });
      toast.success("Preferences updated successfully");
    },
    onError: () => {
      toast.error("Failed to update preferences");
    },
  });

  return {
    preferences: preferences || [],
    isLoading,
    togglePreference: togglePreference.mutate,
  };
};
