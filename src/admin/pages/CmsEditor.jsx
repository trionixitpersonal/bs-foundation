import { useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { getCmsSection, saveCmsSection } from '../lib/storage';
import { fileToDataUrl } from '../lib/upload';

const fieldMap = {
  home: [
    { name: 'title', label: 'Home Title' },
    { name: 'subtitle', label: 'Home Subtitle', type: 'textarea' },
    { name: 'heroImage', label: 'Hero Image URL / Data' },
  ],
  about: [
    { name: 'title', label: 'About Title' },
    { name: 'body', label: 'About Body', type: 'textarea' },
    { name: 'image', label: 'About Image URL / Data' },
  ],
  contact: [
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone' },
    { name: 'address', label: 'Address', type: 'textarea' },
  ],
  footer: [
    { name: 'copyright', label: 'Copyright Year Range' },
    { name: 'orgName', label: 'Organization Name' },
    { name: 'orgLink', label: 'Organization Link' },
  ],
};

function CmsEditor() {
  const { section } = useParams();
  const config = useMemo(() => fieldMap[section] || [], [section]);
  const [form, setForm] = useState(() => getCmsSection(section));
  const [message, setMessage] = useState('');

  const handleUpload = async (e, fieldName) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await fileToDataUrl(file);
    setForm((prev) => ({ ...prev, [fieldName]: url }));
  };

  const onChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCmsSection(section, form);
    setMessage('Section saved successfully.');
    setTimeout(() => setMessage(''), 2500);
  };

  if (!config.length) {
    return <p>Invalid CMS section.</p>;
  }

  return (
    <section>
      <h1>CMS - {section?.toUpperCase()}</h1>
      <form className="admin-card" onSubmit={handleSubmit}>
        {config.map((field) => (
          <div key={field.name} className="admin-field">
            <label htmlFor={`cms-${field.name}`}>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                id={`cms-${field.name}`}
                value={form[field.name] || ''}
                onChange={(e) => onChange(field.name, e.target.value)}
                rows={4}
              />
            ) : (
              <input
                id={`cms-${field.name}`}
                type="text"
                value={form[field.name] || ''}
                onChange={(e) => onChange(field.name, e.target.value)}
              />
            )}
            {field.name.toLowerCase().includes('image') ? (
              <input type="file" accept="image/*" onChange={(e) => handleUpload(e, field.name)} />
            ) : null}
          </div>
        ))}
        <button className="admin-btn" type="submit">
          Save Section
        </button>
        {message ? <p className="admin-success">{message}</p> : null}
      </form>
    </section>
  );
}

export default CmsEditor;
