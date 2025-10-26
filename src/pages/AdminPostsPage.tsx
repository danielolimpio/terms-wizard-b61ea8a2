import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Plus, Edit, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  created_at: string;
  categories: string[];
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/admin/login');
        return;
      }

      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();
      
      if (!roleData) {
        navigate('/admin/login');
        return;
      }

      setIsAdmin(true);
      setAuthLoading(false);
      fetchPosts();
    } catch (err: any) {
      setError('Erro de autenticação: ' + err.message);
      setAuthLoading(false);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, published, created_at, categories')
        .order('created_at', { ascending: false });

      if (error) {
        setError('Erro ao carregar posts: ' + error.message);
      } else {
        setPosts(data || []);
      }
    } catch (err: any) {
      setError('Erro ao carregar posts: ' + err.message);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', deleteId);

      if (error) {
        setError('Erro ao deletar post: ' + error.message);
      } else {
        fetchPosts();
      }
    } catch (err: any) {
      setError('Erro ao deletar post: ' + err.message);
    }
    setDeleteId(null);
  };

  const handleLogout = async () => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      await supabase.auth.signOut();
      navigate('/admin/login');
    } catch (err: any) {
      setError('Erro ao fazer logout: ' + err.message);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {error && (
            <div className="mb-4 p-4 text-sm text-red-500 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}
          
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Gerenciar Posts</h1>
            <div className="flex gap-2">
              <Button onClick={handleLogout} variant="outline">
                Sair
              </Button>
              <Button onClick={() => navigate('/admin/posts/new')}>
                <Plus className="mr-2 h-4 w-4" />
                Novo Post
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-4">Nenhum post encontrado</p>
                <Button onClick={() => navigate('/admin/posts/new')}>
                  Criar Primeiro Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="mb-2">{post.title}</CardTitle>
                        <div className="flex gap-2 items-center text-sm text-muted-foreground">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            post.published ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {post.published ? 'Publicado' : 'Rascunho'}
                          </span>
                          <span>•</span>
                          <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>
                          {post.categories.length > 0 && (
                            <>
                              <span>•</span>
                              <span>{post.categories.join(', ')}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/admin/posts/edit/${post.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => setDeleteId(post.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja deletar este post? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Deletar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <Footer />
    </div>
  );
}
