import React from 'react';
import { store } from '../store';
import { Plus, Edit3, Trash2, FileText, BarChart3, Clock } from 'lucide-react';

const Dashboard = ({ user }) => {
  if (!user) {
    window.location.hash = '#auth';
    return null;
  }

  const blogs = store.getBlogs();

  const stats = [
    { label: 'Total Articles', value: blogs.length, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Total Read Time', value: '~45 min', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Engagement Rate', value: '4.8%', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this article?')) {
      store.deleteBlog(id);
    }
  };

  return (
    <div className="container-custom py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-10 border-b border-slate-100">
        <div>
          <h1 className="heading-primary text-4xl mb-2 font-black tracking-tighter uppercase">Writer <span className="text-indigo-600">Dashboard</span></h1>
          <p className="text-slate-500 font-medium">Manage your publication and track your writing performance.</p>
        </div>
        <a href="#create" className="btn-blue gap-2.5 px-8 shadow-lg shadow-indigo-100">
          <Plus className="w-5 h-5" />
          Create New Article
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="ink-card flex items-center gap-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ink-card !p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Your Articles</h3>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{blogs.length} Total</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Article Title</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {blogs.map(blog => (
                <tr key={blog.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 line-clamp-1">{blog.title}</p>
                    <p className="text-xs text-slate-500">{blog.readTime}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {blog.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a 
                        href={`#edit/${blog.id}`} 
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit3 className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
