import { useState } from 'react';
import {
  createService,
  deleteService,
  listServices,
  updateService,
} from '../lib/storage';
import { fileToDataUrl } from '../lib/upload';

function ServicesManager() {
  const [services, setServices] = useState(() => listServices());
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: '',
    summary: '',
    details: '',
    image: '',
  });

  const reset = () => {
    setEditingId(null);
    setForm({ title: '', summary: '', details: '', image: '' });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const payload = {
      title: form.title.trim(),
      summary: form.summary.trim(),
      details: form.details.trim(),
      image: form.image,
    };

    if (!payload.title) return;

    if (editingId) {
      updateService(editingId, payload);
    } else {
      createService(payload);
    }

    setServices(listServices());
    reset();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      title: item.title || '',
      summary: item.summary || '',
      details: item.details || '',
      image: item.image || '',
    });
  };

  const handleDelete = (id) => {
    deleteService(id);
    setServices(listServices());
    if (editingId === id) reset();
  };

  const handleImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const encoded = await fileToDataUrl(file);
    setForm((prev) => ({ ...prev, image: encoded }));
  };

  return (
    <section>
      <h1>Services Manager</h1>
      <form className="admin-card" onSubmit={handleSave}>
        <div className="admin-field">
          <label htmlFor="service-title">Service Title</label>
          <input
            id="service-title"
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>

        <div className="admin-field">
          <label htmlFor="service-summary">Summary</label>
          <textarea
            id="service-summary"
            rows={2}
            value={form.summary}
            onChange={(e) => setForm((prev) => ({ ...prev, summary: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label htmlFor="service-details">Details</label>
          <textarea
            id="service-details"
            rows={4}
            value={form.details}
            onChange={(e) => setForm((prev) => ({ ...prev, details: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label htmlFor="service-image">Image</label>
          <input id="service-image" type="file" accept="image/*" onChange={handleImage} />
        </div>

        <div className="admin-actions">
          <button className="admin-btn" type="submit">
            {editingId ? 'Update Service' : 'Create Service'}
          </button>
          <button className="admin-btn secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </form>

      <div className="admin-card">
        <h3>Services</h3>
        {services.length === 0 ? <p>No services found.</p> : null}
        <ul className="admin-list">
          {services.map((service) => (
            <li key={service.id}>
              <div>
                <strong>{service.title}</strong>
                <p>{service.summary}</p>
              </div>
              <div className="admin-actions">
                <button className="admin-btn secondary" type="button" onClick={() => handleEdit(service)}>
                  Edit
                </button>
                <button className="admin-btn danger" type="button" onClick={() => handleDelete(service.id)}>
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

export default ServicesManager;
