'use client';

import { useState, useCallback, useEffect } from 'react';
import { QuizNode, QuizResult, QuizState } from '@/app/types';
import { getStartNode, getNodeById, getNextOptions, getResultByNodeId } from '@/app/lib/api';

export function useQuizState() {
  const [state, setState] = useState<QuizState>({
    currentNode: null,
    options: [],
    path: [],
    isComplete: false,
    result: null,
    isLoading: false,
  });

  // Загрузка стартового узла
  const startQuiz = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    const startNode = await getStartNode();
    if (startNode) {
      const options = await getNextOptions(startNode.id);
      setState({
        currentNode: startNode,
        options,
        path: [startNode],
        isComplete: false,
        result: null,
        isLoading: false,
      });
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  // Выбор варианта
  const selectOption = useCallback(async (nodeId: string) => {
    setState(prev => ({ ...prev, isLoading: true }));

    const selectedNode = await getNodeById(nodeId);
    if (!selectedNode) {
      setState(prev => ({ ...prev, isLoading: false }));
      return;
    }

    // Загружаем детей выбранного узла
    const children = await getNextOptions(nodeId);

    if (children.length === 0) {
      // ЛИСТ ГРАФА — конец квиза!
      const result = await getResultByNodeId(nodeId);
      setState(prev => ({
        ...prev,
        currentNode: selectedNode,
        path: [...prev.path, selectedNode],
        isComplete: true,
        result,
        isLoading: false,
      }));
    } else {
      // Есть куда идти дальше
      setState(prev => ({
        ...prev,
        currentNode: selectedNode,
        options: children,
        path: [...prev.path, selectedNode],
        isLoading: false,
      }));
    }
  }, []);

  // Назад
  const goBack = useCallback(() => {
    setState(prev => {
      if (prev.path.length <= 1) return prev; // нельзя назад от start

      const newPath = prev.path.slice(0, -1);
      const previousNode = newPath[newPath.length - 1];

      // Перезагружаем опции для предыдущего узла
      getNextOptions(previousNode.id).then(options => {
        setState(p => ({ ...p, options }));
      });

      return {
        ...prev,
        currentNode: previousNode,
        path: newPath,
        isComplete: false,
        result: null,
      };
    });
  }, []);

  // Сброс в начало
  const reset = useCallback(() => {
    setState({
      currentNode: null,
      options: [],
      path: [],
      isComplete: false,
      result: null,
      isLoading: false,
    });
    localStorage.removeItem('quiz_progress');
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    if (state.path.length > 0) {
      localStorage.setItem('quiz_progress', JSON.stringify({
        pathSlugs: state.path.map(n => n.slug),
        isComplete: state.isComplete,
      }));
    }
  }, [state.path, state.isComplete]);

  // Восстановление из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem('quiz_progress');
    if (!saved) return;

    try {
      const { pathSlugs, isComplete: savedComplete } = JSON.parse(saved);
      if (!Array.isArray(pathSlugs) || pathSlugs.length === 0) return;

      // Восстанавливаем сессию: загружаем узлы по slug'ам
      const restore = async () => {
        setState(prev => ({ ...prev, isLoading: true }));
        const nodes: QuizNode[] = [];
        for (const slug of pathSlugs) {
          const { getNodeBySlug } = await import('@/app/lib/api');
          const node = await getNodeBySlug(slug);
          if (node) nodes.push(node);
        }
        if (nodes.length === 0) {
          setState(prev => ({ ...prev, isLoading: false }));
          return;
        }

        const current = nodes[nodes.length - 1];
        const children = await getNextOptions(current.id);

        if (children.length === 0 || savedComplete) {
          const result = await getResultByNodeId(current.id);
          setState({
            currentNode: current,
            options: [],
            path: nodes,
            isComplete: true,
            result,
            isLoading: false,
          });
        } else {
          setState({
            currentNode: current,
            options: children,
            path: nodes,
            isComplete: false,
            result: null,
            isLoading: false,
          });
        }
      };

      restore();
    } catch {
      localStorage.removeItem('quiz_progress');
    }
  }, []);

  return {
    ...state,
    startQuiz,
    selectOption,
    goBack,
    reset,
  };
}
