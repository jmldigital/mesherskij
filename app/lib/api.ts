import { supabase } from "./supabase";
import { QuizNode, QuizResult } from "../types";

/**
 * Получить узел по ID
 */
export async function getNodeById(id: string): Promise<QuizNode | null> {
  const { data, error } = await supabase
    .from("quiz_nodes")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .single();
  if (error) return null;
  return data as QuizNode;
}

/**
 * Получить узел по slug
 */
export async function getNodeBySlug(slug: string): Promise<QuizNode | null> {
  const { data, error } = await supabase
    .from("quiz_nodes")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();
  if (error) return null;
  return data as QuizNode;
}

/**
 * Получить стартовый узел (slug = 'start')
 */
export async function getStartNode(): Promise<QuizNode | null> {
  return getNodeBySlug("start");
}

/**
 * Получить доступные варианты для текущего узла.
 * Возвращает массив дочерних узлов (по связям from_node_id).
 * Если массив пуст — текущий узел является листом (конец квиза).
 */
export async function getNextOptions(nodeId: string): Promise<QuizNode[]> {
  const { data: edges, error: edgeError } = await supabase
    .from("quiz_edges")
    .select("to_node_id")
    .eq("from_node_id", nodeId);

  if (edgeError || !edges || edges.length === 0) return [];

  const nodeIds = edges.map((e) => e.to_node_id);

  const { data: nodes, error: nodeError } = await supabase
    .from("quiz_nodes")
    .select("*")
    .in("id", nodeIds)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (nodeError) return [];
  return (nodes as QuizNode[]) || [];
}

/**
 * Получить финальное видео по ID узла-листа
 */
export async function getResultByNodeId(nodeId: string): Promise<QuizResult | null> {
  const { data, error } = await supabase
    .from("quiz_results")
    .select("*")
    .eq("node_id", nodeId)
    .eq("is_active", true)
    .single();
  if (error) return null;
  return data as QuizResult;
}

/**
 * Получить результат по хешу пути
 */
export async function getResultByHash(pathHash: string): Promise<QuizResult | null> {
  const { data, error } = await supabase
    .from("quiz_results")
    .select("*")
    .eq("path_hash", pathHash)
    .eq("is_active", true)
    .single();
  if (error) return null;
  return data as QuizResult;
}

/**
 * Получить публичный URL иконки из Storage (bucket `icon`)
 */
export function getIconUrl(path: string): string {
  const { data } = supabase.storage.from("icon").getPublicUrl(path);
  return data.publicUrl;
}

/**
 * Получить весь путь от start до текущего узла (для отображения summary)
 */
export async function getPathNodes(nodeIds: string[]): Promise<QuizNode[]> {
  if (nodeIds.length === 0) return [];
  const { data, error } = await supabase
    .from("quiz_nodes")
    .select("*")
    .in("id", nodeIds)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });
  if (error) return [];
  return (data as QuizNode[]) || [];
}
