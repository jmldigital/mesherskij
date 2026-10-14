BEGIN;

REVOKE ALL ON public.quiz_nodes, public.quiz_edges, public.quiz_results
    FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.quiz_nodes, public.quiz_edges, public.quiz_results
    TO anon, authenticated;
GRANT ALL ON public.quiz_nodes, public.quiz_edges, public.quiz_results TO service_role;

ALTER TABLE public.quiz_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_edges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY quiz_nodes_public_read ON public.quiz_nodes
    FOR SELECT TO anon, authenticated USING (is_active);
CREATE POLICY quiz_edges_public_read ON public.quiz_edges
    FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY quiz_results_public_read ON public.quiz_results
    FOR SELECT TO anon, authenticated USING (is_active);

NOTIFY pgrst, 'reload schema';
COMMIT;
