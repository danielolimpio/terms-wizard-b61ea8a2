import { Textarea } from '@/components/ui/textarea';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  return (
    <div className="space-y-2">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[400px] font-mono"
        placeholder="Digite o conteúdo do post aqui... (HTML aceito)"
      />
      <p className="text-xs text-muted-foreground">
        Você pode usar HTML básico: {'<p>, <h1>-<h6>, <ul>, <ol>, <li>, <strong>, <em>, <a>'}
      </p>
    </div>
  );
};
