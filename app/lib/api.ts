import { supabase } from "./supabase";
import { Scenario, Video, Photo } from "../types";

export async function getScenarios(): Promise<Scenario[]> {
  const { data, error } = await supabase
    .from("scenarios")
    .select("*")
    .eq("active", true)
    .order("order_index", { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function getScenarioBySlug(slug: string): Promise<Scenario | null> {
  const { data, error } = await supabase
    .from("scenarios")
    .select("*")
    .eq("slug", slug)
    .eq("active", true)
    .single();
  if (error) return null;
  return data;
}

export async function getVideosByScenario(scenarioId: string): Promise<Video[]> {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("scenario_id", scenarioId)
    .eq("active", true)
    .order("order_index", { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function getAllVideos(): Promise<Video[]> {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("active", true)
    .order("order_index", { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function getPhotosByScenario(scenarioId: string): Promise<Photo[]> {
  const { data, error } = await supabase
    .from("photos")
    .select("*")
    .eq("scenario_id", scenarioId)
    .eq("active", true)
    .order("order_index", { ascending: true });
  if (error) throw error;
  return data || [];
}

export function getVideoUrl(path: string): string {
  const { data } = supabase.storage.from("videos").getPublicUrl(path);
  return data.publicUrl;
}

export function getThumbnailUrl(path: string): string {
  const { data } = supabase.storage.from("thumbnails").getPublicUrl(path);
  return data.publicUrl;
}

export function getImageUrl(path: string): string {
  const { data } = supabase.storage.from("photos").getPublicUrl(path);
  return data.publicUrl;
}
