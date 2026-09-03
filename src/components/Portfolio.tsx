import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioProjects } from '../data/businessData';
import { ProjectItem } from '../types';
import {
  MapPin,
  Maximize2,
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building,
} from 'lucide-react';

interface PortfolioProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const categories = ['All', 'Residences', 'Commercial', 'Hospitality', 'Interior'];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const openProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveGalleryIndex(0);
  };

  return (
    <section id="portfolio" className="relative py-24 bg-neutral-900/30 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Architecture"
          title="Featured Architectural Landmark Works"
          subtitle="Explore our portfolio of bespoke private sanctuaries, coastal resorts, and commercial headquarters designed and engineered across Sri Lanka."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-neutral-950 font-bold shadow-lg scale-105'
                  : 'text-neutral-300 bg-white/[0.04] border border-white/10 hover:border-white/25 hover:text-white'
              }`}
              style={
                activeCategory === cat
                  ? { backgroundColor: 'var(--color-primary)' }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-neutral-900/70 border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-white/15">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-neutral-300 border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Quick Expand Button */}
                <button
                  onClick={() => openProjectModal(project)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 cursor-pointer"
                  title="Expand Case Study"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span>{project.squareFeet}</span>
                    <span className="truncate max-w-[150px]">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                  </button>

                  <button
                    onClick={() => onSelectProjectForQuote(project.title)}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-neutral-900 bg-amber-400/90 hover:bg-amber-400 transition-colors"
                  >
                    Request Similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '92vh', overflowY: 'auto' }}
          >
            {/* Modal Header Gallery */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black">
              <img
                src={selectedProject.gallery[activeGalleryIndex] || selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/50" />

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gallery thumbnails */}
              {selectedProject.gallery.length > 1 && (
                <div className="absolute bottom-4 left-6 flex items-center gap-2 z-10">
                  {selectedProject.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveGalleryIndex(i)}
                      className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        activeGalleryIndex === i
                          ? 'border-amber-400 scale-105'
                          : 'border-white/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="absolute top-4 left-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-amber-400 text-neutral-950">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-amber-400" />
                      {selectedProject.squareFeet}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      Completed {selectedProject.year}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const name = selectedProject.title;
                    setSelectedProject(null);
                    onSelectProjectForQuote(name);
                  }}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all hover:brightness-110 flex items-center justify-center gap-2 shadow-lg"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Architectural Narrative & Brief
                </h4>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Key Engineering & Design Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
