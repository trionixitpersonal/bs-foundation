import { useEffect, useMemo, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { createBlog, deleteBlog, listBlogs, updateBlog } from '../lib/storage';
import { fileToDataUrl } from '../lib/upload';

function BlogManager() {
  const [blogs, setBlogs] = useState(() => listBlogs());
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    image: '',
    content: '',
  });

  const editorContainerRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!editorContainerRef.current || quillRef.current) return;

    quillRef.current = new Quill(editorContainerRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
      },
    });

    quillRef.current.on('text-change', () => {
      setForm((prev) => ({ ...prev, content: quillRef.current.root.innerHTML }));
    });
  }, []);

  useEffect(() => {
    if (!quillRef.current) return;
    const html = form.content || '';
    if (quillRef.current.root.innerHTML !== html) {
      quillRef.current.root.innerHTML = html;
    }
  }, [form.content]);

  const clearForm = () => {
    setEditingId(null);
    setForm({ title: '', excerpt: '', image: '', content: '' });
    if (quillRef.current) quillRef.current.setText('');
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    const payload = {
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      image: form.image,
      content: form.content,
    };

    if (editingId) {
      updateBlog(editingId, payload);
    } else {
      createBlog(payload);
    }

    setBlogs(listBlogs());
    clearForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      title: item.title || '',
      excerpt: item.excerpt || '',
      image: item.image || '',
      content: item.content || '',
    });
  };

  const handleDelete = (id) => {
    deleteBlog(id);
    setBlogs(listBlogs());
    if (editingId === id) clearForm();
  };

  const handleImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const encoded = await fileToDataUrl(file);
    setForm((prev) => ({ ...prev, image: encoded }));
  };

  const previewHtml = useMemo(() => DOMPurify.sanitize(form.content || ''), [form.content]);

  return (
    <section>
      <h1>Blog Engine</h1>
      <p>Create, update, and remove blog content with rich text editing.</p>
      <form className="admin-card" onSubmit={handleSave}>
        <div className="admin-field">
          <label htmlFor="blog-title">Title</label>
          <input
            id="blog-title"
            type="text"
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>

        <div className="admin-field">
          <label htmlFor="blog-excerpt">Excerpt</label>
          <textarea
            id="blog-excerpt"
            rows={3}
            value={form.excerpt}
            onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label htmlFor="blog-image">Featured Image</label>
          <input id="blog-image" type="file" accept="image/*" onChange={handleImage} />
        </div>

        <div className="admin-field">
          <label>Content</label>
          <div className="admin-editor" ref={editorContainerRef}></div>
        </div>

        <div className="admin-actions">
          <button className="admin-btn" type="submit">
            {editingId ? 'Update Post' : 'Create Post'}
          </button>
          <button className="admin-btn secondary" type="button" onClick={clearForm}>
            Reset
          </button>
        </div>
      </form>

      <div className="admin-card">
        <h3>Live Preview</h3>
        <h4>{form.title || 'Untitled Post'}</h4>
        {form.image ? <img className="admin-preview-image" src={form.image} alt="Preview" /> : null}
        <div dangerouslySetInnerHTML={{ __html: previewHtml }}></div>
      </div>

      <div className="admin-card">
        <h3>Posts</h3>
        {blogs.length === 0 ? <p>No blog posts yet.</p> : null}
        <ul className="admin-list">
          {blogs.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.excerpt}</p>
              </div>
              <div className="admin-actions">
                <button className="admin-btn secondary" type="button" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button className="admin-btn danger" type="button" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogManager;
