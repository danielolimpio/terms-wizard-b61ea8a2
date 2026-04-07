import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, X } from 'lucide-react';
import { toSafeError } from '@/lib/safeError';
import DOMPurify from 'dompurify';

export default function AdminPostEditorPage() {
  const { id } = useParams();
  const isEdit = !!id;
  
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [imageCredit, setImageCredit] = useState('');
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState('');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [userId, setUserId] = useState<string>('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isEdit && isAdmin) {
      fetchPost();
    }
  }, [isEdit, isAdmin]);

  useEffect(() => {
    if (title && !isEdit) {
      const slugified = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setSlug(slugified);
    }
  }, [title, isEdit]);

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

      setUserId(user.id);
      setIsAdmin(true);
      setAuthLoading(false);
    } catch (err: any) {
      console.error('Auth check error:', err);
      setError(toSafeError('auth'));
      setAuthLoading(false);
    }
  };

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Fetch post error:', error);
        setError(toSafeError('load'));
        navigate('/admin/posts');
      } else if (data) {
        setTitle(data.title);
        setSlug(data.slug);
        setMetaDescription(data.meta_description || '');
        setContent(data.content);
        setFeaturedImage(data.featured_image || '');
        setImageCredit(data.image_credit || '');
        setCategories(data.categories?.join(', ') || '');
        setTags(data.tags?.join(', ') || '');
        setPublished(data.published);
        if (data.featured_image) {
          setImagePreview(data.featured_image);
        }
      }
    } catch (err: any) {
      console.error('Fetch post error:', err);
      setError(toSafeError('load'));
    }
    setLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return featuredImage;

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (err: any) {
      console.error('Upload error:', err);
      throw new Error(toSafeError('upload'));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      let imageUrl = featuredImage;
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      const sanitizedContent = DOMPurify.sanitize(content, {
        ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'u', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'blockquote', 'pre', 'code', 'span', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'figure', 'figcaption', 'sup', 'sub'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel', 'width', 'height', 'style'],
      });

      if (sanitizedContent.length > 100000) {
        setError('O conteúdo é muito longo. Limite de 100.000 caracteres.');
        setLoading(false);
        return;
      }

      const postData = {
        title: title.slice(0, 500),
        slug: slug.slice(0, 500),
        meta_description: metaDescription.slice(0, 500),
        content: sanitizedContent,
        featured_image: imageUrl,
        image_credit: imageCredit.slice(0, 500),
        categories: categories.split(',').map(c => c.trim()).filter(Boolean).slice(0, 20),
        tags: tags.split(',').map(t => t.trim()).filter(Boolean).slice(0, 50),
        published,
        published_at: published ? new Date().toISOString() : null,
        author_id: userId,
      };

      if (isEdit) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
      }

      navigate('/admin/posts');
    } catch (err: any) {
      console.error('Save post error:', err);
      setError(toSafeError('save'));
    }

    setLoading(false);
  };

  if (authLoading || (isEdit && loading)) {
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
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="mb-4 p-4 text-sm text-red-500 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}
          
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">
              {isEdit ? 'Editar Post' : 'Novo Post'}
            </h1>
            <Button variant="outline" onClick={() => navigate('/admin/posts')}>
              Voltar
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Digite o título do post"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    required
                    placeholder="url-amigavel-do-post"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Descrição (SEO)</Label>
                  <Textarea
                    id="meta-description"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Descrição para motores de busca (max 160 caracteres)"
                    maxLength={160}
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    {metaDescription.length}/160 caracteres
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conteúdo</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[400px] font-mono"
                  placeholder="Digite o conteúdo do post aqui... (HTML aceito)"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Você pode usar HTML básico: {'<p>, <h1>-<h6>, <ul>, <ol>, <li>, <strong>, <em>, <a>'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Imagem Destacada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Upload de Imagem</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="flex-1"
                    />
                    {imagePreview && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview('');
                          setFeaturedImage('');
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {imagePreview && (
                  <div className="border rounded-lg p-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="image-credit">Créditos da Imagem</Label>
                  <Input
                    id="image-credit"
                    value={imageCredit}
                    onChange={(e) => setImageCredit(e.target.value)}
                    placeholder="Fotógrafo ou fonte da imagem"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO e Categorização</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="categories">Categorias</Label>
                  <Input
                    id="categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                    placeholder="Legal, Guias, Técnico (separadas por vírgula)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="lgpd, privacidade, cookies (separadas por vírgula)"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publicação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="published"
                    checked={published}
                    onCheckedChange={setPublished}
                  />
                  <Label htmlFor="published" className="cursor-pointer">
                    Publicar post
                  </Label>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Posts não publicados ficam como rascunho e não aparecem no blog
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/posts')}
                disabled={loading}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  'Salvar Post'
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
